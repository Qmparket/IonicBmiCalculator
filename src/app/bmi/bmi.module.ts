import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BMIPage } from './bmi.page';
import { BMIService } from './bmi.service';

const routes: Routes = [
  {
    path: '',
    component: BMIPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BMIPage],
  providers: [BMIService]
})
export class BMIPageModule {}
