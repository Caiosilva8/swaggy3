import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LojaPontosPage } from './loja-pontos.page';

const routes: Routes = [
  {
    path: '',
    component: LojaPontosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LojaPontosPage]
})
export class LojaPontosPageModule {}
