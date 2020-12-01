// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(function (){
    //funzione che genera 5numeri casuali compresi tra 1 e 100
    var numeroCasuale;
    var listaNumeriCasuali = [];
    for(i = 0; i <= 4; i++){
        while ( listaNumeriCasuali.includes( numeroCasuale = Math.floor(Math.random()*100) + 1 ) );
        listaNumeriCasuali[i] = numeroCasuale;
    };

    //alert che espone 5 numeri casuali diversi
    alert(listaNumeriCasuali);
    console.log(listaNumeriCasuali);
    //Creata una funzione che fa un conteggio alla rovescia
    setTimeout(conteggio, 2000);
    function conteggio() {
        var listaNumeriUtente = [];
        //terminato il conteggio chiede all' utente di inserire per 5 volte un numero
        for (var index = 0; index <= 4; index++) {
            var numeroUtente = Number(prompt('Inserisci un numero che ricordi'));
            //inseriamo il numero scritto all'interno di un array
            listaNumeriUtente.push(numeroUtente);
        };
        console.log(listaNumeriUtente);
        
        //lista in cui verranno inseriti i numeri che si trovano in entrambe le liste 
        var listaFinale = [];

        // // serie di if

        // //if che serve a verificare se il primo elemento di "listaNumeriUtente" si trova all'interno di "listaNumeriCasuali"
        // if(listaNumeriUtente[0] == listaNumeriCasuali[0] || listaNumeriUtente[0] == listaNumeriCasuali[1] || listaNumeriUtente[0] == listaNumeriCasuali[2] || listaNumeriUtente[0] == listaNumeriCasuali[3] || listaNumeriUtente[0] == listaNumeriCasuali[4]){
        //     listaFinale.push(listaNumeriUtente[0]);
        // };
        // //if che serve a verificare se il secondo elemento di "listaNumeriUtente" si trova all'interno di "listaNumeriCasuali"
        // if(listaNumeriUtente[1] == listaNumeriCasuali[0] || listaNumeriUtente[1] == listaNumeriCasuali[1] || listaNumeriUtente[1] == listaNumeriCasuali[2] || listaNumeriUtente[1] == listaNumeriCasuali[3] || listaNumeriUtente[1] == listaNumeriCasuali[4]){
        //     listaFinale.push(listaNumeriUtente[1]);
        // };
        // //if che serve a verificare se il terzo elemento di "listaNumeriUtente" si trova all'interno di "listaNumeriCasuali"
        // if(listaNumeriUtente[2] == listaNumeriCasuali[0] || listaNumeriUtente[2] == listaNumeriCasuali[1] || listaNumeriUtente[2] == listaNumeriCasuali[2] || listaNumeriUtente[2] == listaNumeriCasuali[3] || listaNumeriUtente[2] == listaNumeriCasuali[4]){
        //     listaFinale.push(listaNumeriUtente[2]);
        // };
        // //if che serve a verificare se il quarto elemento di "listaNumeriUtente" si trova all'interno di "listaNumeriCasuali"
        // if(listaNumeriUtente[3] == listaNumeriCasuali[0] || listaNumeriUtente[3] == listaNumeriCasuali[1] || listaNumeriUtente[3] == listaNumeriCasuali[2] || listaNumeriUtente[3] == listaNumeriCasuali[3] || listaNumeriUtente[3] == listaNumeriCasuali[4]){
        //     listaFinale.push(listaNumeriUtente[3]);
        // };
        // //if che serve a verificare se il quinto elemento di "listaNumeriUtente" si trova all'interno di "listaNumeriCasuali"
        // if(listaNumeriUtente[4] == listaNumeriCasuali[0] || listaNumeriUtente[4] == listaNumeriCasuali[1] || listaNumeriUtente[4] == listaNumeriCasuali[2] || listaNumeriUtente[4] == listaNumeriCasuali[3] || listaNumeriUtente[4] == listaNumeriCasuali[4]){
        //     listaFinale.push(listaNumeriUtente[4]);
        // };
        // console.log(listaFinale);

        //sostituita la serie di if con un ciclo for
        for (var y = 0; y < listaNumeriCasuali.length; y++) {
            if (listaNumeriCasuali.includes(listaNumeriUtente[y])) {
                listaFinale.push(listaNumeriUtente[y]);
            };
            
        };

        alert("Hai ricordato " + listaFinale.length + " numeri e sono: " + listaFinale);
    };

});
