import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminCarsComponent } from "./admin-cars/admin-cars.component";
import { EditCarComponent } from "./edit-car/edit-car.component";
import { NewCarComponent } from "./new-car/new-car.component";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../_shared/shared.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CarFormComponent } from "./car-form/car-form.component";

@NgModule({
  declarations: [
    AdminComponent,
    AdminCarsComponent,
    EditCarComponent,
    NewCarComponent,
    CarFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule {}
