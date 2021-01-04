

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
	
	/* 	FRAGE 3 */
	var radionine = document.getElementById("qu-three-la-one");
	var radioten = document.getElementById("qu-three-la-two");
	var radioeleven = document.getElementById("qu-three-la-three");
	var radiotwelve = document.getElementById("qu-three-la-four");
	
	/* 	FRAGE 4 */
	var radiothirteen = document.getElementById("qu-four-la-one");
	var radiotfourteen = document.getElementById("qu-four-la-two");
	var radiofifteen = document.getElementById("qu-four-la-three");
	var radiosixteen = document.getElementById("qu-four-la-four");

	/* 	FRAGE 5 */
	var radioseventeen = document.getElementById("qu-five-la-one");
	var radioteighteen = document.getElementById("qu-five-la-two");
	var radionineteen= document.getElementById("qu-five-la-three");
	var radiostwenty = document.getElementById("qu-five-la-four");

	/* 	FRAGE 6 */
	var radiostwentyone = document.getElementById("qu-six-la-one");
	var radiostwentytwo = document.getElementById("qu-six-la-two");
	var radiostwentythree= document.getElementById("qu-six-la-three");
	var radiostwentyfour = document.getElementById("qu-six-la-four");
	
	/* 	FRAGE 7 */
	var radiotwentyfive = document.getElementById("qu-seven-la-one");
	var radiotwentysix = document.getElementById("qu-seven-la-two");
	var radiostwentyseven = document.getElementById("qu-seven-la-three");
	var radiostwentyeight= document.getElementById("qu-seven-la-four");

	/* 	FRAGE 8 */
	var radiotwentynine = document.getElementById("qu-eight-la-one");
	var radiotthirty = document.getElementById("qu-eight-la-two");
	var radiosthirtyone = document.getElementById("qu-eight-la-three");
	var radiosthirtytwo= document.getElementById("qu-eight-la-four");

	/* 	FRAGE 9 */
	var radiosthirtythree = document.getElementById("qu-nine-la-one");
	var radiosthirtyfour = document.getElementById("qu-nine-la-two");
	var radiosthirtyfive = document.getElementById("qu-nine-la-three");
	var radiosthirtysix= document.getElementById("qu-nine-la-four");

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

	//Frage 4 - Antwort 2 richtig
	radiothirteen.addEventListener("click", function(){
		radiothirteen.classList.add("label-false");
		questionnumber[3].classList.add("question-false");
		questionnumber[3].classList.remove("question-true");
		radiotfourteen.classList.add("label-inactive");
		radiofifteen.classList.add("label-inactive");
		radiosixteen.classList.add("label-inactive");
	})

	radiotfourteen.addEventListener("click", function(){
		radiothirteen.classList.add("label-inactive");
		radiotfourteen.classList.add("label-true");
		questionnumber[3].classList.add("question-true");
		questionnumber[3].classList.remove("question-false");
		radiofifteen.classList.add("label-inactive");
		radiosixteen.classList.add("label-inactive");
	})

	radiofifteen.addEventListener("click", function(){
		radiothirteen.classList.add("label-inactive");
		radiotfourteen.classList.add("label-inactive");
		radiofifteen.classList.add("label-false");
		questionnumber[3].classList.add("question-false");
		questionnumber[3].classList.remove("question-true");
		radiosixteen.classList.add("label-inactive");
	})

	radiosixteen.addEventListener("click", function(){
		radiothirteen.classList.add("label-inactive");
		radiotfourteen.classList.add("label-inactive");
		radiofifteen.classList.add("label-inactive");
		radiosixteen.classList.add("label-false");
		questionnumber[3].classList.add("question-false");
		questionnumber[3].classList.remove("question-true");
	})

	//Frage 5 - Antwort 4 richtig
	radioseventeen.addEventListener("click", function(){
		radioseventeen.classList.add("label-false");
		questionnumber[4].classList.add("question-false");
		questionnumber[4].classList.remove("question-true");
		radioteighteen.classList.add("label-inactive");
		radionineteen.classList.add("label-inactive");
		radiostwenty.classList.add("label-inactive");
	})

	radioteighteen.addEventListener("click", function(){
		radioseventeen.classList.add("label-inactive");
		radioteighteen.classList.add("label-false");
		questionnumber[4].classList.add("question-false");
		questionnumber[4].classList.remove("question-true");
		radionineteen.classList.add("label-inactive");
		radiostwenty.classList.add("label-inactive");
	})

	radionineteen.addEventListener("click", function(){
		radioseventeen.classList.add("label-inactive");
		radioteighteen.classList.add("label-inactive");
		radionineteen.classList.add("label-false");
		questionnumber[4].classList.add("question-false");
		questionnumber[4].classList.remove("question-true");
		radiostwenty.classList.add("label-inactive");
	})

	radiostwenty.addEventListener("click", function(){
		radioseventeen.classList.add("label-inactive");
		radioteighteen.classList.add("label-inactive");
		radionineteen.classList.add("label-inactive");
		radiostwenty.classList.add("label-true");
		questionnumber[4].classList.add("question-true");
		questionnumber[4].classList.remove("question-false");
	})

	//Frage 6 - Antwort 4 richtig
	radiostwentyone.addEventListener("click", function(){
		radiostwentyone.classList.add("label-false");
		questionnumber[5].classList.add("question-false");
		questionnumber[5].classList.remove("question-true");
		radiostwentytwo.classList.add("label-inactive");
		radiostwentythree.classList.add("label-inactive");
		radiostwentyfour.classList.add("label-inactive");
	})

	radiostwentytwo.addEventListener("click", function(){
		radiostwentyone.classList.add("label-inactive");
		radiostwentytwo.classList.add("label-false");
		questionnumber[5].classList.add("question-false");
		questionnumber[5].classList.remove("question-true");
		radiostwentythree.classList.add("label-inactive");
		radiostwentyfour.classList.add("label-inactive");
	})

	radiostwentythree.addEventListener("click", function(){
		radiostwentyone.classList.add("label-inactive");
		radiostwentytwo.classList.add("label-inactive");
		radiostwentythree.classList.add("label-false");
		questionnumber[5].classList.add("question-false");
		questionnumber[5].classList.remove("question-true");
		radiostwentyfour.classList.add("label-inactive");
	})

	radiostwentyfour.addEventListener("click", function(){
		radiostwentyone.classList.add("label-inactive");
		radiostwentytwo.classList.add("label-inactive");
		radiostwentythree.classList.add("label-inactive");
		radiostwentyfour.classList.add("label-true");
		questionnumber[5].classList.add("question-true");
		questionnumber[5].classList.remove("question-false");
	})

	//Frage 7 - Antwort 1 richtig
	radiotwentyfive.addEventListener("click", function(){
		radiotwentyfive.classList.add("label-true");
		questionnumber[6].classList.add("question-true");
		questionnumber[6].classList.remove("question-false");
		radiotwentysix.classList.add("label-inactive");
		radiostwentyseven.classList.add("label-inactive");
		radiostwentyeight.classList.add("label-inactive");
	})

	radiotwentysix.addEventListener("click", function(){
		radiotwentyfive.classList.add("label-inactive");
		radiotwentysix.classList.add("label-false");
		questionnumber[6].classList.add("question-false");
		questionnumber[6].classList.remove("question-true");
		radiostwentyseven.classList.add("label-inactive");
		radiostwentyeight.classList.add("label-inactive");
	})

	radiostwentyseven.addEventListener("click", function(){
		radiotwentyfive.classList.add("label-inactive");
		radiotwentysix.classList.add("label-inactive");
		radiostwentyseven.classList.add("label-false");
		questionnumber[6].classList.add("question-false");
		questionnumber[6].classList.remove("question-true");
		radiostwentyeight.classList.add("label-inactive");
	})

	radiostwentyeight.addEventListener("click", function(){
		radiotwentyfive.classList.add("label-inactive");
		radiotwentysix.classList.add("label-inactive");
		radiostwentyseven.classList.add("label-inactive");
		radiostwentyeight.classList.add("label-false");
		questionnumber[6].classList.add("question-false");
		questionnumber[6].classList.remove("question-true");
	})

	//Frage 8 - Antwort 3 richtig
	radiotwentynine.addEventListener("click", function(){
		radiotwentynine.classList.add("label-false");
		questionnumber[7].classList.add("question-false");
		questionnumber[7].classList.remove("question-true");
		radiotthirty.classList.add("label-inactive");
		radiosthirtyone.classList.add("label-inactive");
		radiosthirtytwo.classList.add("label-inactive");
	})

	radiotthirty.addEventListener("click", function(){
		radiotwentynine.classList.add("label-inactive");
		radiotthirty.classList.add("label-false");
		questionnumber[7].classList.add("question-false");
		questionnumber[7].classList.remove("question-true");
		radiosthirtyone.classList.add("label-inactive");
		radiosthirtytwo.classList.add("label-inactive");
	})

	radiosthirtyone.addEventListener("click", function(){
		radiotwentynine.classList.add("label-inactive");
		radiotthirty.classList.add("label-inactive");
		radiosthirtyone.classList.add("label-true");
		questionnumber[7].classList.add("question-true");
		questionnumber[7].classList.remove("question-false");
		radiosthirtytwo.classList.add("label-inactive");
	})

	radiosthirtytwo.addEventListener("click", function(){
		radiotwentynine.classList.add("label-inactive");
		radiotthirty.classList.add("label-inactive");
		radiosthirtyone.classList.add("label-inactive");
		radiosthirtytwo.classList.add("label-false");
		questionnumber[7].classList.add("question-false");
		questionnumber[7].classList.remove("question-true");
	})

	//Frage 9 - Antwort 2 richtig
	radiosthirtythree.addEventListener("click", function(){
		radiosthirtythree.classList.add("label-false");
		questionnumber[8].classList.add("question-false");
		questionnumber[8].classList.remove("question-true");
		radiosthirtyfour.classList.add("label-inactive");
		radiosthirtyfive.classList.add("label-inactive");
		radiosthirtysix.classList.add("label-inactive");
	})

	radiosthirtyfour.addEventListener("click", function(){
		radiosthirtythree.classList.add("label-inactive");
		radiosthirtyfour.classList.add("label-true");
		questionnumber[8].classList.add("question-true");
		questionnumber[8].classList.remove("question-false");
		radiosthirtyfive.classList.add("label-inactive");
		radiosthirtysix.classList.add("label-inactive");
	})

	radiosthirtyfive.addEventListener("click", function(){
		radiosthirtythree.classList.add("label-inactive");
		radiosthirtyfour.classList.add("label-inactive");
		radiosthirtyfive.classList.add("label-false");
		questionnumber[8].classList.add("question-false");
		questionnumber[8].classList.remove("question-true");
		radiosthirtysix.classList.add("label-inactive");
	})

	radiosthirtysix.addEventListener("click", function(){
		radiosthirtythree.classList.add("label-inactive");
		radiosthirtyfour.classList.add("label-inactive");
		radiosthirtyfive.classList.add("label-inactive");
		radiosthirtysix.classList.add("label-false");
		questionnumber[8].classList.add("question-false");
		questionnumber[8].classList.remove("question-true");
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

// FRAGE 4
function getfour(){
	var two = document.getElementById("qu-four-ans-two");
	var stepfour;

	if(two.checked){
		stepfour = 1;
	}

	else {
		stepfour = 0;
	}

	return stepfour;
}

// FRAGE 5
function getfive(){
	var four = document.getElementById("qu-five-ans-four");
	var stepfive;

	if(four.checked){
		stepfive = 1;
	}

	else {
		stepfive = 0;
	}

	return stepfive;
}

// FRAGE 6
function getsix(){
	var four = document.getElementById("qu-six-ans-four");
	var stepsix;

	if(four.checked){
		stepsix = 1;
	}

	else {
		stepsix = 0;
	}

	return stepsix;
}

// FRAGE 7
function getseven(){
	var one = document.getElementById("qu-seven-ans-one");
	var stepseven;

	if(one.checked){
		stepseven = 1;
	}

	else {
		stepseven = 0;
	}

	return stepseven;
}

// FRAGE 8
function geteight(){
	var three = document.getElementById("qu-eight-ans-three");
	var stepeight;

	if(three.checked){
		stepeight = 1;
	}

	else {
		stepeight = 0;
	}

	return stepeight;
}

// FRAGE 9
function getnine(){
	var two = document.getElementById("qu-nine-ans-two");
	var stepnine;

	if(two.checked){
		stepnine = 1;
	}

	else {
		stepnine = 0;
	}

	return stepnine;
}



function getscore(){
	//SEND NOTIFICATION

	var notificationlist = document.getElementById("notificationlist");
	var currentnotificationlist = document.getElementById("notificationlist").innerHTML;
	var notificationthree = " <li id='notificationquizthree' class='card notifications-card'> <div class='notifications-icon'></div> <div> <h2>Drei Richtige!</h2> <small>Du hast schon 3 Fragen richtig beantwortet.</small> </div> </li>";
	var notificationfive = " <li id='notificationquizfive' class='card notifications-card'> <div class='notifications-icon'></div> <div> <h2>Fünf Richtige!</h2> <small>Du hast schon 5 Fragen richtig beantwortet.</small> </div> </li>";
	var notificationnine = " <li id='notificationquiznine' class='card notifications-card'> <div class='notifications-icon'></div> <div> <h2>Neun Richtige!</h2> <small>Dir fehlt noch eine richtige Antwort!</small> </div> </li>";


	var livescore = document.getElementById("livescore");
	var percent = document.getElementById("percent");
	score = getone() +gettwo() +getthree() +getfour() +getfive() +getsix() +getseven() +geteight() +getnine();
	livescore.innerHTML = score;
	alert("Frage 1:" +getone());
	alert("Frage 2:" +gettwo());
	alert("Frage 3:" +getthree());
	alert("Frage 4:" +getfour());
	alert("Frage 5:" +getfive());
	alert("Frage 6:" +getsix());
	alert("Frage 7:" +getseven());
	alert("Frage 8:" +geteight());
	alert("Frage 9:" +getnine());
	alert("Gesamte:" +score);


	//SET PERCENT-WIDTH OF CARD
	if(score == 0){
		percent.style.width = "0%"
	}

	if(score == 1){
		percent.style.width = "10%"
	}

	if(score == 2){
		percent.style.width = "20%"
	}

	if(score >= 3){
		percent.style.width = "30%"
		notificationlist.innerHTML = notificationthree +currentnotificationlist;
	}

	if(score == 4){
		percent.style.width = "40%"
	}

	if(score >= 5){
		percent.style.width = "50%"
		notificationlist.innerHTML = notificationfive +currentnotificationlist;
	}

	if(score == 6){
		percent.style.width = "60%"
	}

	if(score == 7){
		percent.style.width = "70%"
	}

	if(score == 8){
		percent.style.width = "80%"
	}

	if(score >= 9){
		percent.style.width = "90%"
		notificationlist.innerHTML = notificationnine +currentnotificationlist;
	}

	if(score == 10){
		percent.style.width = "100%"
		notificationlist.innerHTML = notificationfive +currentnotificationlist;
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






