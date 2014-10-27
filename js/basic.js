window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

var colorTop = new Rainbow(); // by default, range is 0 to 100
var colorMiddle = new Rainbow(); // by default, range is 0 to 100
var colorBottom = new Rainbow(); // by default, range is 0 to 100

var night_am_top = new Rainbow();
var night_am_firstQuart = new Rainbow();
var night_am_secondQuart = new Rainbow();
var night_am_bottom = new Rainbow();
var night_am_firstQuartArr = [89, 57, 20, 42];
var night_am_secondQuartArr = [97, 81, 58, 73];

var d1_am_top = new Rainbow();
var d1_am_firstQuart = new Rainbow();
var d1_am_secondQuart = new Rainbow();
var d1_am_bottom = new Rainbow();
var d1_am_firstQuartArr = [42, 35, 35, 43];
var d1_am_secondQuartArr = [73, 70, 88, 79];

var d2_am_top = new Rainbow();
var d2_am_firstQuart = new Rainbow();
var d2_am_secondQuart = new Rainbow();
var d2_am_bottom = new Rainbow();
var d2_am_firstQuartArr = [43, 31, 27, 30];
var d2_am_secondQuartArr = [79, 63, 61, 69];

var d3_am_top = new Rainbow();
var d3_am_firstQuart = new Rainbow();
var d3_am_secondQuart = new Rainbow();
var d3_am_bottom = new Rainbow();
var d3_am_firstQuartArr = [30, 35, 43, 47];
var d3_am_secondQuartArr = [69, 71, 73, 71];

var s_am_top = new Rainbow();
var s_am_firstQuart = new Rainbow();
var s_am_secondQuart = new Rainbow();
var s_am_bottom = new Rainbow();
var s_am_firstQuartArr = [47, 50, 52, 55];
var s_am_secondQuartArr = [71, 72, 75, 77];

var d_am_top = new Rainbow();
var d_am_firstQuart = new Rainbow();
var d_am_secondQuart = new Rainbow();
var d_am_bottom = new Rainbow();
var d_am_firstQuartArr = [55, 40, 34, 53];
var d_am_secondQuartArr = [77, 63, 75, 81];

var latitudeNorth = 65;
var latitudeSouth = -65;





$(window).load(function(){

	WebFont.load({
		custom: {
		  families: ['Fira']
		}, active: function() {

			var show = $(".mainMenu").get();

			$.each(show, function(i, item){
				setTimeout(function() {
					$(item).addClass("fadeInBottom");
				}, 100 * i);
			});

		}
	});
	

	night_am_top.setSpectrum("#050314", "#050314");
	night_am_firstQuart.setSpectrum("#020109", "#020109", "#020109", "#0a071b");
	night_am_secondQuart.setSpectrum("#02010a", "#05051e", "#060419", "#0b081d");
	night_am_bottom.setSpectrum("#03031c", "#080829", "#080829", "#09092c");

	night_am_top.setNumberRange(0, wholeminutes);
	night_am_firstQuart.setNumberRange(0, wholeminutes);
	night_am_secondQuart.setNumberRange(0, wholeminutes);
	night_am_bottom.setNumberRange(0, wholeminutes);
		
	
	d1_am_top.setSpectrum("#050314", "#060418", "#0b0822",  "#171337");
	d1_am_firstQuart.setSpectrum("#0a071b", "#0a071b", "#13102b", "#1e193f");
	d1_am_secondQuart.setSpectrum("#0b081d", "#080824", "#191539", "#1b163b");
	d1_am_bottom.setSpectrum("#09092c", "#0f0f2c", "#1f1b43", "#24163d");

	d1_am_top.setNumberRange(0, wholeminutes);
	d1_am_firstQuart.setNumberRange(0, wholeminutes);
	d1_am_secondQuart.setNumberRange(0, wholeminutes);
	d1_am_bottom.setNumberRange(0, wholeminutes);
		
	
	d2_am_top.setSpectrum("#171337", "#221740", "#221740",  "#35214d");
	d2_am_firstQuart.setSpectrum("#1e193f", "#271b47", "#241437", "#3a2253");
	d2_am_secondQuart.setSpectrum("#1b163b", "#281e43", "#331e44", "#472761");
	d2_am_bottom.setSpectrum("#24163d", "#2f1e43", "#3a244c", "#633670");

	d2_am_top.setNumberRange(0, wholeminutes);
	d2_am_firstQuart.setNumberRange(0, wholeminutes);
	d2_am_secondQuart.setNumberRange(0, wholeminutes);
	d2_am_bottom.setNumberRange(0, wholeminutes);
	
	
	
	
	
	d3_am_top.setSpectrum("#35214d", "#333c64", "#3c5196",  "#7e84ae");
	d3_am_firstQuart.setSpectrum("#3a2253", "#373e60", "#5a6186", "#9394ab");
	d3_am_secondQuart.setSpectrum("#472761", "#4f5877", "#ae9377", "#b9aa9f");
	d3_am_bottom.setSpectrum("#633670", "#81655e", "#d16c64", "#c37c68");

	d3_am_top.setNumberRange(0, wholeminutes);
	d3_am_firstQuart.setNumberRange(0, wholeminutes);
	d3_am_secondQuart.setNumberRange(0, wholeminutes);
	d3_am_bottom.setNumberRange(0, wholeminutes);
		
		
		
	
	s_am_top.setSpectrum("#7e84ae", "#818ba7", "#9ba2af",  "#b1b4c3");
	s_am_firstQuart.setSpectrum("#9394ab", "#989da1", "#dad0bb", "#d6d6b9");
	s_am_secondQuart.setSpectrum("#b9aa9f", "#e9b682", "#f7cb8a", "#f3f2aa");
	s_am_bottom.setSpectrum("#c37c68", "#e08d66", "#f3e674", "#f6d6a0");

	s_am_top.setNumberRange(0, wholeminutes);
	s_am_firstQuart.setNumberRange(0, wholeminutes);
	s_am_secondQuart.setNumberRange(0, wholeminutes);
	s_am_bottom.setNumberRange(0, wholeminutes);	
		
	
	d_am_top.setSpectrum("#b1b4c3", "#a3cbf4", "#7daeff",  "#609cff");
	d_am_firstQuart.setSpectrum("#d6d6b9", "#a5c5e9", "#abd1fd", "#abd1fd");
	d_am_secondQuart.setSpectrum("#f3f2aa", "#d5effd", "#bde7ff", "#bde7ff");
	d_am_bottom.setSpectrum("#f6d6a0", "#dff0ff", "#d5effd", "#dbf5ff");
	
	d_am_top.setNumberRange(0, wholeminutes);
	d_am_firstQuart.setNumberRange(0, wholeminutes);
	d_am_secondQuart.setNumberRange(0, wholeminutes);
	d_am_bottom.setNumberRange(0, wholeminutes);
	

});


var longi = "0";
var lati = "30";

var mouseX_ = 0;
var mouseY_ = 0;

var mouseMoving = false;
var hideTimeHandleTimeoutSet = false;
var hideTimeHandleTimeout;

var comeBackTimeoutSet = false;
var comeBackTimeout;





var updatedFirst = false;



function updateBg(){
	for (i = 0; i<gradientArray.length; i++){
		if(!gradientArray[i].reloadLatitude){
			gradientArray[i].day = day;
			gradientArray[i].checkParsed();	
		}
	}
}


function resetTimeHandleTimeout(timeoutTime){
	if (hideTimeHandleTimeoutSet){
		clearTimeout(hideTimeHandleTimeout);
		hideTimeHandleTimeoutSet = false;
	}
	
	hideTimeHandleTimeout = setTimeout(function(){

		hideTimeHandle();
	} , timeoutTime);
	hideTimeHandleTimeoutSet = true;
		
}


function hideTimeHandle(){
	if(!latitudeOn){
		$("#timehandlerCircle").removeClass("on")};	

		setTimeout(function(){

			if(!latitudeOn){
				$("body").addClass("nocursor")
			}
				
		}, 300);
}

var latitudeOn = false;
var dragDelete = false;
var dragTimeAdjust = false;
var dragLatitudeOverlay = false;
var unchanged = true;


function updateTimeDrag(){
	wholewidth = $(document).width();
	wholeheight = $(document).height();
	
	var positionX = map(day, 0, 356, 0, wholewidth);
	positionX = positionX - 25;

	var positionY = map(clock, 0, wholeminutes, 0, wholeheight);
	positionY = positionY - 25;
	
	$("#timehandler").css({"top":positionY, "left":positionX});
}

function getDistance( x1, y1, x2, y2 ){
  var xs = 0;
  var ys = 0;
 
  xs = x2 - x1;
  xs = xs * xs;
 
  ys = y2 - y1;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}

var startTime;
var firstStart;
var moved = false;

var touchstartX, touchstartY;






var longTimeout;
var longTimeoutSet = false;


var doubletapTimeout;
var doubletapTimeoutSet = false;

var tapTimeout;
var tapTimeoutSet = false;

var tapCount = 0;

var firstTap = {x:0, y:0};

var tapStreak = false;
var tapStreaktest = false;

var tapStreakTimeout;
var tapStreakTimeoutSet = false;

var tooFar = false;





function lockTimehandler(event){
	$("#timehandlerCircle").addClass("on");		
	var compareOffset = $("#timehandler").offset();
		
	var compareupdateX = compareOffset.left;
	var compareupdateY = compareOffset.top;

	setTimeout(function(){
		
		
		var distX = (touchstartX-25)-compareupdateX;
		var distY = (touchstartY-25)-compareupdateY;
		
		var stepX = distX / 20;
		var stepY = distY / 20;
		
		var intervalcount = 0;
		

		
		$("#timehandler").addClass("locked");
		$("#groundlayer").addClass("groundLocked");

		
		
		$("#timehandler").css({"top":touchstartY-25, "left":touchstartX-25});


		
		setTimeout(function(){

			clock = Math.floor(map(touchstartY, 0, wholeheight, 0, wholeminutes)); // chooser für die uhrzeit
			day = Math.floor(map(touchstartX, 0, wholewidth, 1, 365)); // chooser für den jahrestag	



			for (i = 0; i<gradientArray.length; i++){
				gradientArray[i].day = day;
				gradientArray[i].checkParsed();
			}
		}, 150 );
		
	}, 100);

	setTimeout(function(){$("#timehandler").removeClass("animatePosition");}, 400);
	longTimeoutSet = false;
	
}

var tapArray = [];

var tapResetTimeout;
var tapResetTimeoutSet;

var hideMenu = false;

var speedArray = [];
var speedXArray = [];
var speedYArray = [];



var groundDown = false;
var secondDown = false;
var deleteDown = false;

var changedToMouse = false;
var changedBack = false;

