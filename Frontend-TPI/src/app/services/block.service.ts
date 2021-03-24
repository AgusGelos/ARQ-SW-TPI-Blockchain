import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Block } from '../models/block';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  apiURL: '';
  constructor(private httpClient: HttpClient) { }

  post(block:Block){
    return this.httpClient.post(this.apiURL,block)
  }

}
