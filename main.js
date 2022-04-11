var valor = 0;
function entrada_A() {
    valor = display1.innerHTML;
    if (valor == 0) {
        valor = 1;
        display1.innerHTML = "1";
    }
    else {
        valor = 0;
        display1.innerHTML = "0";
    }
}

function entrada_B() {
    valor = display2.innerHTML;
    if (valor == 0) {
        valor = 1;
        display2.innerHTML = "1";
    }
    else {
        valor = 0;
        display2.innerHTML = "0";
    }
}

function entrada_C() {
    valor = display3.innerHTML;
    if (valor == 0) {
        valor = 1;
        display3.innerHTML = "1";
    }
    else {
        valor = 0;
        display3.innerHTML = "0";
    }
}

function entrada_D() {
    valor = display4.innerHTML;
    if (valor == 0) {
        valor = 1;
        display4.innerHTML = "1";
    }
    else {
        valor = 0;
        display4.innerHTML = "0";
    }
}

function entrada_E() {
    valor = display5.innerHTML;
    if (valor == 0) {
        valor = 1;
        display5.innerHTML = "1";
    }
    else {
        valor = 0;
        display5.innerHTML = "0";
    }
}

function enviar() {
    var A = display1.innerHTML;
    var B = display2.innerHTML;
    var C = display3.innerHTML;
    var D = display4.innerHTML;
    var E = display5.innerHTML;
    var senha = A + B + C + D + E;

    if (senha == "00010" || senha == "00011" || senha == "00110" || senha == "00111" ||
        senha == "10010" || senha == "10011" || senha == "10110" || senha == "10111" ) {
            resultado.innerHTML = "<img style=width:125px; src=imgs/red-circle.png>";
        }
    else {
        resultado.innerHTML = "<img style=width:125px; src=imgs/green-circle.png>";
    }
}