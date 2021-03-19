const navLogo = document.querySelector('#nav-logo');
const genreSection = document.querySelector('#genre-introduction-container');
console.log(genreSection)
navLogo.style.opacity = 0;
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        navLogo.style.opacity = 1;
        navLogo.style.zIndex = 99;
        navLogo.style.transition = 'all 1s';
    } else {
        navLogo.style.opacity = 0;
    }
    if ((innerHeight * 1.2 > genreSection.getBoundingClientRect().y) && (innerHeight * -0.8  <  genreSection.getBoundingClientRect().y)) {
        navLogo.style.color = 'yellow';
    }
})