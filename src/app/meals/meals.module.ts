import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { DifficultePipe } from '../core/pipes/difficulte.pipe';
import { RouterModule, Routes } from '@angular/router';
import { HighlightCardDirective } from './directives/highlight-card.directive';
import { TronquerPipe } from '../core/pipes/tronquer.pipe';
import { CopierDirective } from '../core/directives/copier.directive';
import { FormsModule } from '@angular/forms';

const mealsRoutes: Routes = [ 
  { path: 'meals', component: MealListComponent },
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mealsRoutes),
    FormsModule,
  ]
})
export class MealsModule { }
