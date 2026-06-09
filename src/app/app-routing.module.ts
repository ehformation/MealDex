import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealListComponent } from './meals/meal-list/meal-list.component';
import { MealDetailComponent } from './meals/meal-detail/meal-detail.component';

const routes: Routes = [
  { path: '', component: MealListComponent }, 
  { path: 'meal/:id', component: MealDetailComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
