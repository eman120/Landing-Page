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
const sects = document.querySelectorAll('section');
const listItemsNo = sects.length;


/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function createItems() {
    const menu = document.getElementById('navbar__list');
    for (const sect of sects) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a class = 'menu__link' href = '#${sect.getAttribute('id')}'>${sect.getAttribute('data-nav')}</a>`;
        menu.appendChild(listItem);
    }
}

function active() {
    sects.forEach(section => {
        section.addEventListener('click', function () {
            sects.forEach(sect => sect.classList.remove('your-active-class'));
            this.classList.add('your-active-class');        
        });
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
createItems();

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', active);

// Scroll to anchor ID using scrollTO event
const scrollSmooth = document.querySelector('html');
scrollSmooth.scrollIntoView({behavior:"smooth"});
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sects as active


