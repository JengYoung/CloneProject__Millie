
const colorArray = ['#9FD259','#60FAC4','#C6C7E6','#74E1E5','#75FA95','#FFEB60','#62EFAC']
const strongString = document.querySelector('#genre-introduction-container strong')
window.addEventListener('scroll', () => {
    const strongStringY = strongString.getBoundingClientRect().y
    if (strongStringY < innerHeight && strongStringY > innerHeight * 0.3) {
        strongString.style.color = colorArray[parseInt(strongString.getBoundingClientRect().y % 7)]
    } else {
        strongString.style.color = '#FFEB60';
    }
})