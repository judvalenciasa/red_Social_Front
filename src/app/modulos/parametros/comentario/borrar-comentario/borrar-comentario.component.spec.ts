import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarComentarioComponent } from './borrar-comentario.component';

describe('BorrarComentarioComponent', () => {
  let component: BorrarComentarioComponent;
  let fixture: ComponentFixture<BorrarComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
