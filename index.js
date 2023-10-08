// Creata a function to show selected image
(function changeImage() {
    // Create image nodes and array
    const imgList = document.querySelectorAll('.img');
    const imgArr = Array.from(imgList);

    // Create dot nodes and array
    const dotList = document.querySelectorAll('.dot');
    const dotArr = Array.from(dotList);

    let currentImageIndex = 0;


    function combineToggle(selectedElement, selectedDot) {
        selectedElement.classList.toggle('enabled');
        selectedElement.classList.toggle('disabled');
        selectedDot.classList.toggle('selected');
        selectedDot.classList.toggle('unselected');
    }

    combineToggle(imgArr[currentImageIndex],  dotArr[currentImageIndex])

    const nextButton = document.querySelector('.arrow-right');
    nextButton.addEventListener('click', () => {
        console.log('clicked')
        if(currentImageIndex === 8){
            return
        }
        else {
           currentImageIndex++
        }
        combineToggle(imgArr[currentImageIndex], dotArr[currentImageIndex])
        combineToggle(imgArr[currentImageIndex - 1],  dotArr[currentImageIndex - 1])
        console.log(currentImageIndex)
        console.log(currentDot);
    })

    const previousButton = document.querySelector('.arrow-left');
    previousButton.addEventListener('click', () => {
        console.log('clicked')
        if(currentImageIndex === 0){
            return
        }
        else {
           currentImageIndex--
        }
        combineToggle(imgArr[currentImageIndex],  dotArr[currentImageIndex])
        combineToggle(imgArr[currentImageIndex + 1],  dotArr[currentImageIndex + 1])
        console.log(currentImageIndex)
        console.log(currentDot);
    })

})();

// combineToggle(imgArr[8]);