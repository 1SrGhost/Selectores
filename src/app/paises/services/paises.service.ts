import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iPaisSmall, iPais } from '../interfaces/paises.interface';
import { combineLatest, Observable, of } from 'rxjs';


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
  getPaisesPorRegion(region: string): Observable<iPaisSmall[]>{
    const url: string = `${this._baseUrl}/region/${region}?fields=alpha3Code,name`
    return this.http.get<iPaisSmall[]>(url);
  }

  getPaisporCodigo(codigo:string):Observable<iPais | null>  {
    if(!codigo){
      return of(null)
    }
    const url = `${this._baseUrl}/alpha/${codigo}`;
    return this.http.get<iPais>(url);
  }

  getFronteras(codigo:string):Observable<iPaisSmall>  {
  
    const url = `${this._baseUrl}/alpha/${codigo}?fields=alpha3Code,name`;
    return this.http.get<iPaisSmall>(url);
  }

  getArrayFronteras(borders:string[]):Observable<iPaisSmall[]>{
    if(!borders){
      return of([]);
    }

    const peticiones: Observable<iPaisSmall>[]= [];
    borders.forEach(codigo => {const peticion = this.getFronteras(codigo);
    peticiones.push(peticion);})

    return combineLatest( peticiones);
  }
}
