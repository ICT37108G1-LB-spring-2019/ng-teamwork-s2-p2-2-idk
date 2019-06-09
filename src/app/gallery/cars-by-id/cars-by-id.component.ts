import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CarService } from "src/app/services/car.service";
import { Mercedes } from "src/app/models/car";
import { tap, delay } from "rxjs/operators";

@Component({
  selector: "app-cars-by-id",
  templateUrl: "./cars-by-id.component.html"
})
export class CarsByIdComponent implements OnInit {
  postId: number;
  car: Mercedes;
  loading: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private carService: CarService,
    private route: Router
  ) {}

  ngOnInit() {
    this.postId = +this.router.snapshot.paramMap.get("id");

    if (!Number.isNaN(this.postId)) {
      this.carService
        .getCarById(this.postId)
        .pipe(
          tap(() => (this.loading = true)),
          delay(1000)
        )
        .subscribe(
          val => {
            this.car = val;
            this.loading = false;
          },
          err => {
            this.loading = false;
          },
          () => (this.loading = false)
        );
    } else {
      return this.route.navigateByUrl("404");
    }
  }
}
