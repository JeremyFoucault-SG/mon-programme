import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-customize-programme',
  templateUrl: './form-customize-programme.component.html',
  styleUrls: ['./form-customize-programme.component.css']
})
export class FormCustomizeProgrammeComponent implements OnInit {

  isHidden = false;
  show = false;
  customForm: FormGroup;
  error = '';

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.customForm = new FormGroup({
      domicile: new FormControl(''),
      salle: new FormControl(''),
      seances: new FormControl(''),
      objectif: new FormControl(''),
      niveau: new FormControl(''),
      poids: new FormControl(''),
      taille: new FormControl(''),
      age: new FormControl(''),
      pratique: new FormControl(''),
      muscle: new FormControl(''),
    });
  }

  showDetails() {
    this.show = true;
    this.isHidden = !this.isHidden;
  }

  onFormSubmit() {
    if (this.customForm.valid) {
      console.log(this.customForm.value);
      this.customForm.reset();
      this.showSuccess();
    } else {
    }
  }

  showSuccess() {
    this.toastr.success('Programme Enregistré avec succés.');
  }

  errorSuccess() {
    this.toastr.warning('Erreur lors de la sauvegarde')
  }
}
