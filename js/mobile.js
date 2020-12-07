const accordionLink = document.querySelector('.accordion');
const panel = document.querySelector('.panel');
const arrow = document.querySelector('.arrow');

const virtualCardBox = document.querySelector('.virtual-image');
const virtualCard = document.querySelector('.virtual-image-card');


// Smooth scroll for accordion
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash;
        });
      } // End if
    });
  });

accordionLink.addEventListener('click', e => {
    console.log(true)
    panel.classList.toggle('show');
    arrow.classList.toggle('rotate-arrow');
})

// Function for virtual card popup
const popUp = () => {
  virtualCard.classList.remove('popCardIn');
  virtualCard.classList.add('popCardOut');
}

const removePopUp = () => {
  virtualCard.classList.remove('popCardOut');
  virtualCard.classList.add('popCardIn');
}

// Intersection Observer for the virtual card popout
const optionss = {
  root: null, // It is the viewport
  threshold: .3,
  rootMargin: '10px'
}

const sectionVirtualObserver = new IntersectionObserver ((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('virtual');
      popUp();
    } else if (!entry.isIntersecting) {
      removePopUp();
    }
  })
}, optionss)

sectionVirtualObserver.observe(virtualCardBox);



