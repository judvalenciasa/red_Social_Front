import { TestBed } from '@angular/core/testing';

import { AutenticionAdministradorGuard } from './autenticion-administrador.guard';

describe('AutenticionAdministradorGuard', () => {
  let guard: AutenticionAdministradorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticionAdministradorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
