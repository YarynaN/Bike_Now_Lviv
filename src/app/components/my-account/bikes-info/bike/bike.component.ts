import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { brakes, brands, frames, categories, sizes, diameterWheels } from './constantsBikeInfo';
import { BikeInfo } from '../../../../models/bike-info.model';
import { BikeInfoService } from '../../../../services/bike-info.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})
export class BikeComponent implements OnInit {
  @Input() bike: BikeInfo;
  @Output() removeLastEmptyBike = new EventEmitter<boolean>();

  private id: string = '';
  submitted: boolean = false;
  constants = {brakes, brands, frames, categories, sizes, diameterWheels};
  images: string[] = [];

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
    price_rent: ['', [Validators.required, Validators.max(999)]],
  });

  selectedFile: ImageSnippet;

  constructor(
    private formBuilder: FormBuilder,
    private bikeInfoService: BikeInfoService,
    private snackBar: MatSnackBar
  ) {}

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
      this.images = this.bike.images || [];
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
      this.bikeInfoService.updateBikeItem(this.id, this.bikeForm.value)
        .then((res) => {
          this.onSuccess(`Bike Info saved succesfuly!`);
        },
        (err) => {
          this.onError(`Bike Info Failed!`);
        });

    } else {
      this.bikeInfoService.pushBikeItem(this.bikeForm.value)
        .then((res) => {
          this.onSuccess(`Bike Info saved succesfuly!`);
        },
        (err) => {
          this.onError(`Bike Info Failed!`);
        });
    }
  }

  delete() {
    if (this.id) {
      this.bikeInfoService.deleteBikeItem(this.id)
        .then((res) => {
          this.onSuccess(`Bike removed succesfuly!`);
        },
        (err) => {
          this.onError(`Bike not removed. Failed!`);
        });
    } else {
      this.removeLastEmptyBike.emit(true);
    }
  }

  removeImage(removeImage) {
    this.bikeInfoService.updateBikeItem(this.id, { images: this.images.filter((image: string) => image !== removeImage) })
      .then((res) => {
        this.onSuccess(`Image Removed Succesfuly!`);
      },
      (err) => {
        this.onError(`Image Removed Failed!`);
      })
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;

      this.images.push(this.selectedFile.src)

      this.bikeInfoService.updateBikeItem(this.id, { images: this.images })
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
