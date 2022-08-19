import { Component, OnInit } from '@angular/core';
import { Contact } from '../../shared/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myForm: any;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    })
  }

  get getControl()
  {
      return this.myForm.controls;
  }

  onSubmit(){
   this.submitted = true;
   if(this.myForm.invalid){
    return;
   }
   console.log(this.myForm.controls)
  }

}
