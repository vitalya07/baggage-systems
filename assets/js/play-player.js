document.addEventListener('DOMContentLoaded', ()=> {
    const aboutPrev = document.querySelector('.about__main-prev');
    const iframe = aboutPrev.querySelector('iframe');
    const playButton = aboutPrev.querySelector('.about__main-play');
    const thumbnail = aboutPrev.querySelector('.about__img');

    playButton.addEventListener('click', () => {
        thumbnail.style.display = 'none';
        playButton.style.display = 'none';
        iframe.style.display = 'block';
    });
})
