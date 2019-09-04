import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscibeModalComponent } from '../subscibe-modal/subscibe-modal.component';

describe('SubscibeModalComponent', () => {
  let component: SubscibeModalComponent;
  let fixture: ComponentFixture<SubscibeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscibeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscibeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
