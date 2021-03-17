const infos = document.querySelectorAll('.present-info');

function scrollHandler(info) {
    const nowHeight = info.getBoundingClientRect().y;
    if (nowHeight > innerHeight + 300) return;
    else {
        const checkScale = (innerHeight + 300 - nowHeight) / 600;
        info.style.transform = `scale(${checkScale > 1 ? 1 : checkScale})`
    }
}

window.addEventListener('scroll', () => {
    for (i= 0; i < infos.length; i++) {
        scrollHandler(infos[i]);
    };
});