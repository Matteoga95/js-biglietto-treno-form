
//attraverso l'evento del click sul bottone calcolo e genero il prezzo finale
const getPriceButton = document.getElementById("submit_bt");

getPriceButton.addEventListener("click", function () {

    //mi salvo quanti km vuole percorrere dall'input nell'html
    const numKmpassenger = Number(document.getElementById("kmPassenger").value);
    //mi salvo quanti anni ha il passeggero dall'input nell'html
    const numAnniPassenger = Number(document.getElementById("agePassenger").value);

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


    //modifico i dati del biglietto con quelli inseriti a mano
    const namePassenger = document.getElementById("namePassenger").value;


    const lastNamePassenger = document.getElementById("lastNamePassenger").value;

    document.getElementById("ticket_full_name").innerHTML = namePassenger + "  " + lastNamePassenger

    const ticketDate = new Date()
    document.getElementById("ticket_side_date").innerHTML = ticketDate.toDateString();
    document.getElementById("ticket_date").innerHTML = ticketDate.toDateString();



    //l'output del prezzo finale va messo fuori in forma umana ( con max 2 decimali per indicare i centesimi sul prezzo )
    document.getElementById("ticket_price").innerHTML = prezzoTot.toFixed(2) + " " + "€"
    console.log(prezzoTot.toFixed(2));


    //alla fine devo rendere visibile solo il biglietto ( main_content )
    document.getElementById("input_content").style.display = "none";
    document.getElementById("main-content").style.display = "block";
})
