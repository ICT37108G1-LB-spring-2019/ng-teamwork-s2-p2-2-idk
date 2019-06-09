import { Injectable } from "@angular/core";
import { Mercedes } from "../models/car";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

const API_PATH = "http://localhost:3000/",
  CARS_PATH = API_PATH + "cars/",
  FEATURES_PATH = API_PATH + "features/";

@Injectable({
  providedIn: "root"
})
export class CarService {
  constructor(private http: HttpClient) {}

  /**
   * [GET]
   *
   * Get All car
   */
  getCars(): Observable<Mercedes[]> {
    return this.http.get(CARS_PATH).pipe(
      map((cars: Array<any>) => {
        return cars.map(car => car);
      }),
      catchError(err => throwError(err))
    );
  }

  /**
   * [GET]
   * Get phone by id
   * @param id
   */
  getCarById(id: number): Observable<Mercedes> {
    let api = CARS_PATH + id;

    return this.http.get(api).pipe(
      map((car: Mercedes) => car),
      catchError(err => throwError(err))
    );
  }

  /**
   * [GET]
   *
   * Get Features
   */
  getFeatures(): Observable<Array<string>> {
    return this.http.get(FEATURES_PATH).pipe(
      map((feature: Array<string>) => feature),
      catchError(err => throwError(err))
    );
  }

  /**
   * [DELETE]
   *
   * Delete phone by id
   * @param id
   */
  deleteCar(id: number): Observable<any> {
    let api = CARS_PATH + id;
    return this.http.delete(api);
  }

  /**
   * [POST]
   *
   * Add new car
   * @param newCar
   */
  addCar(newCar: Mercedes): Observable<any> {
    return this.http.post(CARS_PATH, newCar);
  }

  /**
   * [PUT]
   *
   * Update car by id
   * @param id
   * @param value
   */
  updateCar(id: number, value: Mercedes): Observable<any> {
    let api = CARS_PATH + id;

    return this.http.put(api, value);
  }
}
