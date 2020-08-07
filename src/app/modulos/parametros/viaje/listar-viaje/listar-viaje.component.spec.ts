import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarViajeComponent } from './listar-viaje.component';

describe('ListarViajeComponent', () => {
  let component: ListarViajeComponent;
  let fixture: ComponentFixture<ListarViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