$(document).ready(function(){
	
	setTimeout(function(){$("#backgroundImage").addClass("show")}, 300);
	
	$(window).mouseup(function(){
       if(groundDown){
	   		groundEnd(event);
			groundDown = false;
			mouseDown = false;	    
       }else if(secondDown){
	   		secondEnd(event);
			secondDown = false;
			mouseDown = false;	       
       }   else if(deleteDown){
	   		deleteEnd(event);
			deleteDown = false;
			mouseDown = false;	    
       }
	   $("#secondlayer").removeClass("grabbing");
    });
	
	writeDate();
	
	
	$(document).on("touchmove", function(event){
		if(!$("body").hasClass("scroll")){
			if (!$('.scrollable').has($(event.target)).length) event.preventDefault();					
		}
	});

	var tapDelayTime = 0;

	var prevPosSet = false;
	var prevPosX;
	var prevPosY;

	var dragDistance = 0;
	var dragDistanceLatitude = 0;
	var entering = false;
	var exiting = false;
	
	var compareTime;
	
	var noMoveTime = 220;
	
	var mouseDown = false;
	var touching = false;
	var onceTouch = false;


	$(document).on('mousemove', function (event){

		if(!latitudeOn && !$("#share").hasClass("active") && !$("#menu").hasClass("active") && !$("#delete").hasClass("focused")){
			$("#timehandlerCircle").addClass("on");
			resetTimeHandleTimeout(300);			
		}

		if(!touching && !onceTouch){
			$("#timehandlerCircle").addClass("hover");
			$("#deletelayer").addClass("hoverDelete");
			$(".button").addClass("hoverbutton");
			$("#instructionTap").html("Click anywhere to create a gradient.");
			$("#deleteText").html("Just click somewhere to start again …");		
			$("#adjustTime").html("Drag around to change date and time.");
			$("#doubletapEnter").html("Click and hold to adjust.");
			$("#adjustLatitude").html("Drag around to adjust the latitudes.");			
		}
		
	});

	$(document).on('touchstart', function (event){
		
		$("#timehandlerCircle").removeClass("hover");
		$(".button").removeClass("hoverbutton");
		
		$("#instructionTap").html("Tap anywhere to create a gradient.");
		$("#deleteText").html("To delete just swipe—up up and away.");
		$("#adjustTime").html("Swipe around to change date and time.");
		$("#doubletapEnter").html("Tap and hold to adjust.");
		$("#adjustLatitude").html("Swipe around to adjust the latitudes.");
		touching = true;
		onceTouch = true;


	});


	$("#groundlayer").on('mousedown', function (event){
		if(!onceTouch){
			mouseDown = true;
			groundDown = true;
			groundStart(event);
		}
	});
	
	$("#groundlayer").on('mousemove', function (event){
		if(mouseDown && groundDown && !onceTouch){
			groundMove(event);
		}
	});
	
	$("#groundlayer").on('mouseup', function (event){
		if(!onceTouch){
			groundEnd(event);
			$("#groundlayer").removeClass("grabbing");
			groundDown = false;
			mouseDown = false;		
			event.stopPropagation();
		}
	});
	
	
	$("#groundlayer").on('touchstart', function(event){
		touching = true;
		groundStart(event);
	});
	
	$("#groundlayer").on('touchmove', function(event){
		groundMove(event);
	});
	
	$("#groundlayer").on('touchend', function(event){
		groundEnd(event);
		touching = false;		
	});
	
	$("#groundlayer").on('touchcancel', function(event){
		groundCancel(event);
		touching = false;		
	});

	
	/* $("#groundlayer").on('touchstart',  */
	
	function groundStart(event) {
		prevPosSet = false;
		
		$(".skipwrapper").addClass("putBack");
		
		moved = false;


		//#### how to check for the tutorial…
		if($("#doubletapEnter").hasClass("fadeInBottom") && !$("#doubletapEnter").hasClass("checked")){		
			$("#doubletapEnter").addClass("progress100");			
		}
		
		
		
		tapCount++;	
		
				
		var compareOffset = $("#timehandler").offset();

		var compareX = compareOffset.left;
		var compareY = compareOffset.top;


		
		startTime = new Date().getTime();
	
		var e = event.originalEvent;
		

		if(touching){
			touchstartX = e.touches[0].pageX;	
			touchstartY = e.touches[0].pageY;
		}else if(mouseDown){
			touchstartX = e.clientX;
			touchstartY = e.clientY;
		}
			
		
		if(tapCount==1){
			firstTap.x = touchstartX;
			firstTap.y = touchstartY;
			tooFar = false;
		}
		
		if(touching){		
			mouseX_ = e.touches[0].pageX;	
			mouseY_ = e.touches[0].pageY;
		}else if(mouseDown){
			mouseX_ = e.clientX;	
			mouseY_ = e.clientY;
		}
		
		var distanceToHandler = Math.abs(getDistance( touchstartX, touchstartY, compareX, compareY ));

		if(distanceToHandler < 75){
			noMoveTime = 360;
		}else{
			noMoveTime = 220;
		}
		
		if(gradientArray.length>0){
			if(longTimeoutSet){
				clearTimeout(longTimeout);
				longTimeoutSet = false;
			}	
			
			
			$("#timehandler").addClass("animatePosition");
			
			longTimeout = setTimeout(function(){
				if(!tapStreak && !moved && $("#adjustTime").hasClass("checked")){

					enterLatitude(mouseX_);
					$("#groundlayer").removeClass("grabbing");

					$("#doubletapEnter").addClass("checked");

					$("#doubletapEnter").addClass("checked");
							
					setTimeout(function(){
						$("#doubletapEnter").addClass("fadeInBottomHideUp");
						setTimeout(function(){
							$("#adjustLatitude").addClass("fadeInBottom");
							$("#adjustLatitudeText").addClass("fadeInBottom");
						}, 200);
					}, 30)
			
					entering = true;
				}
			}, noMoveTime );
			longTimeoutSet = true;		
		}		
			 
		wholewidth = $(document).width();
		wholeheight = $(document).height();
						

	
	
		lati = Math.floor(map(mouseY_, 0, wholeheight, latitudeNorth, latitudeSouth));
		

	
		var latitudePercentage = map(lati, latitudeNorth, latitudeSouth, 0, 100);
	
		
		
		speedArray = [];

		
		
	};
	function groundMove(event) {

			
		
		var e = event.originalEvent;
		
	
		if (!$('.scrollable').has($(event.target)).length) event.preventDefault();
		//$("#console").html(event.originalEvent.touches[0].pageX + " // " + event.originalEvent.touches[0].pageY);
	
		if(touching){
			mouseX_ = e.touches[0].pageX;	
			mouseY_ = e.touches[0].pageY;
		}else if(mouseDown){
			mouseX_ = e.clientX;
			mouseY_ = e.clientY;
		}
			
		if(once){
			prevPosX = mouseX_;
			prevPosY = mouseY_;
			compareTime = new Date().getTime();
			predistance=moveddistance;
			once=false;
		};
		var checkDistance = getDistance( prevPosX, prevPosY, mouseX_, mouseY_ );
				


		var nowCheck = new Date().getTime();
		var timeSpeed = nowCheck - startTime;
		var dragSpeed = checkDistance / timeSpeed;
		dragSpeed *= 10000;
		
		speedArray.push(dragSpeed);
		
		avgSpeed = getAverage(speedArray.slice(Math.max(speedArray.length - 20, 0)));

		
		var moveddistance = getDistance( touchstartX, touchstartY, mouseX_, mouseY_);
		
		if(moveddistance>5 && !moved && !entering && !tapStreak){
			moved = true;	
			if(longTimeoutSet){
				clearTimeout(longTimeout);
				longTimeoutSet = false;
			}				
			
			lockTimehandler(event);
			
			if($("#skip").hasClass("fadeInUpHideBottom") && !hideMenu && gradientArray.length>0){
				showMenu(true, true);
				hideMenu = true;
				console.log(avgSpeed);				
			}	
		}

		if($("#finished").hasClass("fadeInBottomHideUp") && gradientArray.length > 0){
			console.log(avgSpeed);
			if(avgSpeed<30){
				console.log("herher");
				$("#adjustTimeText").removeClass("fadeInBottomHideUp");
			}
		}

		
		//reset the longtap tutorial
		if($("#doubletapEnter").hasClass("progress100") && !$("#doubletapEnter").hasClass("checked")){
			$("#doubletapEnter").removeClass("progress100");
		}
		
		
		//for updating the tutorial menu for the adjusting date and time
		if($("#instructionTap").hasClass("checked")){
			if(!prevPosSet){
				prevPosX = mouseX_;
				prevPosY = mouseY_;
				prevPosSet = true;
			}
	
			var checkDistance = getDistance( prevPosX, prevPosY, mouseX_, mouseY_ );
			
			
			dragDistance += checkDistance;
			
			var windowWidth = $(window).width();

			var newBg = map(dragDistance, 0, windowWidth*1.2, 0, 100);

			$("#adjustTime").css({"background-size": newBg + "% 100%"});

			if(dragDistance > windowWidth*1.2){
				$("#adjustTime").css({"opacity": 0.4 });
				$("#adjustTime").addClass("checked");
			}
		}

		
		//the actual new calculation of the new date and time
		if($("#timehandler").hasClass("locked") && !tapStreak){
				
				clock = Math.min(Math.max(Math.floor(map(mouseY_, 0, wholeheight, 0, wholeminutes)), 0), 1440); // chooser für die uhrzeit
				day = Math.min(Math.max(Math.floor(map(mouseX_, 0, wholewidth, 1, 365)), 0), 365); // chooser für den jahrestag
				
				writeDate();
				
				var positionX = mouseX_-25;
				var positionY = mouseY_-25;
				
//				//$("#console").html(clock + " // " + day);
				
				var compareOffset = $("#timehandler").offset();
	
				var compareX = compareOffset.left;
				var compareY = compareOffset.top;
				
				
				if(positionX < 1 || positionX+50 > wholewidth){
					if(!saveSetX){
						saveX = compareX;
						saveSetX = true;
					}
					positionX = saveX;
				}else{
					saveSetX = false;
				}
				
				
				if(positionY < 1 || positionY+50 > wholeheight){
					if(!saveSetY){
						saveY = compareY;
						saveSetY = true;
					}
					positionY = saveY;
				}else{
					saveSetY = false;
				}
				
				
				$("#timehandler").css({"top":positionY, "left":positionX});
				
				if(!latitudeOn){
					updateBg();
				}			
	
	
		}
		

	
		wholewidth = $(document).width();
		wholeheight = $(document).height();
						

	
	
		lati = Math.floor(map(mouseY_, 0, wholeheight, latitudeNorth, latitudeSouth));
		
	
		var latitudePercentage = map(lati, latitudeNorth, latitudeSouth, 0, 100);
	

		resetTimeHandleTimeout(10000);		
		
		var compareOffset = $("#timehandler").offset();
		
		var compareX = compareOffset.left;
		var compareY = compareOffset.top;
		
		prevPosX = mouseX_;
		prevPosY = mouseY_;
	};
	/* $("#groundlayer").on( "touchcancel" ,  */
	function groundCancel(event){
		speedArray = [];
		$(".skipwrapper").removeClass("putBack");	
		if($("#skip").hasClass("fadeInUpHideBottom") && hideMenu){
			setTimeout(function(){showMenu(true, false);}, 120);
			hideMenu = false;
		}


		if($("#doubletapEnter").hasClass("progress100") && !$("#doubletapEnter").hasClass("checked")){
			$("#doubletapEnter").removeClass("progress100");
		}		
		
	};
	/* $("#groundlayer").on( "touchend" , function (event){ */
	function groundEnd(event){
		speedArray = [];
		var e = event.originalEvent;
		
		$(".skipwrapper").removeClass("putBack");	
		
		$("#timehandler").removeClass("locked");
		$("#groundlayer").removeClass("groundLocked");
		
		if($("#doubletapEnter").hasClass("progress100") && !$("#doubletapEnter").hasClass("checked")){
			$("#doubletapEnter").removeClass("progress100");
		}	

		if($("#skip").hasClass("fadeInUpHideBottom") && hideMenu){
			setTimeout(function(){showMenu(true, false);}, 120);
			hideMenu = false;
		}
		
		resetTimeHandleTimeout(700);		

		if(longTimeoutSet){
			clearTimeout(longTimeout);
			longTimeoutSet = false;
		}			
	
		var now = new Date().getTime();
		var timeDifference = now - startTime;
		
		if(tapTimeoutSet){
			clearTimeout(tapTimeout);
			tapTimeoutSet = false;
		}
		
		if(Math.abs(firstTap.x-mouseX_)>40 || Math.abs(firstTap.y-mouseY_)>40 ){
			tooFar = true;
		}
		
		if(!moved && !tooFar){
			if(timeDifference<220){

			
					if($("#doubletapEnter").hasClass("fadeInBottom") && !$("#doubletapEnter").hasClass("checked")){
					}else{
						tapCreate();						
					}
					
					
					if($("#doubletapEnter").hasClass("progress100") && !$("#doubletapEnter").hasClass("checked")){
						$("#doubletapEnter").removeClass("progress100");
					}						

					if(gradientArray.length > 0 && $("#doubletapEnter").hasClass("checked")){
						$("#skip").addClass("progress60");
					}
				
				
			}else{
				if($("#doubletapEnter").hasClass("checked")){
					tapStreak = true;
				}
			}	

			if(tapStreakTimeoutSet){
				clearTimeout(tapStreakTimeout);
				tapStreakTimeoutSet = false;
			}	
			
			tapStreakTimeout = setTimeout(function(){
				tapStreak = false;
				entering = false;
			},750);
	
			tapStreakTimeoutSet = true;		
		
		}else{
		
			if(tapStreakTimeoutSet){
				clearTimeout(tapStreakTimeout);
				tapStreakTimeoutSet = false;
			}
			tapStreak = false;
		}
		

		tapCount = 0;
		moved = false;

		
		if($("#adjustTime").hasClass("checked")){
			setTimeout(function(){
				$("#adjustTime").addClass("fadeInBottomHideUp");
				setTimeout(function(){
					$("#adjustTimeText").addClass("fadeInBottomHideUp");
					setTimeout(function(){
						$("#skip").addClass("progress40");
						$("#doubletapEnter").addClass("fadeInBottom");
					}, 280);
				}, 100); 
			}, 200)			
		}
		
	};
	
	$("#thirdlayer").click(function(){
		if($(this).hasClass("shown")){
			$("#menu").click();
		}
	});
	
	$("#sharelayer").click(function(){
		if($(this).hasClass("shown")){
			$("#share").click();
		}
	});
	
	
	$("#secondlayer").on('mousedown', function (event){
		if(!onceTouch){
			mouseDown = true;
			secondDown = true;
			$("#secondlayer").addClass("grabbing");
			secondStart(event);
		}
	});
	
	$("#secondlayer").on('mousemove', function (event){
		if(mouseDown && !onceTouch){
			secondMove(event);
		}
	});
	
	$("#secondlayer").on('mouseup', function (event){
		if(!onceTouch){
			secondEnd(event);
			mouseDown = false;
			secondDown = false;		
			$("#secondlayer").removeClass("grabbing");
			event.stopPropagation();
		}
	});
	
	
	$("#secondlayer").on('touchstart', function(event){
		touching = true;
		secondStart(event);
		event.stopPropagation();
	});
	
	$("#secondlayer").on('touchmove', function(event){
		secondMove(event);
	});
	
	$("#secondlayer").on('touchend', function(event){
		secondEnd(event);
		touching = false;		
		event.stopPropagation();
	});
	
	$("#secondlayer").on('touchcancel', function(event){
		secondCancel(event);
		touching = false;
		event.stopPropagation();
	});

	var touchCheck;
	
	function secondStart(event) {
		$(".skipwrapper").addClass("putBack");	
		tapArray.push("tap");
		
		moved = false;
		
		$("#doubletapExit").addClass("progress100");
				
		prevPosSet = false;

		tapCount++;		
	
		distance = 0;
		predistance = 0;
		once = true;
		changes = 0;

		
		startTime = new Date().getTime();
		firstStart = new Date().getTime();
	
		doubletapTimeoutSet = true;		
		
		
		var e = event.originalEvent;
	
		compareTime = new Date().getTime();
	
		if(touching){
			touchstartX = e.touches[0].pageX;	
			touchstartY = e.touches[0].pageY;
			touchCheck = true;
		}else if(mouseDown){
			touchstartX = e.clientX;
			touchstartY = e.clientY;
			touchCheck = false;
		}		
		if(touching){
			mouseX_ = e.touches[0].pageX;	
			mouseY_ = e.touches[0].pageY;
			touchCheck = true;
		}else if(mouseDown){
			mouseX_ = e.clientX;
			mouseY_ = e.clientY;
			touchCheck = false;
		}
			 
		wholewidth = $(document).width();
		wholeheight = $(document).height();
		
		
		
		if(longTimeoutSet){
			clearTimeout(longTimeout);
			longTimeoutSet = false;
		}
		
		
				
		longTimeout = setTimeout(function(){
			var checkNumber = 1;
			if(touchCheck){
				checkNumber = e.touches.length;
			}
			if(!moved && checkNumber >! 1 && $("#adjustLatitude").hasClass("checked")){
				exitLatitude(mouseX_);
				$("#secondlayer").removeClass("grabbing");
				exiting = true;
			 	$("#detailLatitude").addClass("detailShowFastHide");
				$(".detailAdjustingShow").removeClass("detailAdjustingShow");

				var hideDetail = $(".latitudeDetailNumber").get();
				var hideDetailTime = 300/hideDetail.length;			

				$.each(hideDetail, function(i, item){
					setTimeout(function() {
						$(item).removeClass("detailShow");
						$(item).addClass("detailShowFastHide");
					}, hideDetail * i);
				});
				
				$("#doubletapExit").addClass("checked");
				$("#skip").addClass("progress100");
				
				setTimeout(function(){
					$("#doubletapExit").addClass("fadeInBottomHideUp");

					setTimeout(function(){
						$("#finished").addClass("fadeInBottom");
						$("#finished").addClass("progress100");
						$("#skip").addClass("fadeInUpHideBottom");
						$("#adjustTimeText").addClass("backUpLittle");
						setTimeout(function(){
							$(".skipwrapper").hide();
							//showMenu(true, false);
							$("#finished").addClass("fadeInBottomHideUp");
						}, 5000)
					}, 200);
				}, 80)
			}
		}, 280);
		
		longTimeoutSet = true;		
	
		
		if(tapCount==1){
			firstTap.x = touchstartX;
			firstTap.y = touchstartY;
			tooFar = false;
		}
	
		lati = Math.floor(map(mouseY_, 0, wholeheight, latitudeNorth, latitudeSouth));
		
	
		var latitudePercentage = map(lati, latitudeNorth, latitudeSouth, 0, 100);
		

		
	};

	function secondMove( event ) {

		
		var e = event.originalEvent;
			
		wholewidth = $(document).width();
		wholeheight = $(document).height();
		
		if(longTimeoutSet){
			clearTimeout(longTimeout);
			longTimeoutSet = false;
		}	
		

	
		if(touching){
			mouseX_ = e.touches[0].pageX;	
			mouseY_ = e.touches[0].pageY;
		}else if(mouseDown){
			mouseX_ = e.clientX;
			mouseY_ = e.clientY;
		}

			
		var moveddistance = getDistance( touchstartX, touchstartY, mouseX_, mouseY_);
	
		if(moveddistance > 5){
			moved = true;
		}
		
		movedX = mouseX_ - touchstartX;
		movedY = mouseY_ - touchstartY
		
		
				
		if(!prevPosSet){
			prevPosX = mouseX_;
			prevPosY = mouseY_;
			prevPosSet = true;
			compareTime = new Date().getTime();
			predistance=moveddistance;
		}
		

		

	
		var checkDistance = getDistance( prevPosX, prevPosY, mouseX_, mouseY_ );
		
		var now = new Date().getTime();
		var timeSpeed = now - compareTime;
		var dragSpeed = checkDistance / timeSpeed;
		dragSpeed *= 100;
		
		speedArray.push(dragSpeed);
		var avgSpeed = getAverage(speedArray.slice(Math.max(speedArray.length - 25, 0)));
		
				
		var prevMovedX = mouseX_ - prevPosX;
		var prevMovedY = mouseY_ - prevPosY;
		
		var dragSpeedX = prevMovedX / timeSpeed;
		var dragSpeedY = prevMovedY / timeSpeed;
		
		dragSpeedX *= 100;
		dragSpeedY *= 100;
		
		speedXArray.push(dragSpeedX);
		speedYArray.push(dragSpeedY);

		var avgSpeedX = Math.abs(getAverage(speedXArray.slice(Math.max(speedXArray.length - 25, 0))));
		var avgSpeedY = Math.abs(getAverage(speedYArray.slice(Math.max(speedYArray.length - 25, 0))));

		
		if(moved && !exiting){
			settingLatitudes(avgSpeed, avgSpeedX, avgSpeedY);
		}
		
		if(moveddistance-predistance<0 && moved){
        	touchstartX=mouseX_;
        	touchstartY=mouseY_;
			changes=changes+1;				
			overall=overall+distance;
			startTime = new Date().getTime();
		};
		

		
		
		if($("#doubletapExit").hasClass("progress100") && !$("#doubletapExit").hasClass("checked")){
			$("#doubletapExit").removeClass("progress100");
		}
		
		$("#consoleTwo").html(moved + " // " + exiting + " // " + checkDistance);

		var windowWidth = $(window).width();
			
		if($("#doubletapEnter").hasClass("checked")){

			dragDistanceLatitude += checkDistance;
			
			
			var newBg = map(dragDistanceLatitude, 0, windowWidth*0.8, 0, 100);

			$("#adjustLatitude").css({"background-size": newBg + "% 100%"});

			if(dragDistanceLatitude > windowWidth*0.8){
				$("#adjustLatitude").css({"opacity": 0.4 });
				$("#adjustLatitude").addClass("checked");
			}
		}
						
		
			
		lati = Math.floor(map(mouseY_, 0, wholeheight, latitudeNorth, latitudeSouth));
		
	
		var latitudePercentage = map(lati, latitudeNorth, latitudeSouth, 0, 100);
		
		
		var compareOffset = $("#timehandler").offset();
		
		var compareX = compareOffset.left;
		var compareY = compareOffset.top;
		
		compareTime = new Date().getTime();
		
		prevPosX = mouseX_;
		prevPosY = mouseY_;
		
		predistance = moveddistance;
	
	};
	
	function secondCancel(event){

		speedArray = [];
		speedXArray = [];
		speedYArray = [];
				
		$(".skipwrapper").removeClass("putBack");	
		if($("#doubletapExit").hasClass("progress100") && !$("#doubletapExit").hasClass("checked")){
			$("#doubletapExit").removeClass("progress100");
		}	
		$("#detailLatitude").addClass("detailShowHide");
		$(".detailAdjustingShow").removeClass("detailAdjustingShow");


		var hideDetail = $(".latitudeDetailNumber").get();
		var hideDetailTime = 300/hideDetail.length;			

		$.each(hideDetail, function(i, item){
			setTimeout(function() {
				$(item).removeClass("detailShow");
				$(item).addClass("detailShowFastHide");
			}, hideDetail * i);
		});
		firstTime = true;
		exiting = false;		
	};
	
	function secondEnd(event){
		var e = event.originalEvent;
		$(".skipwrapper").removeClass("putBack");	
		$("#detailLatitude").removeClass("detailShow");

		$(".detailAdjustingShow").removeClass("detailAdjustingShow");
		
		var hideDetail = $(".latitudeDetailNumber").get();
		var hideDetailTime = 300/hideDetail.length;			

		$.each(hideDetail, function(i, item){
			setTimeout(function() {
				$(item).removeClass("detailShow");
				$(item).addClass("detailShowFastHide");
			}, hideDetail * i);
		});


		$("#detailLatitude").addClass("detailShowFastHide");

		
		if($("#doubletapExit").hasClass("progress100") && !$("#doubletapExit").hasClass("checked")){
			$("#doubletapExit").removeClass("progress100");
		}	
		speedArray = [];
		speedXArray = [];
		speedYArray = [];
		firstTime = true;
		
		if(longTimeoutSet){
			clearTimeout(longTimeout);
			longTimeoutSet = false;
		}
		
		exiting = false;
		
		var now = new Date().getTime();
		var timeDifference = now - startTime;
		
		
		if(!moved && !tooFar){
			if(timeDifference<200){
				tapAdjust();
				
				
			}
		}

		moved = false;
		exiting = false;
		tapCount = 0;


		
		if($("#adjustLatitude").hasClass("checked")){
			setTimeout(function(){
				$("#adjustLatitude").addClass("fadeInBottomHideUp");
				$("#adjustLatitudeText").addClass("fadeInBottomHideUp");
				setTimeout(function(){
					$("#doubletapExit").addClass("fadeInBottom");
					$("#skip").addClass("progress80");
				}, 180);
			}, 200)
		}
		
	};

/*
click(function(e){
		if(touching){
			mouseX_ = e.touches[0].pageX;	
			mouseY_ = e.touches[0].pageY;
		}else {
			mouseX_ = e.clientX;
			mouseY_ = e.clientY;
			//irgendein werte reset funktioniert noch nicht… - evtl. einen eigenen cursor mit delete einführen - oder ganz leicht die opacity von den gradients erhöhen? - dann aber cursor auf pointer lassen
			deleteAll(mouseX_);
		}
		e.stopPropagation()
	});
	
*/
	
	

	$("#deletelayer").on('mousedown', function (event){
		if(!onceTouch){
			mouseDown = true;
			deleteDown = true;
			deleteStart(event);
		}
	});
	
	$("#deletelayer").on('mousemove', function (event){
		if(mouseDown && !onceTouch){
			deleteMove(event);
		}
	});
	
	$("#deletelayer").on('mouseup', function (event){
		if(!onceTouch){
			deleteEnd(event);
			mouseDown = false;	
			deleteDown = false;	
			event.stopPropagation();
		}
	});

	
	
	$("#deletelayer").on('touchstart', function(event){
		touching = true;
		deleteStart(event);
		event.stopPropagation();

	});
	
	$("#deletelayer").on('touchmove', function(event){
		deleteMove(event);
	});
	
	$("#deletelayer").on('touchend', function(event){
		deleteEnd(event);
		touching = false;		
		event.stopPropagation();
	});
	
	$("#deletelayer").on('touchcancel', function(event){
		deleteEnd(event);
		touching = false;
		event.stopPropagation();
	});
	
	var distance = 0;
	var predistance = 0;
	var once = false;
	var movedY = 0;
	var movedX = 0;
	var changes = 0;
	var changeX = false;
	var changeY = false;
	var overall = 0;
	var avgSpeed;
	var speedFeedbackSet = false;
	var speedFeedback;
	
	function deleteStart(event) {
		$("#delete").removeClass("slowBack");	
		if(touching){
			$("#delete").addClass("fastAnimation");
		}			
		moved = false;
		var e = event.originalEvent;
		
		distance = 0;
		predistance = 0;
		once = true;
		changes = 0;

		
		startTime = new Date().getTime();
		firstStart = new Date().getTime();


		var e = event.originalEvent;

		if(touching){
			touchstartX = e.touches[0].pageX;
			touchstartY = e.touches[0].pageY;
		}else if(mouseDown){
			touchstartX = e.clientX;
			touchstartY = e.clientY;
		}		
		if(touching){
			mouseX_ = e.touches[0].pageX;	
			mouseY_ = e.touches[0].pageY;
		}else if(mouseDown){
			mouseX_ = e.clientX;
			mouseY_ = e.clientY;
		}
			 
		wholewidth = $(document).width();
		wholeheight = $(document).height();
		
	};

	function deleteMove(event){
		var e = event.originalEvent;
			
		if(touching){
			mouseX_ = e.touches[0].pageX;	
			mouseY_ = e.touches[0].pageY;
		}else if(mouseDown){
			mouseX_ = e.clientX;
			mouseY_ = e.clientY;
		}
		

		var moveddistance = getDistance( touchstartX, touchstartY, mouseX_, mouseY_);
			
		if(moveddistance>10 || moved){
			moved = true;		
		}
		
		movedX = mouseX_ - touchstartX;
		movedY = mouseY_ - touchstartY;
		

		if(once){
			prevPosX = mouseX_;
			prevPosY = mouseY_;
			compareTime = new Date().getTime();
			predistance=moveddistance;
			once=false;
		};
		
		
		if(!speedFeedbackSet){
			
			speedFeedbackSet = true;
			speedFeedback = setInterval(function(){
				var moveddistance = getDistance( touchstartX, touchstartY, mouseX_, mouseY_);
				var checkDistance = getDistance( prevPosX, prevPosY, mouseX_, mouseY_ );
				
				

				var now = new Date().getTime();
				var timeSpeed = now - startTime;
				var dragSpeed = checkDistance / timeSpeed;
				dragSpeed *= 100;
				
				speedArray.push(dragSpeed);
				
				avgSpeed = getAverage(speedArray.slice(Math.max(speedArray.length - 2, 0)));

				

				var newBg = map(avgSpeed, 0, 2.5, 0, 100);
				if(moveddistance > 15 && movedY < -20 && movedX < 100 && movedX > -100){
					$("#delete").removeClass("slowBack");
					if(avgSpeed < 0.5){
						$("#delete").addClass("slowBack");
					}
					$("#delete").css({"background-size": "100% " + newBg + "%"});			
				}else{
					$("#delete").addClass("slowBack");
					$("#delete").css({"background-size": "100% 0%"});
				}
				
				prevPosX = mouseX_;
				prevPosY = mouseY_;				

			}, 100)			
		}





		if(moveddistance-predistance<0 && moved){
        	touchstartX=mouseX_;
        	touchstartY=mouseY_;
			changes=changes+1;				
			overall=overall+distance;
			moved=false;
			startTime = new Date().getTime();
		};
		
		predistance = moveddistance


	
	};
	
	function deleteEnd(event){
		
		if(speedFeedbackSet){
			clearInterval(speedFeedback);
			speedFeedbackSet = false;
		}


		var now = new Date().getTime();
		var timeDifference = now - firstStart;
		var moveddistance = getDistance( touchstartX, touchstartY, mouseX_, mouseY_);
		
		if(touchstartY + 20 > mouseY_ && touchstartX - 100 < mouseX_ && touchstartX + 100 > mouseX_ && avgSpeed > 2.5){
			if(!moved){
				$("#delete").addClass("slowBack");
				$("#delete").css({"background-size": "100% 0%"});

				if(timeDifference<250 && moveddistance < 3){
					hideShowDelete();
					if(mouseDown){
						setTimeout(function(){$("#delete").css({"background-size": "100% 0%"});}, 100);
						deleteAll(mouseX_);
					}
				}
			}else{

				if(moveddistance>30){
					hideShowDelete();
					setTimeout(function(){$("#delete").css({"background-size": "100% 0%"});}, 100);
					deleteAll(mouseX_);
				}else{
					$("#delete").addClass("slowBack");
					$("#delete").css({"background-size": "100% 0%"});
				}
			}
			
		}else{
			$("#delete").addClass("slowBack");
			$("#delete").css({"background-size": "100% 0%"});
			
			if(!moved){
				
				if(timeDifference<250 && moveddistance < 3){
					hideShowDelete();
					if(mouseDown){
						setTimeout(function(){$("#delete").css({"background-size": "100% 0%"});}, 100);
						deleteAll(mouseX_);
					}
				}
			}
		}
		moved = false;
		speedArray = [];
		avgSpeed = 0;
	};
	
	$("#start").click(function(event){
		$("body").addClass("noselect");	
		if($("#readmore").hasClass("activeButton")){
			$("#readmore").click();
			setTimeout(function(){startClick();}, 100);
		}else{
			startClick();
		}
	});
	
	
	function startClick(){
		$("#start").addClass("activeButton");
		var show = $(".mainMenu").get().reverse();
		var showTime = fullShowTime*0.75 / show.length;			

		$.each(show, function(i, item){
			setTimeout(function() {
				$(item).removeClass("fadeInBottom");
			}, showTime * i);
		});
				

		$(".skipwrapper").show();
		$("#backgroundImage").removeClass("show");
		setTimeout(function(){
			$("#thirdlayer").fadeOut(300);
			$("#instructionTap").addClass("fadeInBottom");

			$("#skip").addClass("fadeInUp");
		}, 250)
	}
	
	
	$("a").click(function(event){
		event.stopPropagation();
	})
	
	$("#readmore").click(function(event){
		if(onceTouch){
			setTimeout(function(){$(window).scrollTop( 0 );}, 150);
		}
		
		$("#readmoreText").slideToggle(300, "easeInOutQuad");
		$("body").toggleClass("scroll");

		$(this).toggleClass("activeButton");

		if($(this).hasClass("activeButton")){
			$(this).html("hide again …");
		}else{
			$(this).html("read more …");
		}
		event.stopPropagation();
	});
	
	
	$("#menu").click(function(event){
		
		$("#share").removeClass("active");
		$("#start").hide();
		

		
		if($("#readmore").hasClass("activeButton")){
			$("#readmore").click();
			setTimeout(function(){menuClick();}, 100);
		}else{
			menuClick();
		}	


		
		
			
	});
	
	function menuClick(){
		if(!$("#sharelayer").hasClass("shown")){
		
			if(!$("#thirdlayer").hasClass("shown")){
				
				$("#delete").addClass("inactive");
				$("#adjustTimeText").addClass("backUpLittle");
				$("#finished").addClass("fadeInBottomHideUp");
				
				showMenu(false, false);
				
				$("#thirdlayer").fadeIn(300);
				
				$("body").removeClass("noselect");
	
				var show = $(".mainMenu").get();
				var showTime = fullShowTime / show.length;
				
				$.each(show, function(i, item){
					setTimeout(function() {
						$(item).addClass("fadeInBottom");
					}, showTime * i);
				});

				$("#menu, #share").removeClass("nohover");
				$("#menu").addClass("active");
				$("#thirdlayer").addClass("shown");

				$("#delete").addClass("fadeInSideHideBackRight");
				$("#delete").removeClass("fadeInSideRight");			

				
			}else{
				
				if(gradientArray.length>0){
					$("#timehandlerCircle").addClass("on");
					resetTimeHandleTimeout(1000);	
					$("#delete").removeClass("inactive");
				}
				
				
				var show = $(".mainMenu").get().reverse();
				var showTime = fullShowTime / show.length;			

				$.each(show, function(i, item){
					setTimeout(function() {
						$(item).removeClass("fadeInBottom");
					}, showTime * i);
				});
				
				$("body").addClass("noselect");

				setTimeout(function(){
					$("#thirdlayer").fadeOut(300);
				}, 250)
				
				$("#delete").removeClass("fadeInSideHideBackRight");
				$("#delete").addClass("fadeInSideRight");			

				$("#menu").removeClass("active");
				$("#menu, #share").addClass("nohover");
				$("#thirdlayer").removeClass("shown");
			}
			
			
		}else{
			$("#sharelayer").removeClass("shown");
			$("#share").removeClass("active");
			
			var show = $(".shareMenu").get();				
			var showTime = fullShowTime / show.length;			

			$.each(show, function(i, item){
				setTimeout(function() {
					$(item).removeClass("fadeInUp");
				}, showTime * i);
			});
			
			
			setTimeout(function(){
				var show = $(".mainMenu").get();
				var showTime = fullShowTime / show.length;			
				
				$.each(show, function(i, item){
					setTimeout(function() {
						$(item).addClass("fadeInBottom");
					}, showTime * i);
				});
				
				$("#delete").addClass("fadeInSideHideBackRight");
				$("#delete").removeClass("fadeInSideRight");			

				$("#thirdlayer").addClass("shown");
				$("#menu").addClass("active");

				$("#sharelayer").css({"display":"none"});
				
			}, 230);
			
		}
	};
	
	
	var fullShowTime = 200;
		
	$("#share").click(function(){

		$("#menu").removeClass("active");
		if($("#readmore").hasClass("activeButton")){
			$("#readmore").click();
			setTimeout( function(){ShareClick()}, 100);
		}else{
			ShareClick();
		}	
	});
	
	function ShareClick(){
		if(!$("#thirdlayer").hasClass("shown")){
		
			if(!$("#sharelayer").hasClass("shown")){
			
				$("#sharelayer").css({"display":"table"});
				
				$("body").removeClass("noselect");
				
				$("#delete").addClass("inactive");
				$("#adjustTimeText").addClass("backUpLittle");
				$("#finished").addClass("fadeInBottomHideUp");
				
				showMenu(false, false);
				
				$("#thirdlayer").fadeIn(300);
	
				var show = $(".shareMenu").get().reverse();
				
				var showTime = fullShowTime / show.length;			

				$.each(show, function(i, item){
					setTimeout(function() {
						$(item).addClass("fadeInUp");
					}, showTime * i);
				});
				$("#share").addClass("active");
				$("#menu, #share").removeClass("nohover");
				
				$("#delete").addClass("fadeInSideHideBackRight");
				$("#delete").removeClass("fadeInSideRight");			

				$("#sharelayer").addClass("shown");

			}else{
				
				$("#sharelayer").removeClass("shown");
				$("#share").removeClass("active");
				
				$("#menu, #share").addClass("nohover");
				
				$("body").addClass("noselect");	
				
				if(gradientArray.length>0){
					$("#timehandlerCircle").addClass("on");
					resetTimeHandleTimeout(1000);	
					$("#delete").removeClass("inactive");
				}
				

				var show = $(".shareMenu").get();
				
				var showTime = fullShowTime / show.length;			

				$.each(show, function(i, item){
					setTimeout(function() {
						$(item).removeClass("fadeInUp");
					}, showTime * i);
				});

				$("#delete").removeClass("fadeInSideHideBackRight");
				$("#delete").addClass("fadeInSideRight");			

				
				setTimeout(function(){
					$("#thirdlayer").fadeOut(300, function(){
						$("#sharelayer").css({"display":"none"});
					});
				}, 250)

			}
		}else{
			
			
			$("#sharelayer").css({"display":"table"});
				
			var show = $(".mainMenu").get().reverse();
			var showTime = fullShowTime / show.length;			
			
			$.each(show, function(i, item){
				setTimeout(function() {
					$(item).removeClass("fadeInBottom");
				}, showTime * i);
			});			
			
			$("#menu").removeClass("active");
			$("#thirdlayer").removeClass("shown")

			$("#delete").addClass("fadeInSideHideBackRight");
			$("#delete").removeClass("fadeInSideRight");			

	
			setTimeout(function(){
				var show = $(".shareMenu").get().reverse();

				var showTime = 200 / show.length;
				$.each(show, function(i, item){
					setTimeout(function() {
						$(item).addClass("fadeInUp");
					}, showTime * i);
				});
				
				$("#share").addClass("active");				
				$("#sharelayer").addClass("shown");
			}, 230);

		}			
	}
	
	
	$("#skip").click(function(event){
		
		$(this).addClass("activeButton");
		
		$("#instructionTap").addClass("fadeInBottomHideUp");
		$("#adjustTime").addClass("fadeInBottomHideUp");
		$("#adjustTimeText").addClass("fadeInBottomHideUp");
		$("#doubletapEnter").addClass("fadeInBottomHideUp");
		$("#adjustLatitude").addClass("fadeInBottomHideUp");
		$("#adjustLatitudeText").addClass("fadeInBottomHideUp");
		$("#doubletapExit").addClass("fadeInBottomHideUp");



		
		setTimeout(function(){
			$("#skip").addClass("fadeInUpHideBottom");
			setTimeout(function(){
				$("#finished").addClass("fadeInBottom");
				$("#finished").addClass("progress100");
				
				$(".skipwrapper").hide();				
				
				if(gradientArray.length==0){
					$("#delete").addClass("inactive");
				}
				
				showMenu(true, false);
								
				setTimeout(function(){
					$("#adjustTimeText").addClass("backUpLittle");
					$("#finished").addClass("fadeInBottomHideUp");
				}, 5000);
				
				$("#instructionTap").addClass("checked");
				$("#adjustTime").addClass("checked");
				$("#adjustTimeText").addClass("checked");
				$("#doubletapEnter").addClass("checked");
				$("#adjustLatitude").addClass("checked");
				$("#adjustLatitudeText").addClass("checked");
				$("#doubletapExit").addClass("checked");

			}, 200)
				
		}, 150);
		
		

		event.preventDefault();
	});
	
	$("#delete").click(function(event){
		hideShowDelete();
	});
	
	updateTimeDrag();
	
	$(window).resize($.throttle(300, function(){
		if(gradientArray.length>0){
			updated = false;
			updateSize();
		}
		updateTimeDrag();
	}));
	
	function tapCreate(){

			if(!$("#instructionTap").hasClass("progress33")){
				$("#instructionTap").addClass("progress33");
			}else if($("#instructionTap").hasClass("progress33") && !$("#instructionTap").hasClass("progress66")){
				$("#instructionTap").addClass("progress66");
			}else if($("#instructionTap").hasClass("progress66")){
				$("#instructionTap").addClass("checked");
				setTimeout(function(){
					$("#instructionTap").addClass("fadeInBottomHideUp");
					setTimeout(function(){
						$("#adjustTime").addClass("fadeInBottom");
						$("#skip").addClass("progress20");
						setTimeout(function(){
							$("#adjustTimeText").addClass("fadeInBottom");
							$("#timehandlerCircle").addClass("on");
							resetTimeHandleTimeout(2000);
						}, 100); 
					}, 200)
				}, 280);
			}

			resetTimeHandleTimeout(1000);

			if(!latitudeOn && !dragDelete && !dragLatitudeOverlay && !dragTimeAdjust){
				
				var left = false;
				var windowWidth = $(document).width();		
				var halfWindow = windowWidth/2;
				
				if(mouseX_>halfWindow || gradientArray.length == 0){
					left=false;
				}else{
				//	left=true; // anschalten um auch rechts hinzuzfügen…
				}
							
				createGradient(longi, lati, day, left);
			}else{
				//alert("check");
				//deleteGradient();
			}
			
		};
		//### swipe ausgestellt - über click machen da das hier die mausversion ist.
	
	function tapAdjust(){
		if(latitudeOn &&  !dragDelete && !dragLatitudeOverlay && !dragTimeAdjust){
			settingLatitudes(999, 999, 999);
		}		
	}
	

	

});


