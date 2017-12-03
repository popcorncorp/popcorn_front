import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      userEmail: '',
      userPass: ''
    });
  }
  ngOnInit() {
  }

  public submit() {
    console.log(this.loginForm);
  }

}
