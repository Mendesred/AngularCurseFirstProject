import { Component, OnInit, Input, OnChanges} from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit,OnChanges {

  @Input() public tentativas:number 

  public coracaes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { 
  }
  ngOnChanges() {
    //this.tentativas
    //this.coracaes.length
    if(this.tentativas !== this.coracaes.length){
      let indice = this.coracaes.length - this.tentativas
      this.coracaes[indice - 1].cheio = false
    }
  }
  
  ngOnInit() {
  }

}
