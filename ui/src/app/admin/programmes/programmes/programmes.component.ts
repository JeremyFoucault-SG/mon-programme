import { Component, OnInit, } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProgrammeState } from 'src/app/core/store/store.module/programme/programme.state';
import {
  GetByIdProgramme, 
  GetAllProgramme,
  DeleteProgramme,
  SetSelectedProgramme
} from 'src/app/core/store/store.module/programme/programme.action';
import { Programmes } from 'src/app/shared/models/programmes.model';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})
export class ProgrammesComponent implements OnInit {


  @Select(ProgrammeState.programmes)
  programmes: Observable<Programmes[]>;


  constructor(private store: Store) { }



  ngOnInit() {
    this.store.dispatch(new GetAllProgramme());
  }


  deleteProgramme(id: string) {
    this.store.dispatch(new DeleteProgramme(id));
  }

  editProgramme(payload: Programmes) {
    this.store.dispatch(new SetSelectedProgramme(payload));
  }

}





