import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import * as firebase from 'firebase';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.page.html',
  styleUrls: ['./deletar.page.scss'],
})
export class DeletarPage implements OnInit {

  listaDeProdutos : Produto[] = [];
  id : string;

  constructor(public loadingController : LoadingController,
              public router : Router) { }

  ngOnInit() {
  }

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

  getList(){
    this.loading()
    var ref = firebase.firestore().collection("produto");
    ref.get().then(query=>{
      query.forEach(doc=>{
        let c = new Produto();
        c.setDados(doc.data());
        c.id = doc.id;


        //let ref = firebase.storage().ref().child(`produtos/${doc.id}.jpg`).getDownloadURL().then(url => {
          //c.foto = url;
          //this.listaDeProdutos.push(c);
        //}).catch(err=>{
          //this.listaDeProdutos.push(c);
        //});

        

      });
      console.log("Lista " +this.listaDeProdutos)
      this.loadingController.dismiss();
    });
  };

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }

  cancelar(){
    this.router.navigate(['/lista-de-produtos']);
  }
}
