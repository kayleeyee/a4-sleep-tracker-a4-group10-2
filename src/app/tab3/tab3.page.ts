import { Component } from '@angular/core';
import { SleepService } from 'src/services/sleep.service';
import { SleepData } from 'src/data/sleep-data';
import { OvernightSleepData } from 'src/data/overnight-sleep-data';
import { StanfordSleepinessData } from 'src/data/stanford-sleepiness-data';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public sleepService: SleepService) {}

  get allSleepData() {
    return SleepService.AllSleepData;
  }

}
