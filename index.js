// Creata a function to show selected image
(function changeImage() {
    // Create image nodes and array
    const imgList = document.querySelectorAll('.img')
    const imgArr = Array.from(imgList)

    // Create dot nodes and array
    const dotList = document.querySelectorAll('.dot')
    const dotArr = Array.from(dotList)

    let currentImageIndex = 0
    let slideshowInterval;

    // Set and change classes for elements
    function combineToggle(selectedElement, selectedDot) {
        selectedElement.classList.toggle('enabled')
        selectedElement.classList.toggle('disabled')
        selectedDot.classList.toggle('selected')
        selectedDot.classList.toggle('unselected')
    }

    // Create slide show loop
    function startSlideshow() {
        slideshowInterval = setInterval(() => {
            if (currentImageIndex === imgArr.length - 1) {
                reset()
                currentImageIndex = 0
                combineToggle(imgArr[currentImageIndex], dotArr[currentImageIndex])
            } else {
                currentImageIndex++
                combineToggle(imgArr[currentImageIndex], dotArr[currentImageIndex])
                combineToggle(imgArr[currentImageIndex - 1], dotArr[currentImageIndex - 1])
            }
        }, 5000)
    }

    // Stop slide show
    function stopSlideshow() {
        clearInterval(slideshowInterval)
    }

    // Display first image when page loads
    combineToggle(imgArr[currentImageIndex],  dotArr[currentImageIndex])

    // Start slide show
    startSlideshow()

    // Init click button for next image
    const nextButton = document.querySelector('.arrow-right');
    nextButton.addEventListener('click', () => {
        stopSlideshow();
        if(currentImageIndex === imgArr.length - 1){
            reset()
            currentImageIndex = 0
            combineToggle(imgArr[currentImageIndex], dotArr[currentImageIndex])
        }
        else {
           currentImageIndex++
           combineToggle(imgArr[currentImageIndex], dotArr[currentImageIndex])
           combineToggle(imgArr[currentImageIndex - 1], dotArr[currentImageIndex - 1])
        }
        startSlideshow()
    })

    // Init click button for previous image
    const previousButton = document.querySelector('.arrow-left');
    previousButton.addEventListener('click', () => {
        stopSlideshow()
        if(currentImageIndex === 0){
            reset()
            currentImageIndex = imgArr.length - 1
            combineToggle(imgArr[currentImageIndex], dotArr[currentImageIndex])
        }
        else {
           currentImageIndex--
           combineToggle(imgArr[currentImageIndex], dotArr[currentImageIndex])
           combineToggle(imgArr[currentImageIndex + 1], dotArr[currentImageIndex + 1])
        }
        startSlideshow()
    })

    // Display selected image
    dotArr.forEach((item, index) => {
        item.addEventListener('click', () => {
            stopSlideshow()
            currentImageIndex = index
            reset()
            combineToggle(imgArr[currentImageIndex], dotArr[currentImageIndex])
            startSlideshow()
        })
    })

    // Set all elements to disabled and unselected
    function reset() {
        imgArr.forEach((element) => {
            element.classList.remove('enabled')
            element.classList.add('disabled')
        })
        dotArr.forEach((element) => {
            element.classList.remove('selected')
            element.classList.add('unselected')
        })
    }

})()
