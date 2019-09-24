import { Component, OnInit, } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProgrammeState } from 'src/app/core/store/store.module/programme/programme.state';
import {
  GetByIdProgramme,
  GetAllProgramme,
  DeleteProgramme,
  SetSelectedProgramme,
  SearchProgramme
} from 'src/app/core/store/store.module/programme/programme.action';
import { Programmes } from 'src/app/shared/models/programmes.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})
export class ProgrammesComponent implements OnInit {


  @Select(ProgrammeState.programmes)
  programmes: Observable<Programmes[]>;


  constructor(private store: Store, private toastr: ToastrService) { }



  ngOnInit() {
    this.store.dispatch(new SearchProgramme({categories: 'seche'}));
  }


  deleteProgramme(id: string) {
    this.store.dispatch(new DeleteProgramme(id));
    this.showSuccessUpdate();
  }

  editProgramme(payload: Programmes) {
    this.store.dispatch(new SetSelectedProgramme(payload));
  }


  showSuccessUpdate() {
    this.toastr.success('Programme Supprimé avec succés');
  }

}





