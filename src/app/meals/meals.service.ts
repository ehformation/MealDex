import { Injectable } from '@angular/core';
import { Meal } from '../core/models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  private meals: Meal[] = [
    {
      idMeal: '1',
      strMeal: 'Spaghetti Carbonara',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
      strInstructions: '1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk together eggs and Parmesan cheese. 4. Drain spaghetti and return to pot. 5. Quickly mix in egg mixture and pancetta. 6. Serve immediately with extra Parmesan.'
    },
    {
      idMeal: '2',
      strMeal: 'Chicken Alfredo',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg',
      strInstructions: '1. Cook fettuccine according to package instructions. 2. In a pan, cook chicken until browned. 3. Remove chicken and set aside. 4. In the same pan, melt butter and add garlic. 5. Stir in heavy cream and Parmesan cheese until sauce thickens. 6. Add chicken back to the pan and toss with cooked fettuccine. 7. Serve hot.'
    },
    {
      idMeal: '3',
      strMeal: 'Beef Stroganoff',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg',
      strInstructions: '1. Cook egg noodles according to package instructions. 2. In a pan, cook beef strips until browned. 3. Remove beef and set aside. 4. In the same pan, sauté onions and mushrooms until soft. 5. Stir in sour cream and beef broth until sauce is smooth. 6. Add beef back to the pan and simmer for a few minutes. 7. Serve over cooked egg noodles.'
    }
  ];

  constructor() { }

  getMeals(): Meal[] {
    return this.meals;
  }

  getMealById(id: string): Meal | undefined {
    return this.meals.find(meal => meal.idMeal === id);
  } 

  getDifficulty(): string[] {
    return [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
    ];
  }

  getCategories(): string[] {
    return [
      'Entrée', 'Plat', 'Dessert', 'Apéritif', 'Boisson', 'Accompagnement', 'Sauce', 'Autre'
    ];
  }
}
