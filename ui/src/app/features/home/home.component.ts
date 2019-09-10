import { Component, OnInit } from '@angular/core';
import { ProgramsList, ProgramDetail } from '../../shared/models/programs-infos';
import { HomeHeaderMenuComponent } from './header/menu/home-header-menu.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

/**
 * Home component show cards of blog, programs and more
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: boolean;
  public selected: ProgramDetail;
  public programsInfos: ProgramDetail[] = ProgramsList.infos;
  public programs = [];
  public auth: AuthenticationService;

  constructor(private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.selected = this.programsInfos[0];

    this.programs = [
      {
        title: 'Program 1',
        content: 'content 1',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },
      {
        title: 'Program 2',
        content: 'content 2',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },
      {
        title: 'Program 3',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },
      {
        title: 'Program 4',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },
      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },

      {
        title: 'Program 5',
        content: 'content 3',
        imageUrl: 'https://amp.businessinsider.com/images/5b43ccf31335b831008b4c1c-750-563.jpg'
      },
    ];
  }

  onChange(programDetail: ProgramDetail, index) {
    this.selected = programDetail;
    console.log();
  }


  logout() {
    this.router.navigateByUrl('/');
    this.showSuccessLogout();
    localStorage.removeItem('token');
    this.user = false;
  }

  showSuccessLogout() {
    this.toastr.success('Vous êtes déconnecté(e)');
  }

}
