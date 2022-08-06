const picdiv = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

picdiv.addEventListener('dragstart',dragstart);
picdiv.addEventListener('dragend', dragend);

// DRAG START
function dragstart(){
    // console.log('darg start is working');
    // this.classList.add('hold');
    this.className += ' hold';

    setTimeout(() => {
        this.className = "invisible";
    }, 0);
}

empties.forEach(empty=>{
    // console.log(empty);

    empty.addEventListener('dragover',dragover);
    empty.addEventListener('dragenter',dragenter);
    empty.addEventListener('dragleave',dragleave);
    empty.addEventListener('drop',dragdrop);
});

// ES6 . can looping Object5-specific iterator value
// for(const empty in empties){
//     console.log(empty);
// }

// for(const empty of empties){
//     console.log(empty);
// }

// DRAG END

function dragover(e){
    // console.log('drag over');
    e.preventDefault();
}

function dragenter(e){
    // console.log('drag enter');
    e.preventDefault();

    this.className += ' hovered';
}

function dragleave(e){
    // console.log('drag leave');
    e.preventDefault();

    this.className = 'empty';
}

function dragdrop(){
    console.log('drag drop');

    this.className = 'empty';
    this.appendChild(picdiv);
}

function dragend(){
    // console.log('darg end is working');
    // this.classList.remove('hold');
    this.className = 'fill';
}