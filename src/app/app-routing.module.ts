import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealListComponent } from './meals/meal-list/meal-list.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  { path: '', component: MealListComponent }, 
  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
