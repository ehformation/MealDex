import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MealsService } from '../meals.service';
import { Meal } from 'src/app/core/models/meal.model';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent {

  meals: Meal[] = [];
  nomRecherche = '';

  constructor(private router: Router, private mealsService: MealsService) { }

  ngOnInit() {
    this.meals = this.mealsService.getMeals();
  }

  goToMealDetail(mealId: string) {
    this.router.navigate(['/meal', mealId]);
  }
}