function hideShowDelete(){
	if(gradientArray.length>0 && !$(this).hasClass("inactive")){
		if(!$("#delete").hasClass("focused")){
			$("#delete").addClass("focused");
			$(".left").addClass("ontop");
			$("#deletelayer").show();
			$("#deleteText").transition({ width: "auto" , paddingRight : "20px"}, 300, "easeInOutQuad");
			
			$("#adjustTimeText").addClass("backUpLittle");
			$("#finished").addClass("fadeInBottomHideUp");
			var menuitems = $("#share, #menu").get();

			$.each(menuitems, function(i, item) {
				//console.log(i);
				setTimeout(function() {
					$(item).addClass("fadeInSideHideBack");
					$(item).removeClass("fadeInSide");
				}, 70 * i);
			});
		}else{

			$(".left").removeClass("ontop");
			$("#delete").removeClass("focused");
			$("#deleteText").transition({ width: "0px" , paddingRight : "0px"}, 300, "easeInOutQuad");
			
			setTimeout(function(){$("#deletelayer").hide();}, 50);
			var menuitems = $("#share, #menu").get().reverse();

			$.each(menuitems, function(i, item) {
				//console.log(i);
				setTimeout(function() {
					$(item).addClass("fadeInSide");
					$(item).removeClass("fadeInSideHideBack");
				}, 70 * i);
			});				
		}
	}
	
};

