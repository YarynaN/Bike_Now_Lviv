import {FormGroup} from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function GreaterThan(controlName: string, anotherControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const anotherControl = formGroup.controls[anotherControlName];

    if (control.value >= anotherControl.value) {
      anotherControl.setErrors({ LessThan: true });
    } else {
      anotherControl.setErrors(null);
    }
  };
}

