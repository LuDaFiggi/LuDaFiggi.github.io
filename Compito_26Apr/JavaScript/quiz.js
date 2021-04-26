function validazione(nome,cognome,giorno,anno){
    var controlloInserimenti = true;
    
    if(nome=="" || cognome==""){
        controlloInserimenti==false;
    }
    if(giorno=="" || anno==""){
        controlloInserimenti==false;
    }
    return controlloInserimenti;
}

function elaboraRisposte(form){
    
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var giorno = parseInt(document.getElementById("giorno").value);
    var anno = parseInt(document.getElementById("anno").value);

    if(validazione(nome, cognome, giorno, anno)==true){
        document.getElementById("punteggio").innerHTML = ""
    }
    else{
        alert("Inserisci i tuoi dati personali");
    }
}