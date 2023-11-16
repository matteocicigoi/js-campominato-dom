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

Parametri: tag html - id della select - tag del contenitore

- crea gli elementi 
- aggiunge l'evento al click
    - resetta il contenuto del contenitore con la funzione "resetContentHtml"
    - verifica la difficoltà
    - modifica e dimensioni in base alla difficoltà
    - aggiunge le celle

## Funzione: createEvent

Parametri: tag del contenitore

- crea l'elemento
- aggiunge l'evento al click
    - aggiunge la classe "selected" alla cella

