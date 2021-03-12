const mainCopy = document.querySelector(".main-copy");
const subCopy = document.querySelector(".sub-copy");
const imgWrap = document.querySelector(".img-wrap");
const opacityZeroHeight = 360;
window.addEventListener('scroll', () => {
    const nowScrollTop = document.documentElement.scrollTop;
    // console.log(document.documentElement.scrollTop);
    if (nowScrollTop <= 380) {
        mainCopy.style.opacity = 1 - (nowScrollTop / 340);
        subCopy.style.opacity = 1 - (nowScrollTop / 340);
        imgWrap.style.opacity = 1 - (nowScrollTop / 340);
    }
})
