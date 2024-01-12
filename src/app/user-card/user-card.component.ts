import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',//<-- Aqui esta tu etiqueta.
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() nombre: string ="";//parametro de imagen que recibe una ruta
  @Input() image: string ="";//parametro de imagen que recibe una ruta
  @Input() description: string="";//parametro de descripción recibe un texto
  constructor() { }

}
