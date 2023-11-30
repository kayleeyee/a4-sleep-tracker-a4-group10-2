--Readme document for Bethany Co and Kaylee Yee, cobl@uci.edu and kayleeay@uci.edu, cobl and kayleeay--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

20/20
- 3/3 The ability to log overnight sleep
- 3/3 The ability to log sleepiness during the day
- 3/3 The ability to view these two categories of logged data
- 3/3 Either using a native device resource or backing up logged data
- 3/3 Following good principles of mobile design
- 3/3 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
   15 hours


3. What online resources did you consult when completing this assignment? (list specific URLs)
   https://ionicframework.com/docs/
   https://ionic.io/ionicons?_gl=1*1d1b9yb*_ga*MjA0Mzk2NTg4LjE3MDA1MjcyNDE.*_ga_REH9TJF6KF*MTcwMTA2NTgzMC4xMS4xLjE3MDEwNjYyODguMC4wLjA.
   https://stackoverflow.com/questions/74142226/ion-datetime-how-to-open-view-on-current-year-but-to-not-select-day
   https://capacitorjs.com/docs


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
   Tim Twigg helped us to figure out why our logged data was not being backed up.


5. Is there anything special we need to know in order to run your code?
   No


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
   We designed this app for students who want to improve health by keeping track of their sleep amounts and sleepiness.


7. Did you design your app specifically for iOS or Android, or both?
   We designed this app specifically for iOS.



8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
   A person can log their overnight sleep on the "Log Overnight Sleep" tab. They select the date from a calendar 
   display. We chose to display the whole month because sometimes people don't know what day it is, so it helps to 
   look at a calendar. This also gives them the ability to log their sleep from prior nights if they forgot to log 
   it before. They select the time using a wheel style time picker, which is easy and intuitive to use.

9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
   A person can log their sleepiness during the day on the "Log Sleepiness" tab, using the range slider. There are 7 tick 
   marks that correspond to the 7 levels on the Stanford Sleepiness Scale. Above the slider, the number selected using the 
   slider is displayed. Below the slider, we list each of the descriptions for each number 1-7. We chose to support logging 
   sleepiness in this way because it's simple and easy to use.

10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
    A person can view the data they logged in our app under the "Sleep Data" tab. Within this tab, all of the person's data,
    including both logged overnight sleep and logged sleepiness during the day can be seen, with the most recent entrys at 
    the top. We chose to support viewing logged data in this way so that the user can see all their data in one centralized
    place. They don't have to scroll all the way to the bottom of the page to see their most recent entries since the data 
    is display chronologically with the latest entry at the top.


11. Which feature choose--using a native device resource, backing up logged data, or both?
    We backed up our logged data.


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
    N/A


13. If you backed up logged data, where does it back up to?
    We used Capacitor Storage to back up our logged data. The data is stored in the browser's local storage, which is a key-value 
    pair storage system available to web applications.


14. How does your app implement or follow principles of good mobile design?
    Our app has big buttons which are easy to find and click. Our app also has a desriptive menu bar at the bottom, which is similar 
    to many other mobile applications, so it is intuitive for the user to use. A user can confirm that their sleep data was entered
    by clicking the "Sleep Data" tab and their most recent data entry will be at the top with the other ones listed below it. There
    are lines between each sleep data entry on the Sleep Data page which help with readability. 
