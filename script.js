const Audio = document.getElementById('Audio');
const Cover = document.getElementById('home-cover');
const Btn = document.getElementById('Btn');

Btn.addEventListener('click', () => {
    Audio.play();
    Cover.classList.add('hide-cover');
});