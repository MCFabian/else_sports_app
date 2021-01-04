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
/*     document.getElementById("overlay").addEventListener("click", function(){
        UD_MENU_OPEN = !UD_MENU_OPEN;
        document.getElementById("bb-btn").classList.toggle("is-active", UD_MENU_OPEN);
        document.getElementById("nav").classList.toggle("nav-active", UD_MENU_OPEN);
        document.getElementById("overlay").classList.toggle("overlay-active", UD_MENU_OPEN);
    }); */

/*     document.getElementById("overlay").addEventListener("touchstart", function(){
        UD_MENU_OPEN = !UD_MENU_OPEN;
        document.getElementById("bb-btn").classList.toggle("is-active", UD_MENU_OPEN);
        document.getElementById("nav").classList.toggle("nav-active", UD_MENU_OPEN);
        document.getElementById("overlay").classList.toggle("overlay-active", UD_MENU_OPEN);
    }); */
})


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

function alerttest(){
    alert("Test");
}





/* (function() {
	
	function sortElements( elements, callback ) {
		var elems = [];
		for( var i = 0; i < elements.length; ++i ) {
			var el = elements[i];
			elems.push( el );
		}
		var sorted = elems.sort( callback );
		return sorted;	
	}
	
	function sortAscending( a, b ) {
		var aValue = parseInt( a.firstChild.nodeValue, 10 );
		var bValue = parseInt( b.firstChild.nodeValue, 10 );
		return aValue > bValue;	
	}
	
	function sortDescending( a, b ) {
		var aValue = parseInt( a.firstChild.nodeValue, 10 );
		var bValue = parseInt( b.firstChild.nodeValue, 10 );
		return aValue < bValue;	
	}		
	
	document.addEventListener( "DOMContentLoaded", function() {
		var elements = document.querySelectorAll( "#acts li" ),
			test = document.querySelector( "#acts" ),
			asc = document.querySelector( "#asc" ),
			desc = document.querySelector( "#desc" );
		    
		    
		    asc.addEventListener( "click", function() {
			    var sortedElements = sortElements( elements, sortAscending );
			    var html = "";
			    for( var i = 0; i < sortedElements.length; ++i ) {
				    html += sortedElements[i].outerHTML;
			    }
			    test.innerHTML = html;
			    
		    }, false);
		    
		    desc.addEventListener( "click", function() {
			    var sortedElements = sortElements( elements, sortDescending );
			    var html = "";
			    for( var i = 0; i < sortedElements.length; ++i ) {
				    html += sortedElements[i].outerHTML;
			    }
			    test.innerHTML = html;
			    
		    }, false);
		
		
		
	});
	
})(); */



window.addEventListener("load", function(){
    const maincontent = document.getElementById("home");
    var pagetitle = document.getElementById("pagetitle");
    var pagehint = document.getElementById("pagehint");
    var hometitle = "Willkommen";
    var homehint = "Probier das interaktive Gewinnspiel aus und Räume den Hauptpreis ab!";
    var barcodescanner = document.getElementById("scann-bar");

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
    var quizout = document.getElementById("quizout");

    for (var i = 0; i < quiztrigger.length; i++) {
        quiztrigger[i].addEventListener("click", function(){
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


    })};

    quizout.addEventListener("click", function(){
        document.getElementById("overlay").classList.remove("overlay-active");
        quizwindow.classList.toggle("open");
        pagetitle.innerHTML = hometitle;
        pagehint.innerHTML = homehint;

        getscore();
    });

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


    //ENTRYPAGE
    var entry = document.getElementById("entrypage");
    var leaveentry = document.getElementById("leaveentry")
    var openentry = document.getElementById("entrynotifitication");

    openentry.addEventListener("click", function(){
/*         entry.style.opacity ="1";
        entry.style.pointerEvents = "all"; */
        entry.style.display = "block";
     })

    leaveentry.addEventListener("click", function(){
/*        entry.style.opacity ="0"; */
       entry.style.display = "none";
       
    })

});


