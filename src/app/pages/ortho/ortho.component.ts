import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';

import { LongModal } from 'src/app/modals/long-modal/long-modal.component';

@Component({
  selector: 'Ortho',
  templateUrl: './ortho.component.html',
  styleUrls: ['./ortho.component.scss']
})
export class OrthoComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(public router: Router, private modalService: MDBModalService) { }

  ngOnInit() {
  }
  openModal() {
    this.modalRef = this.modalService.show(LongModal);
  }

}
