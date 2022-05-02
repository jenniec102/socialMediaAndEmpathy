// javascript for index.html

// from https://github.com/dixonandmoe/rellax
// initialize Rellax for class .rellax
var rellax = new Rellax('.rellax', {
  center: true
});

// from https://simpleparallax.com/
// initialize simpleParallax for parallax-pic class
var image = document.getElementsByClassName('parallax-pic');
new simpleParallax(image, {
  delay: 0.5,
  scale: 1.5,
  overflow: true,
});

// from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// get top button
btn = document.getElementById("topBtn");

// show button when user scrolls down 100px
window.onscroll = function(){scrollFunc()};

// function to show button depending on user scrolling
function scrollFunc(){
  if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// button's functionality to go to top of page
function goToTop(){
  document.body.scrollTop = 0; // works for Safari
  document.documentElement.scrollTop = 0; // for chrome, firefox, etc.
}
