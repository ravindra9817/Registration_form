import {Component} from '@angular/core';
import {NgForm, FormControl, FormGroup, Validators} from '@angular/forms';

import { EnrollmentService} from './enrollment.service';
import {error} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:variable-name
  constructor(private _enrollmentService: EnrollmentService) {
  }


  userprofileForms = new FormGroup({
    name: new FormControl('', Validators.pattern('^[a-zA-Z]*$')),
    hosteler: new FormControl(''),
    roll_no: new FormControl(''),
    branch: new FormControl(''),
    email: new FormControl('', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
    )),
    year: new FormControl(''),
    percentage: new FormControl(''),
    attandance: new FormControl(''),
    mobile_no: new FormControl('', Validators.pattern('^[0-9]*$')),
  });
  // tslint:disable-next-line:variable-name

  onSubmit() {
    console.log(this.userprofileForms);
    this._enrollmentService.postenrollment(this.userprofileForms.value)
      .subscribe( s => {
        console.log('form submitted');
        });
  }

}






