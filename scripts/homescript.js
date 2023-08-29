const sections = document.querySelectorAll('.hoverable');

sections.forEach((section) => {
    const internaltopBar = section.querySelector('#internaltopBar');
    section.addEventListener('mouseenter', () => {
        internaltopBar.style.backgroundColor = '#ead2ec'; // Change to the desired color
    });

    section.addEventListener('mouseleave', () => {
        internaltopBar.style.backgroundColor = '#e2e2e2'; // Change to the default color
    });
});