function enterLatitude(fromWhere_){

		
		var numberOfItems = gradientArray.length;

		
		$("#timehandlerCircle").removeClass("on");	

		showMenu(true, true);
		
		

				
		var windowWidth = $(document).width();		
		var windowHeight = $(window).height();
		
		var temp = map(fromWhere_, 0, windowWidth, 0, numberOfItems);
		var halfToDelete;
		if(temp<numberOfItems/2){
			halfToDelete = Math.floor(temp);
		}else{
			halfToDelete = Math.ceil(temp);
		}
		
		var divs = $(".latitude").get().slice(0, halfToDelete).reverse(); 
		var divs_ = $(".latitude").get().slice(halfToDelete, numberOfItems);
		
		//$("#console").html(numberOfItems + " // " + halfToDelete + " // " + temp);						

		var delayTime = 200 / divs.length;

		
		$.each(divs, function(i, item) {
			//console.log(i);
			setTimeout(function() {
				$(item).addClass("show");
				$(item).prev().addClass("hide_bg");	
			}, delayTime * i);
			
		});

		var delayTime_ = 200 / divs_.length;
		
		$.each(divs_, function(i, item) {
			//console.log(i);
			setTimeout(function() {
				$(item).addClass("show");
				$(item).prev().addClass("hide_bg");	
			}, delayTime_ * i);
			
		});



		$("#secondlayer").show();





	
	latitudeOn = true;
}


function exitLatitude(fromWhere_){



		var numberOfItems = gradientArray.length;

		$("#secondlayer").removeClass("grabbing");
		
		$("#timehandlerCircle").addClass("on");	

		if($("#skip").hasClass("fadeInUpHideBottom")){
			showMenu(true, false);
		}
			

				
		var windowWidth = $(document).width();		
		var windowHeight = $(window).height();
		
		var temp = map(fromWhere_, 0, windowWidth, 0, numberOfItems);
		var halfToDelete;
		if(temp<numberOfItems/2){
			halfToDelete = Math.floor(temp);
		}else{
			halfToDelete = Math.ceil(temp);
		}

				
		//$("#console").html(numberOfItems + " // " + halfToDelete + " // " + temp);		
		var divs = $(".latitude").get().slice(0, halfToDelete); 
		var divs_ = $(".latitude").get().slice(halfToDelete, numberOfItems).reverse();
				
		//$("#console").html(divs.length + " // " + divs_.length );
		
		var delayTime = 200 / divs.length;

		
		$.each(divs, function(i, item) {
			//console.log(i);
			var addon = 0;
			if(divs.length == 1){
				addon = 0.65;
			}
			
//			$("#console").append("/+/ " + i);
			setTimeout(function() {
				$(item).removeClass("show");
				$(item).prev().removeClass("hide_bg");
			}, delayTime * (i+addon));
			
		});

		var delayTime_ = 200 / divs_.length;

		$.each(divs_, function(i, item) {
			//console.log(i);
			var addon = 0;
			if(divs_.length == 1){
				addon = 0.65;
			}
			

			setTimeout(function() {
				$(item).removeClass("show");
				$(item).prev().removeClass("hide_bg");
			}, delayTime_ * (i+addon));
			
		});

	updateLatitudes("right");

	setTimeout(function(){
		latitudeOn = false; updateBg();
	}, 200);

	$("#secondlayer").hide();


	resetTimeHandleTimeout(2000);

	
	
}




var night = false;

var wholeminutes = 60*24;
var d = new Date();
var h = d.getHours()*60;
var n = d.getMinutes();


var minuteSum = h+n;

var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
var yearFirstDay = Math.floor(timestmp / 86400000);
var today = Math.ceil((new Date().getTime()) / 86400000);

var dayOfYear = today-yearFirstDay;//182;


var clock = minuteSum;
var day = dayOfYear;



var sunriseTime = 0;


var gradientArray = [];
var deleting = false;


function resetTimeDrag(){
	d = new Date();
	h = d.getHours()*60;
	n = d.getMinutes();
	
	minuteSum = h+n;
	
	timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
	yearFirstDay = Math.floor(timestmp / 86400000);
	today = Math.ceil((new Date().getTime()) / 86400000);
	dayOfYear = today - yearFirstDay;
	
	
	clock = minuteSum;
	day = dayOfYear;
	

	
	updateTimeDrag();
	
	
}



