import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';

import { LongModal } from 'src/app/modals/long-modal/long-modal.component';

@Component({
  selector: 'GeneralRestorative',
  templateUrl: './general-restorative.component.html',
  styleUrls: ['./general-restorative.component.scss']
})
export class GeneralRestorativeComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(public router: Router, private modalService: MDBModalService) { }

  ngOnInit() {
  }
  openModal() {
    this.modalRef = this.modalService.show(LongModal);
    }

}
