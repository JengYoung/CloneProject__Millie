const paperFeeWrap = document.querySelector('.paper-subscription-fee-wrap')
const ebookFeeWrap = document.querySelector('.ebook-subscription-fee-wrap')

window.addEventListener('scroll', () => {
    nowHeight = paperFeeWrap.getBoundingClientRect().y;
    if (nowHeight > innerHeight + 300) return;
    else {
        const checkScale = (innerHeight + 300 - nowHeight) / 900;
        paperFeeWrap.style.transform = `scale(${checkScale > 1 ? 1 : checkScale})`
        ebookFeeWrap.style.transform = `scale(${checkScale > 1 ? 1 : checkScale})`
    }
})

