// script.js

const toppart = document.getElementById('toppart');
const internaltopBar = document.getElementById('internaltopBar');

toppart.addEventListener('mouseenter', () => {
    internaltopBar.style.backgroundColor = '#ead2ec'; // Change to the desired color
});

toppart.addEventListener('mouseleave', () => {
    internaltopBar.style.backgroundColor = '#e2e2e2'; // Change to the default color
});
