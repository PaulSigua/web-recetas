
function capturar() {
    var nombreee = document.getElementById("nombre").value;
    var ingredientesss = document.getElementById("ingredientes").value;
    var procedimientooo = document.getElementById("procedimiento").value;

    if (nombreee == "") {
        alert("Debe ingresar su nombre");
    } else if(ingredientesss == "") {
        alert("Debe ingresar los ingredientes");
    } else if(procedimientooo == ""){
        alert("Debe ingresar el procedimiento");
    } else{
        console.log("ocurrio un error");
    }
    console.log(nombreee);
    console.log(ingredientesss);
}