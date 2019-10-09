import { Component, OnInit, Input } from '@angular/core';
import { brakes, brands, frames, categories, sizes, diameterWheels } from './constantsBikeInfo';
import { BikeInfo } from '../../../../models/bike-info.model';
import { BikeInfoService } from '../../../../services/bike-info.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})
export class BikeComponent implements OnInit {
  @Input() bike: BikeInfo;

  private id: string = '';
  submitted: boolean = false;
  constants = {brakes, brands, frames, categories, sizes, diameterWheels};

  bikeForm: FormGroup = this.formBuilder.group({
    brand: ['', Validators.required],
    model: ['', Validators.required],
    categories: ['', Validators.required],
    sizes: ['', Validators.required],
    color: ['', Validators.required],
    weight: ['', Validators.required],
    frames: ['', Validators.required],
    speeds: ['', Validators.required],
    brakes: ['', Validators.required],
    diameter_wheels: ['', Validators.required],
    price_rent: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private bikeInfoService: BikeInfoService) {}

  ngOnInit() {
    if (this.bike) {
      this.bikeForm.setValue({
        brand: this.bike.brand || '',
        model: this.bike.model || '',
        categories: this.bike.categories || '',
        sizes: this.bike.sizes || '',
        color: this.bike.color || '',
        weight: this.bike.weight || '',
        frames: this.bike.frames || '',
        speeds: this.bike.speeds || '',
        brakes: this.bike.brakes || '',
        diameter_wheels: this.bike.diameter_wheels || '',
        price_rent: this.bike.price_rent || '',
      });

      this.id = this.bike.id || '';
    }
  }

  get f() { return this.bikeForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.bikeForm.invalid) {
        return;
    }

    if (this.id) {
      this.bikeInfoService.updateBikeItem(this.id, this.bikeForm.value);
    }

    this.bikeInfoService.pushBikeItem(this.bikeForm.value);
  }

  delete() {
      this.bikeInfoService.deleteBikeItem(this.id);
  }
}
