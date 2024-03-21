import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';



@NgModule({
  declarations: [
    NavigationComponent,
    NotFoundComponent,
    AuthenticateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    NotFoundComponent,
    AuthenticateComponent
  ]
})
export class CoreModule { }
