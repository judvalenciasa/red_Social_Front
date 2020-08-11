import { TestBed } from '@angular/core/testing';

import { AutenticadoUsuarioGuard } from './autenticado-usuario.guard';

describe('AutenticadoUsuarioGuard', () => {
  let guard: AutenticadoUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticadoUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
