import {Offcanvas, Tooltip} from 'bootstrap';


window.addEventListener('DOMContentLoaded', () => {
    // Resize fix for side-nav
    window.matchMedia('(min-width: 1200px)')
        .addEventListener('change', () => {
            const element = document.getElementById('side-canvas');
            if (element != null) {
                Offcanvas.getOrCreateInstance(element).hide();
            }
        });

    // Initialize tooltips
    Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        .map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
});
