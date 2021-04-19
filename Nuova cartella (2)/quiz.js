function validazione(){
    var nome = document.getElementById("nome").value;
    if(nome==null||nome==""){
        alert("Inserisci il nome!");
        return false;
    }
    var cognome = document.getElementById("cognome").value;
    if(cognome==null||cognome==""){
        alert("Inserisci il cognome!");
        return false;
    }
    var giorno = document.getElementById("giorno").value;
    if(giorno==null||giorno==""){
        alert("Inserisci il giorno!");
        return false;
    }
    var anno = document.getElementById("anno").value;
    if(anno==null||anno==""){
        alert("Inserisci l'anno!");
        return false;
    }
    return true;
}

function elaboraRisposte(form){
    document.getElementById("punteggio").innerHTML="TROLL ;-)"
}