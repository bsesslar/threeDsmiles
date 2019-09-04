import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { LongModal } from 'src/app/modals/long-modal/long-modal.component';

@Component({
  selector: 'landingPage',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(public router: Router, private modalService: MDBModalService) { }

  ngOnInit() {
  }
  openModal() {
    this.modalRef = this.modalService.show(LongModal);
  }

}
