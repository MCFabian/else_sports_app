

/* QUIZ SCORE */

window.addEventListener("load", function(){

	var questionnumber = document.getElementsByClassName("questionnumber");

	/* 	FRAGE 1 */
	var radioone = document.getElementById("qu-one-la-one");
	var radiotwo = document.getElementById("qu-one-la-two");
	var radiothree = document.getElementById("qu-one-la-three");
	var radiofour = document.getElementById("qu-one-la-four");
	
	/* 	FRAGE 2 */
	var radiofive = document.getElementById("qu-two-la-one");
	var radiosix = document.getElementById("qu-two-la-two");
	var radioseven = document.getElementById("qu-two-la-three");
	var radioeight = document.getElementById("qu-two-la-four");
	
	var radionine = document.getElementById("qu-three-la-one");
	var radioten = document.getElementById("qu-three-la-two");
	var radioeleven = document.getElementById("qu-three-la-three");
	var radiotwelve = document.getElementById("qu-three-la-four");
	


	//Frage 1 - Antwort 1 richtig

	radioone.addEventListener("click", function(){
		radioone.classList.add("label-true");
		questionnumber[0].classList.add("question-true");
		questionnumber[0].classList.remove("question-false");
		radiotwo.classList.add("label-inactive");
		radiothree.classList.add("label-inactive");
		radiofour.classList.add("label-inactive");
	});

	radiotwo.addEventListener("click", function(){
		radioone.classList.add("label-inactive");
		radiotwo.classList.add("label-false");
		questionnumber[0].classList.add("question-false");
		questionnumber[0].classList.remove("question-true");
		radiothree.classList.add("label-inactive");
		radiofour.classList.add("label-inactive");
	});

	radiothree.addEventListener("click", function(){
		radioone.classList.add("label-inactive");
		radiotwo.classList.add("label-inactive");
		radiothree.classList.add("label-false");
		questionnumber[0].classList.add("question-false");
		questionnumber[0].classList.remove("question-true");
		radiofour.classList.add("label-inactive");
	});

	radiofour.addEventListener("click", function(){
		radioone.classList.add("label-inactive");
		radiotwo.classList.add("label-inactive");
		radiothree.classList.add("label-inactive");
		radiofour.classList.add("label-false");
		questionnumber[0].classList.add("question-false");
		questionnumber[0].classList.remove("question-true");
	});

	//Frage 2 - Antwort 3 richtig
	radiofive.addEventListener("click", function(){
		radiofive.classList.add("label-false");
		questionnumber[1].classList.add("question-false");
		questionnumber[1].classList.remove("question-true");
		radiosix.classList.add("label-inactive");
		radioseven.classList.add("label-inactive");
		radioeight.classList.add("label-inactive");
	});

	radiosix.addEventListener("click", function(){
		radiofive.classList.add("label-inactive");
		radiosix.classList.add("label-false");
		questionnumber[1].classList.add("question-false");
		questionnumber[1].classList.remove("question-true");
		radioseven.classList.add("label-inactive");
		radioeight.classList.add("label-inactive");
	});

	radioseven.addEventListener("click", function(){
		radiofive.classList.add("label-inactive");
		radiosix.classList.add("label-inactive");
		radioseven.classList.add("label-true");
		questionnumber[1].classList.add("question-true");
		questionnumber[1].classList.remove("question-false");
		radioeight.classList.add("label-inactive");
	});

	radioeight.addEventListener("click", function(){
		radiofive.classList.add("label-inactive");
		radiosix.classList.add("label-inactive");
		radioseven.classList.add("label-inactive");
		radioeight.classList.add("label-false");
		questionnumber[1].classList.add("question-false");
		questionnumber[1].classList.remove("question-true");
	});

	//Frage 3 - Antwort 1 richtig
	radionine.addEventListener("click", function(){
		radionine.classList.add("label-true");
		questionnumber[2].classList.add("question-true");
		questionnumber[2].classList.remove("question-false");
		radioten.classList.add("label-inactive");
		radioeleven.classList.add("label-inactive");
		radiotwelve.classList.add("label-inactive");
	})

	radioten.addEventListener("click", function(){
		radionine.classList.add("label-inactive");
		radioten.classList.add("label-false");
		questionnumber[2].classList.add("question-false");
		questionnumber[2].classList.remove("question-true");
		radioeleven.classList.add("label-inactive");
		radiotwelve.classList.add("label-inactive");
	})

	radioeleven.addEventListener("click", function(){
		radionine.classList.add("label-inactive");
		radioten.classList.add("label-inactive");
		radioeleven.classList.add("label-false");
		questionnumber[2].classList.add("question-false");
		questionnumber[2].classList.remove("question-true");
		radiotwelve.classList.add("label-inactive");
	})

	radiotwelve.addEventListener("click", function(){
		radionine.classList.add("label-inactive");
		radioten.classList.add("label-inactive");
		radioeleven.classList.add("label-inactive");
		radiotwelve.classList.add("label-false");
		questionnumber[2].classList.add("question-false");
		questionnumber[2].classList.remove("question-true");
	})

});




// INSG
var score;


// FRAGE 1
function getone() {
	var one = document.getElementById("qu-one-ans-one");
	var stepone;

	if(one.checked){
		stepone = 1;
	}

	else {
		stepone = 0;
	}

	return stepone;
}

// FRAGE 2
function gettwo(){
	var three = document.getElementById("qu-two-ans-three");
	var steptwo;

	if(three.checked){
		steptwo = 1;
	}

	else {
		steptwo = 0;
	}

	return steptwo;
}

// FRAGE 3
function getthree(){
	var one = document.getElementById("qu-three-ans-one");
	var stepthree;

	if(one.checked){
		stepthree = 1;
	}

	else {
		stepthree = 0;
	}

	return stepthree;
}



function getscore(){
	//SEND NOTIFICATION

	var notificationlist = document.getElementById("notificationlist");
	var currentnotificationlist = document.getElementById("notificationlist").innerHTML;
	var notificationthree = " <li id='notificationquizthree' class='card notifications-card'> <div class='notifications-icon'></div> <div> <h2>Drei Richtige!</h2> <small>Du hast schon 3 Fragen richtig beantwortet.</small> </div> </li>";


	var livescore = document.getElementById("livescore");
	var percent = document.getElementById("percent");
	score = getone() +gettwo() +getthree();
	livescore.innerHTML = score;
	alert("Frage 1:" +getone());
	alert("Frage 2:" +gettwo());
	alert("Frage 3:" +getthree());
	alert("Gesamte:" +score);

	if(score == 0){
		percent.style.width = "0%"
	}

	if(score == 1){
		percent.style.width = "10%"
	}

	if(score == 2){
		percent.style.width = "20%"
	}

	if(score == 3){
		percent.style.width = "30%"

		notificationlist.innerHTML = notificationthree +currentnotificationlist;

	}

	var notificationquantity = document.getElementById("notificationlist").childElementCount;
	notificationcounter.innerHTML = (notificationquantity);
	//CHANGE NOTIFICATIONS ICON IF MORE THEN 1
	if (notificationquantity == 0) {
		notification.innerHTML = ("notifications_none");    
	} 
	
	else {
		//
	}

}






/* OLD SLIDER */
// Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}






