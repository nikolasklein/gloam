gloam.io
==================

> ##### This readme is a work in progress. I'm trying to describe the technological keypoints of gloam.io

gloam.io is an interactive data visualization, that calculates—based on given latitudes—the sunrise, sunset and twilight times and creates a mesmerizing and stunning experience. [Try it out!](http://www.gloam.io)

Should work in every major browser and on a lot of smartphones. On iOS you have the best experience but Google Chrome renders the best.

Since the code (which is basically located in one .js file) is a little bit messy—sorry for that—I'm trying to describe the technological keypoints which make the whole thing come to life.


### Technological keypoints of gloam.io
- Analyzing the sunrise/set/twilight phases and creating parameterized keyframes in rainbowvis.js
  - describe the different phases and show the abstraction process + keyframes
  - show how the keyframes are build into rainbowvis.js
- Getting the different sunrise/sunset- and twilight-times based on a user given latitude
  - AJAX-requests for every sunrise/set/twilight phase
  - PHP calculates on user given latitude
  - Returns a long .csv for every sunrise/set/twilight phase
- Sorting the different csv parts into one day
- How these keypoints work together
  - how the base of the day in rainbowvis.js is read out on a given date and time
    - for every gradient simultaneously
- Which libraries used and why

If you have any questions - feel free to contact me!

Niko – [nikolasklein.de](http://www.nikolasklein.de)
