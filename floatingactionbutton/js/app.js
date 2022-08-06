// UI
const btns = document.querySelector('.btns');
const btnPrimary = document.getElementById('btn-primary');

btnPrimary.addEventListener('click',()=>{
   // console.log('hey');
   btns.classList.toggle('show');
});