function deleteAll(fromWhereDelete){

		updatedFirst = false;
		
		var numberOfItems = gradientArray.length;


		$("body").css({"text-align":"center"});

		setTimeout(function(){$("#delete").addClass("inactive");}, 700);
		
		$("#timehandlerWrapper").css({"opacity":0});	

				
		var windowWidth = $(document).width();		
		var windowHeight = $(window).height();
		
		var temp = map(fromWhereDelete, 0, windowWidth, 0, numberOfItems);
		var halfToDelete;
		
		if(temp<numberOfItems/2){
			halfToDelete = Math.floor(temp);
		}else{
			halfToDelete = Math.ceil(temp);
		}
		

		

		
		var divs = $(".bgcontainer").get().slice(0, halfToDelete).reverse(); 
		var divs_ = $(".bgcontainer").get().slice(halfToDelete, numberOfItems);
				
		var firstDivCount = 0;
		var secondDivCount = 0;		
		
		var delayTime = 400 / numberOfItems;
		var extraTime = 0;

		$.each(divs, function(i, item) {
			//console.log(i);
			if(divs.length == 1 && i == 0){
				extraTime = 1.2;
			}else{
				extraTime = 0;
			}

			setTimeout(function() {
				$(item).animate({"top":-windowHeight-150, "opacity" : "0" }, 300, "easeInQuad");
			}, delayTime * (i+extraTime));
			
		});
 
		var secondDivCount = 0;		
		
		$.each(divs_, function(i, item) {
			if(divs_.length == 1 && i == 0){
				extraTime = 1.2;
			}else{
				extraTime = 0;
			}
			setTimeout(function() {
				$(item).animate({"top":-windowHeight-150, "opacity" : "0" }, 300, "easeInQuart");
				
			}, delayTime * (i+extraTime));
			
		});
		
		while(gradientArray.length > 0) {
		    gradientArray.pop();
		}	
		while(offArr.length > 0) {
		    offArr.pop();
		}	
		while(nautArr.length > 0) {
		    nautArr.pop();
		}	
		while(buergArr.length > 0) {
		    buergArr.pop();
		}	
		while(astroArr.length > 0) {
		    astroArr.pop();
		}		
		setTimeout(function(){
	 		$(".bgcontainer").remove();
	 		deleting = false;
	 		if(latitudeOn){
		 		exitLatitude();
	 		}
	 		unchanged = true;
	 		resetTimeDrag();

	 	}, 750);

		

		
	

}


function updateSize(){


	updatedFirst = true;

	$("#timehandlerWrapper").css({"opacity":1});
	
	if(!updated){
		var documentwidth = $(document).width();
		var sizeNow = $("#gradientwrapper").width();
		var count = gradientArray.length;
	
		if(documentwidth%count == 0){
			$("#gradientwrapper").css({"width": "100%", "left": "0px"});
		}else{
	
			var newSize = Math.ceil((sizeNow / count))*count;
			var newPercentageSize = (newSize/documentwidth)*100;
			
			var halfWidth = (newSize-documentwidth)/-2;
			

			
			$("#gradientwrapper").css({"width":newPercentageSize + "%", "left" : halfWidth + "px"});
	
		}		
	}
	updated = true;
	
	if(gradientArray.length > 0){
		if($("#container0").width() < 70){
			$(".latitudeDetailNumber").addClass("neverShow");
		}else{
			$(".latitudeDetailNumber").removeClass("neverShow");
		}

	}
}

var updateTimeOutSet = false;
var updateTimeOut;
var updated = false;


function createGradient(longitude, latitude, newday, left){

	$("body").css({"text-align":"left"});
	$("#delete").removeClass("inactive");

	var newId = gradientArray.length;	
	if(!left){

		$("#gradientwrapper").append("<div class='bgcontainer' id='container" + newId + "'><div class='bg' id='" + newId + "'></div><div class='latitude' id='latitude" + newId + "'><div class='latitudeDetailNumber' id='latitudeDetailNumber" + newId + "'></div></div></div>");		

	}else{
		//element ganz am anfang hinzufügen…
		$(".bgcontainer").first().before("<div class='bgcontainer' id='container" + newId + "'><div class='bg' id='" + newId + "'></div><div class='latitude' id='latitude" + newId + "'></div><div class='latitudeDetailNumber' id='latitudeDetailNumber" + newId + "'></div></div>");

	}
		

	var latitudePercentage = map(latitude, latitudeNorth, latitudeSouth, 0, 100);
	
	$("#latitude" + newId).css({"width": "100%"});	
	$("#latitude" + newId).css({"top": latitudePercentage + "%"});
	
	var obj = {
		id: newId,
		parseOff: false,
		parseBuerg: false,
		parseNaut: false,
		parseAstro: false,
		Astro: false,
		Naut: false,
		Buerg: false,
		loadingTimes: 0,
		latitude: latitude,
		day : newday,
		Off: false,
		reloadLatitude: false,
		newLatitude: null,
		checkParsed: function (){
			if(this.parseOff && this.parseBuerg && this.parseNaut && this.parseAstro){
				drawBg(offArr[this.id], buergArr[this.id], nautArr[this.id], astroArr[this.id], this.id);

				var thisID = this.id;


				var newLength = gradientArray.length;
				var newWidth = (1/newLength)*100;
				$("#container" + thisID).css({"width": newWidth + "%"});
				$(".bgcontainer").css({"width": newWidth + "%"});

				if(gradientArray[thisID].reloadLatitude){
					$("#latitude" + thisID).css({"width":" 100%"});
				}


						
				$("#" + thisID).css("opacity");
				setTimeout(function(){
					if(gradientArray[thisID].reloadLatitude){
						$("#latitude" + thisID).css({"opacity":"0"});
					}					
				}
				, 200);
				
				
				
				setTimeout(function(){
					$("#" + thisID).css({"opacity":"1"});

					if(gradientArray[thisID].reloadLatitude){
						$("#latitude" + thisID).css({"opacity":"0"});
					}					
				}
				, 500);

				gradientArray[thisID].latitude = gradientArray[thisID].newLatitude;
				gradientArray[thisID].reloadLatitude = false;


				setTimeout(function(){
					$("#" + thisID).css({"opacity":"1"});
					$("#latitude" + thisID).css({"opacity":"0"});

					if (comeBackTimeoutSet){

						clearTimeout(comeBackTimeout);
						comeBackTimeoutSet = false;
					}
					
					comeBackTimeout = setTimeout(function(){

						comeBackTimeoutSet = false;
					} , 500);
					comeBackTimeoutSet = true;
										
				}, 900);
				
				
			}else{
				this.loadingTimes++;
				var thisID = this.id;				
				switch (this.loadingTimes){
					case 1:
						$("#latitude" + this.id).css({"opacity":"0.25"});
						if(gradientArray[thisID].reloadLatitude){
							$("#latitude" + thisID).css({"width":"25%"});
						}					
						break;
					case 2:
						$("#latitude" + this.id).css({"opacity":"0.5"});
						if(gradientArray[thisID].reloadLatitude){
							$("#latitude" + thisID).css({"width":"50%"});
						}					
						if(updateTimeOutSet){
							clearTimeout(updateTimeOut);
							updateTimeOutSet = false;
						}	
		
			        	updateTimeOut = setTimeout(function(){updateSize()},1000);
						updateTimeOutSet = true;
												
						break;
					case 3:
						$("#latitude" + this.id).css({"opacity":"0.75"});
						if(gradientArray[thisID].reloadLatitude){
							$("#latitude" + thisID).css({"width":"75%"});
						}					
						break;
				}

				//console.log("fail")
			};
		}
	};
	
	//gradientArray.splice(newId, 0, obj);

	gradientArray.push(obj);
	
	loadAndParseCSV(longitude, latitude, newId);
	
	var newLength = gradientArray.length;
	var newWidth = (1/newLength)*100;
	if(!left){
		$(".bgcontainer").css({"width": newWidth + "%"});
	}
	$("#container" + newId).css({"width": "0%"});
	var partNewWidth = newWidth/10;
	setTimeout(function(){$("#container" + newId).css({"width": partNewWidth + "%"});}, 20);

	updated = false;

}

var offArr = [];
var buergArr = [];
var nautArr = [];
var astroArr = [];


function loadAndParseCSV(longitude, latitude, id){
	var urlOff = "api.php?client=5mQNicMv2c&location=Berlin&longitude=" + longitude + "&latitude=" + latitude + "&zenith=90.83333333333&year=2014&month=1&offsett=0&nodst=TRUE";
	var urlBuerg = "api.php?client=5mQNicMv2c&location=Berlin&longitude=" + longitude + "&latitude=" + latitude + "&zenith=96&year=2014&month=1&offsett=0&nodst=TRUE";
	var urlNaut = "api.php?client=5mQNicMv2c&location=Berlin&longitude=" + longitude + "&latitude=" + latitude + "&zenith=102&year=2014&month=1&offsett=0&nodst=TRUE";
	var urlAstro = "api.php?client=5mQNicMv2c&location=Berlin&longitude=" + longitude + "&latitude=" + latitude + "&zenith=108&year=2014&month=1&offsett=0&nodst=TRUE";
	gradientArray[id].parseOff = false;
	gradientArray[id].parseBuerg = false;
	gradientArray[id].parseNaut = false;
	gradientArray[id].parseAstro = false;
				
	$.ajax({
        type: "GET",
        url: urlOff, //"gd.csv", //
        dataType: "text",
        success: function(data){
			parsedObject = $.parse(data, {
				delimiter: ";",
				header: false,
				dynamicTyping: false,
				preview: 0
			});
			offArr[id] = parsedObject;
			
			gradientArray[id].parseOff = true;
			gradientArray[id].checkParsed();
        }
     });
	$.ajax({
        type: "GET",
        url: urlBuerg, //"gd.csv", //
        dataType: "text",
        success: function(data){
			parsedObject = $.parse(data, {
				delimiter: ";",
				header: false,
				dynamicTyping: false,
				preview: 0
			});

			buergArr[id]=parsedObject;

			gradientArray[id].parseBuerg = true;
			gradientArray[id].checkParsed();
        }
     });
	$.ajax({
        type: "GET",
        url: urlNaut, //"gd.csv", //
        dataType: "text",
        success: function(data){
			parsedObject = $.parse(data, {
				delimiter: ";",
				header: false,
				dynamicTyping: false,
				preview: 0
			});
			
			nautArr[id]=parsedObject;

			gradientArray[id].parseNaut = true;
			gradientArray[id].checkParsed();
        }
     });
	$.ajax({
        type: "GET",
        url: urlAstro, //"gd.csv", //
        dataType: "text",
        success: function(data){
			parsedObject = $.parse(data, {
				delimiter: ";",
				header: false,
				dynamicTyping: false,
				preview: 0
			});
			
			astroArr[id]=parsedObject;      
        
			gradientArray[id].parseAstro = true;
			gradientArray[id].checkParsed();
        }
     });
	
}

