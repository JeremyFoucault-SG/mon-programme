import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/core/http/contact.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  model: any = {};
  newsletterForm: FormGroup;

  constructor(private toastr: ToastrService, private contactService: ContactService) { }

  ngOnInit() {
    this.newsletterForm  = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
    });
  }
  onSubmit() {
    this.contactService.newsletter(this.newsletterForm.value).subscribe();
  }
}
