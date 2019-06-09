import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { CarsByIdComponent } from "./gallery/cars-by-id/cars-by-id.component";
import { AdminComponent } from "./admin/admin.component";
import { EditCarComponent } from "./admin/edit-car/edit-car.component";
import { NewCarComponent } from "./admin/new-car/new-car.component";
import { CarListComponent } from "./gallery/car-list/car-list.component";
import { AdminCarsComponent } from "./admin/admin-cars/admin-cars.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "gallery/cars", pathMatch: "full" },
  { path: "home", redirectTo: "gallery/cars", pathMatch: "full" },

  /// gallery
  {
    path: "gallery/cars",
    component: GalleryComponent,
    children: [
      {
        path: "",
        component: CarListComponent
      },
      {
        path: ":id",
        component: CarsByIdComponent
      }
    ]
  },

  /// Admin
  {
    path: "admin/cars",
    component: AdminComponent,
    children: [
      { path: "", component: AdminCarsComponent },
      {
        path: "new",
        component: NewCarComponent
      },
      { path: ":id", redirectTo: ":id/edit", pathMatch: "full" },
      {
        path: ":id/edit",
        component: EditCarComponent
      }
    ]
  },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
