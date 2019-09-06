import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { longModal } from '../../modals/long-modal/long-modal.component';

@Component({
  selector: 'landingPage',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public router: Router, private modalService: MDBModalService) { }
  modalRef: MDBModalRef;
  ngOnInit() {
  }
  openModal() {
    this.modalRef = this.modalService.show(longModal);
  }
}
