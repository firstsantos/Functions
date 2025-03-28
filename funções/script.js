function moveon() {
  var answer = confirm("Ready to move on?");
  if (answer) window.location = "http://google.com";
}
setTimeout(moveon, 60000);

function debug(msg) {
  var log = document.getElementById("div");
  if (!log) {
    log.id = "debuglog";

    log.innerHTML = "<h1> Debug Log</h1>";
    document.body.appendChild(log);
  }
  var pre = document.createElement("pre");
  var text = document.createTextNode(msg);
}

function hide(e, reflow) {
  if (reflow) {
    e.style.display = "none";
  } else {
    e.style.visibility = "hidden";
  }
}

function highlight(e) {
  if (!e.className) e.className = "hilite";
  else e.className += "hilite";
}
