
/*
    SLIDE ANIMATION
*/
// References to DOM elements
var $window = $(window);
var $document = $(document);
// Only links that starts with #
// var $navButtons = $("nav a").filter("[href^=#]");
var $navGoPrev = $(".go-prev");
var $navGoNext = $(".go-next");
var $slidesContainer = $(".slides-container");
var $slides = $(".slide");
var $currentSlide = $slides.first();

//Animating flag - is our app animating
var isAnimating = false;

//The height of the window
var pageHeight = $window.innerHeight();

//Key codes for up and down arrows on keyboard. We'll be using this to navigate change slides using the keyboard
var keyCodes = {
    UP  : 38,
    DOWN: 40
}

//Going to the first slide
goToSlide($currentSlide);


/*
*   Adding event listeners
* */

$window.on("resize", onResize).resize();
$window.on("mousewheel DOMMouseScroll", onMouseWheel);
$document.on("keydown", onKeyDown);
// $navButtons.on("click", onNavButtonClick);
$navGoPrev.on("click", goToPrevSlide);
$navGoNext.on("click", goToNextSlide);

/*
*   Internal functions
* */


/*
    When a button is clicked - first get the button href, and then slide to the container, if there's such a container
*/
function onNavButtonClick(event)
{
    //The clicked button
    var $button = $(this);

    //The slide the button points to
    var $slide = $($button.attr("href"));

    //If the slide exists, we go to it
    if($slide.length)
    {
        goToSlide($slide);
        // event.preventDefault();
    }
}

/*
*   Getting the pressed key. Only if it's up or down arrow, we go to prev or next slide and prevent default behaviour
*   This way, if there's text input, the user is still able to fill it
* */
function onKeyDown(event)
{

    var PRESSED_KEY = event.keyCode;

    if(PRESSED_KEY == keyCodes.UP)
    {
        goToPrevSlide();
        // event.preventDefault();
    }
    else if(PRESSED_KEY == keyCodes.DOWN)
    {
        goToNextSlide();
        // event.preventDefault();
    }

}

/*
*   When user scrolls with the mouse, we have to change slides
*/
function onMouseWheel(event)
{
    //Normalize event wheel delta
    var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

    //If the user scrolled up, it goes to previous slide, otherwise - to next slide
    if(delta < -1)
    {
        goToNextSlide();
    }
    else if(delta > 1)
    {
        goToPrevSlide();
    }

    // event.preventDefault();
}

/*
*   If there's a previous slide, slide to it
* */
function goToPrevSlide()
{
    if($currentSlide.prev().length & !$('#navi-toggle').is(':checked'))
    {
        goToSlide($currentSlide.prev());
    }
}

/*
If there's a next slide (and the nav menu isn't open), slide to it
*/
function goToNextSlide()
{
    if($currentSlide.next().length & !$('#navi-toggle').is(':checked'))
    {
        goToSlide($currentSlide.next());
    }
}

/*
Actual transition between slides
*/
function goToSlide($slide)
{
    //If the slides are not changing and there's such a slide
    if(!isAnimating && $slide.length)
    {
        //setting animating flag to true
        isAnimating = true;
        $currentSlide = $slide;

        //Sliding to current slide
        TweenLite.to($slidesContainer, 1, {scrollTo: {y: pageHeight * $currentSlide.index() }, onComplete: onSlideChangeEnd, onCompleteScope: this});

        //Animating menu items
        // TweenLite.to($navButtons.filter(".active"), 0.5, {className: "-=active"});

        // TweenLite.to($navButtons.filter("[href=#" + $currentSlide.attr("id") + "]"), 0.5, {className: "+=active"});

    }
}

/*
*   Once the sliding is finished, we need to restore "isAnimating" flag.
*   You can also do other things in this function, such as changing page title
* */
function onSlideChangeEnd(){
    isAnimating = false;
}

/*
*   When user resize it's browser we need to know the new height, so we can properly align the current slide
* */
function onResize(event)
{

    //This will give us the new height of the window
    var newPageHeight = $window.innerHeight();

    /*
    *   If the new height is different from the old height ( the browser is resized vertically ), the slides are resized
    * */
    if(pageHeight !== newPageHeight)
    {
        pageHeight = newPageHeight;

        //This can be done via CSS only, but fails into some old browsers, so I prefer to set height via JS
        TweenLite.set([$slidesContainer, $slides], {height: pageHeight + "px"});

        //The current slide should be always on the top
        TweenLite.set($slidesContainer, {scrollTo: {y: pageHeight * $currentSlide.index() }});
    }

}



