import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Produto } from '../model/produto';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ActionSheetController } from '@ionic/angular';
import { StorageService } from '../service/storage.service';
import { async } from '@angular/core/testing/src/testing';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos : Produto[] = [];
  id : string;

  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  formGroup  : FormGroup;
  loading: any;

  constructor(public router: Router,
              public loadingController: LoadingController,
              public storageServ : StorageService,
              public toastController : ToastController,
              private actionSheetController : ActionSheetController) {
 }

  ngOnInit() {
    this.getList();
    
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
          this.favoritos.push(c);
        }).catch(err=>{
          this.favoritos.push(c);
        });

        

      });
      console.log("Lista " +this.favoritos)
      this.loadingController.dismiss();
    });
  };
}
