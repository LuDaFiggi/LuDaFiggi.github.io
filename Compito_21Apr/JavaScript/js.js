function inizializza()
{
    var sesso=["M", "F"];
    push(sesso, "sesso");

    var occhi=["Marroni", "Verdi", "Azzurri", "Neri"];
    push(occhi, "occhi");
    
    var provincia=["BG","BS","CO","CR","LC","LO","MN","MI","MB","PV","SO","VA"];
    push(provincia, "residenza");
}

function push(vettore, id)
{
    for(var i = 0; i < vettore.length; i++){
        var ogg=document.createElement("option");
        ogg.value=vettore[i];
        ogg.innerHTML=vettore[i];
        document.getElementById(id).appendChild(ogg);
    }
}

function attivazione()
{
    var controlla=false;
    if(document.getElementById("nome").value=="")
        controlla=true;
    if(document.getElementById("cognome").value=="")
        controlla=true;
    if(document.getElementById("data").value=="")
        controlla=true;

    if(controlla==true)
        alert("Inserisci tutti i tuoi dati");
    else
        alert("Offerta attivata!");
}