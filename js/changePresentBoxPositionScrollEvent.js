const section = document.querySelector('#subscribe-option-introduction-container')
console.log(section);
window.addEventListener('scroll', () => {
    const presentBox = document.querySelector('.present-box');
    if (innerHeight >= section.getBoundingClientRect().bottom) {
        console.log(presentBox)
        presentBox.style.position = 'absolute';
        presentBox.style.bottom = '-15%';
    }
})