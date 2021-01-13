// JavaScript Document
var UD_MENU_OPEN = false;

function toggleMenu() {
    "use strict";
    UD_MENU_OPEN = !UD_MENU_OPEN;
    document.getElementById("bb-btn").classList.toggle("is-active", UD_MENU_OPEN);
    document.getElementById("nav").classList.toggle("nav-active", UD_MENU_OPEN);
    document.getElementById("overlay").classList.toggle("overlay-active", UD_MENU_OPEN);
}


window.addEventListener("load", function(){

    //OPEN NOTIFICATIONS
    var burgerbutton = document.getElementById("bb-btn");
    var notification = document.getElementById("notifications");
    var notificationcounter = document.getElementById("notificationcounter");
    var notificationoverlay = document.getElementById("notification_overlay");
    var notificationsclose = document.getElementById("notifications-close");
    
    notification.addEventListener("click", function(){  //CHANGE To TOUCHSTART
        callnotifications();
    })

    notificationsclose.addEventListener("click", function(){  //CHANGE To TOUCHSTART
        callnotifications();
    })

    function callnotifications(){
        burgerbutton.classList.toggle("inactive");

        //CHECK AND CLOSE MENU IF OPEN
        if(document.getElementById("nav").classList.contains("nav-active")){
            toggleMenu();
        }

        else {
            //
        }
        document.getElementById("overlay").classList.toggle("overlay-active");
        notificationoverlay.classList.toggle("slide_overlay-active");
    }

    //CHECK QUANTITY OF NOTIFICATIONS
    var notificationquantity = document.getElementById("notificationlist").childElementCount;
    notificationcounter.innerHTML = (notificationquantity);


    //CHANGE NOTIFICATIONS ICON IF MORE THEN 1
    if (notificationquantity == 0) {
        notification.innerHTML = ("notifications_none");    
    } 
    
    else {
        //
    }

    var sortbutton = document.getElementById("sortbutton");

    /* SORT ACTLIST */
    sortbutton.addEventListener("click", function(){
        var list = document.getElementById("acts");
        list.classList.toggle("dec");
    })

})

// FILTER ACT-LIST BY SEARCH
function tablefilter() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("acts");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        searchfortext = li[i].getElementsByClassName("searchfortext")[0];
        txtValue = searchfortext.textContent || searchfortext.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
            
        }
    }
}

