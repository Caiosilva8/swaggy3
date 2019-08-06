import { Pedido } from './../model/pedido';
import { StorageService } from './../service/storage.service';
import { Produto } from './../model/produto';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  pedido: Pedido = new Pedido();
  total: number = 0;
  pontoR: number = 0;
  idUsuario : string;
  pontosD: number = 0;

  firestore = firebase.firestore();

  constructor(public storageServ: StorageService,
    public router: Router,
    public firebaseauth: AngularFireAuth) {

    this.firebaseauth.authState.subscribe(obj => {

      this.idUsuario = this.firebaseauth.auth.currentUser.uid;

      let reff = this.firestore.collection('finalizar').where("user", "==", this.idUsuario)
      reff.get().then(query => {
        query.forEach(doc => {
          this.pontoR += doc.data().pontoR;
        })
      })
    });
  }


  ngOnInit() {
    this.pedido = this.storageServ.getCart();

    this.pedido.itens.forEach(item => {

      firebase.storage().ref().child(`produtos/${item.produto.id}.jpg`).getDownloadURL().then(url => {
        item.produto.foto = url;
      })

      this.total += parseFloat(item.produto.preco);

    })

    console.log(this.pedido);
  }



  removeCar(produto: Produto) {
    this.storageServ.setRemoveCart(produto);
    this.pedido = this.storageServ.getCart();
  }

  index() {
    this.router.navigate(['index']);
  }

  finalizar() {
    this.router.navigate(['finalizar-compra']);
  }


}
