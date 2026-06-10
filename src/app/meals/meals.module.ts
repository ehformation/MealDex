import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { DifficultePipe } from '../core/pipes/difficulte.pipe';
import { RouterModule, Routes } from '@angular/router';
import { HighlightCardDirective } from './directives/highlight-card.directive';
import { TronquerPipe } from '../core/pipes/tronquer.pipe';
import { CopierDirective } from '../core/directives/copier.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MealFormComponent } from './meal-form/meal-form.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';

const mealsRoutes: Routes = [ 
  { path: 'meals', component: MealListComponent },
  { path: 'meal/:id/edit', component: MealEditComponent },
  { path: 'meal/:id', component: MealDetailComponent },
];

@NgModule({
  declarations: [
    MealListComponent,
    MealDetailComponent,
    DifficultePipe,
    HighlightCardDirective,
    TronquerPipe,
    CopierDirective,
    MealFormComponent,
    MealEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mealsRoutes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MealsModule { }
