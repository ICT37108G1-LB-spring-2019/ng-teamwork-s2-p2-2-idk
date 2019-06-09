import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleryComponent } from "./gallery.component";
import { CarsByIdComponent } from "./cars-by-id/cars-by-id.component";
import { AppRoutingModule } from "../app-routing.module";
import { CarListComponent } from "./car-list/car-list.component";
import { CarComponent } from "./car/car.component";
import { SharedModule } from "../_shared/shared.module";

@NgModule({
  declarations: [
    GalleryComponent,
    CarsByIdComponent,
    CarListComponent,
    CarComponent
  ],
  imports: [CommonModule, AppRoutingModule, SharedModule]
})
export class GalleryModule {}
