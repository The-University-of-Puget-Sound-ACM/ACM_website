function vanGoghInfo()
	{
		alert("This is a painting done by Van Gogh in June of 1889. It is tittled \"The Starry Night\". It is currently held in the permanent collection of the Museum of Modern Art in New York but copies of it can be found everywhere.");
	}
	
function alexRuizInfo(){
		alert("This is a photoshopped painting of a different perspective to Van Gogh's starry night. Alex Ruiz is an artist who was inspired by \"The Starry Night\" to recreate it as if he was standing behind Van Gogh as he looked at the sky. Copies of this work can be found at http://fineartamerica.com/featured/starry-night-alex-ruiz.html.");
	}
	
function valleyInfo(){
		alert("This photo was taken by Dominic Kamp in July of 2013. This photo shows The Matterhorn seen from the Lauterbrunnen Valley and features stars in the background. More information including a few download can be found at http://interfacelift.com/wallpaper/details/3325/valley_of_the_stars.html.");
	}

function starscapeInfo(){
		alert("This photo was taken by Stephane Guisard, an ESO engineer and world-renowned astrophotgrapher. My in depth information including downloads of the photo can be found at http://interfacelift.com/wallpaper/details/3193/starscape.html");
	}

//twinkling star format found at http://falcon80.com/HTMLCanvas/Animation/stars.html, changed and modified 
// by me to make it better and more appealing for the page.	
	
var animFlag;
var counter = 0;
	
function makeStar() {
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#FFFFCC";
	animFlag = setInterval(function() {changeColor()}, 400)
	}
}

function changeColor()
{
var canvas = document.getElementById("canvas");
if (canvas.getContext) {
var ctx = canvas.getContext("2d");
var colour = ["#FFFF00", "#FFFF40", "#FFFF82", "#FFFFA8","#FFFFC2", "#FFFFE9", "#D1FFFF","#BCE6E6","#00B8B8", "#009595", "#007777", "#005F5F", "#004C4C", "#003535", "#004C4C", "#005F5F", "#007777","#009595", "#00B8B8","#BCE6E6","#D1FFFF","#FFFFE9","#FFFFC2","#FFFFA8","#FFFF82","#FFFF40","#FFFF00"];
ctx.fillStyle = colour[counter];
counter++
ctx.clearRect(0,0,370,370);
ctx.beginPath();
ctx.moveTo(150,20);
ctx.lineTo(170,50);
ctx.lineTo(200,45);
ctx.lineTo(170,75);
ctx.lineTo(190,110);
ctx.lineTo(150,85);
ctx.lineTo(110,110);
ctx.lineTo(130,75);
ctx.lineTo(100,45);
ctx.lineTo(130,50);
ctx.lineTo(150,20);
ctx.closePath();
ctx.fill();
if(counter>29)
counter = 0;
}
}
 
