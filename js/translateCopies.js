const mainCopies = document.querySelectorAll('.main-copy');
const subCopies = document.querySelectorAll('.sub-copy');
const descriptions = document.querySelectorAll('.description');
window.addEventListener('scroll' , () => {
    for (let i = 0; i < mainCopies.length; i++) {
        const nowMainCopy = mainCopies[i];
        const nowMainCopyHeight = nowMainCopy.getBoundingClientRect().y;
        if (innerHeight > nowMainCopyHeight) {
            const setTranslateY = (innerHeight * 0.9 - nowMainCopyHeight)/innerHeight;
            nowMainCopy.style.transform = `translate(0, ${setTranslateY > 1 ? 100: setTranslateY * 100}px)`
        }
    }
    for (let i = 0; i < subCopies.length; i++) {
        const nowSubCopy = subCopies[i];
        const nowSubCopyHeight = nowSubCopy.getBoundingClientRect().y;
        if (innerHeight * 1.4 > nowSubCopyHeight) {
            const setTranslateY = ((innerHeight * 1.4 - nowSubCopyHeight)/innerHeight);
            nowSubCopy.style.transform = `translate(0, ${setTranslateY > 1 ? 100 : setTranslateY * 100}px)`
        }
    }

    for (let i = 0; i < descriptions.length; i++) {
        const nowDescription = descriptions[i];
        const nowDescriptionHeight = nowDescription.getBoundingClientRect().y;
        if (innerHeight * 1.5 > nowDescriptionHeight) {
            const setTranslateY = (innerHeight * 1.5 - nowDescriptionHeight )/innerHeight;
            nowDescription.style.transform = `translate(0, ${setTranslateY > 1 ? 100: setTranslateY * 100}px)`
        }
    }
})