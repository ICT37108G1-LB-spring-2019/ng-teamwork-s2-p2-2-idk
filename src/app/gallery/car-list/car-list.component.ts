import { Component, OnInit } from "@angular/core";
import { CarService } from "src/app/services/car.service";
import { Mercedes } from "src/app/models/car";
import { tap, delay } from "rxjs/operators";

@Component({
  selector: "app-car-list",
  templateUrl: "./car-list.component.html"
})
export class CarListComponent implements OnInit {
  cars: Mercedes[];
  loading: boolean = false;

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService
      .getCars()
      .pipe(
        tap(() => (this.loading = true)),
        delay(1000)
      )
      .subscribe(
        val => {
          this.cars = val;
          this.loading = false;
        },
        err => {
          this.loading = false;
        },
        () => (this.loading = false)
      );
  }
}
