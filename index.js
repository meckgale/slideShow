const imgList = document.querySelectorAll('.img');
const imgArr = Array.from(imgList);

const dotList = document.querySelectorAll('.dot');
const dotArr = Array.from(dotList);

function combineToggle(selectedElement) {
    selectedElement.classList.toggle('enabled');
    selectedElement.classList.toggle('disabled');
}

const nextButton = document.querySelector('.arrow-right');
nextButton.addEventListener('click', () => {
    console.log('clicked')
})

const previousButton = document.querySelector('.arrow-left');
previousButton.addEventListener('click', () => {
    console.log('clicked')
})

