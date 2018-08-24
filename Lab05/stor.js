var numRabaddon = 0;
var numVoidStaff = 0;
var numDarkSeal = 0;

document.getElementById("rab").addEventListener("click", function(){
    numRabaddon = document.getElementById("numrab").value;
    if(numRabaddon>1){
        alert("Esa cantidad excede tu límite.");
        document.getElementById("numrab").value = 0;
        numRabaddon = 0;
    }
    updateTotal();
});

document.getElementById("void").addEventListener("click", function(){
    numVoidStaff = document.getElementById("numvoid").value;
    if(numVoidStaff>2){
        alert("Esa cantidad excede tu límite.");
        document.getElementById("numvoid").value = 0;
        numVoidStaff = 0;
    }
    updateTotal();
});

document.getElementById("dark").addEventListener("click", function(){
    numDarkSeal = document.getElementById("numdark").value;
    if(numDarkSeal>6){
        alert("Esa cantidad excede tu límite.");
        document.getElementById("numdark").value = 0;
        numDarkSeal = 0;
    }
    updateTotal();
});

function updateTotal(){
    document.getElementById("antetotal").innerText= "Antetotal: "+(numRabaddon*3600+numVoidStaff*2650+numDarkSeal*350+" Gold");
    document.getElementById("iva").innerText= "IVA:       "+(numRabaddon*3600+numVoidStaff*2650+numDarkSeal*350)*0.16+" Gold";
    document.getElementById("total").innerText= "Total:     "+(numRabaddon*3600+numVoidStaff*2650+numDarkSeal*350)*1.16+" Gold";
}