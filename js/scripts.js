function calcularTotal() {
    var cantEntradas,
      total,
      categoria,
      entradaEstudiante,
      entradaTrainee,
      entradaJunior
  
    console.log("ingresa a la funcion");
    cantEntradas = document.getElementById("inputCantidad").value;
    categoria = document.getElementById("inputCategoria").value;
  
    console.log("cant entradas " + cantEntradas + " - categoria " + categoria);
  
    entradaEstudiante = 200 - (200 * 80) / 100;
    entradaTrainee = 200 - (200 * 50) / 100;
    entradaJunior = 200 - (200 * 15) / 100;

    //El input cantEntradas ya está configurado para sólo aceptar números enteros en compratk.html
    //if (cantEntradas > 0 && !isNaN(cantEntradas) && cantEntradas % 1 == 0) --> no necesito esa condición aca
    //Tipo de entrada (Estudiante, Trainee o Junior)
    if (categoria == "Estudiante") {
        total = entradaEstudiante * cantEntradas;
        document.getElementById("importeTotal").innerHTML =
          "Total a Pagar: \u0024" + total;
      } else if (categoria == "Trainee") {
        total = entradaTrainee * cantEntradas;
        document.getElementById("importeTotal").innerHTML =
          "Total a Pagar: \u0024" + total;
      } else if (categoria == "Junior") {
        total = entradaJunior * cantEntradas;
        document.getElementById("importeTotal").innerHTML =
          "Total a Pagar: \u0024" + total;
    } else {
      window.alert("Debe ingresar una cantidad válida.");
    }
}
  
  function borrar() {
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputApellido").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputCantidad").value = "";
    document.getElementById("inputCategoria").value = "Estudiante";
    document.getElementById("importeTotal").innerHTML = "Total a Pagar: \u0024";
  }