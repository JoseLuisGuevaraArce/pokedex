import { Component, Input } from '@angular/core';
import { Stats } from 'src/app/utils/types';

@Component({
  selector: 'pok-stats',
  templateUrl: './pok-stats.component.html',
  styleUrls: ['./pok-stats.component.less']
})

export class PokStatsComponent {
  @Input() stats?: Array<Stats> = [];
}
