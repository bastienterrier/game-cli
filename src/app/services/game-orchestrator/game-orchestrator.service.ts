import { Injectable } from '@angular/core';
import Player from 'src/app/models/Player';

// MOCK
import Masterdevil from '@mocks/masterdevil';
import Position from '@models/Position';

@Injectable({
  providedIn: 'root'
})
export class GameOrchestratorService {
  private player: Player;

  constructor() {}

  loadPlayer() {
    this.player = Masterdevil;
  }

  getPosition(): Position {
    return this.player.position;
  }
}
