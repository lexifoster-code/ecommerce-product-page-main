
let value = 0
const display = document.querySelector('.display'); 
const increment = document.querySelector('.plus'); 
const decrement = document.querySelector('.minus'); 

//Test to see values/updates
//console.log(display)
//console.log(display)//
//

function updateDisplay() {
    display.textContent = value;
}

increment.addEventListener('click', ()=> {
    value++;
    updateDisplay();
})
console.log(increment)


decrement.addEventListener('click', ()=> {
    value--;
    updateDisplay();;
})

updateDisplay();

const lightbox = document.getElementById('lightbox');
const closeButton = document.querySelector('.close');
const mainImage = document.querySelector('.main-img');
const lightboxImage = document.getElementById('lightbox-img');
const thumbnails = document.querySelectorAll('.lightbox-side-img');

 // Function to open the lightbox with the selected image
 function openLightbox(imageSrc) {
    lightbox.style.display = 'flex';
    lightboxImage.src = imageSrc; // Set the main image
}

// Open lightbox with the main image
mainImage.addEventListener('click', () => {
    openLightbox(mainImage.src);
});

// Open lightbox with clicked thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (event) => {
        const fullImageSrc = event.target.getAttribute('data-full-src'); // Get the full image source
        openLightbox(fullImageSrc);
    });
});

closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside of the image
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

const modal = document.getElementById('cartModal')

const openModal = document.querySelector('.cart-icon');
 openModal.addEventListener('click', () =>{
   modal.style.display = "flex"
 })
 const closeModal = document.getElementById('closeModal');
 closeModal.addEventListener('click', () =>{
   modal.style.display = "none"
 })