const genreContainer = document.querySelector("#genre-introduction-container");
window.addEventListener('scroll', () => {
    const changePointY = 200;
    if (genreContainer.offsetTop - document.documentElement.scrollTop < changePointY) {
        genreContainer.classList.add("black");
    } else {
        genreContainer.classList.remove("black");
    }
})