import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { RegisterPage } from '../register/register.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  profile = this.fb.group({
    firstName: [''],
    lastName: [''],
    username: [''],
    password: ['']
  })

  update(){
    this.profile.patchValue({
    firstName: "Pocholo",
    lastName: "Gopez",
    username: "axel65",
    password: "password123",
    });
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
