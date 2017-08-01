import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-trivia-create',
  templateUrl: './trivia-create.component.html',
  styleUrls: ['./trivia-create.component.css']
})
export class TriviaCreateComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      qtitle: [''],
      atitle: [''],
      acb: [false]
    });
  }

  submit(form: FormGroup) {
    console.log(form.value);
  }

}
