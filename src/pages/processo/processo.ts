import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Processo } from '../../model/processo';
import { ProcessoService } from '../../service/processo.service';

@IonicPage()
@Component({
  selector: 'page-processo',
  templateUrl: 'processo.html',
})
export class ProcessoPage {

  processos : Processo[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service : ProcessoService) {
  }

  ionViewDidLoad() {
    this.service.getProcesso()
    .subscribe(response => {
      this.processos = response;
    });
  }
}