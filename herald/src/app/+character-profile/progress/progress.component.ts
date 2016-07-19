import {Component, Input, OnInit} from '@angular/core';
import {CharacterProfile} from '../shared/character-profile.model';

import 'chartjs';
declare let Chart;

@Component({
  moduleId: module.id,
  selector: 'progress-node',
  templateUrl: 'progress.component.html',
  styleUrls: ['../character-profile.component.css',
    'progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Input()
  character: CharacterProfile;

  constructor() {
  }

  ngOnInit() {

    let xpPct = this.character.xpPercent * 100;
    let rlPct = this.character.realmLevelPercent * 100;
    let rrPct = this.character.realmRankPercent * 100;

    new Chart(document.getElementById('progress-canvas'), {
      type: 'horizontalBar',
      data: {
        labels: ['XP', 'Realm Level', 'Realm Rank'],
        datasets: [{
          label: '% Progress',
          data: [xpPct, rlPct, rrPct],
          backgroundColor: 'rgba(255, 206, 86, 0.4)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        },
          {
            label: '% Remaining',
            data: [100 - xpPct, 100 - rlPct, 100 - rrPct],
            backgroundColor: 'rgba(220, 220, 220, 0.2)',
            borderColor: 'rgba(220, 220, 220, .1)'
          }]
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true,
            categoryPercentage: 0.5
          }],
          yAxes: [{
            stacked: true,
            categoryPercentage: 0.5,
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
