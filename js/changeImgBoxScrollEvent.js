const content1 = document.querySelector('.content.first');
const content2 = document.querySelector('.content.second');
const section = document.querySelector('#contents-introduction-container');
window.addEventListener('scroll', () => {
    const startHeight = section.getBoundingClientRect().y;
    if (innerHeight - 100 > startHeight && startHeight > innerHeight - 1000) {
        const checkScale = (innerHeight - startHeight)/400;
        content1.style.cssText = `transform: scale(${checkScale > 1 ? 1 : checkScale}) translateY(${-(innerHeight - startHeight)/10}px)`;
        section.style.paddingTop = `${(innerHeight - startHeight)/11}px`;
        content2.style.cssText = `transform: scale(${checkScale > 1 ? 1 : checkScale})`;    
    }
})