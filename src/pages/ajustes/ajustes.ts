import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from "../index.paginas";

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public mdlCtrl: ModalController) {}

  goHome(){
    this.navCtrl.parent.select(0);
  }

  launchModal(){
    
    let modal = this.mdlCtrl.create( ModalPage, {
      nombre: "Daniel Alvarez",
      edad: 23
    });

    modal.present();

    modal.onDidDismiss( res => {

      if( res )
        console.log("Datos del modal", res);
    })
  }

}
