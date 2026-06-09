import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealListComponent } from './meals/meal-list/meal-list.component';
import { HighlightCardDirective } from './meals/directives/highlight-card.directive';
import { DifficultePipe } from './core/pipes/difficulte.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MealListComponent,
    HighlightCardDirective,
    DifficultePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
