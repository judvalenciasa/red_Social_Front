import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarDenunciaComponent } from './borrar-denuncia.component';

describe('BorrarDenunciaComponent', () => {
  let component: BorrarDenunciaComponent;
  let fixture: ComponentFixture<BorrarDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