// Select DOM elements
const logoColored = document.querySelector('.colored-logo');
const logoWhite = document.querySelector('.white-logo');

const sectionZero = document.querySelector('#slide-0');
const scrollContainer = document.querySelector('.scroll-down')

const sectionOne = document.querySelector('#slide-1');
const sectionOneContent = document.querySelector('.content-1');

const sectionTwo = document.querySelector('#slide-2');
const sectionTwoTextbox = document.querySelector('.text-box-2');
const slideLeftTwo = document.querySelectorAll('.textAnimRight2');
const slideRightTwo = document.querySelectorAll('.textAnimLeft2');
const vid2 = document.querySelector('#vid2');


const sectionThree = document.querySelector('#slide-3');
const cardBoxThree = document.querySelector('.content-3-card-box');

const sectionFour = document.querySelector('#slide-4');
const slideLeftFour = document.querySelectorAll('.textAnimRight4');
const slideRightFour = document.querySelectorAll('.textAnimLeft4');

const sectionFive = document.querySelector('#slide-5');
const cardBoxFive = document.querySelector('.content-5-card-box');

const sectionSix = document.querySelector('#slide-6');
const slideLeftSix = document.querySelectorAll('.textAnimRight6');
const slideRightSix = document.querySelectorAll('.textAnimLeft6');

const sectionSeven = document.querySelector('#slide-7');
const cardBoxSeven = document.querySelector('.content-8-card-box')

const sectionEight = document.querySelector('#slide-8');
const sectionEightContent = document.querySelector('.content-8-box');
const slideLeftEight = document.querySelectorAll('.textAnimRight8');
const slideRightEight = document.querySelectorAll('.textAnimLeft8');

const phoneBox = document.querySelector('.container-image');
const phone = document.querySelector('.img-box');

const sectionNine = document.querySelector('#slide-9');


/**
    APP/PLAY STORE LINKS ANIMATION
*/
const linkBackground = document.querySelector('.store__box-bg');
const linkBox = document.querySelector('.store__box-img');

// Animate app/play store link box in
const animateLinksIn = () => {
    linkBackground.classList.remove('bg-hide');
    linkBox.classList.remove('link-hide');

    linkBackground.classList.add('bg-show');
    linkBox.classList.add('link-show');
}

// Animate app/play store link box out
const animateLinksOut = () => {
    linkBackground.classList.remove('bg-show');
    linkBox.classList.remove('link-show');

    linkBackground.classList.add('bg-hide');
    linkBox.classList.add('link-hide');
}

// Returns true if app/play store link box is in view
const checkLinkVisibility = () => {
    return linkBox.classList.contains('link-show') 
    && linkBackground.classList.contains('bg-show');
}

// Show and hide links on click of store button
document.querySelector('.store').onclick = () => {
    if (!checkLinkVisibility()) {
        animateLinksIn();
    } else {
        animateLinksOut();
    }
}

// Hide link box when link box is in view and window (anywhere that's not on the link box) is clicked
window.onclick = (e) => {
    /*
        e.target !== document.querySelector('.store') solves the problem of the 
        link box opening and closing immediately the button is clicked since it 
        sees the store button as 'window'. So we just specify that it should 
        only trigger the closing only when the box is visible and the event (click) 
        target wasn't the button
    */
    if (checkLinkVisibility() & e.target !== document.querySelector('.store')) {
        animateLinksOut();
    } else if (!checkLinkVisibility()) {
        return;
    }
    return;
}

// Show white logo
const showWhite = () => {
    logoColored.classList.remove('show-logo');
    logoWhite.classList.add('show-logo');
}

// SHow colored logo
const showColored = () => {
    logoWhite.classList.remove('show-logo')
    logoColored.classList.add('show-logo')
}

// Function to slide content text (and heading) from right
const slideTextLeft = (elemFrmRight) => {
    elemFrmRight.forEach(elem => {
        elem.classList.remove('fadeOut');
        elem.classList.add('slideTextLeft');
        elem.style.animationDelay = `${elem.dataset.delay}s`
    })
}

// Function to slide content text (and heading) from left
const slideTextRight = (elemFrmLeft) => {
    elemFrmLeft.forEach(elem => {
        elem.classList.remove('fadeOut');
        elem.classList.add('slideTextRight');
        elem.style.animationDelay = `${elem.dataset.delay}s`
    })
}

