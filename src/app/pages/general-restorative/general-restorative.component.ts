import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';

import { longModal } from './../../modals/long-modal/long-modal.component';

@Component({
  selector: 'app-general-restorative',
  templateUrl: './general-restorative.component.html',
  styleUrls: ['./general-restorative.component.scss']
})
export class GeneralRestorativeComponent implements OnInit {

  constructor(public router: Router, private modalService: MDBModalService) { }
  modalRef: MDBModalRef;
  ngOnInit() {
  }
  openModal() {
    this.modalRef = this.modalService.show(longModal);
  }
}
