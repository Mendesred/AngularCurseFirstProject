import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frases.model'
import { FRASES } from './frases-mock'
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] =FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta:string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarGame: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {
  }
  ngOnDestroy() { 
  }

  public atualizarResposta(resposta: Event): void{
    this.resposta =(<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void{
    if (this.rodadaFrase.frasePtBr == this.resposta){
      // Troca frase
      this.rodada++
      // atualiza o objeto rodadaFrase
      this.atualizaRodada()
      // Progresso
      this.progresso=this.progresso+(100/this.frases.length)   
      
      if( this.rodada === 4){
        this.encerrarGame.emit('vitoria')
      }
    }
    else{
      this.tentativas--
      if(this.tentativas===-1){
        this.encerrarGame.emit('derrota')
      }
    }
  }
  public atualizaRodada(): void{
    // Defini frese da rodada com base na logica
    this.rodadaFrase = this.frases[this.rodada]
    // Limpa campo de texto
    this.resposta = ''
  }
}
