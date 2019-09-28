import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {MustMatch} from '../../helpers/validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {

  }

  tryRegister(value) {
    this.authService.doRegister(value.email, value.password)
      .then(res => {
        console.log(res);
        console.log('Your account has been created');
      }, err => {
        console.log(err);
        console.log(err.message);
      });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }
}
