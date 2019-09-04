import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalImplantComponent } from './surgical-implant.component';

describe('SurgicalImplantComponent', () => {
  let component: SurgicalImplantComponent;
  let fixture: ComponentFixture<SurgicalImplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgicalImplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgicalImplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
