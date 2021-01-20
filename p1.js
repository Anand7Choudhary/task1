//loading screen
let var1 = document.getElementById("loading_screen");
let var2 = document.getElementById("code_body");
let var3 = document.getElementById("moving_top_heading_abd_menu");
var1.style.display = "block";
var2.style.visibility = "hidden";
var3.style.display = "none";
setTimeout(loading, 2000);
function loading() {
  var1.style.display = "none";
  var2.style.visibility = "visible";
  var3.style.display = "block";
}
//navigation menu
function openmenu() {
  var x = document.getElementById("navigation_menu");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("ham").style.display = "none";
    document.getElementById("close_ham").style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementById("ham").style.display = "block";
    document.getElementById("close_ham").style.display = "none";
  }
}

//logo_menu info move

var slideinfo_count = 0;
showinfo();

async function showinfo() {
  var i;
  var slides = document.getElementsByClassName("info123");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideinfo_count++;
  if (slideinfo_count > slides.length) {
    slideinfo_count = 1;
  }
  slides[slideinfo_count - 1].style.display = "block";
  setTimeout(showinfo, 2000); // Change image every 2 seconds
}

//moving_project move

var slideIndex = 0;
showslide();

async function showslide() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showslide, 3000); // Change image every 5 seconds
}
