import { Component } from '@angular/core';
import { SleepService } from 'src/services/sleep.service';
import { StanfordSleepinessData } from 'src/data/stanford-sleepiness-data';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  selectedValue:number = 0;
  constructor(public sleepService: SleepService) {}

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    // Add more options as needed
  ];

  onSelectionChange(event: CustomEvent) {
    this.selectedValue = event.detail.value;
    console.log('Selected Value:', this.selectedValue);
    
  }

  get allSleepinessData() {
    return SleepService.AllSleepinessData;
  }

  logSleepiness() {
    console.log('logSleepiness');
    const currentDate = new Date();

    console.log(this.selectedValue);
    console.log(currentDate);

    const standfordSleepinessData = new StanfordSleepinessData(this.selectedValue, currentDate);
    this.sleepService.logSleepinessData(standfordSleepinessData);

    // const setName = async () => {
    //   await Preferences.set({
    //     key: standfordSleepinessData.id,
    //     value: JSON.stringify(standfordSleepinessData),
    //   });
    // };
    const setName = async () => {
      await Storage.set({
        key: 'name',
        value: 'Max',
      });
    };
    // console.log(standfordSleepinessData.id);
    // console.log(JSON.stringify(standfordSleepinessData));

    this.loadData();
  }

  async loadData() {
    const keys = await Storage.keys();
    console.log(keys.keys);
      for (const key in keys) {
        // Access the value for each key
        const value = await Storage.get({ key: key });
        console.log('key value!!!')
        console.log(key)
        console.log(value)
        // console.log(`Key: ${key}, Value: ${JSON.parse(value.value)}`);
      }
  }

}




