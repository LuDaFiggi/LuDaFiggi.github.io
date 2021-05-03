function creaPDF(){
    var doc = new jsPDF();

    doc.setFont("Verdana");
    
    doc.text(75, 20, 'Creare un PDF con JavaScript');
    doc.text(20, 30, 'Questo file \u00E8 stato creato con JavaScript');

    doc.addPage();
    doc.text(20, 20, 'Prima pagina');
    doc.text(20, 30, 'Il nome \u00E8: ' + document.getElementById('nome').value)
    doc.text(20, 40, 'Il cognome \u00E8: ' + document.getElementById('cognome').value)
    doc.text(20, 50, 'Il numero \u00E8: ' + document.getElementById('numero').value)
    doc.text(20, 60, 'L\' e-mail \u00E8: ' + document.getElementById('email').value)
    doc.text(20, 70, 'Il messaggio \u00E8: ' + document.getElementById('messaggio').value)

    doc.addPage();
    doc.text(20, 280, 'Fine documento');

    doc.save('filePDF.pdf');
}