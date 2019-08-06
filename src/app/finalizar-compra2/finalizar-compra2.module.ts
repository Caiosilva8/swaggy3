import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FinalizarCompra2Page } from './finalizar-compra2.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarCompra2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinalizarCompra2Page]
})
export class FinalizarCompra2PageModule {}
