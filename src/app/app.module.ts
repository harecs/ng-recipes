import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { RecipeModule } from './modules/recipe/recipe.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './modules/recipe/recipe.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    HomeModule,
    RecipeModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