// Function to fade out content text (and heading) on section leave
const fadeTextOut = (elemFrmRight, elemFrmLeft) => {
    elemFrmRight.forEach(elem => {
        elem.classList.remove('slideTextLeft');
        elem.classList.add('fadeOut');
    })
    
    elemFrmLeft.forEach(elem => {
        elem.classList.remove('slideTextRight');
        elem.classList.add('fadeOut');
    })
};


// Function to make card visible 
const showCard = (card) => {
    card.style.visibility = 'visible';
    card.style.opacity = '1'
}

// Function to hide card
const hideCard = (card) => {
    card.style.visibility = 'hidden';
    card.style.opacity = '0'
}

// Function to scale up card, taking the card element as argument 
const cardScaleUp = (card) => {
    card.classList.remove('scale-down');
    card.classList.add('scale-up');
}

// Function to scale down card, taking the card element as argument
const cardScaleDown = (card) => {
    card.classList.remove('scale-up');
    card.classList.remove('scale-down');
    card.classList.add('scale-down');
}

// Function to fix section content, taking the section content as argument 
const fixSectionContent = (sectionContent) => {
    setTimeout(() => {
        sectionContent.style.position = 'fixed';
    }, 600);
}

// Function to set element position property to absolute
const absoluteSectionContent = (sectionContent) => {
    sectionContent.style.position = 'absolute';
}

// Function to check if element is in viewport
const checkVisible = () => {
    var myElement = document.querySelector('.content-8-box');
    var bounding = myElement.getBoundingClientRect();
    
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
    
        console.log('Element is in the viewport!');
    } else {    
        console.log('Element is NOT in the viewport!');
    }
}

/**
 * Fade out section one when section two comes into viewport
*/

const options = {
    root: null, // It is the viewport
    threshold: 0,
    rootMargin: '-10px'
};

const textAnimOptions = {
    root: null, // It is the viewport
    threshold: .6,
    rootMargin: '-10px'
}

const fixContentOptions = {
    root: null, // It is the viewport
    threshold: 1,
    rootMargin: '20px'
}

// Section Zero Observer
const sectionZeroObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            hideCard(cardBoxThree);
            hideCard(cardBoxFive);
            hideCard(cardBoxSeven);
            
            // Show colored logo
            showColored();

            // Make content absolute (so it doesnt overlap section 0)
            absoluteSectionContent(sectionOneContent);
        }
    })
}, options)


const sectionZeroObserver2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {

            // Show scroll animation
            showCard(scrollContainer);

        }
    })
}, textAnimOptions)

// Section One Observer
var wasAbove = false;
const sectionOneObserver = new IntersectionObserver((entries, observer) => {    
    entries.forEach(entry => {
        const isAbove = entry.boundingClientRect.y < entry.rootBounds.y;

        if (entry.isIntersecting) {
            hideCard(cardBoxThree);
            hideCard(cardBoxFive);
            hideCard(cardBoxSeven);             

            if (wasAbove) { // Comes from top
                sectionOneContent.classList.remove('section-1-fade');
                sectionOneContent.classList.add('section-1-fadeIn');

                // Fade section two text out (left and right)
                fadeTextOut(slideRightTwo, slideLeftTwo);
            }
        }
        wasAbove = isAbove;
    })
}, options)

// Section One Observer to fix content when section is almost fully in view
const sectionOneObserver2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const isAbove = entry.boundingClientRect.y < entry.rootBounds.y;
        if(entry.isIntersecting) {
            // Hide scroll down animation
            hideCard(scrollContainer);

            // Change logo from colored to white
            setTimeout(() => {
                showWhite();                
            }, 400);

            if (!wasAbove) { // Comes from bottom
                // Make content fixed (so section 1 can slide up and overlap it)
                fixSectionContent(sectionOneContent);
            }
        }
    })
}, textAnimOptions)

// Section Two Observer
const sectionTwoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // vid2.load();
            // vid2.play();
            sectionOneContent.classList.remove('section-1-fadeIn');
            sectionOneContent.classList.add('section-1-fade');
            cardScaleDown(cardBoxThree);
        }
    })
}, options)

// Section Two Observer for the text animation. Section 2 has to be fully (or almost) in the viewport before text animation is triggered
const sectionTwoObserver2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // Play phone animation
            // playAnim();
            
            // Slide Content text (and heading) left
            slideTextLeft(slideLeftTwo);

            // Slide Content text (and heading) right
            slideTextRight(slideRightTwo);
        }
    })
}, textAnimOptions)


