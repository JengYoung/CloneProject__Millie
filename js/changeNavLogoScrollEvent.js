const navLogoDefault = document.querySelector('#nav-logo.default');
const navLogoYellow = document.querySelector('#nav-logo.yellow');
const genreSection = document.querySelector('#genre-introduction-container');
const subscribeSection = document.querySelector('#subscribe-option-introduction-container');
console.log(genreSection)
navLogoDefault.style.opacity = 0;
navLogoYellow.style.opacity = 0;
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        navLogoDefault.style.opacity = 1;
        navLogoDefault.style.zIndex = 99;
        navLogoDefault.style.transition = 'all 1s';
    } else {
        navLogoDefault.style.opacity = 0;
        return;
    }
    if ((innerHeight * 0.2 > genreSection.getBoundingClientRect().y) && (-innerHeight < genreSection.getBoundingClientRect().y)) {
        navLogoDefault.style.opacity = 0;
        navLogoYellow.style.opacity = 1;
        navLogoYellow.style.zIndex = 99;
        navLogoYellow.style.transition = 'all 1s';
    } 
    else if ((innerHeight * 0.2 > subscribeSection.getBoundingClientRect().y) && (innerHeight * 0.2 < subscribeSection.getBoundingClientRect().bottom)) {
        navLogoDefault.style.opacity = 0;
        navLogoYellow.style.opacity = 1;
        navLogoYellow.style.zIndex = 99;
        navLogoYellow.style.transition = 'all 1s';
    } else {
        navLogoDefault.style.opacity = 1;
        navLogoYellow.style.opacity = 0;
    }
})