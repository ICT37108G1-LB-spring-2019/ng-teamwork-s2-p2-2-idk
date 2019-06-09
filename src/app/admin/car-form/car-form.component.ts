import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CarService } from "src/app/services/car.service";
import { Mercedes } from "src/app/models/car";

@Component({
  selector: "app-car-form",
  templateUrl: "./car-form.component.html"
})
export class CarFormComponent implements OnInit {
  @Output() car: EventEmitter<Mercedes> = new EventEmitter<Mercedes>();

  @Input() editCar: Mercedes;

  carForm: FormGroup;
  features: string[];
  isValid: boolean = true;

  constructor(private f: FormBuilder, private carService: CarService) {
    this.carForm = f.group({
      info: ["", Validators.required],
      imageUrl: ["", Validators.required],
      features: ["", Validators.required]
    });
  }

  submitForm(form: FormGroup) {
    this.isValid = form.valid;

    if (form.valid) {
      const { info, imageUrl, features } = form.controls;

      this.car.emit({
        info: info.value,
        imageUrl: imageUrl.value,
        features: features.value
      });

      this.isValid = true;
    }
  }

  ngOnInit() {
    this.carService.getFeatures().subscribe(val => {
      this.features = val;
    });

    if (this.editCar) {
      let keys = Object.keys(this.editCar);

      keys.forEach(key => {
        let control = this.carForm.controls[key];

        if (control) {
          control.setValue(this.editCar[key]);
        }
      });
    }
  }
}
