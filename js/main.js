//Get modal element
var modal = document.getElementById('portfolioModal');
// Get open modal button
var flexcontainer = document.getElementsByClassName('flex-container')[0];
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
flexcontainer.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', clickOutside);

// Function to open modal
function openModal(){
   modal.style.display = 'block';
}
// Function to close modal
function closeModal(){
    modal.style.display = 'none';
 }

 // Function to close modal if outside click
function clickOutside(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
 }
