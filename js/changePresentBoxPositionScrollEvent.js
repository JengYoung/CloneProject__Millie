const section = document.querySelector('#subscribe-option-introduction-container');
const presentThird = document.querySelector('.present-info.third');
window.addEventListener('scroll', () => {
    const presentBox = document.querySelector('.present-box');
    const bot = presentThird.getBoundingClientRect().bottom - section.getBoundingClientRect().bottom
    if (innerHeight >= section.getBoundingClientRect().bottom) {
        presentBox.style.position = 'absolute';
        presentBox.style.bottom = `${bot}px`;
    };
});