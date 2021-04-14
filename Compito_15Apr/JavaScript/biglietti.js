function calcolaPrezzoBiglietto(form){
    var numeroKM = document.getElementById("numeroKM").value;
    var costo;
    if(numeroKM < 1){
        alert("Il numero di km è sbagliato, i nostri treni non vanno all'indietro!");
    }
    if(form.r1.checked)
    {
        costo = 0.43;
        document.getElementById("costo").innerHTML="Il prezzo di un singolo biglietto è: " + numeroKM*costo + "€";
    }
    else if(form.r2.checked)
    {
        costo = 0.21;
        document.getElementById("costo").innerHTML="Il prezzo di un singolo biglietto è: " + numeroKM*costo + "€";
    }
}

function calcolaPrezzoBiglietti(form){
    var numeroKM = document.getElementById("numeroKM").value;
    var costo;
    if(numeroKM < 1){
        alert("Il numero di km è sbagliato, i nostri treni non vanno all'indietro!");
    }
    if(form.r1.checked)
    {
        costo = 0.43;
        var opzione = document.getElementById("numeroPersone").selectedIndex;
        var numPersone;
        switch(opzione){
            case 0:
                numPersone = 1;
                break;
            case 1:
                numPersone = 2;
                break;
            case 2:
                numPersone = 3;
                break;
            case 3:
                numPersone = 4;
                break;
            case 4:
                numPersone = 5;
                break;
            case 5:
                numPersone = 6;
                break;
        }
        document.getElementById("costo").innerHTML="Il prezzo totale è: " + numeroKM*costo*numPersone + "€";
    }
    else if(form.r2.checked)
    {
        costo = 0.21;
        var opzione = document.getElementById("numeroPersone").selectedIndex;
        var numPersone;
        switch(opzione){
            case 0:
                numPersone = 1;
                break;
            case 1:
                numPersone = 2;
                break;
            case 2:
                numPersone = 3;
                break;
            case 3:
                numPersone = 4;
                break;
            case 4:
                numPersone = 5;
                break;
            case 5:
                numPersone = 6;
                break;
        }
        document.getElementById("costo").innerHTML="Il prezzo totale è: " + numeroKM*costo*numPersone + "€";
    }
    else{
        document.getElementById("costo").innerHTML="Inserisci la classe nella quale vuoi viaggiare";
    }
}