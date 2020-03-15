import { Component, OnInit, Input } from '@angular/core';
import Map from '@models/Map';

@Component({
  selector: 'app-map-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.less']
})
export class GlobalComponent implements OnInit {
  @Input()
  discovered: string[];

  maps: string[];

  constructor() {
    this.maps = ['0;0', '0;1', '0;2', '1;0', '1;1', '1;2', '2;0', '2;1', '2;2'];
  }

  ngOnInit(): void {}

  private isMapDiscovered(map: string): boolean {
    return this.discovered.some(d => d === map);
  }

  mapView(map: string): string {
    let path = 'hidden';

    if (this.isMapDiscovered(map)) {
      path = map;
    }

    return `assets/map/${path}.png`;
  }
}
