import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  myReactiveForm: FormGroup
  genders: any = [
    { id: 1, value: 'Male' },
    { id: 1, value: 'Female' }
  ]
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'course': new FormControl('Angular', Validators.required),
      'gender': new FormControl('Male', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm)

  }

}
