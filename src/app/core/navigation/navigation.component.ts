import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { longModal } from 'src/app/modals/long-modal/long-modal.component';

@Component({
  selector: 'navbar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  modalRef: MDBModalRef;
  constructor(public router: Router, private modalService: MDBModalService) { }

  ngOnInit() {
  }
  openModal() {
    this.modalRef = this.modalService.show(longModal);
  }

}
