import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private router: Router, private _snackBar: MatSnackBar) {
    this.createForm();
  }
  ngOnInit() {
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  onSubmit() {
    const { name, email, message } = this.form.value;
    const date = Date();
    const formRequest = { name, email, message, date };
    this.db.list('/messages').push(formRequest);
    this._snackBar.open('Your message has been sent','', { duration: 3000 });
    this.form.reset();
  }
}
