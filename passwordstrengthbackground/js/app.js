// Ui
const background = document.getElementById('background');
const password = document.getElementById('password');
const eyeicon = document.getElementById('eye');

// Event Listener
password.addEventListener('input',(e)=>{
   // console.log(e.target);
    // console.log(e.target.value);

    const input = e.target.value;
    const inlength = input.length;
    // console.log(20-inlength);
    // console.log(20 - inlength * 20);

    const blurvalue = 20 - inlength * 2;

    background.style.filter = `blur(${blurvalue}px)`;
});

eyeicon.addEventListener('click',()=>{
   // console.log('ehy');
    if (eyeicon.classList.contains('fa-eye')){

        // Method1
        // eyeicon.classList.remove('fa-eye');
        // eyeicon.classList.add('fa');

        // Method2
        eyeicon.classList.replace('fa-eye','fa-eye-slash');

        password.setAttribute('type','text');
    }
    else{
        eyeicon.classList.replace('fa-eye-slash','fa-eye');

        password.setAttribute('type','password');
    }
});