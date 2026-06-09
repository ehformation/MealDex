import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/core/models/meal.model';
import { MealsService } from '../meals.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent {
  meal: Meal | undefined;

  constructor(private route: ActivatedRoute, private mealsService: MealsService) { }

  ngOnInit() {
    const mealId: string | null = this.route.snapshot.paramMap.get('id'); 
    console.log('Meal ID from route:', mealId);

    if (mealId) {
      this.meal = this.mealsService.getMealById(mealId);
    }
  }
}
