
let value = 0
const display = document.querySelector('.display'); 
const increment = document.querySelector('.plus'); 
const decrement = document.querySelector('.minus'); 
const addtocartBtn = document.querySelector('.add'); 
const notificationBadge = document.querySelector('.badge')
const cartItemsList = document.getElementById("cart-items-list");
const cartTotal = document.querySelector('.cart-footer');


let cartItems=[]


const product = {
    id: 1,
    name: "Pumpkin Patch Suede",
    price: 125,
    image: "./images/image-product-1-thumbnail.jpg",
   
  };
  

addtocartBtn.addEventListener('click', () => { 
    if (value > 0) {
        const currentCount = parseInt(notificationBadge.textContent) || 0; // Handle case where badge starts empty
        notificationBadge.textContent = currentCount + value; // Increment by the displayed quantity
        addtoCart(value)
        value = 0; // Reset value after adding to cart
        updateDisplay(); // Update display to reflect reset value
    }
});

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


const mainImages = document.querySelector('.main-img')
const mainThumbnail = document.querySelectorAll('.side-img')
let current = 0    


function updatemainImages() {
    const fullSrc = mainThumbnail[current].getAttribute('data-image-src');
   mainImages.src = fullSrc;
    
    // Update active thumbnail
    mainThumbnail.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === current);
    });

}
mainThumbnail.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        current = index; 
        updatemainImages(); // Call the function to update the main image
    });
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
updatemainImages();


const nextBtn = document.querySelector('.next');
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % thumbnails.length; // Loop around
    updateImage();
});

const prevBtn = document.querySelector('.prev');
if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length; 
        updateImage();
    });
}


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
 
// Close modal if clicked outside of cart content
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // Close modal if clicked outside
    }
});




  function addtoCart(){
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
  
    if (existingProductIndex >= 0) {
      cartItems[existingProductIndex].quantity += value; // Increase quantity if product already in the cart
    } else {
      cartItems.push({ ...product, quantity: value }); // Add product with quantity to the cart
    }
  
   
    updateCart();
  }
  
  // Update Cart function to display items dynamically
  function updateCart() {
    cartItemsList.innerHTML = ''; // Clear the cart items list
    let totalAmount = 0;
  
    cartItems.forEach(item => {
      const itemTotal = item.price * item.quantity;
      totalAmount += itemTotal;
  
      const cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
      cartItemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">$${item.price}</span>
        <span class="cart-item-quantity">x${item.quantity}</span>
        <span class="cart-item-total">$${itemTotal}</span>
      
        
      `;
  
      cartItemsList.appendChild(cartItemDiv);

})

const deleteBtn = document.querySelector('.deleteBtn')
const checkoutButton = document.getElementById('checkoutButton')
deleteBtn.addEventListener('click', removeItemFromCart)
if (cartItems.length > 0) {
  checkoutButton.style.display = 'block';
  deleteBtn.style.display = 'block';
} else {
  checkoutButton.style.display = 'none';
  deleteBtn.style.display = 'none';
}
  }

 

function removeItemFromCart() {
       const item = cartItems[0]; // Get the first item in the cart

        if (item.quantity > 1) {
          
            item.quantity--;
        } else {
            // Remove the item entirely if quantity is 1
            cartItems.shift(); 
        }

        updateCart(); 
        UpdateNotificationBadge();
}

function UpdateNotificationBadge(){
    if (notificationBadge) {
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0); 
        notificationBadge.textContent = totalItems; // Update badge to total quantity
    }
        
    }


 

    


