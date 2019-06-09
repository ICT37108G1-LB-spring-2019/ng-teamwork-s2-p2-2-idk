import { Component, OnInit } from "@angular/core";
import { Mercedes } from "src/app/models/car";
import { CarService } from "src/app/services/car.service";

@Component({
  selector: "app-new-car",
  templateUrl: "./new-car.component.html"
})
export class NewCarComponent implements OnInit {
  isValid: boolean = false;
  constructor(private carService: CarService) {}

  addCar(newCar: Mercedes) {
    this.carService.addCar(newCar).subscribe(
      val => {
        this.isValid = true;
      },
      err => (this.isValid = false)
    );
  }
  ngOnInit() {}
}
