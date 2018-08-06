import { Component } from '@angular/core';
import {  NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante:any = {};

  constructor(public navParams: NavParams, public navCtrl: NavController) {

    this.mutante = this.navParams.get("mutante");
  }

  goToBack(){
    this.navCtrl.pop();
  }

  goToRoot(){
    this.navCtrl.popToRoot();
  }

}
