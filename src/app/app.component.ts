import { Component, OnInit } from '@angular/core';
import Player from './models/Player';
import { GameOrchestratorService } from './services/game-orchestrator/game-orchestrator.service';

import Masterdevil from '@mocks/masterdevil';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  player: Player;

  constructor(private gameOrchestratorService: GameOrchestratorService) {}

  ngOnInit() {
    this.player = Masterdevil as Player;
  }
}
