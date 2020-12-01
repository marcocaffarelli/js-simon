// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(function (){
    //funzione che genera 5numeri casuali compresi tra 1 e 100
    var numeroCasuale;
    var listaNumeriCasuali = [];
    for(i= 0; i <= 4; i++){
        while ( listaNumeriCasuali.includes( numeroCasuale = Math.floor(Math.random()*100) + 1 ) );
        listaNumeriCasuali[i] = numeroCasuale;
    };

    //alert che espone 5 numeri casuali diversi
    alert(listaNumeriCasuali);


});