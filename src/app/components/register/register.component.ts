import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {MustMatch} from '../../helpers/validation';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private snackBar: MatSnackBar) {

  }

  tryRegister(value) {
    if(this.registerForm.status !== 'VALID'){
      return;
    }

    this.authService.doRegister(value.email, value.password)
      .then(res => {
        this.router.navigate(['my-account/personal-info']);
      }, err => {
        this.snackBar.open(`Sorry, we could not register you. ${err.message}`, 'ok', {
          duration: 3000,
        });
      });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
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
