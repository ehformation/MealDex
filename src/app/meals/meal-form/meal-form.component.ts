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
    strMeal: ['', [Validators.required, Validators.minLength(3)]],
    strMealThumb: ['', Validators.required],
    strInstructions: ['', [Validators.required, minMotsValidator(20)]],
    strDifficulty: [''],
    StrCategory: [''],
    tempsPreparation: [0, [Validators.required, tempsValidator()]]
  });

  constructor(private fb: FormBuilder, private mealService: MealsService) {}

  get isEditMode() : boolean {
    return this.meal !== null;
  }

  ngOnInit() {
    this.difficulties = this.mealService.getDifficulty();
    this.categories = this.mealService.getCategories();
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
      idMeal: this.meal?.idMeal ?? 'meal-' + Date.now(),
      strMeal: v.strMeal!,
      strMealThumb: v.strMealThumb!,
      strInstructions: v.strInstructions!,
      strDifficulty: v.strDifficulty || '',
      StrCategory: v.StrCategory || '',
      tempsPreparation: v.tempsPreparation || 0
    };
    this.saved.emit(mealToSave);
  }

}
