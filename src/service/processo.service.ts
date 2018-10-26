import { Injectable } from "../../node_modules/@angular/core";
import { Observable } from "../../node_modules/rxjs/Observable";
import { Processo } from "../model/processo";
import { HttpClient } from "../../node_modules/@angular/common/http";

@Injectable()
export class ProcessoService{
   constructor(private http: HttpClient) { }

   getProcesso() : Observable<Processo[]>{
        return this.http.get<Processo[]>(
            `https://dadosabertosapi.ufca.edu.br/service/recurso/processos.json`);
    }
}