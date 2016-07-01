gloam.io
==================


gloam.io is an interactive data visualization, that calculates—based on given latitudes—the sunrise, sunset and twilight times and creates a mesmerizing and stunning experience.

[Try it out online!](http://www.nikolasklein.de/gloam)

Should work in every major browser and on a lot of smartphones. On iOS you have the best experience but Google Chrome renders the best.

[Watch the visualization video!](http://www.gloam.io)



## Technological keypoints of gloam.io
- Analyzing the sunrise phases and creating parameterized spectra with RainbowVis-JS
- Getting the different sunrise/sunset- and twilight-times based on a user given latitude
- Connecting the one day sequence to the spectra

Since the code (which is located in one .js file) is a little bit messy—sorry for that—I'm trying to describe the technological keypoints which make the whole thing come to life.


## Analyzing the twilight and creating spectra with the help of RainbowVis-JS

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


#### Every keyframe consist of a four color gradient.



### Creating spectra with RainbowVis-JS
 Because every keyframe consists of a four color gradient, I can now seperate the colors and the positions of the two middle points of the gradient for every keyframe. I used [RainbowVis-JS](https://github.com/anomal/RainbowVis-JS) for an easy interpolation between the colors of the keyframes.

**initialising the rainbows**
```javascript
  var night_am_top = new Rainbow();
  var night_am_firstQuart = new Rainbow();
  var night_am_secondQuart = new Rainbow();
  var night_am_bottom = new Rainbow();
```


**setting the positions of the two middle points of a gradient**  
```javascript
  var night_am_firstQuartArr = [89, 57, 20, 42];
  var night_am_secondQuartArr = [97, 81, 58, 73];
```


**setting the spectrum for the 4 gradient points**
```javascript
	night_am_top.setSpectrum("#050314", "#050314", "#050314", "#050314");
	night_am_firstQuart.setSpectrum("#020109", "#020109", "#020109", "#0a071b");
	night_am_secondQuart.setSpectrum("#02010a", "#05051e", "#060419", "#0b081d");
	night_am_bottom.setSpectrum("#03031c", "#080829", "#080829", "#09092c");
```


## Getting the different sunrise/sunset- and twilight-times based on a user given latitude
### The core of the PHP-script
```php
  […]
  $sunrise=date_sunrise($ctime, SUNFUNCS_RET_TIMESTAMP, $latitude, $longitude, $zenith);
  $sunset=date_sunset($ctime, SUNFUNCS_RET_TIMESTAMP, $latitude, $longitude, $zenith);
  […]
```
Guido Gerding from [sonnenaufgang-sonnenuntergang.de](http://www.sonnenaufgang-sonnenuntergang.de/) gave me this script, which I adjusted a little bit to better fit my needs.

The `$zenith`-variable is responsible for getting the values of the specific twilight time.


### The AJAX-requests for the sunrise and twilight times
```javascript
	var urlRise = "api.php?client=5mQNicMv2c&longitude=0&latitude=" + latitude + "&zenith=90.83333333333&year=2014&month=1&offsett=0&nodst=TRUE";
	var urlCivil = "api.php?client=5mQNicMv2c&longitude=0&latitude=" + latitude + "&zenith=96&year=2014&month=1&offsett=0&nodst=TRUE";
	var urlNaut = "api.php?client=5mQNicMv2c&longitude=0&latitude=" + latitude + "&zenith=102&year=2014&month=1&offsett=0&nodst=TRUE";
	var urlAstro = "api.php?client=5mQNicMv2c&longitude=0&latitude=" + latitude + "&zenith=108&year=2014&month=1&offsett=0&nodst=TRUE";
```
- The longitude stays the same. It does not affect the sunrise and sunset times very much.
- The latitude is given by the user.
- The zenith defines which times will be returned.

For every phase this returns a csv file with 365 lines of the sunrise/sunset time for every day of the year.

[Get the sunrise and sunset times in a csv file for: 0N 0E ](http://gloam.io/api.php?client=5mQNicMv2c&longitude=0&latitude=0&zenith=90.933&year=2014&month=1&offsett=0&nodst=TRUE)

Four of this csv files are used to calculate the day sequence and the duration for the sunrise, the sunset and for every twilight phase.


## Connecting the one day sequence to the spectra

Based on the user given date and time gloam.io reads out the day sequence and checks in which phase it would be at that particular date and time. This is then used to specify which colors should be used in the gradient.


---


If you have any questions - feel free to contact me!

Niko – [nikolasklein.de](http://www.nikolasklein.de)
