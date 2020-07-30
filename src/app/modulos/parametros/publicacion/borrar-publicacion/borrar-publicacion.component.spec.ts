import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPublicacionComponent } from './borrar-publicacion.component';

describe('BorrarPublicacionComponent', () => {
  let component: BorrarPublicacionComponent;
  let fixture: ComponentFixture<BorrarPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
