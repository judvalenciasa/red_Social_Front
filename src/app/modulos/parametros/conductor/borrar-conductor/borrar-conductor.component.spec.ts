import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarConductorComponent } from './borrar-conductor.component';

describe('BorrarConductorComponent', () => {
  let component: BorrarConductorComponent;
  let fixture: ComponentFixture<BorrarConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
