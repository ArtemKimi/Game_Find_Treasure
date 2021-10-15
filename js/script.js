
var getRandomNumber = function(size){
	return Math.floor(Math.random()*size);
};


var getDistance = function (event, target){
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
};


var getDistanceHint = function (distance){
	if (distance < 50){
	return "Обожжешься!";
	}else if (distance < 150) {
	return "Очень горячо";
	}else if (distance < 250){
	return "Горячо";
	}else if (distance < 350) {
	return "Тепло";
	}else if (distance < 450) {
	return "Холодно";
	}else if (distance < 550){
	return "Очень холодно";
	}else if (distance < 650){
	return "Очень-очень холодно";
	}else{
		return "Замерзнешь!"
	}
};


var width = 400;
var height = 400;
var clicks = 0;
var clickLimit = 25;

var target = {
	x:getRandomNumber(width),
	y:getRandomNumber(height)
};

$("#map").click(function(event){
	clicks++;
	if (clicks > clickLimit){
		alert ("КОНЕЦ ИГРЫ!");
		return;
	}
	var distance = getDistance(event, target);

	var distanceHint = getDistanceHint(distance);

	$("#distance").text(distanceHint);

	$('#clicks-remaining').text("Осталось " + (clickLimit - clicks) + " попыток.");

	if (distance < 10){
		alert ("Клад найден! Сделано кликов:" + clicks);
	}
});



