import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMensajeComponent } from './editar-mensaje.component';

describe('EditarMensajeComponent', () => {
  let component: EditarMensajeComponent;
  let fixture: ComponentFixture<EditarMensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
