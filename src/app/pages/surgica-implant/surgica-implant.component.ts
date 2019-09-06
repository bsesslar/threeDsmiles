import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';
import { longModal } from 'src/app/modals/long-modal/long-modal.component';

@Component({
  selector: 'app-surgica-implant',
  templateUrl: './surgica-implant.component.html',
  styleUrls: ['./surgica-implant.component.scss']
})
export class SurgicaImplantComponent implements OnInit {
  modalRef: MDBModalRef;
  constructor(public router: Router, private modalService: MDBModalService) { }

  ngOnInit() {
  }
  openModal() {
    this.modalRef = this.modalService.show(longModal);
  }

}
