import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalizar-compra2',
  templateUrl: './finalizar-compra2.page.html',
  styleUrls: ['./finalizar-compra2.page.scss'],
})
export class FinalizarCompra2Page implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  continuar(){
    this.router.navigate(['index']);
  }
  perfil(){
    this.router.navigate(['perfil']);
  }
  pontos(){
    this.router.navigate(['loja-pontos']);
  }
}
