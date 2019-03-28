import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  public jogoEmAndamento:boolean = true
  public tipoEmcerramento: string 

  public encerrarGame(type: string): void{
    this.jogoEmAndamento = false
    this.tipoEmcerramento = type
  }
  public reiniciarGame(){
    this.jogoEmAndamento = true
    this.tipoEmcerramento = undefined
  }
}
