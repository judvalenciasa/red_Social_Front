import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarMensajeComponent } from './borrar-mensaje.component';

describe('BorrarMensajeComponent', () => {
  let component: BorrarMensajeComponent;
  let fixture: ComponentFixture<BorrarMensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarMensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
