import { Component, OnInit, Input } from "@angular/core";
import { Mercedes } from "src/app/models/car";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html"
})
export class CarComponent implements OnInit {
  @Input() car: Mercedes;

  constructor() {}

  ngOnInit() {}
}
