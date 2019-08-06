import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Produto } from '../model/produto';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  categoria: string;
  listaDeProdutos : Produto[] = [];

  constructor(public activatedRoute: ActivatedRoute,
              public loadingController : LoadingController,
              public router : Router) {

    this.categoria = this.activatedRoute.snapshot.paramMap.get('categoria');
    
  }

  ngOnInit() {
    this.obterCategoria();
  }

  obterCategoria() {
    
    var ref = firebase.firestore().collection('produto').where("categoria","==",this.categoria)
    ref.get().then(query => {
      query.forEach(doc => {
        let c = new Produto();
        c.setDados(doc.data());
        c.id = doc.id;
        let ref = firebase.storage().ref().child(`produtos/${doc.id}.jpg`).getDownloadURL().then(url => {
          c.foto = url;
  
          this.listaDeProdutos.push(c);
        })
        
      });
      
    }).catch(err => {
      console.log(err);
    })

}

getList() {
  var ref = firebase.firestore().collection("produto");
  ref.get().then(query => {
    query.forEach(doc => {
      let c = new Produto();
      c.setDados(doc.data());
      c.id = doc.id;


      let ref = firebase.storage().ref().child(`produtos/${doc.id}.jpg`).getDownloadURL().then(url => {
        c.foto = url;

        this.listaDeProdutos.push(c);
      })
    });
    console.log(this.listaDeProdutos)
    this.loadingController.dismiss();
  });
};

voltar(){
  this.router.navigate(['index']);
}

}
