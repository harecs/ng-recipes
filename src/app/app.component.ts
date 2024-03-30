import { Component, OnInit } from '@angular/core';
import { ErrorService } from './shared/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hasError: boolean = false;

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.apiError$.subscribe((error) => {      
      this.hasError = !!error;
    })
  }

}
