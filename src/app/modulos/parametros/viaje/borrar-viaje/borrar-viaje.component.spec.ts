import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarViajeComponent } from './borrar-viaje.component';

describe('BorrarViajeComponent', () => {
  let component: BorrarViajeComponent;
  let fixture: ComponentFixture<BorrarViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
