import { Component } from '@angular/core';
import { SleepService } from 'src/services/sleep.service';
import { SleepData } from 'src/data/sleep-data';
import { OvernightSleepData } from 'src/data/overnight-sleep-data';
import { StanfordSleepinessData } from 'src/data/stanford-sleepiness-data';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public sleepService: SleepService) {}

  ngOnInit() {
    console.log('tab 3 ngOnInit called')
    this.loadData();
  }

  get allSleepData() {
    return SleepService.AllSleepData;
  }

  async loadData() {
    const keys = await Storage.keys();
      for (const key in keys) {
        // Access the value for each key
        const value = await Storage.get({ key: key });
        console.log('value!!!')
        console.log(value)
        // console.log(`Key: ${key}, Value: ${JSON.parse(value.value)}`);
      }
  }
}
