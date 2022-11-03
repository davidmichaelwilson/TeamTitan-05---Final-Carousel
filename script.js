const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0
const totalSlides = slides.length
document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide)
document.getElementById("carousel-button-prev").addEventListener("click", moveToNextSlide)



function moveToNextSlide() {
   hideAllSlides()
 if (slidePosition === totalSlides - 1){
   slidePosition = 0 
 }else{
   slidePosition++
 }
  slides[slidePosition].classList.add("carousel-item-visible")
}
function moveToprevSlide() {
  hideAllSlides()
  if (slidePosition ===0){
    slidePosition = totalSlides -1
  }else{
    slidePOSITION --
  }
    slides[slidePosition].classList.add("carousel-item-visible")
}
function hideAllSlides(){
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible")
    slide.classList.add("carousel-item-hidden")
  }
}



function openModal() {
  document.getElementById("overlay").style.display = "block";
}

function closeModal() {
  document.getElementById("overlay").style.display = "none";
}

function plusSlides() {
  showSlides(slideIndex += i);
}

function currentSlide(i) {
  showSlides(slideIndex = i);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
   for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 slides[slideIndex-1].style.display = "block";
}

//slide2//

 let pictureIndex = 1;
showPictures(pictureIndex);

function plusPictures(n) {
  showPictures(pictureIndex += n);
}

function currentPictures(n) {
  showPictures(pictureIndex = n);
}

function showPictures(n) {
  let i;
  let pictures = document.getElementsByClassName("mySlides");
    if (n > pictures.length) {pictureIndex = 1}    
  if (n < 1) {pictureIndex = pictures.length}
  for (i = 0; i < pictures.length; i++) {
    pictures[i].style.display = "none";  
  }
 
  pictures[pictureIndex-1].style.display = "block";  
}
   
 
 

