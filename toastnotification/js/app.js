// UI
const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five'
]

// Event Listener
// button.addEventListener('click',()=>createNotification());
button.addEventListener('click',()=>createNotification("Can\'t access!","danger"));

function createNotification(message,type){
    // console.log('hey');

    // const notify = document.createElement('div');
    // notify.classList.add('toast');
    // notify.innerText = getRandomMessage();
    // // console.log(notify);
    //
    // toasts.appendChild(notify);
    //
    // setTimeout(()=> {
    //     notify.remove();
    //     },3000);


    const notify = document.createElement('div');
    notify.classList.add('toast');
    notify.classList.add(type ? type : info);
    notify.innerText = message ? message : getRandomMessage();
    // console.log(notify);

    toasts.appendChild(notify);

    setTimeout(()=> {
        notify.remove();
    },3000);
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}





