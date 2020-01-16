// convert devise

function myConvert () {
    

    var amount = document.getElementById("entrer").value;
        fromid = document.getElementById("id_from").value;
        fromto = document.getElementById("id_to").value;
        result = 0;
        
        

        if  (amount == 0 || isNaN(amount) || (fromid) == (fromto)){
            document.getElementById("message").innerHTML="should be write correct value";
            document.getElementById("message").style='background-color:red';
            
        
        
            return;
            
        }
        
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
            switch (fromto){
                case "euro":
                result = amount*1.5;
                break;
                case"Dollars":
                result = amount * 0.5;
                break;
            }
        }
        
        
        var message = amount + " "+fromid+" is " +result+ " "+fromto;
            document.getElementById("message").style='background-color:rgb(75, 223, 82)';
            document.getElementById("message").innerHTML=message;
}

// convert devise 
// convert distance
function myDistance() {
    

    var amount = document.getElementById("up").value;
        fromid = document.getElementById("id_fromDistance").value;
        fromto = document.getElementById("id_toDistance").value;
        result = 0;
        
        

        if  (amount == 0 || isNaN(amount) || (fromid) == (fromto)){
            document.getElementById("messageDistance").innerHTML="should be write correct value";
            document.getElementById("messageDistance").style='background-color:red';
            
        
        
            return;
            
        }
        
        if (fromid == "km"){
            switch (fromto){
                case "m":
                result = amount * 1000;
                break;
                case"cm":
                result = amount * 100000;
                break;
                case "mm":
                result = amount * 1000000;
                break;
                
            }
        }
        if (fromid == "m"){
            switch (fromto){
                case "km":
                result = amount / 1000;
                break;
                case"cm":
                result = amount * 100;
                break;
                case "mm":
                result = amount / 1000;
                break;
            }
        }
        if (fromid == "cm"){
            switch (fromto){
                case "m":
                    result = amount / 100;
                    break;
                    case"km":
                    result = amount / 100000;
                    break;
                    case "mm":
                    result = amount / 1000000;
                    break;
            }
        }
        if (fromid == "mm"){
            switch (fromto){
                case "m":
                    result = amount / 1000;
                    break;
                    case"cm":
                    result = amount / 10000;
                    break;
                    case "mm":
                    result = amount / 100000;
                    break;
            }
        }
        
        
        var message = amount + " "+fromid+" is " +result+ " "+fromto;
            document.getElementById("messageDistance").style='background-color:rgb(75, 223, 82)';
            document.getElementById("messageDistance").innerHTML=message;
}
// convertDistance

// convertWeight
function myWeight() {
    
    var amount = document.getElementById("entrerWeight").value;
        fromid = document.getElementById("id_fromWeight").value;
        fromto = document.getElementById("id_toWeight").value;
        result = 0;
        
        

        if  (amount == 0 || isNaN(amount) || (fromid) == (fromto)){
            document.getElementById("messageWeight").innerHTML="should be write correct value";
            document.getElementById("messageWeight").style='background-color:red';
            
        
        
            return;
            
        }
        
        if (fromid == "t"){
            switch (fromto){
                case "kg":
                result = amount * 1000;
                break;
                case"g":
                result = amount * 100000;
                break;
                case "mg":
                result = amount * 1000000;
                break;
                
            }
        }
        if (fromid == "kg"){
            switch (fromto){
                case "t":
                result = amount / 1000;
                break;
                case"g":
                result = amount * 1000;
                break;
                case "mg":
                result = amount * 100000;
                break;
            }
        }
        if (fromid == "g"){
            switch (fromto){
                case "t":
                    result = amount / 1000000;
                    break;
                    case"kg":
                    result = amount / 1000;
                    break;
                    case "mg":
                    result = amount * 100;
                    break;
            }
        }
        if (fromid == "mg"){
            switch (fromto){
                case "t":
                    result = amount / 1000000;
                    break;
                    case"kg":
                    result = amount / 10000;
                    break;
                    case "g":
                    result = amount / 100;
                    break;
            }
        }
        
        
        var message = amount + " "+fromid+" is " +result+ " "+fromto;
            document.getElementById("messageWeight").style='background-color:rgb(75, 223, 82)';
            document.getElementById("messageWeight").innerHTML=message;
}
// convertWeight
function myOnkey (){
    
    document.getElementById("message").style='background-color:yellow';
    document.getElementById("message").innerHTML="write your value";
}
function myMouse(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    
    document.getElementById("message").innerHTML = coor;
    document.getElementById("message").style='background-color:rgb(216, 204, 164)';
    document.getElementById("entrer").innerHTML = " I will calculate your value  " ;
  }
  
  function clearCoor() {
    document.getElementById("message").innerHTML = "";
    document.getElementById("message").style = "";
    document.getElementById("entrer").innerHTML = "" ;
    
  }
  
function myDistanceBlock() {
    var myDisplay = document.getElementById("Distance").style.display = "block";
    var myDisplay = document.getElementById("Devise").style.display = "none";
    var myDisplay = document.getElementById("Weight").style.display = "none";
      
}
function myDevisBlock(){
    var myDisplay = document.getElementById("Distance").style.display = "none";
    var myDisplay = document.getElementById("Devise").style.display = "block";
    var myDisplay = document.getElementById("Weight").style.display = "none";
}
function myWeightBlock() {
    var myDisplay = document.getElementById("Distance").style.display = "none";
    var myDisplay = document.getElementById("Devise").style.display = "none";
    var myDisplay = document.getElementById("Weight").style.display = "block";
}

