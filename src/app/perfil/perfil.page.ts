import { Cliente } from './../model/cliente';
import { Camera, CameraOptions, CameraPopoverOptions  } from '@ionic-native/camera';
import { Perfil } from './../model/perfil';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  idUsuario : string;
  pontoR : number = 0;
  pontoPerfil : number = 0;
  usuarioEmail : string;
  perfil : Perfil = new Perfil();
  picture : string = "../../assets/img/usuario.png";
  cameraOn : boolean = false;

  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  constructor(public firebaseauth : AngularFireAuth,
              public router : Router,
              public fire : AngularFireAuth,
              ) {


    
    this.firebaseauth.authState.subscribe(obj=>{
      
      this.idUsuario = this.firebaseauth.auth.currentUser.uid;
      console.log( this.idUsuario)
      this.usuarioEmail = this.firebaseauth.auth.currentUser.email;
      this.downloadFoto();

      let ref = this.firestore.collection('perfil').doc(this.idUsuario)
      ref.get().then(doc=> {
          this.perfil.setDados(doc.data());
          this.pontoPerfil = parseFloat(doc.data().pontosR)
      });



      let reff = this.firestore.collection('finalizar').where("user","==",this.idUsuario)
      reff.get().then(query=>{
        query.forEach(doc=>{
          this.pontoR += parseFloat(doc.data().pontoR);
        })
        this.pontoR = this.pontoPerfil - this.pontoR;
        console.log("pontoR " + this.pontoR)
        console.log("pontoPerfil " + this.pontoPerfil)
      })
    });

    

  }

  edt(){
    this.router.navigate(['perfil-view']);
  }

  logoff(){
    this.fire.auth.signOut().then(()=>{
      this.router.navigate(['/home']);
    }).catch(()=>{
      this.router.navigate(['/list']);
    })
  }

  ngOnInit() {
    
  }

  downloadFoto(){
    let ref = firebase.storage().ref()
      .child(`perfil/${this.idUsuario}.jpg`);

      ref.getDownloadURL().then(url=>{
        this.picture = url;
      })
  }


}
