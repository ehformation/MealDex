import { Injectable } from '@angular/core';
import { Meal } from '../core/models/meal.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  private base = 'https://6a2a6fabb687a7d5cbc3b8bd.mockapi.io';

  constructor(private http: HttpClient) { }

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${this.base}/meals`);
  }

  getMealById(id: string): Observable<Meal> {
    return this.http.get<Meal>(`${this.base}/meals/${id}`);
  }


  getCategories(): Observable<string[]> {
    return of(['Entrée', 'Plat', 'Dessert', 'Apéritif', 'Boisson', 'Accompagnement', 'Sauce', 'Autre']);
  }

  getDifficulty(): Observable<string[]> {
    return of(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
  }

  editMeal(updatedMeal: Meal): Observable<Meal> {
    return this.http.put<Meal>(`${this.base}/meals/${updatedMeal.id}`, updatedMeal);
  }

  addMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(`${this.base}/meals`, meal);
  }

  deleteMeal(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/meals/${id}`);
  }
}
