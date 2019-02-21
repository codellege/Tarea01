// Tarea 1

let velocityTxt = document.getElementById('velocityTxt');
let timeTxt = document.getElementById('timeTxt');
let taskoneOut = document.getElementById('taskone');
let taskoneBtn = document.getElementById('taskoneBtn');

taskoneBtn.addEventListener('click', function(){

    let v = velocityTxt.value;
    let t = timeTxt.value;

    let d = Number(v) * Number(t);

    taskoneOut.innerHTML = 'Resultado: <br>' + d + 'm';

});


// Tarea 2

let note1 = document.getElementById('note1');
let note2 = document.getElementById('note2');
let note3 = document.getElementById('note3');
let tasktwoOut = document.getElementById('tasktwo');
let tasktwoBtn = document.getElementById('tasktwoBtn');

tasktwoBtn.addEventListener('click', function(){

    let n1 = Number(note1.value);
    let n2 = Number(note2.value);
    let n3 = Number(note3.value);

    let a = ( n1 + n2 + n3 ) / 3;

    tasktwoOut.innerHTML = 'Promedio: <br>' + a ;

});


// Tarea 3

let correct = document.getElementById('correctTxt');
let incorrect = document.getElementById('incorrectTxt');
let blank = document.getElementById('blankTxt');
let taskthreeOut = document.getElementById('taskthree');
let taskthreeBtn = document.getElementById('taskthreeBtn');

taskthreeBtn.addEventListener('click', function(){

    let c = Number(correct.value);
    let i = Number(incorrect.value);
    let b = Number(blank.value);
    let p = (c*4) + (-i) + (c*0);

    taskthreeOut.innerHTML = 'Puntos: <br>' + p;
    
});

// Tarea 4

let sideA = document.getElementById('sideA');
let sideB = document.getElementById('sideB');
let sideC = document.getElementById('sideC');
let tasktfourOut = document.getElementById('taskfour');
let tasktfourBtn = document.getElementById('taskfourBtn');

tasktfourBtn.addEventListener('click', function(){

let a = Number(sideA.value);
let b = Number(sideB.value);
let c = Number(sideC.value);

let s = ((a + b + c)/2);

let A = Math.sqrt((s*(s-a))*(s*(s-b))*(s*(s-c)));
tasktfourOut.innerHTML = 'Area (A) = <br>' + A;
});

// Tarea 5

let inputx1 = document.getElementById('x1');
let inputx2 = document.getElementById('x2');
let inputy1 = document.getElementById('y1');
let inputy2 = document.getElementById('y2');
let tasktfiveOut = document.getElementById('taskfive');
let tasktfiveBtn = document.getElementById('taskfiveBtn');

tasktfiveBtn.addEventListener('click', function(){

    let x1 = Number(inputx1.value);
    let x2 = Number(inputx2.value);
    let y1 = Number(inputy1.value);
    let y2 = Number(inputy2.value);
    
    let d = Math.sqrt((Math.pow((x2 - x1),2))+((Math.pow((y2 - y1),2))));

    tasktfiveOut.innerHTML = 'Distancia (d) = ' + d;

});

