import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription3',
  templateUrl: './inscription3.component.html',
  styleUrls: ['./inscription3.component.css']
})
export class Inscription3Component implements OnInit {
  public myForm: FormGroup;
  constructor(private router: Router) { }


  ngOnInit() {
    this.myForm = new FormGroup({
      pseudo: new FormControl('', Validators.required),
      poids: new FormControl('', Validators.required),
      taille: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.myForm);
    if (this.myForm.valid) {
      this.router.navigateByUrl(`inscription-4`);
    }
  }
}