function drawBg(arrO, arrB, arrN, arrA, id){

		
		//Abfangen
		//bei Zeiten unter 00:00 in sunrise, bzw. über 23:59 in sunset - jeweils auf 00:00 bzw. 24:00 beschränken?
		//Zeiten die keinen wert zurückgeben - Polartag usw…
		
		//probleme bei polartag/nacht wenn nur false werte übergeben werden
		// -> dann durchgehen vom jahresanfang um rauszubekommen welche phase es ist und welcher verlauf angezeigt werden muss
		
		
		var firstArr;
		var secondArr;
		var partPercentage;
		
		var point1= -999
		var point2= -999
		var point3= -999
		var point4= -999
		
		var noon = 720;
		
		var point_4= -999;
		var point_3= -999;
		var point_2= -999;
		var point_1= -999;
		
		var mirrorPoint;
		var mirrorPoint_;	

		var newday = gradientArray[id].day;

		var sunriseOff = arrO.results[newday][0];
		var sunsetOff = arrO.results[newday][1];
		
		var sunriseBuerg = arrB.results[newday][0];
		var sunsetBuerg = arrB.results[newday][1];
		
		var sunriseNaut = arrN.results[newday][0];
		var sunsetNaut = arrN.results[newday][1];
		
		var sunriseAstro = arrA.results[newday][0];
		var sunsetAstro = arrA.results[newday][1];

		$("#console_second").html(sunriseAstro + " / " + sunriseNaut + " / " + sunriseBuerg + " / " + sunriseOff);
		
		var gradientCount = 4;
		
		if(arrA.results[newday][0] == " " && arrA.results[newday][1] == " "){
			//console.log("NoAstro");
			gradientArray[id].Astro = false;
			gradientCount--;
		}else{
			gradientArray[id].Astro = true;		
			//console.log("Astro");			
		}
		
		if(arrN.results[newday][0] == " " && arrN.results[newday][1] == " "){
			//console.log("NoNaut");
			gradientArray[id].Naut = false;
			gradientCount--;
		}else{
			gradientArray[id].Naut = true;
			//console.log("Naut");			
		}
		
		if(arrB.results[newday][0] == " " && arrB.results[newday][1] == " "){
			//console.log("NoBuerg");			
			gradientArray[id].Buerg = false;
			gradientCount--;
		}else{
			gradientArray[id].Buerg = true;
			//console.log("Buerg");			
		}
		
		if(arrO.results[newday][0] == " " && arrO.results[newday][1] == " "){
			//console.log("NoOff");			
			gradientArray[id].Off = false;
			gradientCount--;			
		}else{
			gradientArray[id].Off = true;
			//console.log("Off");			
		}


	
		sunriseOff = toMinutes(sunriseOff);
		sunsetOff = toMinutes(sunsetOff);
		
		sunriseBuerg = toMinutes(sunriseBuerg);
		sunsetBuerg = toMinutes(sunsetBuerg);
		
		sunriseNaut = toMinutes(sunriseNaut);
		sunsetNaut = toMinutes(sunsetNaut);
		
		sunriseAstro = toMinutes(sunriseAstro);
		sunsetAstro = toMinutes(sunsetAstro);


		switch(gradientCount){
			case 4:
				//console.log("4");
					point1 = sunriseAstro;
					point_1 = sunsetAstro;
					
					first_top = night_am_top;
					first_firstQuart = night_am_firstQuart;
					first_secondQuart = night_am_secondQuart;
					first_bottom = night_am_bottom;
					
					first_firstQuartArr = night_am_firstQuartArr;
					first_secondQuartArr = night_am_secondQuartArr;
					

					point2 = sunriseNaut;
					point_2 = sunsetNaut;
					
					second_top = d1_am_top;
					second_firstQuart = d1_am_firstQuart;
					second_secondQuart = d1_am_secondQuart;
					second_bottom = d1_am_bottom;
					
					second_firstQuartArr = d1_am_firstQuartArr;
					second_secondQuartArr = d1_am_secondQuartArr;
					
					
					point3 = sunriseBuerg;
					point_3 = sunsetBuerg;
					
					third_top = d2_am_top;
					third_firstQuart = d2_am_firstQuart;
					third_secondQuart = d2_am_secondQuart;
					third_bottom = d2_am_bottom;
					
					third_firstQuartArr = d2_am_firstQuartArr;
					third_secondQuartArr = d2_am_secondQuartArr;
					
					
					
					point4 = sunriseOff;
					point_4 = sunsetOff;
					
					fourth_top = d3_am_top;
					fourth_firstQuart = d3_am_firstQuart;
					fourth_secondQuart = d3_am_secondQuart;
					fourth_bottom = d3_am_bottom;

					fourth_firstQuartArr = d3_am_firstQuartArr;
					fourth_secondQuartArr = d3_am_secondQuartArr;
					
					
					
					mirrorPoint = point4;
					mirrorPoint_ = point_4;
					
					mirror_top = d_am_top;
					mirror_firstQuart = d_am_firstQuart;
					mirror_secondQuart = d_am_secondQuart;
					mirror_bottom = d_am_bottom;
					
					mirror_firstQuartArr = d_am_firstQuartArr;
					mirror_secondQuartArr = d_am_secondQuartArr;
					
					sunriseTime = 20;
			
				
				
				break;
						// easy to establish a second gradient for the later newday - just change it here and where you select it.
						//easy to use different gradients for differnt cases… just declare them at the top and write them into one of the cases…
			case 3:
				//console.log("3");
				if(!gradientArray[id].Astro){
					point1 = sunriseNaut;
					point_1 = sunsetNaut;
					
					first_top = d1_am_top;
					first_firstQuart = d1_am_firstQuart;
					first_secondQuart = d1_am_secondQuart;
					first_bottom = d1_am_bottom;
					
					first_firstQuartArr = d1_am_firstQuartArr;
					first_secondQuartArr = d1_am_secondQuartArr;
					
					
					
					point2 = sunriseBuerg;
					point_2 = sunsetBuerg;
					
					second_top = d2_am_top;
					second_firstQuart = d2_am_firstQuart;
					second_secondQuart = d2_am_secondQuart;
					second_bottom = d2_am_bottom;
					
					second_firstQuartArr = d2_am_firstQuartArr;
					second_secondQuartArr = d2_am_secondQuartArr;
					
					
					
					point3 = sunriseOff;
					point_3 = sunsetOff;
					
					third_top = d3_am_top;
					third_firstQuart = d3_am_firstQuart;
					third_secondQuart = d3_am_secondQuart;
					third_bottom = d3_am_bottom;
					
					third_firstQuartArr = d3_am_firstQuartArr;
					third_secondQuartArr = d3_am_secondQuartArr;
					
					
					
					mirrorPoint = point3;
					mirrorPoint_ = point_3;
					
					mirror_top = d_am_top;
					mirror_firstQuart = d_am_firstQuart;
					mirror_secondQuart = d_am_secondQuart;
					mirror_bottom = d_am_bottom;
					
					mirror_firstQuartArr = d_am_firstQuartArr;
					mirror_secondQuartArr = d_am_secondQuartArr;
					
					sunriseTime = 20;
				}
				
				if(!gradientArray[id].Off){
					point1 = sunriseAstro;
					point_1 = sunsetAstro;
					
					first_top = night_am_top;
					first_firstQuart = night_am_firstQuart;
					first_secondQuart = night_am_secondQuart;
					first_bottom = night_am_bottom;
					
					first_firstQuartArr = night_am_firstQuartArr;
					first_secondQuartArr = night_am_secondQuartArr;
					

					point2 = sunriseNaut;
					point_2 = sunsetNaut;
					
					second_top = d1_am_top;
					second_firstQuart = d1_am_firstQuart;
					second_secondQuart = d1_am_secondQuart;
					second_bottom = d1_am_bottom;
					
					second_firstQuartArr = d1_am_firstQuartArr;
					second_secondQuartArr = d1_am_secondQuartArr;
					
					
					point3 = sunriseBuerg;
					point_3 = sunsetBuerg;
					
					third_top = d2_am_top;
					third_firstQuart = d2_am_firstQuart;
					third_secondQuart = d2_am_secondQuart;
					third_bottom = d2_am_bottom;
					
					third_firstQuartArr = d2_am_firstQuartArr;
					third_secondQuartArr = d2_am_secondQuartArr;
					
					
					
					mirrorPoint = point3;
					mirrorPoint_ = point_3;
					
					mirror_top = d3_am_top;
					mirror_firstQuart = d3_am_firstQuart;
					mirror_secondQuart = d3_am_secondQuart;
					mirror_bottom = d3_am_bottom;

					mirror_firstQuartArr = d3_am_firstQuartArr;
					mirror_secondQuartArr = d3_am_secondQuartArr;					
				}
				
				break;
				
			case 2:
				//console.log("2");

				if(gradientArray[id].Buerg && gradientArray[id].Off){
					point1 = sunriseBuerg;
					point_1 = sunsetBuerg;
					
					first_top = d2_am_top;
					first_firstQuart = d2_am_firstQuart;
					first_secondQuart = d2_am_secondQuart;
					first_bottom = d2_am_bottom;
					
					first_firstQuartArr = d2_am_firstQuartArr;
					first_secondQuartArr = d2_am_secondQuartArr;
					
					
					
					point2 = sunriseOff;
					point_2 = sunsetOff;
					
					second_top = d3_am_top;
					second_firstQuart = d3_am_firstQuart;
					second_secondQuart = d3_am_secondQuart;
					second_bottom = d3_am_bottom;

					second_firstQuartArr = d3_am_firstQuartArr;
					second_secondQuartArr = d3_am_secondQuartArr;
					
					
					
					mirrorPoint = point2;
					mirrorPoint_ = point_2;
					
					mirror_top = d_am_top;
					mirror_firstQuart = d_am_firstQuart;
					mirror_secondQuart = d_am_secondQuart;
					mirror_bottom = d_am_bottom;
					
					mirror_firstQuartArr = d_am_firstQuartArr;
					mirror_secondQuartArr = d_am_secondQuartArr;
					
					sunriseTime = 20;					
				}
				
				if(gradientArray[id].Naut && gradientArray[id].Buerg){
					point1 = sunriseNaut;
					point_1 = sunsetNaut;
					
					first_top = d1_am_top;
					first_firstQuart = d1_am_firstQuart;
					first_secondQuart = d1_am_secondQuart;
					first_bottom = d1_am_bottom;
					
					first_firstQuartArr = d1_am_firstQuartArr;
					first_secondQuartArr = d1_am_secondQuartArr;
					
					
					
					point2 = sunriseBuerg;
					point_2 = sunsetBuerg;
					
					second_top = d2_am_top;
					second_firstQuart = d2_am_firstQuart;
					second_secondQuart = d2_am_secondQuart;
					second_bottom = d2_am_bottom;

					second_firstQuartArr = d2_am_firstQuartArr;
					second_secondQuartArr = d2_am_secondQuartArr;
					
					
					
					mirrorPoint = point2;
					mirrorPoint_ = point_2;
					
					mirror_top = d3_am_top;
					mirror_firstQuart = d3_am_firstQuart;
					mirror_secondQuart = d3_am_secondQuart;
					mirror_bottom = d3_am_bottom;
					
					mirror_firstQuartArr = d3_am_firstQuartArr;
					mirror_secondQuartArr = d3_am_secondQuartArr;
					
					sunriseTime = 0;					
				}
				
				if(gradientArray[id].Astro && gradientArray[id].Naut){
					point1 = sunriseAstro;
					point_1 = sunriseAstro;
					
					first_top = night_am_top;
					first_firstQuart = night_am_firstQuart;
					first_secondQuart = night_am_secondQuart;
					first_bottom = night_am_bottom;
					
					first_firstQuartArr = night_am_firstQuartArr;
					first_secondQuartArr = night_am_secondQuartArr;
					
					
					
					point2 = sunriseNaut;
					point_2 = sunsetNaut;
					
					second_top = d1_am_top;
					second_firstQuart = d1_am_firstQuart;
					second_secondQuart = d1_am_secondQuart;
					second_bottom = d1_am_bottom;

					second_firstQuartArr = d1_am_firstQuartArr;
					second_secondQuartArr = d1_am_secondQuartArr;
					
					
					
					mirrorPoint = point2;
					mirrorPoint_ = point_2;
					
					mirror_top = d2_am_top;
					mirror_firstQuart = d2_am_firstQuart;
					mirror_secondQuart = d2_am_secondQuart;
					mirror_bottom = d2_am_bottom;
					
					mirror_firstQuartArr = d2_am_firstQuartArr;
					mirror_secondQuartArr = d2_am_secondQuartArr;
					
					sunriseTime = 0;					
				}
				
				break;
				
			case 1:
				//console.log("1");
				
				if(gradientArray[id].Off){
					point1 = sunriseOff;
					point_1 = sunriseOff;
					
					first_top = d3_am_top;
					first_firstQuart = d3_am_firstQuart;
					first_secondQuart = d3_am_secondQuart;
					first_bottom = d3_am_bottom;
					
					first_firstQuartArr = d3_am_firstQuartArr;
					first_secondQuartArr = d3_am_secondQuartArr;
					
					
					
					mirrorPoint = point1;
					mirrorPoint_ = point_1;
					
					mirror_top = d_am_top;
					mirror_firstQuart = d_am_firstQuart;
					mirror_secondQuart = d_am_secondQuart;
					mirror_bottom = d_am_bottom;
					
					mirror_firstQuartArr = d_am_firstQuartArr;
					mirror_secondQuartArr = d_am_secondQuartArr;
					
					sunriseTime = 20;					

				}
				
				if(gradientArray[id].Buerg){
					point1 = sunriseBuerg;
					point_1 = sunriseBuerg;
					
					first_top = d2_am_top;
					first_firstQuart = d2_am_firstQuart;
					first_secondQuart = d2_am_secondQuart;
					first_bottom = d2_am_bottom;
					
					first_firstQuartArr = d2_am_firstQuartArr;
					first_secondQuartArr = d2_am_secondQuartArr;
					
					
					
					mirrorPoint = point1;
					mirrorPoint_ = point_1;
					
					mirror_top = d3_am_top;
					mirror_firstQuart = d3_am_firstQuart;
					mirror_secondQuart = d3_am_secondQuart;
					mirror_bottom = d3_am_bottom;
					
					mirror_firstQuartArr = d3_am_firstQuartArr;
					mirror_secondQuartArr = d3_am_secondQuartArr;
					
					sunriseTime = 0;					

				}
				
				if(gradientArray[id].Naut){
					point1 = sunriseNaut;
					point_1 = sunriseNaut;
					
					first_top = d1_am_top;
					first_firstQuart = d1_am_firstQuart;
					first_secondQuart = d1_am_secondQuart;
					first_bottom = d1_am_bottom;
					
					first_firstQuartArr = d1_am_firstQuartArr;
					first_secondQuartArr = d1_am_secondQuartArr;
					
					
					
					mirrorPoint = point1;
					mirrorPoint_ = point_1;
					
					mirror_top = d2_am_top;
					mirror_firstQuart = d2_am_firstQuart;
					mirror_secondQuart = d2_am_secondQuart;
					mirror_bottom = d2_am_bottom;
					
					mirror_firstQuartArr = d2_am_firstQuartArr;
					mirror_secondQuartArr = d2_am_secondQuartArr;
					
					sunriseTime = 0;					

				}
				
				if(gradientArray[id].Astro){
					point1 = sunriseAstro;
					point_1 = sunriseAstro;
					
					first_top = night_am_top;
					first_firstQuart = night_am_firstQuart;
					first_secondQuart = night_am_secondQuart;
					first_bottom = night_am_bottom;
					
					first_firstQuartArr = night_am_firstQuartArr;
					first_secondQuartArr = night_am_secondQuartArr;
					
					
					
					mirrorPoint = point1;
					mirrorPoint_ = point_1;
					
					mirror_top = d1_am_top;
					mirror_firstQuart = d1_am_firstQuart;
					mirror_secondQuart = d1_am_secondQuart;
					mirror_bottom = d1_am_bottom;
					
					mirror_firstQuartArr = d1_am_firstQuartArr;
					mirror_secondQuartArr = d1_am_secondQuartArr;
					
					sunriseTime = 0;					

				}
				
				
				break;
				
			case 0:
				//console.log("0");
				gradientArray[id].Astro = false;
				gradientArray[id].Naut = false;
				gradientArray[id].Buerg = false;
				gradientArray[id].Off = false;
				
				if(newday>365/2){
					for(i = 365; i > newday; i--){
						checkForValues(arrO, arrB, arrN, arrA, i, id);
					}
				}else{
					for(i = 0; i < newday; i++){
						checkForValues(arrO, arrB, arrN, arrA, i, id);							
					}	
				}
			
				if(lati>=0){
					if(!gradientArray[id].Astro, !gradientArray[id].Naut, !gradientArray[id].Buerg, !gradientArray[id].Off){
						point1 = 0;
						point_1 = wholeminutes;
						
						first_top = night_am_top;
						first_firstQuart = night_am_firstQuart;
						first_secondQuart = night_am_secondQuart;
						first_bottom = night_am_bottom;
						
						first_firstQuartArr = night_am_firstQuartArr;
						first_secondQuartArr = night_am_secondQuartArr;
						
						mirrorPoint = point1;
						mirrorPoint_ = point_1;
						
						mirror_top = night_am_top;
						mirror_firstQuart = night_am_firstQuart;
						mirror_secondQuart = night_am_secondQuart;
						mirror_bottom = night_am_bottom;
						
						mirror_firstQuartArr = night_am_firstQuartArr;
						mirror_secondQuartArr = night_am_secondQuartArr;
						
						sunriseTime = 0;					
					}
					
					if(gradientArray[id].Astro && !gradientArray[id].Naut && !gradientArray[id].Buerg && !gradientArray[id].Off){
						point1 = 0;
						point_1 = wholeminutes;
						
						first_top = night_am_top;
						first_firstQuart = night_am_firstQuart;
						first_secondQuart = night_am_secondQuart;
						first_bottom = night_am_bottom;
						
						first_firstQuartArr = night_am_firstQuartArr;
						first_secondQuartArr = night_am_secondQuartArr;
						
						mirrorPoint = point1;
						mirrorPoint_ = point_1;
						
						mirror_top = d1_am_top;
						mirror_firstQuart = d1_am_firstQuart;
						mirror_secondQuart = d1_am_secondQuart;
						mirror_bottom = d1_am_bottom;
						
						mirror_firstQuartArr = d1_am_firstQuartArr;
						mirror_secondQuartArr = d1_am_secondQuartArr;
						
						sunriseTime = 0;		
					}
					
					if(gradientArray[id].Astro && gradientArray[id].Naut && !gradientArray[id].Buerg && !gradientArray[id].Off){
						point1 = 0;
						point_1 = wholeminutes;
						
						first_top = d1_am_top;
						first_firstQuart = d1_am_firstQuart;
						first_secondQuart = d1_am_secondQuart;
						first_bottom = d1_am_bottom;
						
						first_firstQuartArr = d1_am_firstQuartArr;
						first_secondQuartArr = d1_am_secondQuartArr;
						
						mirrorPoint = point1;
						mirrorPoint_ = point_1;
						
						mirror_top = d2_am_top;
						mirror_firstQuart = d2_am_firstQuart;
						mirror_secondQuart = d2_am_secondQuart;
						mirror_bottom = d2_am_bottom;
						
						mirror_firstQuartArr = d2_am_firstQuartArr;
						mirror_secondQuartArr = d2_am_secondQuartArr;
						
						sunriseTime = 0;
					}
					
					if(gradientArray[id].Astro && gradientArray[id].Naut && gradientArray[id].Buerg && !gradientArray[id].Off){
						point1 = 0;
						point_1 = wholeminutes;
						
						first_top = d2_am_top;
						first_firstQuart = d2_am_firstQuart;
						first_secondQuart = d2_am_secondQuart;
						first_bottom = d2_am_bottom;
						
						first_firstQuartArr = d2_am_firstQuartArr;
						first_secondQuartArr = d2_am_secondQuartArr;
						
						mirrorPoint = point1;
						mirrorPoint_ = point_1;
						
						mirror_top = d3_am_top;
						mirror_firstQuart = d3_am_firstQuart;
						mirror_secondQuart = d3_am_secondQuart;
						mirror_bottom = d3_am_bottom;
						
						mirror_firstQuartArr = d3_am_firstQuartArr;
						mirror_secondQuartArr = d3_am_secondQuartArr;
						
						sunriseTime = 0;
					}				
					
					if(gradientArray[id].Astro && gradientArray[id].Naut && gradientArray[id].Buerg && gradientArray[id].Off){
						point1 = 0;
						point_1 = wholeminutes;
						
						first_top = d3_am_top;
						first_firstQuart = d3_am_firstQuart;
						first_secondQuart = d3_am_secondQuart;
						first_bottom = d3_am_bottom;
						
						first_firstQuartArr = d3_am_firstQuartArr;
						first_secondQuartArr = d3_am_secondQuartArr;
						
						mirrorPoint = point1;
						mirrorPoint_ = point_1;
						
						mirror_top = d_am_top;
						mirror_firstQuart = d_am_firstQuart;
						mirror_secondQuart = d_am_secondQuart;
						mirror_bottom = d_am_bottom;
						
						mirror_firstQuartArr = d_am_firstQuartArr;
						mirror_secondQuartArr = d_am_secondQuartArr;
						
						sunriseTime = 0;
					}				
					
				}else{
					
					if(!gradientArray[id].Astro, !gradientArray[id].Naut, !gradientArray[id].Buerg, !gradientArray[id].Off){
						point1 = 0;
						point_1 = wholeminutes;
						
						first_top = d3_am_top;
						first_firstQuart = d3_am_firstQuart;
						first_secondQuart = d3_am_secondQuart;
						first_bottom = d3_am_bottom;
						
						first_firstQuartArr = d3_am_firstQuartArr;
						first_secondQuartArr = d3_am_secondQuartArr;
						
						mirrorPoint = point1;
						mirrorPoint_ = point_1;
						
						mirror_top = d_am_top;
						mirror_firstQuart = d_am_firstQuart;
						mirror_secondQuart = d_am_secondQuart;
						mirror_bottom = d_am_bottom;
						
						mirror_firstQuartArr = d_am_firstQuartArr;
						mirror_secondQuartArr = d_am_secondQuartArr;
						
						sunriseTime = 0;
					}
					
					if(!gradientArray[id].Astro && !gradientArray[id].Naut && !gradientArray[id].Buerg && gradientArray[id].Off){
						point1 = 0;
						point_1 = wholeminutes;
						
						first_top = d2_am_top;
						first_firstQuart = d2_am_firstQuart;
						first_secondQuart = d2_am_secondQuart;
						first_bottom = d2_am_bottom;
						
						first_firstQuartArr = d2_am_firstQuartArr;
						first_secondQuartArr = d2_am_secondQuartArr;
						
						mirrorPoint = point1;
						mirrorPoint_ = point_1;
						
						mirror_top = d3_am_top;
						mirror_firstQuart = d3_am_firstQuart;
						mirror_secondQuart = d3_am_secondQuart;
						mirror_bottom = d3_am_bottom;
						
						mirror_firstQuartArr = d3_am_firstQuartArr;
						mirror_secondQuartArr = d3_am_secondQuartArr;
						
						sunriseTime = 0;
					}			
					
					if(!gradientArray[id].Astro && !gradientArray[id].Naut && gradientArray[id].Buerg && gradientArray[id].Off){
						point1 = 0;
						point_1 = wholeminutes;
						
						first_top = d1_am_top;
						first_firstQuart = d1_am_firstQuart;
						first_secondQuart = d1_am_secondQuart;
						first_bottom = d1_am_bottom;
						
						first_firstQuartArr = d1_am_firstQuartArr;
						first_secondQuartArr = d1_am_secondQuartArr;
						
						mirrorPoint = point1;
						mirrorPoint_ = point_1;
						
						mirror_top = d2_am_top;
						mirror_firstQuart = d2_am_firstQuart;
						mirror_secondQuart = d2_am_secondQuart;
						mirror_bottom = d2_am_bottom;
						
						mirror_firstQuartArr = d2_am_firstQuartArr;
						mirror_secondQuartArr = d2_am_secondQuartArr;
						
						sunriseTime = 0;
					}
					
					if(!gradientArray[id].Astro && gradientArray[id].Naut && gradientArray[id].Buerg && gradientArray[id].Off){
						point1 = 0;
						point_1 = wholeminutes;
						
						first_top = d1_am_top;
						first_firstQuart = d1_am_firstQuart;
						first_secondQuart = d1_am_secondQuart;
						first_bottom = d1_am_bottom;
						
						first_firstQuartArr = d1_am_firstQuartArr;
						first_secondQuartArr = d1_am_secondQuartArr;
						
						mirrorPoint = point1;
						mirrorPoint_ = point_1;
						
						mirror_top = d2_am_top;
						mirror_firstQuart = d2_am_firstQuart;
						mirror_secondQuart = d2_am_secondQuart;
						mirror_bottom = d2_am_bottom;
						
						mirror_firstQuartArr = d2_am_firstQuartArr;
						mirror_secondQuartArr = d2_am_secondQuartArr;
						
						sunriseTime = 0;
					}	
					
					if(gradientArray[id].Astro && gradientArray[id].Naut && gradientArray[id].Buerg && gradientArray[id].Off){
						point1 = 0;
						point_1 = wholeminutes;
						
						first_top = night_am_top;
						first_firstQuart = night_am_firstQuart;
						first_secondQuart = night_am_secondQuart;
						first_bottom = night_am_bottom;
						
						first_firstQuartArr = night_am_firstQuartArr;
						first_secondQuartArr = night_am_secondQuartArr;
						
						mirrorPoint = point1;
						mirrorPoint_ = point_1;
						
						mirror_top = night_am_top;
						mirror_firstQuart = night_am_firstQuart;
						mirror_secondQuart = night_am_secondQuart;
						mirror_bottom = night_am_bottom;
						
						mirror_firstQuartArr = night_am_firstQuartArr;
						mirror_secondQuartArr = night_am_secondQuartArr;
						
						sunriseTime = 0;					
					}			
				
				}
				
				
				
				
				break;
		}

		
		
		
		
		if(clock >= 0 && clock < point1 && point1 != "-999"){
			var newclock = Math.floor(map(clock,0, point1, 0, wholeminutes));

			var newclockPercentage = newclock/wholeminutes;
			newclockPercentage = newclockPercentage.toFixed(2);
			$("#console_first").html("first with " + newclockPercentage);
			
			var colorTopValue = first_top.colourAt(newclock);
			var colorFirstQuartValue = first_firstQuart.colourAt(newclock);
			var colorSecondQuartValue = first_secondQuart.colourAt(newclock);		
			var colorBottomValue = first_bottom.colourAt(newclock);

			firstArr = first_firstQuartArr;
			secondArr = first_secondQuartArr;				
		}
		
		if(clock >= point1 && clock < point2 && point2 != "-999"){
			var newclock = Math.floor(map(clock, point1, point2, 0, wholeminutes));

			var newclockPercentage = newclock/wholeminutes;
			newclockPercentage = newclockPercentage.toFixed(2);
			$("#console_first").html("second with " + newclockPercentage);
			
			var colorTopValue = second_top.colourAt(newclock);
			var colorFirstQuartValue = second_firstQuart.colourAt(newclock);
			var colorSecondQuartValue = second_secondQuart.colourAt(newclock);		
			var colorBottomValue = second_bottom.colourAt(newclock);

			firstArr = second_firstQuartArr;
			secondArr = second_secondQuartArr;				
		}		

		
		if(clock >= point2 && clock < point3 && point3 != "-999"){
			var newclock = Math.floor(map(clock, point2, point3, 0, wholeminutes));
			var newclockPercentage = newclock/wholeminutes;
			newclockPercentage = newclockPercentage.toFixed(2);
			$("#console_first").html("third with " + newclockPercentage);
			
			var colorTopValue = third_top.colourAt(newclock);
			var colorFirstQuartValue = third_firstQuart.colourAt(newclock);
			var colorSecondQuartValue = third_secondQuart.colourAt(newclock);		
			var colorBottomValue = third_bottom.colourAt(newclock);

			firstArr = third_firstQuartArr;
			secondArr = third_secondQuartArr;				
		}
		
		if(clock >= point3 && clock < point4 && point4 != "-999"){
			var newclock = Math.floor(map(clock, point3, point4, 0, wholeminutes));
			var newclockPercentage = newclock/wholeminutes;
			newclockPercentage = newclockPercentage.toFixed(2);
			$("#console_first").html("fourth with " + newclockPercentage);
			
			var colorTopValue = fourth_top.colourAt(newclock);
			var colorFirstQuartValue = fourth_firstQuart.colourAt(newclock);
			var colorSecondQuartValue = fourth_secondQuart.colourAt(newclock);		
			var colorBottomValue = fourth_bottom.colourAt(newclock);

			firstArr = fourth_firstQuartArr;
			secondArr = fourth_secondQuartArr;				
		}
		
		
		
		if(clock >= mirrorPoint && clock < mirrorPoint+sunriseTime && mirrorPoint != "-999"){
			var newclock = Math.floor(map(clock, mirrorPoint, mirrorPoint+sunriseTime, 0, wholeminutes));
			var newclockPercentage = newclock/wholeminutes;
			newclockPercentage = newclockPercentage.toFixed(2);
			$("#console_first").html("sunrise with " + newclockPercentage);
			
			var colorTopValue = s_am_top.colourAt(newclock);
			var colorFirstQuartValue = s_am_firstQuart.colourAt(newclock);
			var colorSecondQuartValue = s_am_secondQuart.colourAt(newclock);		
			var colorBottomValue = s_am_bottom.colourAt(newclock);

			firstArr = s_am_firstQuartArr;
			secondArr = s_am_secondQuartArr;				
		}
		
		
		if(clock >= mirrorPoint+sunriseTime && clock < 720 && mirrorPoint != "-999"){
			var newclock = Math.floor(map(clock, mirrorPoint+sunriseTime, 720, 0, wholeminutes));
			var newclockPercentage = newclock/wholeminutes;
			newclockPercentage = newclockPercentage.toFixed(2);
			$("#console_first").html("mirrortomiddle with " + newclockPercentage);
			
			var colorTopValue = mirror_top.colourAt(newclock);
			var colorFirstQuartValue = mirror_firstQuart.colourAt(newclock);
			var colorSecondQuartValue = mirror_secondQuart.colourAt(newclock);		
			var colorBottomValue = mirror_bottom.colourAt(newclock);

			firstArr = mirror_firstQuartArr;
			secondArr = mirror_secondQuartArr;				
		}
		
		if(clock >= 720 && clock < mirrorPoint_-sunriseTime && mirrorPoint_ != "-999"){
			var newclock = Math.floor(map(clock, 720, mirrorPoint_-sunriseTime, wholeminutes, 0));
			var newclockPercentage = newclock/wholeminutes;
			newclockPercentage = newclockPercentage.toFixed(2);
			$("#console_first").html("mirrorfrommiddle with " + newclockPercentage);
			
			var colorTopValue = mirror_top.colourAt(newclock);
			var colorFirstQuartValue = mirror_firstQuart.colourAt(newclock);
			var colorSecondQuartValue = mirror_secondQuart.colourAt(newclock);		
			var colorBottomValue = mirror_bottom.colourAt(newclock);

			firstArr = mirror_firstQuartArr;
			secondArr = mirror_secondQuartArr;				
		}		
		
		
		if(clock >= mirrorPoint_-sunriseTime && clock <  mirrorPoint_ && mirrorPoint_ != "-999"){
			var newclock = Math.floor(map(clock, mirrorPoint_-sunriseTime, mirrorPoint_, wholeminutes, 0));
			var newclockPercentage = newclock/wholeminutes;
			newclockPercentage = newclockPercentage.toFixed(2);
			$("#console_first").html("sunset with " + newclockPercentage);
			
			var colorTopValue = s_am_top.colourAt(newclock);
			var colorFirstQuartValue = s_am_firstQuart.colourAt(newclock);
			var colorSecondQuartValue = s_am_secondQuart.colourAt(newclock);		
			var colorBottomValue = s_am_bottom.colourAt(newclock);

			firstArr = s_am_firstQuartArr;
			secondArr = s_am_secondQuartArr;				
		}
		
		
		
		
		
		
		if(clock >= point_4 && clock < point_3 && point_4 != "-999"){
			var newclock = Math.floor(map(clock, point_4, point_3, wholeminutes, 0));
			var newclockPercentage = newclock/wholeminutes;
			newclockPercentage = newclockPercentage.toFixed(2);
			$("#console_first").html("fourth-late with " + newclockPercentage);
			
			var colorTopValue = fourth_top.colourAt(newclock);
			var colorFirstQuartValue = fourth_firstQuart.colourAt(newclock);
			var colorSecondQuartValue = fourth_secondQuart.colourAt(newclock);		
			var colorBottomValue = fourth_bottom.colourAt(newclock);

			firstArr = fourth_firstQuartArr;
			secondArr = fourth_secondQuartArr;				
		}	
			
		
		if(clock >= point_3 && clock < point_2 && point_3 != "-999"){
			var newclock = Math.floor(map(clock, point_3, point_2, wholeminutes, 0));
			var newclockPercentage = newclock/wholeminutes;
			newclockPercentage = newclockPercentage.toFixed(2);
			$("#console_first").html("third-late with " + newclockPercentage);
			
			var colorTopValue = third_top.colourAt(newclock);
			var colorFirstQuartValue = third_firstQuart.colourAt(newclock);
			var colorSecondQuartValue = third_secondQuart.colourAt(newclock);		
			var colorBottomValue = third_bottom.colourAt(newclock);

			firstArr = third_firstQuartArr;
			secondArr = third_secondQuartArr;				
		}	
		
		if(clock >= point_2 && clock < point_1 && point_2 != "-999"){
			var newclock = Math.floor(map(clock, point_2, point_1, wholeminutes, 0));
			var newclockPercentage = newclock/wholeminutes;
			newclockPercentage = newclockPercentage.toFixed(2);
			$("#console_first").html("second-late with " + newclockPercentage);
			
			var colorTopValue = second_top.colourAt(newclock);
			var colorFirstQuartValue = second_firstQuart.colourAt(newclock);
			var colorSecondQuartValue = second_secondQuart.colourAt(newclock);		
			var colorBottomValue = second_bottom.colourAt(newclock);

			firstArr = second_firstQuartArr;
			secondArr = second_secondQuartArr;				
		}	
		
		
		if(clock >= point_1 && clock < wholeminutes && point_1 != "-999"){
			var newclock = Math.floor(map(clock, point_1, wholeminutes, wholeminutes, 0));
			var newclockPercentage = newclock/wholeminutes;
			newclockPercentage = newclockPercentage.toFixed(2);
			$("#console_first").html("first-late with " + newclockPercentage);
			
			var colorTopValue = first_top.colourAt(newclock);
			var colorFirstQuartValue = first_firstQuart.colourAt(newclock);
			var colorSecondQuartValue = first_secondQuart.colourAt(newclock);		
			var colorBottomValue = first_bottom.colourAt(newclock);

			firstArr = first_firstQuartArr;
			secondArr = first_secondQuartArr;				
		}






		

		partPercentage = newclock/wholeminutes;	
		

		var positionFirstQuart = getValueInBetween(firstArr, partPercentage);
		var positionSecondQuart = getValueInBetween(secondArr, partPercentage);
		


		//die prozentsätze für die farben auch noch über ein array lösen, damit das sich noch ineinander verschieben kann
		
		var backgroundString = "linear-gradient(#" + colorTopValue + " 0%, #" + colorFirstQuartValue + " " + positionFirstQuart +"%, #" + colorSecondQuartValue + " " + positionSecondQuart + "%, #" + colorBottomValue + " 100%)";
		
		
		$("#" + id).css({"background-image":backgroundString});
}

