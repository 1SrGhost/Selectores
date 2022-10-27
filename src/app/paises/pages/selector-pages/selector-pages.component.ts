import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { iPaisSmall, iPais } from '../../interfaces/paises.interface';
import { PaisesServiceService } from '../../services/paises.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styleUrls: ['./selector-pages.component.css'],
})
export class SelectorPagesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required],
  });
  regiones: string[] = [];
  paises: iPaisSmall[] = [];
  fronteras: string[]= [];

 
  constructor(
    private fb: FormBuilder,
    private paisesServices: PaisesServiceService
  ) {}

  ngOnInit(): void {
    this.regiones = this.paisesServices.regiones;

    // this.miFormulario.get('region')?.valueChanges.subscribe((region) => {
    //   this.paisesServices
    //     .getPaisesPorRegion(region)
    //       .subscribe((paises) => (this.paises = paises));
    // });

    this.miFormulario
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.miFormulario.get('pais')?.reset('');
        }),
        switchMap((region) => this.paisesServices.getPaisesPorRegion(region))
      )
      .subscribe((paises) => {
        this.paises = paises;
      });

    this.miFormulario
      .get('pais')
      ?.valueChanges.pipe( tap((_) => {
        this.fronteras = [];
        this.miFormulario.get('frontera')?.reset('');
      }),
        switchMap((codigo) => this.paisesServices.getPaisporCodigo(codigo))
      )

      .subscribe((data) => {
        this.fronteras = data?.borders || [];
      });
  }

  guardar() {}
}
