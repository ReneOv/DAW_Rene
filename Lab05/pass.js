function checkPass()
{
    var input = document.forms["form"]["pass"].value;
    var input2 = document.forms["form"]["repass"].value;

    if(input.length<8)
    {
        document.getElementById("label").innerText="La contraseña es menor a 8 caracteres.";
        alert("Tu contraseña no es correcta.");
        return false;
    }
    if(input!=input2) {
        document.getElementById("label").innerText = "Las contraseñas no son iguales";
        alert("Tu contraseña no es correcta.");
        return false;
    }
    document.getElementById("label").innerText="La contraseña es válida";
    alert("Tu contraseña se ha guardado");
    return true;
}


