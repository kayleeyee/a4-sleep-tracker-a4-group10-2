import { Component } from '@angular/core';
import { SleepService } from 'src/services/sleep.service';
import { StanfordSleepinessData } from 'src/data/stanford-sleepiness-data';

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

    this.sleepService.logSleepinessData(new StanfordSleepinessData(this.selectedValue, currentDate));
  }

}




