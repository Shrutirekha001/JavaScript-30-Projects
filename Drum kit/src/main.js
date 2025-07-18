import './style.css'


window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.load').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
  }, 2000);
});
// another way to write function also

//  window.addEventListener('load', function () {
//       setTimeout(function () {
//         document.getElementById('splash').style.display = 'none';
//         document.getElementById('main-content').style.display = 'block';
//       }, 2000);
//     });

window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
})

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));