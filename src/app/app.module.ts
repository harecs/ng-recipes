import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { RecipeModule } from './modules/recipe/recipe.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './modules/recipe/recipe.service';
import { UserRoutingModule } from './modules/user/user-routing.module';
import { appHttpInterceptorProvider } from './app-http.interceptor';
import { RecipeRoutingModule } from './modules/recipe/recipe-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    HomeModule,
    RecipeModule,
    UserRoutingModule,
    RecipeRoutingModule,
    AppRoutingModule
  ],
  providers: [
    appHttpInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
