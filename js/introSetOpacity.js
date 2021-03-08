const copyWrap = document.querySelector(".copy-wrap");
window.addEventListener('scroll', () => {
    if (window.scrollY <= 360) {
        copyWrap.style.opacity = 1 - (window.scrollY / 360); 
    }
})