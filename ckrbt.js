const bar = document.getElementById('bar');
const nav = documemint.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
         nav.classList.add('active')
    })
}