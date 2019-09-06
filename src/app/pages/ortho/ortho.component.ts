import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { longModal } from 'src/app/modals/long-modal/long-modal.component';

@Component({
  selector: 'app-ortho',
  templateUrl: './ortho.component.html',
  styleUrls: ['./ortho.component.scss']
})
export class OrthoComponent implements OnInit {

  constructor(public router: Router, private modalService: MDBModalService) { }
  modalRef: MDBModalRef;
  ngOnInit() {
  }
  openModal() {
    this.modalRef = this.modalService.show(longModal);
  }

}
