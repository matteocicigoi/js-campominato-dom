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
function startGame(tag, difficultyTag, containerTag){
    const element = document.querySelector(tag);
    const container = document.querySelector(containerTag);
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
        container.append(cell);
    }
    });
}

// Crea l'evento delle celle
function createEvent(containerTag){
    const element = document.querySelector(containerTag);
    element.addEventListener('click', function(event){
        const cellSelected = event.srcElement;
        cellSelected.classList.add('selected');
        console.log(cellSelected.innerHTML);
    });
}

/* Main */
startGame('header button', 'difficulty', '.container');
startGame('main h2', 'difficulty', '.container');
createEvent('.container');



/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. :bomba:
:esclamazione:Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Superbonus 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
Superbonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

*/