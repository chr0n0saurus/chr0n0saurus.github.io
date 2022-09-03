document.getElementById("szamol").addEventListener("click", function () {
    var megtakaritas = document.getElementById("hetiMegtakaritas").value;

    var sI = document.getElementById("sporolasIdo").value;
    
    var kerekpar=Number(document.getElementById("kerekpar").value);
    var telefon=Number(document.getElementById("telefon").value);
    var konzol=Number(document.getElementById("konzol").value);
    
    //Megtakarítás számítása 

    if(megtakaritas > 0 && megtakaritas != "" && megtakaritas%1==0 && sI != 99 && document.querySelectorAll('input[type="radio"]:checked').length != 0){
        var eredmeny = 0;
        if (sI == 1){
            eredmeny = megtakaritas * 26;
        } else if (sI == 2){
            eredmeny = megtakaritas * 52;
        } else if (sI == 3){
            eredmeny = megtakaritas * 156;
        } else if (sI == 4){
            eredmeny = megtakaritas * 260;
        }
        document.getElementById("megtakaritasOsszes").innerHTML="Összes megtakarításod: "+eredmeny+" Ft";

        //Eredmény ellenőrzése és kiírása az oldalra

        if(eredmeny > 0){
            if(document.getElementById("kerekpar").checked && eredmeny != 0 && eredmeny > 0 && sI != 99){
                if(eredmeny < kerekpar){
                    document.getElementById("eredmeny").innerHTML="Így sosem lesz biciklid...";
                } else {
                    document.getElementById("eredmeny").innerHTML="Szupi, tudsz venni egy biciklit!";
                }
            }
        }

        if(eredmeny > 0){
            if(document.getElementById("telefon").checked && eredmeny != 0 && sI != 99){
                if(eredmeny < telefon){
                    document.getElementById("eredmeny").innerHTML="Így sosem lesz telefonod...";
                } else {
                    document.getElementById("eredmeny").innerHTML="Szupi, tudsz venni egy új telefont!";
                }
            }
        }

        if(eredmeny > 0){
            if(document.getElementById("konzol").checked && eredmeny != 0 && sI != 99){
                if(eredmeny < konzol){
                    document.getElementById("eredmeny").innerHTML="Így sosem lesz konzolod...";
                } else {
                    document.getElementById("eredmeny").innerHTML="Szupi, tudsz venni egy konzolt!";
                }
            }
        } 
        } else {
            alert("Hiányzó adatok! Kérjük, ellenőrizze, hogy minden pontot megfelelően töltött-e ki! \n A megtakarítás összege csak pozitív egész szám lehet. \n Spórolási időszak választása kötelező! \n Termék választása kötelező!");
            document.getElementById("megtakaritasOsszes").innerHTML="";
            document.getElementById("eredmeny").innerHTML="";
        }
})