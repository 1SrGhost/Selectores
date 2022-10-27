import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesServiceService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styleUrls: ['./selector-pages.component.css'],
})
export class SelectorPagesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
  });
  regiones: string[] = [];
  constructor(
    private fb: FormBuilder,
    private paisesServices: PaisesServiceService
  ) {}

  ngOnInit(): void {
    this.regiones = this.paisesServices.regiones;
    console.log(this.regiones)
  }

  guardar() {}
}
