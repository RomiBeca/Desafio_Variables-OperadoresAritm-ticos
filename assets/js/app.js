
// diagrama

// operaciones matematicas

function sumar() {
    let numeroUno = parseFloat(document.getElementById("numero1").value);
    let numeroDos = parseFloat(document.getElementById("numero2").value);

    let suma = numeroUno + numeroDos;

    document.getElementById("resultado1").value = suma;
}
function resta() {
    let numeroTres = parseFloat(document.getElementById("numero3").value);
    let numeroCuatro = parseFloat(document.getElementById("numero4").value);

    let resta = numeroTres - numeroCuatro;

    document.getElementById("resultado2").value = resta;
}
function multiplicacion() {
    let numeroCinco = parseFloat(document.getElementById("numero5").value);
    let numeroSeis = parseFloat(document.getElementById("numero6").value);

    let multiplicacion = numeroCinco * numeroSeis

    document.getElementById("resultado3").value = multiplicacion;
}
function division() {
    let numeroSiete = parseFloat(document.getElementById("numero7").value);
    let numeroOcho = parseFloat(document.getElementById("numero8").value);

    let division = numeroSiete / numeroOcho

    document.getElementById("resultado4").value = division;
}
function modulo() {
    let numeroNueve = parseFloat(document.getElementById("numero9").value);
    let numeroDiez = parseFloat(document.getElementById("numero10").value);

    let modulo = numeroNueve % numeroDiez

    document.getElementById("resultado5").value = modulo;
}

//temperaturas
function transformando() {
    let ingresaCelsius = parseFloat(document.getElementById("celsius").value);

    let fahrenheit1 = (ingresaCelsius * 9 / 5) + 32;
    let kelvin1 = ingresaCelsius + 273.15;


    document.getElementById("fahrenheit").value = fahrenheit1;
    document.getElementById("kelvin").value = kelvin1;

}
//dias a años
function convertirDias() {
    let diasIn = parseFloat(document.getElementById("diasIn").value);

    let añosOut = Math.floor(diasIn / 365)
    let diasRestantes = diasIn % 365
    let semanasOut = Math.floor(diasRestantes / 7)
    let diasOut = diasRestantes % 7


    document.getElementById("años").value = añosOut;
    document.getElementById("semanas").value = semanasOut;
    document.getElementById("diasOut").value = diasOut;

}

//5 numeros del usuario, suma y promedio
function resultadoNumerales() {
    let valorUno = parseFloat(document.getElementById("numeroUno").value);
    let ValorDos = parseFloat(document.getElementById("numeroDos").value);
    let valorTres = parseFloat(document.getElementById("numeroTres").value);
    let valorCuatro = parseFloat(document.getElementById("numeroCuatro").value);
    let valorCinco = parseFloat(document.getElementById("numeroCinco").value);

    let sumar2 = valorUno + ValorDos + valorTres + valorCuatro + valorCinco;
    let promedio1 = (valorUno + ValorDos + valorTres + valorCuatro + valorCinco) / 5;

    document.getElementById("resultadoSuma").value = sumar2
    document.getElementById("resultadoPromedio").value = promedio1
}