window.addEventListener("load", function(){
    const maincontent = document.getElementById("home");
    var pagetitle = document.getElementById("pagetitle");
    var pagehint = document.getElementById("pagehint");
    var hometitle = "Willkommen";
    var homehint = "Probier das interaktive Gewinnspiel aus und Räume den Hauptpreis ab!";
    var barcodescanner = document.getElementById("scann-bar");


    /* GET BACK TO HOME */
    var hometrigger = document.getElementById("hometrigger");

    hometrigger.addEventListener("click", function(){
        hometitle.innerHTML ="Willkommen";
        homehint.innerHTML ="Probier das interaktive Gewinnspiel aus und Räume den Hauptpreis ab!";
        barcodescanner.style.display ="block";
        maincontent.style.display="block";
        document.getElementById("overlay").classList.remove("overlay-active");
        toggleMenu();
        if(actswindow.style.display = "block"){
            actswindow.style.display = "none"

            if(nav.classList.contains("nav-active")){
                toggleMenu();
            }

            else{
                //
            }

        }

        else{
            //
        }


    })


    /* OPEN  IMPRINT */
    var imprinttrigger = document.getElementById("imprint");
    var entryinmprint = document.getElementById("entryinmprint");
    var imprintwindow = document.getElementById("imprintwindow");
    var imprintout = document.getElementById("imprintout");

    imprinttrigger.addEventListener("click", function(){
        if(actswindow.style.display = "block"){
            actswindow.style.display = "none"
            maincontent.style.display="block";
            barcodescanner.style.display ="block";
            imprintwindow.classList.toggle("open");
            pagetitle.innerHTML = "Impressum";
            pagehint.innerHTML = "Herausgeber und Verantwortlicher der App";
            toggleMenu(); // Close the menu
        }

        else{
            maincontent.style.display="block";
            imprintwindow.classList.toggle("open");
            pagetitle.innerHTML = "Impressum";
            pagehint.innerHTML = "Herausgeber und Verantwortlicher der App";
            toggleMenu(); // Close the menu
        }
    });

    entryinmprint.addEventListener("click", function(){
        if(actswindow.style.display = "block"){
            actswindow.style.display = "none"
            maincontent.style.display="block";
            barcodescanner.style.display ="block";
            imprintwindow.classList.toggle("open");
            pagetitle.innerHTML = "Impressum";
            pagehint.innerHTML = "Herausgeber und Verantwortlicher der App";

        }

        else{
            maincontent.style.display="block";
            imprintwindow.classList.toggle("open");
            pagetitle.innerHTML = "Impressum";
            pagehint.innerHTML = "Herausgeber und Verantwortlicher der App";

        }
    });


    imprintout.addEventListener("click", function(){
        imprintwindow.classList.toggle("open");
        pagetitle.innerHTML = hometitle;
        pagehint.innerHTML = homehint;
    });


    /* OPEN  PRIVACY */
    var privacytrigger = document.getElementById("privacy");
    var entryprivacy = document.getElementById("entryprivacy");
    var privacywindow = document.getElementById("privacywindow");
    var privacyout = document.getElementById("privacyout");

    privacytrigger.addEventListener("click", function(){
        maincontent.style.display="block";
        barcodescanner.style.display ="block";
        privacywindow.classList.toggle("open");
        pagetitle.innerHTML = "Datenschutz";
        pagehint.innerHTML = "Erklärung und Einstellungen";
        toggleMenu(); // Close the menu
    });

    entryprivacy.addEventListener("click", function(){
        maincontent.style.display="block";
        barcodescanner.style.display ="block";
        privacywindow.classList.toggle("open");
        pagetitle.innerHTML = "Datenschutz";
        pagehint.innerHTML = "Erklärung und Einstellungen";

    });

    privacyout.addEventListener("click", function(){
        
        if(actswindow.style.display = "block"){
            actswindow.style.display = "none"
            privacywindow.classList.toggle("open");
            pagetitle.innerHTML = hometitle;
            pagehint.innerHTML = homehint;
        }

        else{
            privacywindow.classList.toggle("open");
            pagetitle.innerHTML = hometitle;
            pagehint.innerHTML = homehint;
        }
    });

    /* OPEN  QUIZ */
    var quiztrigger = document.querySelectorAll(".quiztrigger");
    var quizwindow = document.getElementById("quizwindow");
    var quizout = document.querySelectorAll(".quizout");

    for (var i = 0; i < quiztrigger.length; i++) {
        quiztrigger[i].addEventListener("click", function(){
            readQR();

            if(actswindow.style.display = "block"){
                actswindow.style.display = "none"

                if(nav.classList.contains("nav-active")){
                    toggleMenu();
                }
    
                else{
                    //
                }

            }

            else{
                //
            }


    })};

    for (var i = 0; i < quizout.length; i++) {
        quizout[i].addEventListener("click", function(){
        document.getElementById("overlay").classList.remove("overlay-active");
        quizwindow.classList.toggle("open");
        pagetitle.innerHTML = hometitle;
        pagehint.innerHTML = homehint;

        getscore();
    })};

    /* OPEN  ACTS */
    var actstrigger = document.querySelectorAll(".acts");
    var actswindow = document.getElementById("actswindow");
    var actsout = document.getElementById("actsout");

    for (var i = 0; i < actstrigger.length; i++) {
        actstrigger[i].addEventListener("click", function(){
            barcodescanner.style.display ="none";
            actswindow.style.display="block";
            maincontent.style.display="none";
            
            if(document.getElementById("nav").classList.contains("nav-active")){
                toggleMenu();
            }
    })};

    actsout.addEventListener("click", function(){
        barcodescanner.style.display ="block";
        maincontent.style.display="block";
        actswindow.style.display="none";
    });

    /*OPEN SINGEL PAGES FOR ACTS */

    var actpage = document.getElementsByClassName("actpage");
    var acttoopen = document.getElementsByClassName("singelact");
    var closeactpage = document.querySelectorAll(".closeactpage");
    var allpages = document.querySelectorAll(".actpage");

    acttoopen[0].addEventListener("click", function(){
        document.getElementById("overlay").classList.add("overlay-active");
        actpage[0].style.bottom = "0";
    })

    acttoopen[1].addEventListener("click", function(){
        document.getElementById("overlay").classList.add("overlay-active");
        actpage[1].style.bottom = "0";
    })

    acttoopen[2].addEventListener("click", function(){
        document.getElementById("overlay").classList.add("overlay-active");
        actpage[2].style.bottom = "0";
    })

    acttoopen[3].addEventListener("click", function(){
        document.getElementById("overlay").classList.add("overlay-active");
        actpage[3].style.bottom = "0";
    })


    for (var i = 0; i < closeactpage.length; i++) {
        closeactpage[i].addEventListener("click", function(){
            document.getElementById("overlay").classList.remove("overlay-active");
            for (var i = 0; i < closeactpage.length; i++) {
                allpages[i].style.bottom ="-100%";
            }
    })}






    //ENTRYPAGE
    var entry = document.getElementById("entrypage");
    var leaveentry = document.getElementById("leaveentry")
    var openentry = document.getElementById("entrynotifitication");

    openentry.addEventListener("click", function(){
        entry.style.display = "block";
     })

    leaveentry.addEventListener("click", function(){
       entry.style.display = "none";
       
    })

});



window.addEventListener("load", function(){
    showSlides(slideIndex);
    currentSlide(1);
})

/* OLD SLIDER */
// Slider

var slideIndex = 1;
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

