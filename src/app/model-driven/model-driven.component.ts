import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {
  formData!: FormGroup;
  languages = ['English', 'French', 'German'];
  firstName = new FormControl("", [Validators.required, Validators.minLength(4), forbiddenNameValidator(/Admin/i)]);

  ngOnInit(): void {
    this.formData = new FormGroup({
      firstName: this.firstName,
      lastName: new FormControl("", [Validators.required, Validators.minLength(4)]),
      email: new FormControl("", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      language: new FormControl("", [Validators.required]),
    })
    // this.formData.controls
  }

  userDetails() {
    if(this.formData.valid){
      console.log("Form Submitted");
      console.log(this.formData);
      this.formData.reset();
    }
  }
}
