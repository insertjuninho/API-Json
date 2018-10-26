import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TelefoneService } from '../../service/telefone.service';
import { Telefone } from '../../model/telefone';

@IonicPage()
@Component({
  selector: 'page-telefone',
  templateUrl: 'telefone.html',
})
export class TelefonePage {

  telefones : Telefone[];
  telefonePage: Telefone[] = [];
  page : number = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service : TelefoneService,
              public loading : LoadingController) {

  }

  ionViewDidLoad() {
   this.getTelefone();
  }

  getTelefone(){
    this.service.getTelefone()
    .subscribe(response => {
      this.telefones = response;
      this.addPage();
    });

  }
  addPage(){
    for(var i = 0; i<10; i++){
      this.telefonePage.push(this.telefones[this.page]);
      this.page++;
    }
    console.log(this.telefonePage);
  }

}
