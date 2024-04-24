var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('flashingtext');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

/// taking user back to the top
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

/// will show image of movies automatically

var slideIndex = 0;
carousel(); /// allows to show content via slideshow

function carousel() {
  var i;
  var x = document.getElementsByClassName("listofMovies");
  for (i=0; i < x.length; i++){
	x[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex=2}
  x[slideIndex-1].style.display = "block"; /// display is block
  setTimeout(carousel, 3500); /// images will change every 3.5 seconds
}