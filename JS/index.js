/* ~~~~~~~~~~ hamburger menu ~~~~~~~~~~ */
function toggleMenu() {
    let navLinks = document.getElementById('header-nav-links');
    let hamburger = document.getElementById('hamburger');

    if (navLinks.style.display === 'block') {
        // Hide navigation links and re-enable hamburger menu
        navLinks.style.display = 'none';
        hamburger.style.display = 'block';

        // Remove the event listener to stop tracking clicks outside the menu
        document.removeEventListener('click', closeMenuOnClickOutside);
    } else {
        // Show navigation links and hide hamburger menu
        navLinks.style.display = 'block';
        hamburger.style.display = 'none';

        // Add event listener to close menu when clicking outside
        document.addEventListener('click', closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    let navLinks = document.getElementById('header-nav-links');
    let hamburger = document.getElementById('hamburger');

    // Close the menu if the click is outside both the nav links and hamburger icon
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        toggleMenu();
    }
}
/* ~~~~~~~~~~ hamburger menu ~~~~~~~~~~ */
