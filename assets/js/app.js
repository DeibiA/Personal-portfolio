/* 
    --- ***toggle for Preload*** ---
*/
const preload = document.querySelector('[data-preload]');

window.addEventListener('DOMContentLoaded', () => {
    preload.classList.add('loaded');
    document.body.classList.add('loaded');
});


/* 
    *** --- Toggle for Menu Burger *** ---
*/
const menuBurger = document.querySelector('.menu');
const sectHeader = document.querySelector('.sectHeader');

menuBurger.addEventListener('click', () => {
    const menu = document.querySelector('.sectHeader');
    menu.classList.toggle('open');

})

const letter = document.querySelector('.typing');

function letters(text) {
    const digi = text.innerHTML.split('')
    letter.innerHTML = '';

    digi.map( (e, i) => {
        setTimeout( ()=> {
            letter.innerHTML += e;

        }, 100 * i);
    })

}
letters(letter); 

/* 
    --- ***toggle for Scroll*** ---
*/

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(this.scrollY >= 50) {
        //When the scroll is geater than 50 viewport height, add the scroll-header class to the heasder tag
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header')
    }
});

/* 
    --- *** Scroll Reveal Animation *** ---
*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '200px',
    duration: '2500',
    delay: '400',
    //reset: true
})

sr.reveal('.container-description', {delay: 800});
sr.reveal('.html-css', {interval: 100, origin: 'left', distance: '150px'});
sr.reveal('.js-node', {interval: 200, origin: 'right'});
sr.reveal('.work', {interval: 300, origin: 'left', distance: '800px', delay: '900'});