const books = document.querySelectorAll('.books-wrap-book');
const moveBooks = () => {
    for (let i=0; i < books.length; i++) {
        let book = books[i]
        let nowHeight = window.innerHeight - book.getBoundingClientRect().y
        if (-window.innerHeight < nowHeight && nowHeight < window.innerHeight) {
            book.style = `transform: translateX(${-nowHeight/(window.innerHeight/100)}px) translateY(${-nowHeight/(window.innerHeight/100)}px)`
        }
    }
}

window.addEventListener('scroll', moveBooks)