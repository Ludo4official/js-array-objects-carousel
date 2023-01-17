const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const singleImages = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp']

const carouselElement = document.querySelector('.container')

for (let i = 0; i < singleImages.length; i++ ) {
    console.log(singleImages[i]);

    carouselElement.innerHTML += `<div class="slide">
                                    <img src="${singleImages[i]}">
                                </div>` ;
}

let allSlides = document.querySelectorAll('.slide');
console.log('Tutte le slides', allSlides);

allSlides[0].classList.add('current');

let currentSlide = 0;

let leftArrow = document.querySelector('.left');
let nextArrow = document.querySelector('.right')

nextArrow.addEventListener('click',

    function () {

        console.log('Cliccato su classe right');

        allSlides[currentSlide].classList.remove('current')

        currentSlide++;

        if (currentSlide == allSlides.length){

            currentSlide = 0;
            
        }

        allSlides[currentSlide].classList.add('current');
        
    }

);

leftArrow.addEventListener('click',

    function () {

        console.log('Cliccato su classe left');

        allSlides[currentSlide].classList.remove('current')

        currentSlide--;

        if (currentSlide == allSlides[0] ){

            currentSlide = allSlides.length;
            
        }

        allSlides[currentSlide].classList.add('current');
        
    }

);
