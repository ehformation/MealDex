import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealListComponent } from './meals/meal-list/meal-list.component';
import { HighlightCardDirective } from './meals/directives/highlight-card.directive';
import { DifficultePipe } from './core/pipes/difficulte.pipe';
import { TronquerPipe } from './core/pipes/tronquer.pipe';
import { CopierDirective } from './core/directives/copier.directive';
import { MealDetailComponent } from './meals/meal-detail/meal-detail.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    MealListComponent,
    HighlightCardDirective,
    DifficultePipe,
    TronquerPipe,
    CopierDirective,
    MealDetailComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
