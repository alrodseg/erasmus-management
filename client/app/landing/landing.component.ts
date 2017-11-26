import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  events: Array<any> = [
    {name: 'First trip', date: '21/01/2017'},
    {name: 'Second trip with a long title', date: '22/01/2017'},
    {name: 'Third trip', date: '23/01/2017'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
