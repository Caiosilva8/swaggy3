import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Produto } from '../model/produto';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { StorageService } from '../service/storage.service';
import { Pedido } from '../model/pedido';
import { Item } from '../model/item';
import { FormGroup } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.page.html',
  styleUrls: ['./lista-de-produtos.page.scss'],
})
export class ListaDeProdutosPage implements OnInit {

  listaDeProdutos : Produto[] = [];
  id : string;

  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  pedido : Pedido = new Pedido();
  formGroup  : FormGroup;

  constructor(public router: Router,
              public loadingController: LoadingController,
              public storageServ : StorageService,
              public toastController : ToastController,
              private actionSheetController : ActionSheetController) {
 }

  ngOnInit() {
    this.getList();
    
  }

  addCarrinho(produto : Produto){
    this.pedido = this.storageServ.getCart();
    let add = true;

    let i = new Item();
    i.produto = produto;
    i.quantidade = 1;

    if(this.pedido==null){ // Caso pedido esteja vazio
      this.pedido = new Pedido(); //cria umm novo pedido  
      this.pedido.itens = []; //cria uma lista de itens
    }

    this.pedido.itens.forEach(p => {
      if(p.produto.id == produto.id){
        add = false;
      }
    });

    if(add==true) this.pedido.itens.push(i);

    this.storageServ.setCart(this.pedido);
  }

  atualizar(obj : Produto){
    this.router.navigate(['/produto-view', {'produto' : obj.id}]);
  }

  getList(){
    this.loading();
    var ref = firebase.firestore().collection("produto");
    ref.get().then(query=>{
      query.forEach(doc=>{
        let c = new Produto();
        c.setDados(doc.data());
        c.id = doc.id;


        let ref = firebase.storage().ref().child(`produtos/${doc.id}.jpg`).getDownloadURL().then(url => {
          c.foto = url;
          this.listaDeProdutos.push(c);
        }).catch(err=>{
          this.listaDeProdutos.push(c);
        });

        

      });
      console.log("Lista " +this.listaDeProdutos)
      this.loadingController.dismiss();
    });
  };

  
  remove(obj : Produto){
    var ref = firebase.firestore().collection("produto");
    ref.doc(obj.id).delete()
      .then(()=>{
        this.listaDeProdutos = [];
        this.getList();
      }).catch(()=>{
        console.log('Erro ao atualizar');
      })
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }


  async openActionSheet(id : string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.router.navigate(['/deletar', {'produto' : id}]);
        }
      }, {
        text: 'Atualizar',
        icon: 'create',
        handler: () => {
          
            this.router.navigate(['/produto-view', {'produto' : id}]);
          }

      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
       
        }
      }]
    });
    await actionSheet.present();
  
  }

}