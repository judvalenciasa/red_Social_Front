import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarEtiquetaComponent } from './borrar-etiqueta.component';

describe('BorrarEtiquetaComponent', () => {
  let component: BorrarEtiquetaComponent;
  let fixture: ComponentFixture<BorrarEtiquetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarEtiquetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
