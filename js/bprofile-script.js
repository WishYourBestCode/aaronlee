// Toggle menu
document.querySelector('#menu-icon').addEventListener('click', function() {
    this.classList.toggle('bx-x');
    document.querySelector('.navbar').classList.toggle('active');
});

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    // Update sections and navigation
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            document.querySelector(`header nav a[href*=${sectionId}]`).classList.add('active');
            section.classList.add('show-animate');
        } else {
            document.querySelector(`header nav a[href*=${sectionId}]`).classList.remove('active');
            section.classList.remove('show-animate');
        }
    });


    document.querySelector('header').classList.toggle('sticky', scrollY > 100);
    document.querySelector('footer').classList.toggle('show-animate', 
        window.innerHeight + scrollY >= document.documentElement.scrollHeight);
});
