import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-long-modal',
  templateUrl: './long-modal.component.html',
  styleUrls: ['./long-modal.component.scss']
})
export class LongModal implements OnInit {

  constructor(public router: Router, public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
