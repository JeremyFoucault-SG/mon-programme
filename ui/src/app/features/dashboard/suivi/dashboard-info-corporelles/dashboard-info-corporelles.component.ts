import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Settings } from 'src/app/shared/models/settings.model';
import { Select, Store } from '@ngxs/store';
import { SettingState } from 'src/app/core/store/store.module/settings/setting.state';
import { Observable } from 'rxjs';
import { GetByIdSetting, UpdateSetting, SetSelectedSetting } from 'src/app/core/store/store.module/settings/setting.action';

@Component({
  selector: 'app-dashboard-info-corporelles',
  templateUrl: './dashboard-info-corporelles.component.html',
  styleUrls: ['./dashboard-info-corporelles.component.css']
})
export class DashboardInfoCorporellesComponent implements OnInit {

  @Select(SettingState.setting)
  setting: Observable<Settings>;

  @Input()
  public formInfo: FormGroup;


  constructor(private router: Router,
              private store: Store,
              private fb: FormBuilder) { }


  ngOnInit() {
  }

  // submit() {
  //   this.store.dispatch(new UpdateSetting(this.formInfo.value));
  // }

}
