import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    UserRoutingModule
  ]
})
export class UserModule { }
