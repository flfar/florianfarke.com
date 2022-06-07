import * as bootstrap from 'bootstrap';


window.addEventListener('DOMContentLoaded', () => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav != null) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler') as HTMLButtonElement;
    const responsiveNavItems = Array.from(document.querySelectorAll('#navbarResponsive .nav-link'));

    responsiveNavItems.map(responsiveNavItem => {
        responsiveNavItem.addEventListener('click', () => {
            if (navbarToggler != null && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Initialize tooltips
    Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        .map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});
