import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetsetService {
  info=0
  constructor() { }

  getInfo(){
    return this.info;
  }

  setInfo(bgraph:number){
    this.info = bgraph + this.info;
  }
}
