const mainCopy = document.querySelector(".main-copy");
const subCopy = document.querySelector(".sub-copy");
const imgWrap = document.querySelector(".img-wrap");
const opacityZeroHeight = 360;
window.addEventListener('scroll', () => {
    const nowScrollTop = document.documentElement.scrollTop;
    // console.log(document.documentElement.scrollTop);
    if (nowScrollTop <= opacityZeroHeight) {
        mainCopy.style.opacity = 1 - (nowScrollTop / opacityZeroHeight);
        subCopy.style.opacity = 1 - (nowScrollTop / opacityZeroHeight);
        imgWrap.style.opacity = 1 - (nowScrollTop / opacityZeroHeight);
    } else {
        mainCopy.style.opacity = 0;
        subCopy.style.opacity = 0;
        imgWrap.style.opacity = 0;
    }
})