// Section three observer
const sectionThreeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            showCard(cardBoxThree);
            cardScaleUp(cardBoxThree);
            hideCard(cardBoxFive);

            // Fade section two text out (left and right)
            fadeTextOut(slideRightTwo, slideLeftTwo);

            // Fade section four text out (left ad right)
            fadeTextOut(slideRightFour, slideLeftFour);
        }
    })
}, options)

// Section four observer
const sectionFourObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            cardScaleDown(cardBoxThree);
            cardScaleDown(cardBoxFive);
        }
    })
}, options)

// Section Four Observer for the text animation. Section 2 has to be fully (or almost) in the viewport before text animation is triggered
const sectionFourObserver2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // Slide Content text (and heading) left
            slideTextLeft(slideLeftFour);

            // Slide Content text (and heading) right
            slideTextRight(slideRightFour);
        }
    })
}, textAnimOptions)

// Section five observer
const sectionFiveObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            hideCard(cardBoxThree);
            showCard(cardBoxFive);
            cardScaleUp(cardBoxFive);
            hideCard(cardBoxSeven);

            // Fade section four text out (left ad right)
            fadeTextOut(slideRightFour, slideLeftFour);

            // Fade section Six text out (left ad right)
            fadeTextOut(slideRightSix, slideLeftSix);
        }
    })
}, options)

// Section six observer
const sectionSixObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            cardScaleDown(cardBoxFive);
            cardScaleDown(cardBoxSeven);
            cardBoxSeven.classList.remove('move-card-down');
            cardBoxSeven.classList.remove('move-card-up');

            // Remove fixed (and background) class from section 8 content
            sectionEightContent.classList.remove('fix-content-8');
            sectionEightContent.classList.add('absolute-content-8');
        }
    })
}, options)

// Section Six Observer for the text animation. Section 6 has to be fully (or almost) in the viewport before text animation is triggered
const sectionSixObserver2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // Slide Content text (and heading) left
            slideTextLeft(slideLeftSix);

            // Slide Content text (and heading) right
            slideTextRight(slideRightSix);
        }
    })
}, textAnimOptions)

// Section seven observer
var wasItAbove = false;
const sectionSevenObserver = new IntersectionObserver((entries, observer) => {    
    entries.forEach(entry => {

        const isAbove = entry.boundingClientRect.y < entry.rootBounds.y;

        if (entry.isIntersecting) {
            showCard(cardBoxSeven);
            hideCard(cardBoxFive);
            cardScaleUp(cardBoxSeven);

            // Fade section six text out (left and right)
            fadeTextOut(slideRightSix, slideLeftSix);

            // Fade section eight text out (left and right)
            fadeTextOut(slideRightEight, slideLeftEight);

            // Remove fixed (and background) class from section 8 content
            sectionEightContent.classList.remove('fix-content-8');
            sectionEightContent.classList.add('absolute-content-8');
            

            if (wasItAbove) { // comes from top
                cardScaleUp(cardBoxSeven);
                cardBoxSeven.classList.remove('move-card-up');
                cardBoxSeven.classList.add('move-card-down');  
                
                // Remove fixed (and background) class from section 8 content
                sectionEightContent.classList.remove('fix-content-8');
                sectionEightContent.classList.add('absolute-content-8');
            }
        }
        wasItAbove = isAbove;
    })
}, options)

// Section eight observer
const sectionEightObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // console.log(8)
            // cardBoxSeven.style.position = 'fixed';
            cardBoxSeven.classList.remove('move-card-up');
            cardBoxSeven.classList.remove('move-card-down');
            cardBoxSeven.classList.add('move-card-up');
        }
    })
}, options)

// Section Eight Observer for the text animation. Section 8 has to be fully (or almost) in the viewport before text animation is triggered
const sectionEightObserver2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // Slide Content text (and heading) left
            slideTextLeft(slideLeftEight);

            // Slide Content text (and heading) right
            slideTextRight(slideRightEight);

        }
    })
}, textAnimOptions)

