import { Component } from '@angular/core';
import {  NavController, MenuController } from 'ionic-angular';

import { Pagina2Page }  from "../index.paginas";

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pagina2:any = Pagina2Page;

  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {}

  navigatePage(){
    this.navCtrl.push(Pagina2Page);
  }

  showMenu(){
    this.menuCtrl.toggle();
  }

}
