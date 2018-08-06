import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string = "";
  edad:number;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {

    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");
  }

  closeWithoutParams(){
    this.viewCtrl.dismiss();
  }

  closeWithParams(){
    let data = {
      nombre: "Pepe",
      edad: 24,
      coords: {
        lat: 875,
        lon: 365
      }
    };

    this.viewCtrl.dismiss(data);
  }


}
