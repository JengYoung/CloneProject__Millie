
const colorArray = ['#9FD259','#C6C7E6','#74E1E5','#75FA95','#FFEB60','#62EFAC']
const strongString = document.querySelector('#genre-introduction-container strong')
window.addEventListener('scroll', () => {
    const strongStringY = strongString.getBoundingClientRect().y
    if (strongStringY < 700 && strongStringY > 400) {
        strongString.style.color = colorArray[parseInt(strongString.getBoundingClientRect().y % 6)]
    } else {
        strongString.style.color = '#FFEB60';
    }
})