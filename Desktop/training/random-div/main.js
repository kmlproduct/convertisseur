
document.querySelector("button").onclick = function(){
    var myDivParent = document.querySelectorAll(".dis-none");
var myArray = ["container", "container2", "container3", "container4"];
    
        RandomClass = Math.floor(Math.random() * myArray.length);
        console.log(RandomClass);
    var AllDiv = document.getElementsByClassName("dis-none");
        randomAlldiv = Math.floor(Math.random() * AllDiv.length);
        myDivParent = AllDiv[randomAlldiv].setAttribute("class",myArray[RandomClass] )
        console.log(randomAlldiv)
        
       
}
