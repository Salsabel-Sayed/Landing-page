/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Set sections as active

// Scroll to section on link click




// global value
const sections = document.querySelectorAll("section");
const navbar = document.querySelector('#navbar__list');

// creat navbar a in li insid ul
for(section of sections){
    const aLink = document.createElement('a');
     aLink.classList.add('menu__link');
    aLink.href = "#" + section.getAttribute('id');
    aLink.innerText = section.getAttribute('data-nav');

    const li_List = document.createElement('li');
    li_List.appendChild(aLink);

    navbar.appendChild(li_List); 
}
// activate section in view pot
window.addEventListener('scroll',function(){
    for(section of sections){
        if(section.getBoundingClientRect().top >= -227 &&
           section.getBoundingClientRect().top <= 380){
               section.classList.add("your-active-class");

               const aLinks =document.getElementsByClassName('menu__link');
               for(const aLink of aLinks){
                   if(aLink.innerText === section.getAttribute('data-nav')){aLink.classList.add("active");
 
                }else{aLink.classList.remove("active");
 
                }

               }}else{
               section.classList.remove('your-active-class');
           }
    }
});

window.addEventListener('scroll',function(){
    document.getElementsByClassName("page__header")[0].classList.add("unhide");
    setTimeout(function(){document.getElementsByClassName("page__header")[0].classList.remove("unhide");

    },8000);
})
// smooth scroll
const aLinks =document.getElementsByClassName('menu__link');
for(aLink of aLinks){
    const sec = document.querySelector(aLink.getAttribute('href'));
    aLink.addEventListener('click',function(e){
        e.preventDefault();
        
        sec.scrollIntoView({
            behavior:"smooth"
        });
    })
}

// creat buttom  to top
const btn = document.createElement('button');
btn.classList.add('btnClass');
btn.innerText="top";
document.querySelector("main").appendChild(btn);

btn.addEventListener('click',function(){
    window.scrollTo(0,0);
});
