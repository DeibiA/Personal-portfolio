window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('[data-preloader]');

    if(!preloader.classList.contains('loaded')) {
        preloader.classList.add('loaded');
    }
    console.log(preloader)
});