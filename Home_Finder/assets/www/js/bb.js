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
        //CHECK AND CLOSE MENU IF OPEN
        if(document.getElementById("nav").classList.contains("nav-active")){
            toggleMenu();
        }

        else {}
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

    var pagetitle = document.getElementById("pagetitle");
    var pagehint = document.getElementById("pagehint");
    var hometitle = "Willkommen";
    var homehint = "Probier das interaktive Gewinnspiel aus und Räume den Hauptpreis ab!";

    /* OPEN  IMPRINT */
    var imprinttrigger = document.getElementById("imprint");
    var imprintwindow = document.getElementById("imprintwindow");
    var imprintout = document.getElementById("imprintout");

    imprinttrigger.addEventListener("click", function(){
        imprintwindow.classList.toggle("open");
        pagetitle.innerHTML = "Impressum";
        pagehint.innerHTML = "Herausgeber und Verantwortlicher der App";
        toggleMenu(); // Close the menu
    });

    imprintout.addEventListener("click", function(){
        imprintwindow.classList.toggle("open");
        pagetitle.innerHTML = hometitle;
        pagehint.innerHTML = homehint;
    });


    /* OPEN  PRIVACY */
    var privacytrigger = document.getElementById("privacy");
    var privacywindow = document.getElementById("privacywindow");
    var privacyout = document.getElementById("privacyout");

    privacytrigger.addEventListener("click", function(){
        privacywindow.classList.toggle("open");
        pagetitle.innerHTML = "Datenschutz";
        pagehint.innerHTML = "Erklärung und Einstellungen";
        toggleMenu(); // Close the menu
    });

    privacyout.addEventListener("click", function(){
        privacywindow.classList.toggle("open");
        pagetitle.innerHTML = hometitle;
        pagehint.innerHTML = homehint;
    });



});


