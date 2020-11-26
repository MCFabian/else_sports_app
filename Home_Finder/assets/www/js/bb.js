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




