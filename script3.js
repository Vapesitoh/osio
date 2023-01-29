e.preventDefault();

function calcularEdadAnimals(e) {
    e.preventDefault();
    var animal = document.querySelector('input[name="animal"]:checked').value;

    // Obtener el animal seleccionado
    // Obtener la edad del animal en años humanos
    var edadHumano = document.getElementById("edadHumano").value;
    // Calcular la edad del animal en años caninos o felinos
    if (animal === "perro") {
        var edadPerro = edadHumano * 7;
        document.getElementById("result").innerHTML = "La edad del perro en años caninos es: " + edadPerro;
    } else if (animal === "gato") {
        var edadGato = edadHumano * 15;
        document.getElementById("result").innerHTML = "La edad del gato en años felinos es: " + edadGato;
    }
}
