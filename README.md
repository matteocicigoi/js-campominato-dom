# Esercizio: Griglia Campo Minato

## Funzione: createElement

Parametri: tag html - nomi delle classi (array) - contenuto

- crea l'elemento 
- ciclo che inserisce le classi
- inserisce il contenuto
- restituisce l'elemento

## Funzione: resetContentHtml

Parametri: elemento html

- svuota il contenuto

## Funzione: startGame

Parametri: tag html - id della select - tag del contenitore - tag punteggio

- crea gli elementi 
- aggiunge l'evento al click
    - resetta il contenuto del contenitore con la funzione "resetContentHtml"
    - verifica la difficoltà
    - modifica e dimensioni in base alla difficoltà
    - aggiunge le celle
    - fa visualizzare il punteggio

## Funzione: createEvent

Parametri: tag del contenitore - tag punteggio

- crea gli elementi
- definisce delle variabili
- aggiunge l'evento al click
    - se le bombe sono uguali a zero o le caselle sono diverse da quelle attuali o se la partita è finita
        - modifica le variabili
    - se il valore è numerio e la parita non è finita
        - se la cella contiene una bomba o non ci sono più celle da cliccare
            - finisce la partita
            - mette la classe "bomb" o "selected" alla cella
            - mostra il risultato
        - altrimenti
            - mette la classe "selected" alla cella
            - mostra il punteggio

## Funzione: random

Parametri: numero minimo - numero massimo

- restituisce un numero

## Funzione: bomb

Parametri: numero delle celle - numero delle bombe

 - ciclo while se le bombe sono inferiori al numero
    - genera un numero
     - se non è presente lo salva
- restituisce l'array

## Funzione: allBomb

Parametri: array bombe - tag celle

- ciclo for
    - aggiunge la calsse bomb alla cella