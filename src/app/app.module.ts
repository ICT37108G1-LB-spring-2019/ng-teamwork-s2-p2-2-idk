import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./_shared/navbar/navbar.component";
import { CarService } from "./services/car.service";
import { AdminModule } from "./admin/admin.module";
import { GalleryModule } from "./gallery/gallery.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    GalleryModule,
    HttpClientModule
  ],
  providers: [{ useClass: CarService, provide: CarService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
