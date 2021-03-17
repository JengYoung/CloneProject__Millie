const presentBox = document.querySelector('.present-box');
const presentBoxHead = document.querySelector('.present-box.head');
const presentBoxBody = document.querySelector('.present-box.body');
const section = document.querySelector('#subscribe-option-introduction-container')
// console.log(presentWrapper.getBoundingClientRect());
presentBox.style.opacity = 0;
window.addEventListener('scroll', () => {
    if (section.getBoundingClientRect().y < innerHeight-250) {
        presentBox.classList.add('active');
        // presentBox.classList.add('animation');
        // presentBox.style.opacity = 1;
    } else {
        presentBox.classList.remove('active');
        // presentBox.classList.remove('animation');
        presentBox.style.opacity = 0;
    }
    if (section.getBoundingClientRect().y < innerHeight-400) {
        presentBoxHead.classList.add('animation');
        presentBoxBody.classList.add('animation');
    } else {
        presentBoxHead.classList.remove('animation');
        presentBoxBody.classList.remove('animation');
    }
})