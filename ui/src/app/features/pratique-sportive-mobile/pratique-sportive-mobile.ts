import { Component, OnInit, Input } from '@angular/core';
import { ProgramDetail, ProgramsList } from '../../shared/models/programs-infos';

@Component({
  selector: 'app-pratique-sportive-mobile',
  templateUrl: './pratique-sportive-mobile.html',
  styleUrls: ['./pratique-sportive-mobile.css']
})
export class PratiqueSportiveMobileComponent implements OnInit {

  public programsInfos: ProgramDetail[] = ProgramsList.infos;
  public programs = [];

  constructor() { }


  @Input()
  public selected: ProgramDetail;


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

}
