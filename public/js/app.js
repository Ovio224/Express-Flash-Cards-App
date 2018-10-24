const hint = document.querySelector('.hint');
const button = document.querySelector('.hintshow');

button.addEventListener('click', function() {
    hint.style.display = '';
    button.style.display = 'none';
});