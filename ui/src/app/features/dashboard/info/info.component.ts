import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/core/store/store.module/user/user.state';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { GetUserById } from 'src/app/core/store/store.module/user/user.actions';
import { throwIfEmpty } from 'rxjs/operators';
import { UpdateSetting, GetByIdSetting } from 'src/app/core/store/store.module/settings/setting.action';
import { SettingState } from 'src/app/core/store/store.module/settings/setting.state';
import { Settings } from 'src/app/shared/models/settings.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Select(SettingState.setting)
  setting: Observable<Settings>;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store
  ) {}

  myForm = this.fb.group({
    infos: this.fb.group({
      weight: ['', Validators.required],
      size: ['', Validators.required],
      age: ['', Validators.required],
      goals: ['', Validators.required]
    }),
    contact: this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      cp: ['', Validators.required]
    }),
    paiement: this.fb.group({
      iban: ['', Validators.required],
      rib: ['', Validators.required]
    })
  });

  submit() {
    this.store.dispatch(new UpdateSetting(this.myForm.value));
  }
  ngOnInit() {
    this.store.dispatch(new GetByIdSetting());
    this.setting.subscribe((item: Settings) => {
      console.log(item);
      if (item) {
        this.myForm.get('infos').patchValue({
          age: item.infos.age,
          weight: item.infos.weight,
          size: item.infos.size,
          goals: item.infos.goals
        });
        this.myForm.get('contact').patchValue({
          lastname: item.contact.lastname,
          firstname: item.contact.firstname,
          email: item.contact.email,
          address: item.contact.address,
          city: item.contact.city,
          cp: item.contact.cp,
        });
        this.myForm.get('paiement').patchValue({
          iban: item.paiement.iban,
          rib: item.paiement.rib,
        });
      }
    });
  }

}
