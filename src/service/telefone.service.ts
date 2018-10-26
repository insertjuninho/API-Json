import { Injectable } from "../../node_modules/@angular/core";
import { HttpClient } from "../../node_modules/@angular/common/http";
import { Observable } from "../../node_modules/rxjs/Observable";
import { Telefone } from "../model/telefone";

@Injectable()
export class TelefoneService{
    constructor(private http: HttpClient) { }
    

    getTelefone() : Observable<Telefone[]>{
        return this.http.get<Telefone[]>(
            `http://dadosabertosapi.ufca.edu.br/service/recurso/telefones.json`);
    }
}