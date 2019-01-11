import { Component, OnInit } from '@angular/core';
import { BMIService } from './bmi.service';
import { BMI } from 'src/models/bmi.models';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
  providers: [BMIService]
})
export class BMIPage implements OnInit {

  height: number;
  weight: number;
  BMI: BMI;
  constructor(private bmiService: BMIService) { }

  ngOnInit() {
  }

  calculateBmi() {
    this.BMI = this.bmiService.calculateBMI(this.height, this.weight);
  }

}
