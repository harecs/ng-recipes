import { Component, Input, OnInit } from '@angular/core';
import { ErrorService } from '../../error.service';

@Component({
  selector: 'app-error-footer',
  templateUrl: './error-footer.component.html',
  styleUrls: ['./error-footer.component.css']
})
export class ErrorFooterComponent implements OnInit {
  error: any = null;

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.apiError$.subscribe(err => {
      this.error = err;
    })
  }
}
