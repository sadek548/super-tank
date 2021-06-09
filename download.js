var i = 60,
  time;
function E(id) {return document.getElementById(id) }
E('myInput').onclick = function () {
  E('imageoef').style.visibility = 'visible';
  E('link').style.visibility = 'hidden';
 E('myInput').disabled = 'true';
  time = setInterval(function () {
    i--;
    E('countdown').innerHTML = i;
    if (i < 1) {
      clearInterval(time);
      E('countdown').innerHTML = '';
      E('imageoef').style.visibility = 'hidden';
      E('link').style.visibility = 'visible';
    }
  }, 7000);
}