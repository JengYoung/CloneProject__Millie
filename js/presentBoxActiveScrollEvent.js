const presentBox = document.querySelector('.present-box');
const presentBoxHead = document.querySelector('.present-box.head');
const presentBoxBody = document.querySelector('.present-box.body');
const section = document.querySelector('#subscribe-option-introduction-container');

presentBox.style.opacity = 0;
window.addEventListener('scroll', () => {
    if (section.getBoundingClientRect().y < innerHeight-250) {
        /* presentBox */
        presentBox.classList.add('active');
        presentBox.style.position = 'fixed';
        presentBox.style.display = 'flex';
        presentBox.style.alignItems = 'center';
        presentBox.style.flexDirection = 'column';
        presentBox.style.zIndex = '100';
        presentBox.style.transition = 'opacity 1s';
        presentBox.style.bottom = '0';

        /* presentBoxHead Style */
        presentBoxHead.style.position = 'absolute';
        presentBoxHead.style.top = '-30%';
    } else {
        presentBox.classList.remove('active');
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