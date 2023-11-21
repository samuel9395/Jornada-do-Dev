function somar(num1, num2) {
    // CÓDIGO DA FUNÇÃO
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

let parametro1 = parseFloat(prompt('Insira o primeiro número a ser calculado'));
let parametro2 = parseFloat(prompt('Insira o segundo número a ser claculado'));
let operacao = prompt('Escolha a operação: (1 para somar, 2 para subtrair, 3 para multiplicar, 4 para dividir)');

if (operacao === "1"){
    alert(somar(parametro1, parametro2));
} else if (operacao === "2"){
    alert(subtrair(parametro1, parametro2));
} else if (operacao === "3"){
    alert(multiplicar(parametro1, parametro2));
} else if (operacao === "4"){
    alert(dividir(parametro1, parametro2));
} else {
    alert('Operação digitada errada, tente novamente.');
}

console.log(operacao);
console.log();
