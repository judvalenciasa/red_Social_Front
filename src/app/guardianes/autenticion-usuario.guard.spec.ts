import { TestBed } from '@angular/core/testing';

import { AutenticionUsuarioGuard } from './autenticion-usuario.guard';

describe('AutenticionUsuarioGuard', () => {
  let guard: AutenticionUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticionUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
