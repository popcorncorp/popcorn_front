import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { map, filter, tap } from 'rxjs/operators'; // hanel u sarqel arandzin service
import { RestService } from '../../shared/services';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private http: RestService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public submit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.http.post('//localhost/popcorn_back/public/api/registration', this.registrationForm.value)
      .subscribe(res => console.log(res));
    }
  }

}
