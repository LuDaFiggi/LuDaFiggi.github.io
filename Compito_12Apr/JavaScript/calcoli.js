function calcola(form)
            {
                var risultato=0;
                var volume = form.volume.value;
                var oggetto = form.metallo.selectedIndex;
                if ((isNaN(volume))||(oggetto<0)||(volume=="")) {
                    alert("Controllare di aver inserito il volume ed il tipo di materiale");
                }else
                {
                    if(oggetto==0)
                    {
                        risultato=7.85*volume;
                    }
                    if(oggetto==1)
                    {
                        risultato=8.4*volume;
                    }
                    if(oggetto==2)
                    {
                        risultato=2.6*volume;
                    }
                    if(oggetto==3)
                    {
                        risultato=8.89*volume;
                    }
                    document.getElementById("risultato").innerHTML=risultato;
                }
            }