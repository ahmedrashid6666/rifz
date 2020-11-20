var slideIndex = 1;
showSlides(slideIndex);


setInterval(function(){ 
    slideChange(1);
 }, 6000);

function slideChange(n){
    showSlides(slideIndex = slideIndex+n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}