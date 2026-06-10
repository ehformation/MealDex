import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealsService } from '../meals.service';
import { Meal } from 'src/app/core/models/meal.model';

@Component({
  selector: 'app-meal-add',
  templateUrl: './meal-add.component.html',
  styleUrls: ['./meal-add.component.css']
})
export class MealAddComponent {
  constructor(private route: ActivatedRoute, private mealsService: MealsService, private router: Router) {}

  onMealSaved(meal : Meal) : void {
    this.mealsService.addMeal(meal);
    this.router.navigate(['/']);
  }

  onMealCanceled() : void  {
    this.router.navigate(['/']);
  }
}