// Section 8 observer for fixing the content
var eightWasAbove = false;
const sectionEightObserver3 = new IntersectionObserver((entries, observer) => {    
    entries.forEach(entry => {
        const eightIsAbove = entry.boundingClientRect.y < entry.rootBounds.y;

        if (entry.isIntersecting) {        

            if (!eightWasAbove) { // Comes from bottom
                // Fix section 8 content (so footer can slide up and overlay it)
                // fixSectionContent(sectionEightContent);
                setTimeout(() => {
                    sectionEightContent.classList.remove('absolute-content-8');                
                    sectionEightContent.classList.add('fix-content-8');                
                }, 800);
            }
        }
        eightWasAbove = eightIsAbove;
    })
}, textAnimOptions)

// Section nine observer
const sectionNineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
        }
    })
}, textAnimOptions)

// Call Observer functions 
sectionZeroObserver.observe(sectionZero);
sectionZeroObserver2.observe(sectionZero);

sectionOneObserver.observe(sectionOne);
sectionOneObserver2.observe(sectionOne);

sectionTwoObserver.observe(sectionTwo);
sectionTwoObserver2.observe(sectionTwo);

sectionThreeObserver.observe(sectionThree);

sectionFourObserver.observe(sectionFour);
sectionFourObserver2.observe(sectionFour);

sectionFiveObserver.observe(sectionFive);

sectionSixObserver.observe(sectionSix);
sectionSixObserver2.observe(sectionSix);

sectionSevenObserver.observe(sectionSeven);

sectionEightObserver.observe(sectionEight);
sectionEightObserver2.observe(sectionEight);
sectionEightObserver3.observe(sectionEight);

sectionNineObserver.observe(sectionNine);



/**
    BODYMOVIN  animations
*/

// Scrolldown animation

// let scrollAnimation = bodymovin.loadAnimation({
//     container: scrollContainer,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: '../img/scroll-anim.json'
// })

// // Section one floating bubbles
// const iconSkipForward = document.querySelector('.anim1');
// let animationSkipForward = bodymovin.loadAnimation({
//     container: iconSkipForward,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     // path: "https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/skip-forward.json"
//     path: '../img/floating-bubbles.json'
// });

// // Pulse animations for phones in each section
// const pulseContainer = document.querySelectorAll('.anim2');
// pulseContainer.forEach(container => {
//     let pulseAnimation = bodymovin.loadAnimation({
//         container: container,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         path: '../img/pulse-animation.json'
//     });
// })

// Phone animation
// const phoneContainer = document.querySelector('.img-box-2')
// let phoneAnimation = bodymovin.loadAnimation({
//     container: phoneContainer,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: '../video/phone-test.json'
// });

// Function that plays the animation from beginning (It'd be called when the section comes into view)
// function playAnim(){
//     phoneAnimation.goToAndPlay(0);
// } 
    


/*
    CUSTOM CURSOR
*/
const mouseCursor = document.querySelector('.cursor');
const buttons = document.querySelectorAll('button');
const links = document.querySelectorAll('a[href]');

window.addEventListener('mousemove', e => {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
})

buttons.forEach(button => {
    button.addEventListener('mouseover', e => {
        mouseCursor.classList.add('button-show');
    })
    button.addEventListener('mouseleave', e => {
        mouseCursor.classList.remove('button-show');
    })
})
links.forEach(link => {
    link.addEventListener('mouseover', e => {
        mouseCursor.classList.add('button-show');
    })
    link.addEventListener('mouseleave', e => {
        mouseCursor.classList.remove('button-show');
    })
})


/**
 * NAVIGATION ANIMATION (SCALE UP & DOWN)
 */
const navButton = document.querySelector('.navigation__button');
const navBackground = document.querySelector('.navigation__background');

const navBtnDesktop = document.querySelector('#desktop-nav-btn');
const navBackgroundDesktop = document.querySelector('#desktop-nav-background')

// For Mobile
navButton.onclick = () => {
    if(navBackground.classList.contains('scale-nav-up')) {    
        navBackground.classList.remove('scale-nav-up');
        navBackground.classList.add('scale-nav-down');
    } else {
        navBackground.classList.remove('scale-nav-down');
        navBackground.classList.add('scale-nav-up');
    }
}

// For Desktop
navBtnDesktop.onclick = () => {
    if(navBackgroundDesktop.classList.contains('scale-nav-up')) {    
        navBackgroundDesktop.classList.add('scale-nav-down');
        navBackgroundDesktop.classList.remove('scale-nav-up');
    } else {
        navBackgroundDesktop.classList.remove('scale-nav-down');
        navBackgroundDesktop.classList.add('scale-nav-up');
    }
}



// Wait for window load then remove loading animation
$( window ).on( "load", function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});




