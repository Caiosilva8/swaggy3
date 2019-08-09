import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'index',
      url: '/index',
      icon: 'home'
    },{
      title: 'Cadastrar Produto',
      url: '/cadastro-de-produtos',
      icon: 'folder-open'
    },{
      title: 'Lista de Produto',
      url: '/lista-de-produtos',
      icon: 'clipboard'
    },{
      title: 'Logoff',
      url: '/logoff',
      icon: 'walk'
    },{
      title: 'Carrinho',
      url: '/carrinho',
      icon: 'cart'
    },{
      title: 'Visualizar Perfil',
      url: '/perfil',
      icon: 'contact'
    },{
      title: 'Trocar Pontos',
      url: '/loja-pontos',
      icon: 'sync'
    },{
      title: 'Visualizar Perfil',
      url: '/perfil',
      icon: 'contact'
    },{
      title: 'Cupom',
      url: '/cupom',
      icon: 'folder-open'
    },{
      title: 'Quem Somos',
      url: '/quem-somos',
      icon: 'book'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebaseauth : AngularFireAuth,
    private router : Router
  ) {
    this.initializeApp();
  }

  perfil(){
    this.router.navigate(['perfil'])
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.firebaseauth.authState
    .subscribe(
      user => {
        if (user) {
          //this.router.navigate(['/lista-de-clientes']);
          this.router.navigate(['/index']);
          } else {
            this.router.navigate(['/home']);
          }
      },
      () => {
        this.router.navigate(['/lista-de-clientes']);
      }
    );

  }
}
