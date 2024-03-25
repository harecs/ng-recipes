import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthActivate } from 'src/app/guards/auth.activate';
import { GuestActivate } from 'src/app/guards/guest.activate';
// import { AregisterComponent } from './components/aregister/aregister.component';


const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [GuestActivate]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [GuestActivate]
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthActivate]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
