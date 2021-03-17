const section = document.querySelector('#subscribe-option-introduction-container');
window.addEventListener('scroll', () => {
    const presentBox = document.querySelector('.present-box');
    if (innerHeight >= section.getBoundingClientRect().bottom) {
        presentBox.style.position = 'absolute';
        presentBox.style.bottom = '-15%';
    };
});