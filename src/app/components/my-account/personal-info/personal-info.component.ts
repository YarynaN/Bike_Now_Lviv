import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, NgForm, AbstractControl, FormControlName} from '@angular/forms';
import { PersonalInfoService } from '../../../services/personal-info.service';
import { PersonalInfo } from '../../../models/personal-info.model';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

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
    phone: ['', [Validators.required, Validators.minLength(13)]],
    height: ['', [Validators.required, Validators.min(135), Validators.max(235)]]
  });

  selectedFile: ImageSnippet;

  constructor(
    private formBuilder: FormBuilder,
    private personalInfoService: PersonalInfoService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

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

    this.personalInfoService.updateUserItem(this.personalInfoForm.value)
      .then((res) => {
        this.onSuccess(`Data saved succesfuly!`);
      },
      (err) => {
        this.onError(`Something went wrong!`);
      });
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;

      this.personalInfoService.updateUserItem({photo: this.selectedFile.src})
        .then((res) => {
            this.onSuccess(`Image Uploaded Succesfuly!`);
          },
          (err) => {
            this.onError(`Image Upload Failed!`);
          })
    });

    reader.readAsDataURL(file);
  }

  private onSuccess(message) {
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['succesful-snackbar'],
      horizontalPosition: "right"
    });
  }

  private onError(message) {
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['error-snackbar'],
      horizontalPosition: "right"
    });
  }

}
