import { TestBed } from '@angular/core/testing';

import { AutenticadoAdminGuard } from './autenticado-admin.guard';

describe('AutenticadoAdminGuard', () => {
  let guard: AutenticadoAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticadoAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
