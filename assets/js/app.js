// console.log("esto es una prueba ¡si funciono! ")
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

//dias a años
//5 numeros del usuario, suma y promedio