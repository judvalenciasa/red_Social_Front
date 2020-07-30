import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaViajeComponent } from './lista-viaje.component';

describe('ListaViajeComponent', () => {
  let component: ListaViajeComponent;
  let fixture: ComponentFixture<ListaViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
