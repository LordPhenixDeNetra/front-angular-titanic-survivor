import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SurvivorTestService} from "../../services/survivor-test.service";

@Component({
  selector: 'app-survivor-test',
  templateUrl: './survivor-test.component.html',
  styleUrls: ['./survivor-test.component.css']
})
export class SurvivorTestComponent {

  survieMessage = '';
  messages = ["Vous avez de la chance vous alliez pas survire!", "C'est dommage mais vous n'alliez pas survire!"]

  constructor(private formBuilder : FormBuilder, private  survivorTestService : SurvivorTestService) {
  }

  survivorFormGroup = this.formBuilder.group({
    age: this.formBuilder.control("", Validators.compose([Validators.required, Validators.min(1), Validators.max(150)])),
    pclass: this.formBuilder.control(""),
    sex: this.formBuilder.control(""),
  })

  handleSurvie() {

    let pclass = parseInt(<string>this.survivorFormGroup.value.pclass, 10);
    let sex = parseInt(<string>this.survivorFormGroup.value.sex, 10);
    let age = parseInt(<string>this.survivorFormGroup.value.age, 10);

    this.survivorTestService.survivor(pclass, sex, age).subscribe({
      next : (result) =>{
        console.log(result.survie);
        if (result.survie == "No"){
          this.survieMessage = this.messages[1];
        }else if (result.survie == "Yes"){
          this.survieMessage = this.messages[0];
        }

      }
    });
  }
}
