const boxs = document.querySelectorAll('.rotated-box');
const wrapper = document.querySelector('.rotated-box-wrapper');

window.addEventListener('scroll', () => {
    for (let i=0; i<7; i++) {
        const box = boxs[i];
        const nowHeight = box.getBoundingClientRect().y;
        const nowWidth = box.getBoundingClientRect().x;
        if (nowHeight < innerHeight && nowWidth < innerWidth * 0.3) {
            box.style.opacity = 1 - (innerWidth * 0.3 - nowWidth) / (innerWidth * 0.3);
        } else if (innerWidth > nowWidth && nowWidth > innerWidth * 0.8) {
            box.style.opacity = (innerWidth - nowWidth) / (innerWidth * 0.2)
        } else {
            box.style.opacity = 1;
        }
    }
})