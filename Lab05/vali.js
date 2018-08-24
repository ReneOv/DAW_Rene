function checkAns() {
    var input = document.forms["form"]["ans"].value;

    if (input === "mewtwo" || input === "Mewtwo") {
        //document.getElementById("label").innerText =
        alert("Es correcto! Palutena perdió al salirse del combate, rindiéndose y otorgándole la victoria a Mewtwo!");
        return true;
    }
    else if (input === "palutena" || input === "Palutena"){
        //document.getElementById("label").innerText =
        alert("Estás incorrecto! Vuelve a ver el video, e inténtalo de nuevo.");
        return false;
    }
    else {
        //document.getElementById("label").innerText =
        alert("Seguro que viste el video? Eso no es un personaje que estaba en el combate!");
        return false;
    }
}