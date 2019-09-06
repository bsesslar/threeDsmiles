import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  
  selector: 'long-Modal',
  templateUrl: './long-modal.component.html',
  styleUrls: ['./long-modal.component.scss']
})

// tslint:disable-next-line: component-class-suffix
// tslint:disable-next-line: class-name
// tslint:disable-next-line: component-class-suffix
export class longModal implements OnInit {

  constructor(public router: Router, public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
