'use strict';

/* Funzioni */
// Crea l'elemento html
 function createElement(tag, className, content){
    const element = document.createElement(tag);
    for(let i = 0; i < className.length; i++){
        element.classList.add(className[i]);
    }
    element.append(content);
    return element;
 }

// Resetta il contenuto
 function resetContentHtml(element){
    element.innerHTML = '';
 }

// Inizia il gioco
function startGame(tag, difficultyTag, containerTag, scoreTag){
    const element = document.querySelector(tag);
    const container = document.querySelector(containerTag);
    const score = document.querySelector(scoreTag);
    const fragment = document.createDocumentFragment();
    element.addEventListener('click', function(){
    resetContentHtml(container);
    const difficulty = document.getElementById(difficultyTag).value;
    let size;
    let classSize;
    if(difficulty === '1'){
        size = 100;
        classSize = 's-10';
    }else if(difficulty === '2'){
        size = 81;
        classSize = 's-9';
    }else{
        size = 49;
        classSize = 's-7';
    }
    for(let i = 1; i <= size; i++){
        const cell = createElement('div', ['cell', classSize], i);
        fragment.append(cell);
    }
    container.append(fragment);
    score.innerHTML = 'Punteggio: 0';
    });
}

// Crea l'evento delle celle
function createEvent(containerTag, scoreTag){
    const element = document.querySelector(containerTag);
    const scoreElement = document.querySelector(scoreTag);
    const bombNumber = 16;
    let bombArray = [];
    let cellNumber;
    let end = false;
    let score = 0;
    let selected = [];
    element.addEventListener('click', function(event){
        const cell = document.querySelectorAll('.cell').length;
        if(bombArray.length === 0 || cellNumber !== cell || end){
            bombArray = bomb(cell, bombNumber);
            cellNumber = cell;
            score = 0;
            selected = [];
            end = false;
        }
        console.log(bombArray);
        const cellSelected = event.srcElement;
        if(!selected.includes(cellSelected.innerHTML)){
            if(!isNaN(Number(cellSelected.innerHTML)) && !end){
                selected.push(cellSelected.innerHTML);
                if(bombArray.includes(Number(cellSelected.innerHTML)) || cell - score - bombNumber - 1 === 0){
                    let text;
                    if(bombArray.includes(Number(cellSelected.innerHTML))){
                        cellSelected.classList.add('bomb');
                        text = createElement('h2', ['result'] , 'Hai perso');
                        allBomb(bombArray, '.cell');
                    }else{
                        cellSelected.classList.add('selected');
                        score++;
                        scoreElement.innerHTML = 'Punteggio: ' + score;
                        text = createElement('h2', ['result'] , 'Hai vinto');
                    }
                    end = true;
                    const scoreResult = createElement('h2', ['result'] , 'Punteggio: ' + score);
                    element.append(createElement('div', ['end'], text));
                    element.querySelector('.end').append(scoreResult);
                }else{
                    cellSelected.classList.add('selected');
                    score++;
                    scoreElement.innerHTML = 'Punteggio: ' + score;
                }
            }
        }
    });
}
// Genera un numero
function random(numberMin, numberMax){
    return(Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin);
}
// Genera le bombe
function bomb(numberCell, numberBomb){
    const bomb = [];
    while(bomb.length < numberBomb){
        const number = random(1, numberCell);
        if(!bomb.includes(number)){
            bomb.push(number);
        }
    }
    return bomb;
}
// Mostra tutte le bombe
function allBomb(bombArray, cellTag){
    const element = document.querySelectorAll(cellTag);
    for(let i = 0; i < bombArray.length - 1; i++){
        element[bombArray[i]].classList.add('bomb');
    }
}
/* Main */
startGame('header button', 'difficulty', '.container', '.score h2');
startGame('main h2', 'difficulty', '.container', '.score h2');
createEvent('.container', '.score h2');
