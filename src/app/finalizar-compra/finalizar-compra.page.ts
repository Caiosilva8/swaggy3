import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Perfil } from '../model/perfil';
import { StorageService } from '../service/storage.service';
import { Pedido } from '../model/pedido';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.page.html',
  styleUrls: ['./finalizar-compra.page.scss'],
})
export class FinalizarCompraPage implements OnInit {

  idUsuario : string;
  //finalizar : FinalizarCompraPage = new FinalizarCompraPage();
  perfil : Perfil = new Perfil();
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  formGroup : FormGroup;
  tipoPagamento : string = "Cartão de Crédito";
  pedido : Pedido = new Pedido();
  debPontos;

  constructor(public formBuilder : FormBuilder,
              public toastController : ToastController,
              public router : Router,
              public loadingController : LoadingController,
              public firebaseauth : AngularFireAuth,
              public storageServ : StorageService,
              public activatedRoute : ActivatedRoute) {
                this.pedido = this.storageServ.getCart();

                this.firebaseauth.authState.subscribe(obj=>{

                  this.idUsuario = this.firebaseauth.auth.currentUser.uid;
                  

                  let ref = this.firestore.collection('perfil/').doc(this.idUsuario)
                  ref.get().then(doc=> {
                      this.perfil.setDados(doc.data());
                      
                      // puxando do perfil
                      this.formGroup.controls['nome'].setValue(this.perfil.nome);
                      this.formGroup.controls['cidade'].setValue(this.perfil.cidade);
                      this.formGroup.controls['estado'].setValue(this.perfil.estado);
                      this.formGroup.controls['user'].setValue(this.idUsuario);
                      //this.formGroup.controls['cep'].setValue(this)
                      //this.formGroup.controls['email'].setValue(this.perfil.email);
                      console.log(this.formGroup.value)
                  });
                    
                });
                this.formulario();

                this.debPontos = this.activatedRoute.snapshot.paramMap.get('produto');
    
   }

  ngOnInit() {
  }

  formulario(){
    this.formGroup = this.formBuilder.group({
      cep : [],
      cpf : [],
      identidade : [],
      celular : [],
      bairro : [],
      endereco : [],
      numero : [],
      complemento : [],
      cidade : [],
      estado : [],
      nome : [],
      pontoR : [this.debPontos],
      user : [this.idUsuario],
      tipoPagamento : [this.tipoPagamento],
      produtos :[this.pedido]
      
    })
  }

  calcularPontos(){
    let totP;
    let totV : number = 0;
    
    this.pedido.itens.forEach(prod =>{
      totV = parseFloat(prod.produto.preco);
    });

    totP = totV / 10;

    this.formGroup.controls['pontoR'].setValue(totP);
  }

  alterarTipoPagamento(pag : number){
    if(pag==1)
      this.tipoPagamento = "Cartão de Crédito";
    else
      this.tipoPagamento = "Cartão de Débito"
  }
  
  atualizar(){

    this.calcularPontos();
    
    this.formGroup.controls['produtos'].setValue(this.pedido);
    let ref = this.firestore.collection('finalizar')
    ref.add(this.formGroup.value)
    .then(()=>{
      this.toast('Sucesso!');
      this.descontar();
      this.router.navigate(['finalizar-compra2']);
      this.loadingController.dismiss();
      this.storageServ.limpaCarrinho();
    }).catch(()=>{
      this.toast('Erro ao Atualizar')
    })
  }

  async toast(msg : string) {
    const toast = await this.toastController.create({
      message: 'Cadastrado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }

  cancelar(){
    this.router.navigate(['carrinho']);
  }

  descontar(){
    
   
      this.atualizar();

  }

}

