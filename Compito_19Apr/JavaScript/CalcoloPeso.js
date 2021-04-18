var bmi;

function calcolaPesoForma(){
    var altezza;
    var altezzaMetri;
    var anni;
    var opzioneScelta;
    var formula;
    var pesoForma;
    var peso;
    altezza = document.getElementById("altezza").value;
    anni = document.getElementById("eta").value;
    opzioneScelta = document.getElementById("sesso").selectedIndex;
    peso=document.getElementById("peso").value;
    switch(opzioneScelta){
        case 0:
            pesoForma=(altezza-100)-((altezza-150)/2);
            document.getElementById("pesoLorenz").innerHTML = "Secondo la formula di Lorenz il tuo peso forma è di " + pesoforma + "kg";
            pesoForma=altezza-104;
            document.getElementById("pesoBroca").innerHTML = "Secondo la formula di Broca il tuo peso forma è di " + pesoForma + "kg";
            pesoForma=(altezza-150)*0.75+50;
            document.getElementById("pesowandervael").innerHTML = "Secondo la formula di Wan Der Vael il tuo peso forma è di " + pesoForma + "kg";
            altezzaMetri=altezza/100;
            bmi=peso/(altezzaMetri*altezzaMetri);
            document.getElementById("bmi").innerHTML = "Il tuo BMI è: " + bmi + "kg/m2";
        case 1:
            pesoForma=(altezza-100)-((altezza-150)/4);
            document.getElementById("pesoLorenz").innerHTML = "Secondo la formula di Lorenz il tuo peso forma è di " + pesoForma + "kg";
            pesoForma=altezza-100;
            document.getElementById("pesoBroca").innerHTML = "Secondo la formula di Broca il tuo peso forma è di " + pesoForma + "kg";
            pesoForma=(altezza-150)*0.6+50;
            document.getElementById("pesowandervael").innerHTML = "Secondo la formula di Wan Der Vael il tuo peso forma è di " + pesoForma + "kg";
            altezzaMetri=altezza/100;
            bmi=peso/(altezzaMetri*altezzaMetri);
            document.getElementById("bmi").innerHTML = "Il tuo BMI è: " + bmi + " kg/m2";
    }
    controllaBMI();
}

function controllaBMI(){
    if(bmi <= 16.49){
        document.getElementById("info").innerHTML="Soffri di grave magrezza :-(";
    }
    if(bmi >= 16.5 && bmi < 18,49){
        document.getElementById("info").innerHTML="Sei sottopeso :-|";
    }
    if(bmi >= 18.5 && bmi < 24,99){
        document.getElementById("info").innerHTML="Sei normopeso ;-)";
    }
    if(bmi >= 25 && bmi < 29,99){
        document.getElementById("info").innerHTML="Sei sovrappeso :-/";
    }
    if(bmi >= 30 && bmi < 34.99){
        document.getElementById("info").innerHTML="Soffri di obesità di livello 1 :-(";
    }
    if(bmi >= 35 && bmi < 39.99){
        document.getElementById("info").innerHTML="Soffri di obesità di livello 2 :-(";
    }
    if(bmi >= 40){
        document.getElementById("info").innerHTML="Soffri di obesità di livello 3 :-(";
    }
}