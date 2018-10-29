import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Refresher, InfiniteScroll } from 'ionic-angular';
import { Processo } from '../../model/processo';
import { ProcessoService } from '../../service/processo.service';

@IonicPage()
@Component({
  selector: 'page-processo',
  templateUrl: 'processo.html',
})
export class ProcessoPage {

  processos : Processo[];
  processoPage : Processo[] = [];
  page : number  = 0;

  constructor(public navCtrl : NavController, public navParams: NavParams,
              public service : ProcessoService,
              public loading : LoadingController) {
  }

  ionViewDidLoad() {
    this.getProcesso();
  }
    getProcesso(){
      this.service.getProcesso()
    .subscribe(response => {
      this.processos = response;
      this.addPage();
    });
  }

    addPage(){
      for(var i = 0; i<10; i++){
        this.processoPage.push(this.processos[this.page]);
        this.page++;
      }
      console.log(this.processoPage);
    }
    doRefresh(refresher){
      this.processoPage = [];

      setTimeout(() => {
        this.getProcesso();
        refresher.complete();
      },2000);
    }

    doInfinite(InfiniteScroll){
        setTimeout(()=>{
          this.addPage();
          InfiniteScroll.complete();
        },500);
      }
    }
  
  
