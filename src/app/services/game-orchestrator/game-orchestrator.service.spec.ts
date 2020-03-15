import { TestBed } from '@angular/core/testing';

import { GameOrchestratorService } from './game-orchestrator.service';

describe('GameOrchestratorService', () => {
  let service: GameOrchestratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameOrchestratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
