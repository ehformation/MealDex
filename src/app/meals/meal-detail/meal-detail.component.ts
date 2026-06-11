import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/core/models/meal.model';
import { MealsService } from '../meals.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent {
  meal$: Observable<Meal> = new Observable<Meal>();

  constructor(private route: ActivatedRoute, private mealsService: MealsService, private router: Router) { }

  ngOnInit() {
    const mealId: string | null = this.route.snapshot.paramMap.get('id'); 
    if (mealId) {
      this.meal$ = this.mealsService.getMealById(mealId);
    }
  }

  onMealDeleted(id: string) {
    this.mealsService.deleteMeal(id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
