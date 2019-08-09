import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cupom',
  templateUrl: './cupom.page.html',
  styleUrls: ['./cupom.page.scss'],
})
export class CupomPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  facebook(){
    window.open("https://pt-br.facebook.com/",'_system', 'location=yes');
  }
  instagram(){
    window.open("https://www.instagram.com/?hl=pt-br",'_system', 'location=yes');
  }
  twitter(){
    window.open("https://twitter.com/login?lang=pt",'_system', 'location=yes');
  }
}