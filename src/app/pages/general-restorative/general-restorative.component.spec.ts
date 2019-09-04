import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRestorativeComponent } from './general-restorative.component';

describe('GeneralRestorativeComponent', () => {
  let component: GeneralRestorativeComponent;
  let fixture: ComponentFixture<GeneralRestorativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralRestorativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRestorativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
