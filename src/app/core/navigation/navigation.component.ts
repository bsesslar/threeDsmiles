import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { LongModal } from 'src/app/modals/long-modal/long-modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';




@Component({
  // tslint:disable-next-line: component-selector
  selector: 'navbar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(public router: Router, private modalService: MDBModalService) {
   }

   openModal() {
    this.modalRef = this.modalService.show(LongModal);
  }

  ngOnInit() {
  }
}
