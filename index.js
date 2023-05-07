var numberOFdrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOFdrums; i++){
	document.querySelectorAll("button")[i].addEventListener("click", function (){
		var audio = new Audio("sounds/tom-1.mp3");
		audio.play();
		var buttonInnerHTML = this.innerHTML;
		makeSound(buttonInnerHTML);
		animation(buttonInnerHTML);
	});
}

document.addEventListener("keypress", function (e) { // e stands for events
	makeSound(e.key);
	animation(e.key);
});

function makeSound(key){

		switch(key){
			case "w":
				var audio = new Audio("sounds/tom-1.mp3");
				audio.play();
			break;
			case "a":
				var audio = new Audio("sounds/tom-2.mp3");
				audio.play();
			break;
			case "s":
				var audio = new Audio("sounds/tom-3.mp3");
				audio.play();
			break;
			case "d":
				var audio = new Audio("sounds/tom-4.mp3");
				audio.play();
			break;
			case "j":
				var audio = new Audio("sounds/crash.mp3");
				audio.play();
			break;
			case "k":
				var audio = new Audio("sounds/kick-bass.mp3");
				audio.play();
			break;
			case "l":
				var audio = new Audio("sounds/snare.mp3");
				audio.play();
			break;
			default:
				console.log(buttonInnerHTML);
		}	

}


function animation(currentkey){
	var anime = document.querySelector("." + currentkey);
	anime.classList.add("pressed");
	setTimeout(function () {
		anime.classList.remove("pressed");
	}, 200);
}

function HouseKeeper(name, age, experience, tasks){
	this.name = name;
	this.age = age;
	this.experience = experience;
	this.tasks = tasks;
	this.clean = function () {
		alert("May i clean your house.");
	};
}



function tasks(){
	alert("May i clean your house.");
}

var houseKeeper1 = new HouseKeeper("emma", 21, "12yr", ["cleaning", "arranging stuff", "cooking"]);



