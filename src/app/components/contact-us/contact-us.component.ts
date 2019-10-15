import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private router: Router) {
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
    this.form.reset();
  }
}
