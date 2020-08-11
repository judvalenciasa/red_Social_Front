import { TestBed } from '@angular/core/testing';

import { NoAutenticadoUsuarioGuard } from './no-autenticado-usuario.guard';

describe('NoAutenticadoUsuarioGuard', () => {
  let guard: NoAutenticadoUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoAutenticadoUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
