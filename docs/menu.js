const bars = document.querySelector('.fa-bars');
const menu = document.querySelector('.navbar__menu')

let isActive = false;

bars.addEventListener('click', () => {
    console.log('click')
    if(!isActive) {
        menu.style.transform = 'translate(0)';
    }else{
        menu.style.transform = 'translate(100%)';
    }

    isActive = !isActive;

})