import { Component, OnInit } from '@angular/core';
import { format } from 'url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const form = document.getElementById('leading-loose');
    form.style.display = 'none';
  }
open(){
  const form = document.getElementById('leading-loose');
  form.style.display = 'block'
}

}
