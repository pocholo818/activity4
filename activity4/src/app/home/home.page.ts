import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profileForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  login(){
    console.log(this.profileForm.value)
  }

  constructor(private fb: FormBuilder) {}

}
