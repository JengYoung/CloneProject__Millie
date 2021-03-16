const boxs = document.querySelectorAll('.rotated-box');
const wrapper = document.querySelector('.rotated-box-wrapper');

window.addEventListener('scroll', () => {
    for (let i=0; i<7; i++) {
        const velocityArray = [2.5, 2.2, 2, 2.1, 3, 2.8, 2.7];
        const box = boxs[i];
        const nowHeight = box.getBoundingClientRect().y;
        if (-window.innerHeight < nowHeight && nowHeight < window.innerHeight) {
            if (i == 1 || i == 5) {
                box.style.transform = `translateX(${(800-nowHeight) * velocityArray[i]}px) rotate(${box.getBoundingClientRect().y * 0.4}deg)`;
            } else {
                box.style.transform = `translateX(${(800-nowHeight) * velocityArray[i]}px) rotate(${-box.getBoundingClientRect().y * 0.5}deg)`;
            }
        }
    }
})

// window.addEventListener("scroll", function() {
//     leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
//     rightgear.style.transform = "rotate(-"+window.pageYOffset+"deg)";
// });