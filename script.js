
let value = 0
const display = document.querySelector('.display'); 
const increment = document.querySelector('.plus'); 
const decrement = document.querySelector('.minus'); 



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


const addToCartBtn = document.querySelector('.add')
let productData = []
addToCartBtn.addEventListener("click", () => {
    async function fetchProductData() {
        const response = await fetch('product.json');
        productData = await response.json();
        updateImage(); // Initialize the first image
    }
    
});


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

const images = ['./images/image-product-1.jpg','./images/image-product-2.jpg','./images/image-product-3.jpg','./images/image-product-4.jpg']
const lightboxImg = document.getElementById('lightbox-img')

 let currentIndex = 0

 
 function updateImage() {
    const fullSrc = thumbnails[currentIndex].getAttribute('data-full-src');
    lightboxImg.src = fullSrc;
    
    // Update active thumbnail
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
    });
}


const nextBtn = document.querySelector('.next');
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % thumbnails.length; // Loop around
    updateImage();
});


const prevBtn = document.querySelector('.prev');
if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length; // Loop around
        updateImage();
    });
}

// Thumbnails click event
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        currentIndex = index; 
        updateImage();
    });
});

// Initialize the first image on load
updateImage();

const modal = document.getElementById('cartModal')

const openModal = document.querySelector('.cart-icon');
 openModal.addEventListener('click', () =>{
   modal.style.display = "flex"
 })
 const closeModal = document.getElementById('closeModal');
 closeModal.addEventListener('click', () =>{
   modal.style.display = "none"
 })

 