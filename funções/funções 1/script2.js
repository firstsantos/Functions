window.onload = function () {
    var images = document.getElementsByTagName("img");
    for ( var i = 0; images.length; i++) {
        var image = images [i];
        if (image.addEventListener)
            image.addEventListener("click", hide, false);
        else  
            image.attachEvent("onclick", hide);
    }
    function hide(event) { event.target.style.visibility = "hidden";}
};


function debug (msg) {
    var log = $("#debuglog");
    if (log.length == 0 ) {
        log = $("<div id='debuglog'></div>");
        log.appendTo(document.body);
    }
    log.apprend($("<pre/>").text(msg));
}