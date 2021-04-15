import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Block } from '../models/block';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  apiURL: string;
  constructor(private httpClient: HttpClient) { 
    this.apiURL = '';
  }

  post(block:Block){
    return this.httpClient.post(this.apiURL,block)
  }

  get(leg: string, anio:string, inst:string){
    let params = new HttpParams();
    if (leg != null) {
      params = params.append("leg", leg);
    }
    if (anio != null) {
      params = params.append("anio", anio);
    }
    if (inst != null) {
      params = params.append("inst", inst);
    }

    return this.httpClient.get(this.apiURL, { params: params });
  }

}
