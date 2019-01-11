import { Injectable } from '@angular/core';
import { BMI } from 'src/models/bmi.models';

@Injectable({
  providedIn: 'root'
})
export class BMIService {
  calculateBMI(height: number, weight: number) {
    const BMI = (weight / height / height);

    return <BMI>{
      BMI: BMI.toFixed(2),
      classification: this.classifyBMI(BMI)
    };
  }

  private classifyBMI(Bmi: number) {
    if (Bmi < 18.5) {
      return 'Underweight';
    } else if (Bmi > 18.5 && Bmi < 24.9) {
      return 'Normal weight';
    } else {
      return 'Overweight';
    }
  }
}
