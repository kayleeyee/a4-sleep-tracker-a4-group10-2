import { Component } from '@angular/core';
import { SleepService } from 'src/services/sleep.service';
import { SleepData } from 'src/data/sleep-data';
import { OvernightSleepData } from 'src/data/overnight-sleep-data';
import { StanfordSleepinessData } from 'src/data/stanford-sleepiness-data';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  sleepStart: string = ''; // Variable to store sleep start time
  sleepEnd: string = '';   // Variable to store sleep end time
  allSleepData = SleepService.AllOvernightData;
  constructor(public sleepService: SleepService) {}

  ngOnInit() {
    const currentDate = new Date().toISOString();
    this.sleepStart = currentDate;
    this.sleepEnd = currentDate;
    console.log(this.allOvernightData);
  }

  // getCurrentDateInPST(): string {
  //   const options: Intl.DateTimeFormatOptions = {
  //     timeZone: 'America/Los_Angeles', // Pacific Time (PST)
  //     year: 'numeric',
  //     month: '2-digit',
  //     day: '2-digit',
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit',
  //     hour12: false, // Use 24-hour format
  //   };

  //   return new Date().toLocaleDateString('en-US', options);
  // }

  /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
  get allOvernightData() {
    // return SleepService.AllOvernightData;
    return SleepService.AllSleepData.sort((a, b) => (new Date(b.loggedAt)).getTime() - (new Date(a.loggedAt)).getTime());
  }

  // Function to handle the selection of sleep start time
  handleSleepStartTime(event: CustomEvent) {
    this.sleepStart = event.detail.value;
  }

  // Function to handle the selection of sleep end time
  handleSleepEndTime(event: CustomEvent) {
    this.sleepEnd = event.detail.value;
  }

  // Function to log sleep data based on selected times
  logSleepData() {
    console.log('logSleepData')
    // Convert the string representations to Date objects
    const sleepStart = new Date(this.sleepStart);
    const sleepEnd = new Date(this.sleepEnd);

    console.log(sleepStart)
    console.log(sleepEnd)
    // Create an instance of OvernightSleepData with selected times
    const overnightSleepData = new OvernightSleepData(sleepStart, sleepEnd);

    // Log the sleep data using your sleep service or any desired logic
    this.sleepService.logOvernightData(overnightSleepData);

    this.setName(overnightSleepData) 

    // this.loadData();
  }

  setName(overnightSleepData:OvernightSleepData) {
    Storage.set({
      key: overnightSleepData.id,
      value: JSON.stringify(overnightSleepData),
    });
  };
  
  async loadData() {
    const keys = await Storage.keys();
    console.log(keys.keys);
  
    for (const key in keys.keys) {
      if (keys.keys.hasOwnProperty(key)) {
        // Access the value for each key
        const value = await Storage.get({ key: keys.keys[key] });
      }
    }
  }  
}