import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, NgForm, AbstractControl, FormControlName} from '@angular/forms';
import { PersonalInfoService } from '../../../services/personal-info.service';
import { PersonalInfo } from '../../../models/personal-info.model';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    photo: [''],
    email: ['', [Validators.required, Validators.email]],
    birthday: ['', Validators.required],
    phone: ['', Validators.required],
    height: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private personalInfoService: PersonalInfoService, private authService: AuthService) {
  }

  ngOnInit() {
    this.personalInfoService.getUserItem().subscribe((data: any) => {
      if (data) {
        this.personalInfoForm.setValue({
          name: data.name || '',
          surname: data.surname || '',
          photo: data.photo || '',
          email: data.email || '',
          birthday: data.birthday || '',
          phone: data.phone || '',
          height: data.height || '',
        });
      }
    });
  }

  get f() { return this.personalInfoForm.controls; }

  onSubmit() {
    // stop here if form is invalid
    if (this.personalInfoForm.invalid) {
      return;
    }

    this.personalInfoService.updateUserItem(this.personalInfoForm.value);
  }

  onReset() {
    console.log('reset');
  }
}
