import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Programme } from '../../../shared/models/programmes.model';
import { ProgrammeState } from 'src/app/core/store/store.module/programme/programme.state';
import { UpdateProgramme, AddProgramme, SetSelectedProgramme } from 'src/app/core/store/store.module/programme/programme.action';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-programme',
  templateUrl: './edit-programme.component.html',
  styleUrls: ['./edit-programme.component.css']
})
export class EditProgrammeComponent implements OnInit {

  @Select(ProgrammeState.getProgramme)
  selectedProgramme: Observable<Programme>;

  programmeForm = this.fb.group({
    id: ['', Validators.required],
    rating: ['', Validators.required],
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  editProgramme = false;

  constructor(private fb: FormBuilder,
              private store: Store,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {
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
      id: [''],
      rating: [''],
      title: [''],
      content: [''],
    });
  }




  onSubmit() {
    if (this.editProgramme) {
      this.store.dispatch(new UpdateProgramme(this.programmeForm.value, this.programmeForm.value.id)).subscribe(() => {
        this.programmeForm.reset();
        this.showSuccessUpdate();
      });
    } else {
      this.store.dispatch(new AddProgramme(this.programmeForm.value)).subscribe(() => {
        this.programmeForm.reset();
        this.showSuccesAdd();
      });
    }
  }
  showSuccesAdd() {
    this.toastr.success('Programme ajouté');
  }

  showSuccessUpdate() {
    this.toastr.success('Programme mis à jour.');
  }

  showError() {
    this.toastr.error('Impossible de mettre à jour le programme');
  }

}
