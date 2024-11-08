let expresionActual = ""; // Variable para almacenar la expresión actual

function addNumber(num) {
    expresionActual += num;
    mostrarExpresion();
}

function addOperator(operator) {
    // Evitar agregar operadores seguidos o al inicio
    if (expresionActual === "" || /[+\-*/.]$/.test(expresionActual)) {
        return;
    }
    expresionActual += operator; // Añadir el operador a la expresión
    mostrarExpresion();
}

function addDecimal() {
    // Verificar si ya existe un punto decimal en la última parte de la expresión
    const ultimaParte = expresionActual.split(/[\+\-\*/]/).pop();
    if (ultimaParte.includes(".")) {
        return; // No permitir agregar otro punto si ya existe en la última parte
    }
    expresionActual += ".";
    mostrarExpresion();
}

function calcular() {
    try {
        const result = eval(expresionActual); // Evalúa la expresión
        expresionActual = result.toString(); // Almacena el resultado como la nueva expresión
        mostrarExpresion();
    } catch (error) {
        expresionActual = "Error"; // Muestra "Error" si hay algún problema
        mostrarExpresion();
    }
}

function clearDisplay() {
    expresionActual = ""; // Limpia la expresión
    mostrarExpresion();
}

function deleteLast() {
    expresionActual = expresionActual.slice(0, -1); // Elimina el último carácter
    mostrarExpresion();
}

function mostrarExpresion() {
    document.getElementById("display").value = expresionActual; // Muestra la expresión en la caja de texto
}
