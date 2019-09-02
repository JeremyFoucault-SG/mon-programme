import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Programmes } from '../../../shared/models/programmes.model';
import { ProgrammeState } from 'src/app/core/store/store.module/programme/programme.state';
import { UpdateProgramme, AddProgramme, SetSelectedProgramme } from 'src/app/core/store/store.module/programme/programme.action';


@Component({
  selector: 'app-edit-programme',
  templateUrl: './edit-programme.component.html',
  styleUrls: ['./edit-programme.component.css']
})
export class EditProgrammeComponent implements OnInit {

  @Select(ProgrammeState.Getprogrammes) selectedProgramme: Observable<Programmes>;
  programmeForm: FormGroup;
  editProgramme = false;

  public content: AbstractControl;




  onContentChange(e) {

  }

  constructor(private fb: FormBuilder, private store: Store, private route: ActivatedRoute, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.selectedProgramme.subscribe(item => {
      if (item) {
        this.programmeForm.patchValue({
          id: item._id,
          title: item.title,
          rating: item.rating,
          content: item.content
        });
        this.editProgramme = true;
      } else {
        this.editProgramme = false;
      }
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
    if (this.editProgramme) {
      this.store.dispatch(new UpdateProgramme(this.programmeForm.value, this.programmeForm.value.id)).subscribe(() => {
        this.clearForm();
      });
    } else {
      this.store.dispatch(new AddProgramme(this.programmeForm.value)).subscribe(() => {
        this.clearForm();
      });
    }
  }

  clearForm() {
    this.programmeForm.reset();
    this.store.dispatch(new SetSelectedProgramme(this.programmeForm.value));
  }

}
