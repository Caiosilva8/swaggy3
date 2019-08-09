import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import * as firebase from 'firebase';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../service/storage.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.page.html',
  styleUrls: ['./deletar.page.scss'],
})
export class DeletarPage implements OnInit {

  listaDeProdutos : Produto[] = [];
  id : string;

  constructor(public activatedRoute : ActivatedRoute,
    public router : Router,
    public nav : NavController,
    public toastController : ToastController,
    public loadingController : LoadingController) {


this.id = this.activatedRoute.snapshot.paramMap.get('produto');
}

ngOnInit() { 
}

    remove(){
    var ref = firebase.firestore().collection("produto");
    ref.doc(this.id).delete()
      .then(()=>{
        this.listaDeProdutos = [];
        this.getList();
      }).catch(()=>{
        console.log('Erro ao atualizar');
        this.router.navigate
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