/* READ QUIZ QR */
function readQR() {
	window.plugins.barcodeScanner.scan(function(result) {
		var text1 = result.text;

		if (text1 == "Frage 1 öffnen") {
            /* alert(text1); */
            getquizwindow();
            currentSlide(1);
        }

        if (text1 == "Frage 2 öffnen") {
            /* alert(text1); */
            getquizwindow();
            currentSlide(2);
        }

        if (text1 == "Frage 3 öffnen") {
            /* alert(text1); */
            getquizwindow();
            currentSlide(3);
        }

        if (text1 == "Frage 4 öffnen") {
            /* alert(text1); */
            getquizwindow();
            currentSlide(4);
        }

        if (text1 == "Frage 5 öffnen") {
            /* alert(text1); */
            getquizwindow();
            currentSlide(5);
        }

        if (text1 == "Frage 6 öffnen") {
            /* alert(text1); */
            getquizwindow();
            currentSlide(6);
        }

        if (text1 == "Frage 7 öffnen") {
            /* alert(text1); */
            getquizwindow();
            currentSlide(7);
        }

        if (text1 == "Frage 8 öffnen") {
            /* alert(text1); */
            getquizwindow();
            currentSlide(8);
        }

        if (text1 == "Frage 9 öffnen") {
            /* alert(text1); */
            getquizwindow();
            currentSlide(9);
        }

        if (text1 == "Frage 10 öffnen") {
            /* alert(text1); */
            getquizwindow();
            currentSlide(10);
        }
        
        else {
			alert("Scan abgebrochen");
		}
        
        }, 
        
        function(error) {
		    alert("Scan failed: " + error);
	});
}

function getquizwindow(){
    const maincontent = document.getElementById("home");
    var pagetitle = document.getElementById("pagetitle");
    var pagehint = document.getElementById("pagehint");
    var barcodescanner = document.getElementById("scann-bar");
    var actswindow = document.getElementById("actswindow");

    maincontent.style.display="block";
    barcodescanner.style.display ="block";
    quizwindow.classList.toggle("open");
    pagetitle.innerHTML = "Gewinnspiel";
    pagehint.innerHTML = "Finde alle QR-Codes und Fragen!";
    document.getElementById("overlay").classList.toggle("overlay-active");

    if(actswindow.style.display = "block"){
        actswindow.style.display = "none"

        if(nav.classList.contains("nav-active")){
            toggleMenu();
        }

        else{
            //
        }

    }

    else{
        //
    }

}

window.addEventListener("load", function(){
    //FUNTKION ZUM AUFRUF DER LIVEKACHEL
    // DA ICH KEIN DATUM DER VERANSTALTUNG HABE; PRÜFE ICH NUR NACH ZEIT
    function livetimecontent(){
        //var refreshscore = 0;
        setInterval(function(){

            //KACHELN
            var livecard = document.getElementById("livecard");
            //var counter = document.getElementById("counter");
            var card1 = "<a id='programm' class='card acts'><div class='card-img-holder'><img src='img/example.png' alt='Vorschaubild'></div><div class='homecards-text'><div class='homecards-icon' id='programm-icon'></div><div><small>Aktuell läuft:</small><h2>Begrüßungsrede der Schulleitung</h2></div></div><span></span></a>";
            var card2 = "<a id='programm' class='card acts'><div class='card-img-holder'><img src='img/example2.png' alt='Vorschaubild'></div><div class='homecards-text'><div class='homecards-icon' id='programm-icon'></div><div><small>Aktuell läuft:</small><h2>Dinner for One</h2></div></div><span></span></a>";
            var card3 = "<a id='programm' class='card acts'><div class='card-img-holder'><img src='img/example.png' alt='Vorschaubild'></div><div class='homecards-text'><div class='homecards-icon' id='programm-icon'></div><div><small>Aktuell läuft:</small><h2>Fallschirmspringer Udo</h2></div></div><span></span></a>";
            var card4 = "<a id='programm' class='card acts'><div class='card-img-holder'><img src='img/example2.png' alt='Vorschaubild'></div><div class='homecards-text'><div class='homecards-icon' id='programm-icon'></div><div><small>Aktuell läuft:</small><h2>Abschlussrede der Schulleitung</h2></div></div><span></span></a>";

            //DELAY FOR DEBUG -> TO CHECK IF CARD IS LOADING
            //setTimeout(function(){
                //livecard.innerHTML="Refreshing now..."
            //}, 1000);


            //GET DATE - TIME - HOURS
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();

            //HABE KEINE PLACEHOLDER KARTE
            if(h < 13){
                livecard.innerHTML = card1;
            }

            if(h == 13){
                livecard.innerHTML = card1;
            }

            else if(h == 14 ){
                livecard.innerHTML = card2;
            }

            else if(h == 15  ){
                livecard.innerHTML = card3;
            }

            else if(h == 16 ){
                livecard.innerHTML = card4;
            }

            //HABE KEINE PLACEHOLDER KARTE
            else if(h >= 17 ){
                livecard.innerHTML = card1;
            }
        
            else {
                livecard.innerHTML="Fehler mit der Livekachel";
            }



            //COUNTING THE REFRESH
            //refreshscore = refreshscore + 1;
            //counter.innerHTML = refreshscore;


        }, 3000)
    }

    livetimecontent();

})

