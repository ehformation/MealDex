import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Meal } from 'src/app/core/models/meal.model';
import { MealsService } from '../meals.service';
import { minMotsValidator, tempsValidator } from '../meal.validators';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent {
  @Input() meal: Meal | null = null;
  @Output() saved = new EventEmitter<Meal>();
  @Output() canceled = new EventEmitter<void>();

  difficulties: string[] = [];
  categories: string[] = [];

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    thumbnail: ['', Validators.required],
    instructions: ['', [Validators.required, minMotsValidator(20)]],
    difficulty: [''],
    category: [''],
    preparationTime: [0, [Validators.required, tempsValidator()]]
  });

  constructor(private fb: FormBuilder, private mealService: MealsService) {}

  get isEditMode() : boolean {
    return this.meal !== null;
  }

  ngOnInit() {
    this.mealService.getCategories().subscribe(c => this.categories = c);
    this.mealService.getDifficulty().subscribe(d => this.difficulties = d);
  }

  ngOnChanges() {
    if (this.meal) {
      this.form.patchValue(this.meal); //preremplir le formulaire avec les données du repas à éditer
    } else {
      this.form.reset();
    }
  }

  onSubmit() : void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.value;
    const mealToSave: Meal = {
      id: this.meal?.id ?? 'meal-' + Date.now(),
      title: v.title!,
      thumbnail: v.thumbnail!,
      instructions: v.instructions!,
      difficulty: v.difficulty || '',
      category: v.category || '',
      preparationTime: v.preparationTime || 0
    };
    this.saved.emit(mealToSave);
  }

}
