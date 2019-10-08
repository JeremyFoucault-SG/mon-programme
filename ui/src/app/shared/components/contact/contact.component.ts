import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/core/http/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: any = {};
  contactForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    private conctactService: ContactService
  ) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      topic: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(40)
      ])
    });
  }

  onSubmit() {
    this.conctactService.contact(this.contactForm.value).subscribe();
  }
}
