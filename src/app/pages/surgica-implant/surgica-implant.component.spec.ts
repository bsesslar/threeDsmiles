import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicaImplantComponent } from './surgica-implant.component';

describe('SurgicaImplantComponent', () => {
  let component: SurgicaImplantComponent;
  let fixture: ComponentFixture<SurgicaImplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgicaImplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgicaImplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
