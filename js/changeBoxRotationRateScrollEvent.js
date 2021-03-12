const boxs = document.querySelectorAll('.rotated-box');
const wrapper = document.querySelector('.rotated-box-wrapper');
// console.log(boxs);
// console.log(boxs[0].getBoundingClientRect().y, wrapper.offsetTop)

window.addEventListener('scroll', () => {
    boxs.forEach((box) => {
        const nowHeight = box.getBoundingClientRect().y;
        if (-window.innerHeight < nowHeight && nowHeight < window.innerHeight) {
            if (box === boxs[1] || box === boxs[5]) {
                box.style.transform = `rotate(${box.getBoundingClientRect().y * 0.3}deg)`;
            } else {
                box.style.transform = `rotate(${-box.getBoundingClientRect().y * 0.3}deg)`;
            }
        }
    })
})

// window.addEventListener("scroll", function() {
//     leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
//     rightgear.style.transform = "rotate(-"+window.pageYOffset+"deg)";
// });