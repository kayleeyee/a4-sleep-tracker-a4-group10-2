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
    // return SleepService.AllSleepData;
    return SleepService.AllSleepData.sort((a, b) => (new Date(b.loggedAt)).getTime() - (new Date(a.loggedAt)).getTime());
  }

  // async loadData() {
  //   const keys = await Storage.keys();
  //     for (const key in keys) {
  //       // Access the value for each key
  //       const value = await Storage.get({ key: key });
  //       console.log('value!!!')
  //       console.log(value)
  //       // console.log(`Key: ${key}, Value: ${JSON.parse(value.value)}`);
  //     }
  // }
  async loadData() {
    const keys = await Storage.keys();
    console.log(keys.keys);
  
    for (const key in keys.keys) {
      if (keys.keys.hasOwnProperty(key)) {
        // Access the value for each key
        const value = await Storage.get({ key: keys.keys[key] });
        console.log('key value!!!')
        console.log(keys.keys[key]);
        console.log(typeof value.value);
        if (value && value.value !== null) {
          const parsedData = JSON.parse(value.value);
          // const sleepData = new StanfordSleepinessData(parsedData.loggedValue, parsedData.loggedAt);
          if (parsedData.hasOwnProperty('sleepStart')) {
            const sleepData = new OvernightSleepData(new Date(parsedData.sleepStart), new Date(parsedData.sleepEnd));
            SleepService.AllSleepData.push(sleepData);
          }
          else {
            const sleepData = new StanfordSleepinessData(parsedData.loggedValue, new Date(parsedData.loggedAt));
            SleepService.AllSleepData.push(sleepData);
          }
          SleepService.AllSleepData.sort((a, b) => (new Date(b.loggedAt)).getTime() - (new Date(a.loggedAt)).getTime());

          // const overnightSleepData = new OvernightSleepData(sleepStart, sleepEnd);

          console.log(parsedData);
        }
        // if (value != null) {
        //   const data = JSON.parse(value.value);
        // }
        
        // console.log(data)
        // const parsedData = data.loggedAt;
        // console.log(parsedData.loggedAt);
        // logSleepinessData(sleepData:StanfordSleepinessData)
        // console.log(`Key: ${key}, Value: ${JSON.parse(value.value)}`);
      }
    }
    // SleepService.AllSleepData.sort((a, b) => (new Date(b.loggedAt)).getTime() - (new Date(a.loggedAt)).getTime());
  } 
  
  // clearSleepData() {
  //   Storage.clear();
  //   SleepService.AllSleepData = []
  // }
}
