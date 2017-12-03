import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registrationForm = this.fb.group({
      name:  ['', Validators.required ],
      email:  ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  public submit() {
    console.log(this.registrationForm.value);
  }
}
