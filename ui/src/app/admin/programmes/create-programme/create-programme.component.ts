import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { FormGroup, FormControl, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { AddProgramme, SetSelectedProgramme } from 'src/app/core/store/store.module/programme/programme.action';
import { Programmes } from 'src/app/shared/models/programmes.model';
import { ProgrammeState } from 'src/app/core/store/store.module/programme/programme.state';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-programme',
  templateUrl: './create-programme.component.html',
  styleUrls: ['./create-programme.component.css']
})
export class CreateProgrammeComponent implements OnInit {

  @Select(ProgrammeState.Getprogrammes) selectedProgramme: Observable<Programmes>;
  programmeForm: FormGroup;
  editProgramme = false;

  public content: AbstractControl;

  constructor(private fb: FormBuilder, private store: Store, private route: ActivatedRoute, private router: Router) {
    this.createForm();
  }


  ngOnInit() {
    this.programmeForm = new FormGroup({
      content: new FormControl(''),
    });

  }

  createForm() {
    this.programmeForm = this.fb.group({
      id: ['', Validators.required],
      rating: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit() {
      this.store.dispatch(new AddProgramme(this.programmeForm.value)).subscribe(() => {
        this.clearForm();
      });
  }

  clearForm() {
    this.programmeForm.reset();
  }

}
