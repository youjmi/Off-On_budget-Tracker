# Off-On_budget-Tracker

## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)


## Description

Heroku App Link: https://jeezy-budget-tracker.herokuapp.com/

Welcome! For this assignment, I have created a Budget Tracker App. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

Offline Functionality:

  * Enter deposits offline

  * Enter expenses offline

When brought back online:

  * Offline entries should be added to tracker.

  ## Installation

To begin, I had to install my dependencies that are to be utlizied (Compression, Express, Lite-Server, Mongoose, Morgan) :

  ```
  npm i
  ```

  ## Usage

 To launch this application to Localhost:3000 please enter the following:

```
npm start
```

* First Picture : Nothing

<img width="1431" alt="Screen Shot 2021-03-25 at 10 31 16 PM" src="https://user-images.githubusercontent.com/73494581/112569552-cdbbc300-8dba-11eb-85be-4c2c2574fa79.png">

* Second Picture : Information added and Switching to OFFLINE

<img width="1440" alt="Screen Shot 2021-03-25 at 10 32 50 PM" src="https://user-images.githubusercontent.com/73494581/112569556-cdbbc300-8dba-11eb-814f-65f7e9efd1e9.png">

* Third Picture : Information added OFFLINE and shown as "pending" in my indexedDB under Application.

<img width="1440" alt="Screen Shot 2021-03-25 at 10 33 55 PM" src="https://user-images.githubusercontent.com/73494581/112569559-ceecf000-8dba-11eb-93ea-50edcdd674f9.png">

* Fourth Picture : Switching to ONLINE 
<img width="1440" alt="Screen Shot 2021-03-25 at 10 34 04 PM" src="https://user-images.githubusercontent.com/73494581/112569560-cf858680-8dba-11eb-9a18-3c93f7967695.png">

* Fifth Picture : Status is Online and Up to date. "Pending" in my indexedDB is no longer there. 
<img width="1440" alt="Screen Shot 2021-03-25 at 10 34 15 PM" src="https://user-images.githubusercontent.com/73494581/112569563-d01e1d00-8dba-11eb-88b1-6dd57549e9fa.png">

* Sixth Picture : Showing that service worker works and gives user option to install the app. 
![Screen Shot 2021-03-26 at 8 25 49 PM (2)](https://user-images.githubusercontent.com/73494581/112704606-90663c80-8e71-11eb-8cb0-0392c60da8b1.png)


## Contribution 
Thank you for having the time to view my work.

I would like to give special acknowledgement to my study group as well. We assist one another by providing Feedback, Brainstorming, and general support:

1.  Rachel Wanke - https://github.com/rwanke14
2.  Amir Ashtiany - https://github.com/Alexfit4
3.  Johnnie Simpson - https://github.com/balokdecoy
4.  Frankie Rosado - https://github.com/Franciscorosado09

## License 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)