function checkForValues(arrO, arrB, arrN, arrA, i, id){

	if(arrA.results[i][2] == " " && arrA.results[i][3] == " "){
	}else{
		gradientArray[id].Astro = true;		
	}
	
	if(arrN.results[i][2] == " " && arrN.results[i][3] == " "){
	}else{
		gradientArray[id].Naut = true;
	}
	
	if(arrB.results[i][2] == " " && arrB.results[newday][1] == " "){
	}else{
		gradientArray[id].Buerg = true;
	}
	
	if(arrO.results[i][2] == " " && arrO.results[newday][1] == " "){		
	}else{
		gradientArray[id].Off = true;
	}

}

function getValueInBetween(array, percentage){
	if(percentage <= 0){
		return array[0];
	}


	if(percentage==0.33){
		return array[1]
	}	
	
	if(percentage==0.66){
		return array[2]
	}	
	
	if(percentage>=1){
		return array[3]
	}	

	
	if(percentage > 0 && percentage < 0.33){
		var baseValue = array[0];
		var endValue = array[1];
		var newPercentage = percentage/0.33;

		return calculateInBetween(baseValue, endValue,newPercentage);

	}
	
	if(percentage > 0.33 && percentage < 0.66){
		var baseValue = array[1];
		var endValue = array[2];
		var newPercentage = (percentage-0.33)/0.33;

		return calculateInBetween(baseValue, endValue,newPercentage);
	}
	
	
	if(percentage > 0.66 && percentage < 1){
		var baseValue = array[2];
		var endValue = array[3];
		var newPercentage = (percentage-0.66)/0.33;

		return calculateInBetween(baseValue, endValue,newPercentage);
	}
	
}

