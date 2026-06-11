import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/core/models/meal.model';
import { MealsService } from '../meals.service';

@Component({
  selector: 'app-meal-edit',
  templateUrl: './meal-edit.component.html',
  styleUrls: ['./meal-edit.component.css']
})
export class MealEditComponent {
  meal: Meal | null = null;

  constructor(private route: ActivatedRoute, private mealsService: MealsService, private router: Router) {}

  ngOnInit() {
    const mealId = this.route.snapshot.paramMap.get('id');
    if (mealId) {
      this.meal = this.mealsService.getMealById(mealId) || null;
    }
  }
  onMealSaved(meal: Meal) : void {
    this.mealsService.editMeal(meal);
    this.router.navigate(['/meal', meal.id]);
  }

  onMealCanceled() : void {
    this.router.navigate(['/']);
  }
}
