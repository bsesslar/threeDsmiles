import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';

import { LongModal } from 'src/app/modals/long-modal/long-modal.component';

@Component({
  selector: 'SurgicalImplant',
  templateUrl: './surgical-implant.component.html',
  styleUrls: ['./surgical-implant.component.scss']
})
export class SurgicalImplantComponent implements OnInit {

  constructor(public router: Router, private modalService: MDBModalService) { }
  modalRef: MDBModalRef;

  ngOnInit() {
  }
  openModal() {
    this.modalRef = this.modalService.show(LongModal);
  }

}
