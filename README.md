gloam.io
==================

> ##### This readme is a work in progress. I'm trying to describe the technological keypoints of gloam.io

gloam.io is an interactive data visualization, that calculates—based on given latitudes—the sunrise, sunset and twilight times and creates a mesmerizing and stunning experience.

[Try it out online!](http://www.gloam.io)

Should work in every major browser and on a lot of smartphones. On iOS you have the best experience but Google Chrome renders the best.

[Watch the visualization video!](http://www.gloam.io)



## Technological keypoints of gloam.io
- Analyzing the sunrise phases and creating parameterized spectra with RainbowVis-JS
- Getting the different sunrise/sunset- and twilight-times based on a user given latitude
- Sorting the different times into one day
- Connecting one day to the RainbowVis-JS - spectra

Since the code (which is basically located in one .js file) is a little bit messy—sorry for that—I'm trying to describe the technological keypoints which make the whole thing come to life.


## Analyzing the twilight and creating spectra with RainbowVis-JS

### Abstracting the twilight subcategories
Very important for visualizing a sunrise and sunset are the different twilight phases. 
There are four different twilight subcategories.

- Astronomical twilight
- Nautical twilight
- Civil twilight

You can check the full information on [Wikipedia](http://en.wikipedia.org/wiki/Twilight).

I watched a lot of sunrise- and sunset timelapses to get a feeling for the colorchanges. For every twilight subcategory I abstracted 3 different keyframes out of a frame.


**abstraction process**
![alt text](http://nikolasklein.de/ideas/gloam/comparison.png "Abstraction of a frame")

**keyframes**
![alt text](http://nikolasklein.de/ideas/gloam/twilight.png "Keyframes for: Night, Astronomical twilight, Nautical twilight, Civil twilight, Sunrise/Sunset and Day")

top row: Night, Astronomical twilight, Nautical twilight

bottom row: Civil twilight, Sunrise/Sunset and Day

### Creating spectra in RainbowVis-JS
I used [RainbowVis-JS](https://github.com/anomal/RainbowVis-JS) for an easy interpolation between this keyframes.











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
