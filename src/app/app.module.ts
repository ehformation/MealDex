import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TronquerPipe } from './core/pipes/tronquer.pipe';
import { CopierDirective } from './core/directives/copier.directive';
import { Error404Component } from './error404/error404.component';
import { MealsModule } from './meals/meals.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    MealsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
