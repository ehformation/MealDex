import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealListComponent } from './meals/meal-list/meal-list.component';

const routes: Routes = [
  { path: '', component: MealListComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
