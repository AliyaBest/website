//Get modal element
// var modal = document.getElementById('portfolioModal');
// Get open modal button
//var flexcontainer = document.getElementsByClassName('flex-container')[0];
//Get close button
//var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
//flexcontainer.addEventListener('click', openModal);
// Listen for close click
//closeBtn.addEventListener('click', closeModal);
// Listen for outside click
//window.addEventListener('click', clickOutside);

// Function to open modal
//function openModal(){
//   modal.style.display = 'block';
// }
// Function to close modal
// function closeModal(){
//     modal.style.display = 'none';
//  }

//  // Function to close modal if outside click
// function clickOutside(e){
//     if(e.target == modal){
//     modal.style.display = 'none';
//     }
//  }

// Open the Modal
function openModal() {
   document.getElementById('myModal').style.display = "block";
 }
 
 // Close the Modal
 function closeModal() {
   document.getElementById('myModal').style.display = "none";
 }
 
 var slideIndex = 1;
 showSlides(slideIndex);
 
 // Next/previous controls
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 // Thumbnail image controls
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("demo");
   var captionText = document.getElementById("caption");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   captionText.innerHTML = dots[slideIndex-1].alt;
 }