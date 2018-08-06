import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from "../pagina3/pagina3";
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  page3:any = Pagina3Page;
  mutantes:any[] = [
    {
      nombre: "Magento",
      poder: "Controlar metal"
    },
    {
      nombre: "Wolverine",
      poder: "Regeneración acelerada"
    },
    {
      nombre: "Profesor X",
      poder: "Poderes psiquicos"
    },
    {
      nombre: "Gambito",
      poder: "Cargar objetos inanimados con energía"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToPage3(mutante:any){
    this.navCtrl.push( Pagina3Page, { mutante });
  }

}
