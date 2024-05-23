const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let slides = document.querySelectorAll('.slide')

let count = 0;


for (let i = 0; i < slides.length; i++) {

    slides[i].style.left = (i * 100) + "%"

}

next.addEventListener('click', () => {
    count--
    checkCount()
    console.log(count);

})


prev.addEventListener('click', () => {
    count++

    checkCount()

    console.log(count);




})




function checkCount() {
    // if (count > 0) {
    //     count = "-" + (slides.length - 1)
    //     count = Number(count)
    // }
    // else if (count === Number("-" + slides.length)) {
    //     count = 0
    // }



    if (count === Number("-" + (slides.length - 1))) {
        next.style.display = 'none'
    }
    else {
        next.style.display = "block"
    }

    if (count < 0) {
        prev.style.display = "block"
    }
    else {
        prev.style.display = 'none'
    }



    slides.forEach(slide => {
        slide.style.transform = `translateX(${count * 100}%)`
    })

    // for (let i = 0; i < slides.length; i++) {
    //     slides[i].style.transform = `translateX(${count}00%)`
    // }

}

prev.style.display = "none"