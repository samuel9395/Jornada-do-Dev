// OPERADORES DE COMPARAÇÃO(BOLEANO)

// COMPARAR SE É IDÊNTICO A 
"a" === "b" // lembrando que a letra 'a' é uma string, então ela deve ser envolvida por aspas

// COMPARA SE NÃO É IDÊNTICO A
"a" !== "b"

// COMPARAR SE É MAIOR QUE
10 > 20

// COMPARA SE É MENOR QUE
10 < 20

// MAIOR OU IGUAL 
10 >= 10

//  MENOR OU IGUAL 
10 <= 5

// EXERCÍCIO 04

// Receber dois valores para fazer a nota média do aluno. Se o resultado for maior ou igual a 5 ele vai receber true(Arovado), se for menos ele vai receber false(Reprovado).

let nota1 = Number(prompt('Digite a sua primeira nota'));
let nota2 = Number(prompt('Digite a sua segunda nota'));
// Aqui notamos que no método prompt(), o envolvemos entre parênteses e adicionamos o método nátido 'Number' para converter textos em números

let notaMedia = (nota1+nota2)/2;

alert(notaMedia >= 5);
console.log(notaMedia);

if (notaMedia >= 5) {
    document.getElementById("notaTotal").innerHTML = "A sua nota é " + notaMedia + ", você está aprovado!";
}else {
    document.getElementById("notaTotal").innerHTML = "A sua nota é " + notaMedia + ", você está reprovado!"; 
}