function calculateInBetween(base, end, percentage){

		var difference = end-base;
		
		difference = difference*percentage;
		
		var returnValue = base + difference;

		return returnValue;	
}

function map(value, f1, t1, f2, t2) {
    return f2 + (t2 - f2) * (value - f1) / (t1 - f1);
}



function toMinutes(time){
	var hour = parseInt(time.substring(-1, 2));
	var minutes = parseInt(time.substring(3, 5));
	
	var returnMinutes = hour*60 + minutes;
	return returnMinutes;
}

var timeToUpdateSet = false;
var timeToUpdate;


var saveX, saveY;
var saveSetX = false;
var saveSetY = false;



var firstTime = true;
var lastLatitude;
var changeTime;

var showDetailTimeout;
var showingDetails = false;
var showDetailTimeoutSet = false;


function settingLatitudes(dragSpeed_, dragSpeedX_, dragSpeedY_){
	
	if(timeToUpdateSet){
		clearTimeout(timeToUpdate);
		timeToUpdateSet = false;
	}
	
	for (i = 0; i<gradientArray.length; i++){
		var whichelement = "#" + i;

		var whichlatitude = "#latitude" + i;
		var whichlatitudedetail = "#latitudeDetailNumber" + i;
		var whichcontainer = "#container" + i;
		var containerWidth = $("#container0").width();

		var offset_new = $(whichelement).offset();
		var width_new = $(whichelement).outerWidth(true);
		var rightBorder = offset_new.left + width_new;
		var windowWidth = $(window).width();
		
		 		
		if(mouseX_ > offset_new.left && mouseX_ <= rightBorder){
			var windowHeight = $(window).height();
			
			if(mouseX_ > offset_new.left && mouseX_ < offset_new.left + (containerWidth/2) || offset_new.left < -5 && offset_new.left + width_new - 5 < windowWidth){

				$(whichlatitudedetail).addClass("moveRight");
				$(whichlatitudedetail).removeClass("moveLeft");				
			}else{
				$(whichlatitudedetail).removeClass("moveRight");
				$(whichlatitudedetail).addClass("moveLeft");
			}
			
			
			if(firstTime){
				lastLatitude = whichlatitude;
				changeTime = new Date().getTime();
				firstTime = false;
			}
		

		 	gradientArray[i].reloadLatitude = true;
		 	
		 	var dragPercentage = (mouseY_/wholeheight)*100;
		 	
		 	var calcLatitude =  map(mouseY_, 0, windowHeight, latitudeNorth, latitudeSouth);
		 	
		 	
		 	
		 	//hier noch checken ob äquator und so
		 	
		 	gradientArray[i].newLatitude = calcLatitude;
		 	
			if(calcLatitude < 0.15 && calcLatitude > -0.15){
			 	calcLatitude = 0;
			 	dragPercentage = 50;
			}
		 	
			var translateLatitude = Math.round(calcLatitude*100)/100;
			
			if(mouseY_ > windowHeight-50){
				$(whichlatitudedetail).addClass("upTop");
			}else{
				$(whichlatitudedetail).removeClass("upTop");
			}

			if(translateLatitude<0){
			 	translateLatitude = (translateLatitude) + "°";
			}else if(translateLatitude > 0){
			 	translateLatitude = translateLatitude + "°";
			}else if(translateLatitude == 0){
			 	translateLatitude = "equator"
			}
		 	

		 	
			$(whichlatitudedetail).html(translateLatitude);

			var nowChange = new Date().getTime();
		 	
			var changeDifference = nowChange - changeTime;

			// changeReference durch einen zeitlichen Unterschied von der x position abhängig machen - wenn die geschwindigkeit in x richtung einen wert unterschreitet dann anzeigen - nie davor! - damit es keine störungen beim swipen gibt

			var changeReference = 150;

			if(gradientArray.length > 0){
				var getWidth = $("#container0").outerWidth();
				if(getWidth > 350){
					changeReference = 200;
				}
			}
		 	

			if(changeDifference < changeReference && gradientArray.length != 1){
				$("#detailLatitude").addClass("detailShowFastHide");
				$("#detailLatitude").removeClass("detailShow");
				
				$(".detailAdjustingShow").removeClass("detailAdjustingShow");

					var hideDetail = $(".latitudeDetailNumber").get();
					var hideDetailTime = 300/hideDetail.length;			
				 	
				 	
				 				
					$.each(hideDetail, function(i, item){
						setTimeout(function() {
							$(item).removeClass("detailShow");
							$(item).addClass("detailShowFastHide");
						}, hideDetail * i);
					});
				$(".detailAdjustingShow").removeClass("detailAdjustingShow");
				$(whichlatitude).addClass("topAnimation");
					
				if(showDetailTimeoutSet){
					clearTimeout(showDetailTimeout);
					showDetailTimeoutSet = false;
					showingDetails = false;
				}

				
			}else {

				if(gradientArray.length != 1){
				 	$("#detailLatitude").removeClass("detailShowFastHide");
				 	$(whichlatitudedetail).removeClass("detailShowFastHide");
				 	
				 	if(showingDetails){
					 	$("#detailLatitude").removeClass("detailShowHide");
						$(whichlatitudedetail).removeClass("detailShowHide");
						
						$("#detailLatitude").addClass("detailShow");				
						$(whichlatitudedetail).addClass("detailShow");						
						
						$(whichlatitude).addClass("detailAdjustingShow");
						showDetailTimeoutSet = false;
					}
					
					showDetailTimeout = setTimeout(function(){			
						showingDetails = true;
					} , 750);
					
					showDetailTimeoutSet = true;					
				}
				$(whichlatitude).removeClass("topAnimation");

			 	var windowHeight = $(window).height();

				var onePercent = 100/windowHeight;
				
				var dragPercentageDetail = dragPercentage+onePercent;
				
				$("#detailLatitude").css({"top":dragPercentageDetail + "%"});
			}

		 	$(whichlatitude).css({"top":dragPercentage + "%"});
		 	
		 	$(whichlatitude).addClass("loading");
		 	
		 	if(whichlatitude != lastLatitude){
			 	changeTime = new Date().getTime();		 	
		 	}
		 	
		 	lastLatitude = whichlatitude;
	
		}	
		
	}	
}

function updateLatitudes(fromWhere_this){

	for (i = 0; i< gradientArray.length; i++ ){
		if(gradientArray[i].reloadLatitude){
			loadAndParseCSV(0, gradientArray[i].newLatitude, i);
//			$("#" + i).css({"opacity":"0.7"});
			if(fromWhere_this == "right"){
				$("#latitude" + i).removeClass("placedRight");
			}else{
				$("#latitude" + i).addClass("placedRight");
			}
			$("#latitude" + i).removeClass("loading");
			$("#latitude" + i).css({"opacity" : "0.2", "width": "4%"});
			gradientArray[i].loadingTimes = 0;

		}
	}
}


	

		


function deleteGradient(){
	if(!deleting){
		deleting = true;
		$("body").css({"text-align":"center"});
		for (i = 0; i<gradientArray.length; i++){
			var whichelement = "#" + i;
			var offset_new = $(whichelement).offset();
			var width_new = $(whichelement).outerWidth(true);
			var rightBorder = offset_new.left + width_new;
	 		var half = rightBorder-width_new/2;
	
			// only insert before if you are 20px or more of the screen
			if(mouseX_ > offset_new.left && mouseX_ <= rightBorder){
			 	var windowHeight = $(window).height();
			 	//var $clone = $(whichelement).parent().clone().appendTo($(whichelement).parent());
			 	$(whichelement).parent().animate({"top":-windowHeight-20 + "px", "opacity" : "0" }, 100, "easeInCirc");

				 	gradientArray.splice(i,1);
				 	
				 	for (g = i; i < gradientArray.length; i++){
					 	gradientArray[i].id = i;
				 	}

			 	setTimeout(function(){
			 		$(whichelement).parent().remove();
			 		deleting = false;
				 	
				 	var divs = $(".bg");
					$.each(divs, function(i, item) {
						$(item).attr("id", i);
						$(item).next().attr("id", "latitude" + i);
					});

			 	}, 500);
					
					var newGradientWidth = 100 / gradientArray.length;
					$(".bgcontainer .alreadyThere").css({"width": newGradientWidth + "%"});
					//alert(newGradientWidth);
					latitudeOn = false;
				break;
			}	
			
		}
	}


}


function writeDate(){
	var dragHours = Math.floor(clock/60);
	var dragMinutes = clock - dragHours*60;
	var dragMonth = Math.min(Math.round(day/30.5), 11);
	
	switch (dragMonth){
		case 0: dragMonth = "Jan.";
				break;
		case 1: dragMonth = "Feb.";
				break;
		case 2: dragMonth = "Mar.";
				break;
		case 3: dragMonth = "Apr.";
				break;
		case 4: dragMonth = "May";
				break;
		case 5: dragMonth = "June";
				break;
		case 6: dragMonth = "July";
				break;
		case 7: dragMonth = "Aug.";
				break;
		case 8: dragMonth = "Sept.";
				break;
		case 9: dragMonth = "Oct.";
				break;
		case 10: dragMonth = "Nov.";
				break;
		case 11: dragMonth = "Dez.";
				break;
	}
	
	dragMinutes = addZero(dragMinutes);
	dragHours = addZero(dragHours);
	
	var dragTime = amPm(dragMinutes, dragHours);
	
	
	$("#adjustTimeText").html(dragMonth + " - " + dragTime);	
}

function amPm(minutes_, hours_){

	var ampm = " am";

	if(hours_>12){
		ampm = " pm";
		hours_ -= 12;
		hours_ = addZero(hours_);
	}
	
	return hours_ + ":" + minutes_ + ampm;
}

function addZero(value){
	if(value<10){
		value = "0" + value;
	}
	return value;
}

function showMenu(coremenu, hiding){
	
	var menuitems;
	var deletealso = false;
	
	if(coremenu){
		menuitems = $(".coremenu").get();
		deletalso = true;
	}else{
		menuitems = $(".extra").get();
	}
	
	if(!hiding){
		if(deletalso){
				$("#delete").addClass("fadeInSideRight");
				$("#delete").removeClass("fadeInSideHideBackRight");			
		}
		
		$(".menuwrapper").css({"z-index":300});

		menuitems.reverse();

		$.each(menuitems, function(i, item) {
			//console.log(i);
			setTimeout(function() {
				$(item).addClass("fadeInSide");
				$(item).removeClass("fadeInSideHideBack");
			}, 70 * i);
		});
	}else{

		$(".menuwrapper").css({"z-index":50});

		if(deletalso){
				$("#delete").addClass("fadeInSideHideBackRight");
				$("#delete").removeClass("fadeInSideRight");			
		}
		
		$.each(menuitems, function(i, item) {
			//console.log(i);
			setTimeout(function() {
				$(item).addClass("fadeInSideHideBack");
				$(item).removeClass("fadeInSide");
			}, 70 * i);
		});
	}
	
}





function getAverage(thisArray) {
	var av = 0;
	var cnt = 0;
	var len = thisArray.length;
	for (var i = 0; i < len; i++) {
		var e = +thisArray[i];
		if(!e && thisArray[i] !== 0 && thisArray[i] !== '0') e--;
		if (thisArray[i] == e) {av += e; cnt++;}
	}

	return av/cnt;
}














