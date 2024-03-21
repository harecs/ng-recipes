import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavigationComponent,
    NotFoundComponent,
    AuthenticateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    NotFoundComponent,
    AuthenticateComponent
  ]
})
export class CoreModule { }
