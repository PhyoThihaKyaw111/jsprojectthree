// UI
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');

// Event Listener
openBtn.addEventListener('click',()=>{
   // console.log('open');

    navs.forEach(nav => nav.classList.add('visible'));
});

closeBtn.addEventListener('click',()=>{
    // console.log('close');

    navs.forEach(nav => nav.classList.remove('visible'));
});


