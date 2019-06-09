import { Component, OnInit } from "@angular/core";
import { CarService } from "src/app/services/car.service";
import { Mercedes } from "src/app/models/car";
import { tap, delay } from "rxjs/operators";

@Component({
  selector: "app-admin-cars",
  templateUrl: "./admin-cars.component.html"
})
export class AdminCarsComponent implements OnInit {
  cars: Mercedes[];
  loading: boolean = true;

  constructor(private carService: CarService) {}

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(
      val => {
        let index = this.cars.findIndex(car => car.id === id);

        if (index !== -1) {
          this.cars.splice(index, 1);
        }
      },
      err => {
        console.log(err);
      }
    );

    return false;
  }

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
          console.log(err);
          this.loading = false;
        },
        () => (this.loading = false)
      );
  }
}
