import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDenunciaComponent } from './editar-denuncia.component';

describe('EditarDenunciaComponent', () => {
  let component: EditarDenunciaComponent;
  let fixture: ComponentFixture<EditarDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
