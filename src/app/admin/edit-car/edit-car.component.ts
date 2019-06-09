import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CarService } from "src/app/services/car.service";
import { Mercedes } from "src/app/models/car";

@Component({
  selector: "app-edit-car",
  templateUrl: "./edit-car.component.html"
})
export class EditCarComponent implements OnInit {
  car: Mercedes;
  carId: number;
  isValid: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {
    this.carId = +this.route.snapshot.paramMap.get("id");
  }

  updateCar(car: Mercedes) {
    this.carService.updateCar(this.carId, car).subscribe(
      val => {
        this.isValid = true;
        setTimeout(
          () => this.router.navigate(["/gallery/cars", this.carId]),
          1000
        );
      },
      err => {
        this.isValid = false;
      }
    );
  }

  ngOnInit() {
    if (!Number.isNaN(this.carId)) {
      this.carService.getCarById(this.carId).subscribe(
        val => {
          this.car = val;
        },
        err => {
          console.log(err);
        }
      );
    } else {
      return this.router.navigateByUrl("404");
    }
  }
}
