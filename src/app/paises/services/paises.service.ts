import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaisSmall } from '../interfaces/paises.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {
  private _baseUrl:string = 'https://restcountries.com/v2'
  private _regiones: string[] = ['Africa', 'Europe', 'Americas','Asia', 'Oceania'];

  get regiones(): string[]{
    return [...this._regiones];
  }

  constructor(private http:HttpClient) { }

 /**
  * Toma una cadena como parámetro y devuelve un Observable de tipo any
  * @param {string} region - La región de la que desea obtener los países.
  * @returns Un Observable de tipo any.
  */
  getPaisesPorRegion(region: string): Observable<PaisSmall[]>{
    const url: string = `${this._baseUrl}/region/${region}?fields=alpha3Code,name`
    return this.http.get<PaisSmall[]>(url);
  }
}
