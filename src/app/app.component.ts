import {Component} from '@angular/core';
import {NgForm, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from './user';
import { EnrollmentService} from './enrollment.service';
import {error} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // userModel = new User('ravi', 'Yes', '555555', 'IT', 'aass@gmail.com', '3rd', '80', '89', 88);

  // tslint:disable-next-line:variable-name
  private userModel: User;
  // tslint:disable-next-line:variable-name
  constructor(private _enrollmentService: EnrollmentService) {
  }


  userprofileForms = new FormGroup({
    name: new FormControl('', Validators.pattern('^[a-zA-Z]*$')),
    hosteler: new FormControl(''),
    roll_no: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.maxLength(10), Validators.minLength(10)]),
    branch: new FormControl(''),
    email: new FormControl('', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
    )),
    year: new FormControl(''),
    percentage: new FormControl('', Validators.pattern('^[0-9]*$')),
    attandance: new FormControl('', Validators.pattern('^[0-9]*$')),
    mobile_no: new FormControl('', Validators.pattern('^[0-9]*$')),
  });
  // tslint:disable-next-line:variable-name

  onSubmit() {
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('success!', data),
        // tslint:disable-next-line:no-shadowed-variable
        error => console.error('error!', error)
      );
    console.warn(this.userprofileForms.value);
  }

}



  /*
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')])

    });
  }
   onSubmit(form: NgForm) {
    console.log(form);
   }
*/


