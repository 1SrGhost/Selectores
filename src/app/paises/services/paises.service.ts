import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {
  private _regiones: string[] = ['Africa', 'Europe', 'America','Asia', 'Oceania'];

  get regiones(): string[]{
    return [...this._regiones];
  }

  constructor() { }
}
