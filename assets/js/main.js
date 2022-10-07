
//attraverso l'evento del click sul bottone calcolo e genero il prezzo finale
const getPriceButton = document.querySelector("button");

getPriceButton.addEventListener("click", function () {

    //mi salvo quanti km vuole percorrere dall'input nell'html
    const numKmpassenger = Number(document.getElementById("numKM").value);
    //mi salvo quanti anni ha il passeggero dall'input nell'html
    const numAnniPassenger = Number(document.getElementById("age").value);

    /* Sulla base di queste info devo calcolare i prezzo totale del biglietto , secondo queste regole:
            il prezzo del biglietto è definito in base ai km (0.21€ al km)
            va applicato uno sconto del 20% per i minorenni
            va applicato uno sconto del 40% per gli over 65
    */

    let prezzoTot = numKmpassenger * 0.21;

    //applico sconto in caso fosse minorenne
    if (numAnniPassenger < 18) {
        prezzoTot = (prezzoTot * 80) / 100;
    }

    //applico sconto in caso fosse over 65
    if (numAnniPassenger > 65) {
        prezzoTot = (prezzoTot * 60) / 100;
    }

    //l'output del prezzo finale va messo fuori in forma umana ( con max 2 decimali per indicare i centesimi sul prezzo )
    
    console.log(prezzoTot.toFixed(2));

})
