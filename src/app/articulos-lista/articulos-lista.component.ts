import { Component, OnInit } from '@angular/core';
import { ARTICULOS } from '../articulo.mocks';
import { Articulos } from '../articulos';

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent implements OnInit {

  description:string = 'sin descripcion';

  articulos: Articulos[] =[];
  constructor() { }

  ngOnInit(): void {
  }
  cargarArticulos(){
    this.articulos = ARTICULOS;
  }
}
