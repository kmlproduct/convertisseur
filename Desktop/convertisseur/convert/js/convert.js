
function myConvert () {

    var amount = document.getElementById("entrer").value;
        fromid = document.getElementById("id_from").value;
        fromto = document.getElementById("id_to").value;
        result = 0;
        

        if  (amount == 0 || isNaN(amount) || amount=="") {
            document.getElementById("message").innerHTML="you have to write correct value";
            document.getElementById("message").style='background-color:red';
            return;
        };
        
        if (fromid == "euro"){
            switch (fromto){
                case "Dollars":
                result = amount * 2.5;
                break;
                case"CAD":
                result = amount * 1.5;
                break;
                
            }
        }
        if (fromid == "Dollars"){
            switch (fromto){
                case "euro":
                result = amount*1.5;
                break;
                case"CAD":
                result = amount * 0.5;
                break;
            }
        }
        if (fromid == "CAD"){
            switch (dromto){
                case "euro":
                result = amount*1.5;
                break;
                case"Dsollars":
                result = amount * 0.5;
                break;
            }
        }
        
        var message = amount + " "+fromid+" is " +result+ " "+fromto;
        document.getElementById("message").style='background-color:rgb(75, 223, 82)';
        document.getElementById("message").innerHTML=message;
}

