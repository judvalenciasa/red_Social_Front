import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectoComponent } from './defecto.component';

describe('DefectoComponent', () => {
  let component: DefectoComponent;
  let fixture: ComponentFixture<DefectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
