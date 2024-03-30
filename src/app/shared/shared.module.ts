import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorFooterComponent } from './components/error-footer/error-footer.component';



@NgModule({
  declarations: [EmailDirective, LoaderComponent, ErrorFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EmailDirective,
    LoaderComponent,
    ErrorFooterComponent
  ]
})
export class SharedModule { }
