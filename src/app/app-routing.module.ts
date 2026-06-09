import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealListComponent } from './meals/meal-list/meal-list.component';
import { MealDetailComponent } from './meals/meal-detail/meal-detail.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  { path: '', component: MealListComponent }, 
  { path: 'meals', component: MealListComponent },
  { path: 'meal/:id', component: MealDetailComponent },

  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
