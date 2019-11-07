import { Component, OnInit } from '@angular/core';
import { GetByIdSetting, UpdateSetting } from 'src/app/core/store/store.module/settings/setting.action';
import { Select, Store } from '@ngxs/store';
import { SettingState } from 'src/app/core/store/store.module/settings/setting.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Settings } from 'src/app/shared/models/settings.model';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {
  @Select(SettingState.setting)
  setting: Observable<Settings>;

  constructor(private router: Router,
              private fb: FormBuilder,
              private store: Store) { }

             


  myForm = this.fb.group({
    infos: this.fb.group({
      sexe: [''],
      weight: [''],
      size: [''],
      calcul: [''],
    }),
  });


  ngOnInit() {
    this.store.dispatch(new GetByIdSetting());
    this.setting.subscribe((item: Settings) => {
      console.log(item);
      if (item) {
        this.myForm.get('infos').patchValue({
          sexe: item.infos.sexe,
          weight: item.infos.weight,
          size: item.infos.size,
          calcul: Math.round(((item.infos.weight) / ((item.infos.size * item.infos.size) / 100)) * 100),
        });
      }
    });
  }

}

