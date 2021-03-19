const sloganGoSignupBtn = document.querySelector(".slogan.go-signup-button");
const bookGoSignupBtn = document.querySelector(".book.go-signup-button");
const contentsGoSignupBtn = document.querySelector(".contents.go-signup-button");
const subscribeGoSignupBtn = document.querySelector(".subscribe.go-signup-button");
const body = document.querySelector("body");
window.addEventListener('scroll', () => {
    let scrollLocation = window.scrollY;
    if (scrollLocation >= 850) {
        sloganGoSignupBtn.style.display = 'block';
    } else {
        sloganGoSignupBtn.style.display = 'none';
    }
    if (scrollLocation >= 2290) {
        bookGoSignupBtn.style.display = 'block';
    } else {
        bookGoSignupBtn.style.display = 'none';
    }
    if (scrollLocation >= 4550) {
        contentsGoSignupBtn.style.display = 'block';
    } else {
        contentsGoSignupBtn.style.display = 'none';
    }
    if (scrollLocation >= 5740 && scrollLocation < 8800) {
        subscribeGoSignupBtn.style.display = 'block';
    } else {
        sloganGoSignupBtn.style.display = 'none';
        bookGoSignupBtn.style.display = 'none';
        contentsGoSignupBtn.style.display = 'none';
        subscribeGoSignupBtn.style.display = 'none';
    }
})