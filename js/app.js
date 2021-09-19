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
 * Define Global Variables
 * 
*/
const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
let listItemsNo = sections.length;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListItems(){
    console.log(menu);
    for (section of sections)
    {
        debugger;
        let sectionName = section.getAttribute('data-nav');
        let sectionLink = section.getAttribute('id');

       let listItem = document.createElement('li');
       menu.appendChild(listItem);
       listItem.innerHTML  = `<a class = 'menu__link' href = '#${sectionLink}'>${sectionName}</a>`;
    }
}

function sectionView (elemen){
    let sectionPosition =elemen.getBoundingClientRect();
    return(sectionPosition.top >= 0);
}


function activeClass (){
    for (section of sections){
        if (sectionView(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        }
        else{
            section.classList.remove('your-active-class')
        }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createListItems();

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll' , activeClass);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


