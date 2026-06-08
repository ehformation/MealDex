import { Component } from '@angular/core';
import { Meal } from '../../core/models/meal.model';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent {
  meals: Meal[] = [
    {
      idMeal: '1',
      strMeal: 'Spaghetti Carbonara',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
    },
    {
      idMeal: '2',
      strMeal: 'Chicken Alfredo',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg'
    },
    {
      idMeal: '3',
      strMeal: 'Beef Stroganoff',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg'
    }
  ];
}
