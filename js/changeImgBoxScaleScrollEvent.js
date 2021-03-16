const contentWrapper = document.querySelector('.content-first-wrapper');
const contentModel = document.querySelector('.content-first-model');
const contentBtn = document.querySelector('.content-first-btn-box');
const content = document.querySelector('.content.first');
const section = document.querySelector('#contents-introduction-container')
window.addEventListener('scroll', () => {
    const startHeight = section.getBoundingClientRect().y;
    const nowHeight = content.getBoundingClientRect().y;
    if (innerHeight > startHeight && startHeight > innerHeight - 300) {
        content.style.cssText = `transform: scale(${0.5 + (innerHeight - startHeight)/600})`;        
    }
})