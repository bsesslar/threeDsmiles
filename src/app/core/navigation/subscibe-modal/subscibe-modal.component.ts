import { Component, ViewChild } from '@angular/core';
import { MDBModalRef, ModalDirective } from 'ng-uikit-pro-standard';
import { FormControl, Validators  } from '@angular/forms';


@Component({
  selector: 'subscibeModal',
  templateUrl: './subscibe-modal.component.html',
  styleUrls: ['./subscibe-modal.component.scss']
})
export class SubscibeModalComponent {
  @ViewChild(ModalDirective) modal: ModalDirective;
  subscriptionFormModalName = new FormControl('', Validators.required);
  subscriptionFormModalEmail = new FormControl('', Validators.email);
  defaultRegisterPhonePassword= new FormControl('',Validators.required);
  
  subscibeEvent(){
    console.log(this.subscriptionFormModalEmail,this.subscriptionFormModalName,this.defaultRegisterPhonePassword);
    
    this.subscriptionFormModalName.setValue('');
    this.subscriptionFormModalEmail.setValue('');
    this.defaultRegisterPhonePassword.setValue('');
  }

  constructor(public modalRef: MDBModalRef) { 


    
  }
  optionsSelect: Array<any>;
  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Ortho' },
      { value: '2', label: 'General Restorative' },
      { value: '3', label: 'Surgical Implants' },
    ];
    }

}
