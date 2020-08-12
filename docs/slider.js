const slides = document.querySelectorAll('.slide');


console.log(slides)

// const selected = slides.item(0);
let index = 0;

setInterval(() => {

 if (index+1===slides.length){

        slides.item(index).classList.remove('next', 'selected')
        slides.item(index).classList.add('previous')

        slides.item(1).classList.remove('previous', 'selected')
        slides.item(1).classList.add('next')

        slides.item(0).classList.remove('previous', 'next')
        slides.item(0).classList.add('selected')
        index = 0;

    } else if (index+2 === slides.length){

        slides.item(index).classList.remove('next', 'selected')
        slides.item(index).classList.add('previous')

        slides.item(0).classList.remove('previous', 'selected')
        slides.item(0).classList.add('next')

        index ++;
        slides.item(index).classList.remove('previous', 'next')
        slides.item(index).classList.add('selected')

    } else {

        slides.item(index).classList.remove('next', 'selected')
        slides.item(index).classList.add('previous')

        slides.item(index + 2).classList.remove('previous', 'selected')
        slides.item(index + 2).classList.add('next')

        index ++;
        slides.item(index).classList.remove('previous', 'next')
        slides.item(index).classList.add('selected')
    }

}, 4000)