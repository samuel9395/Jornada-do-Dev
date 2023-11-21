//COMO DECLARAR UMA VARIÁVEL DO TIPO STRING
let string = "texto";
        
//CONCATENAR STRINGS
let msg1 = "Olá, ";
let msg2 = "seja bem vindo!";
let concatenar = msg1+msg2;

let pessoa = 'Samuel';
let msg3 = pessoa + ' Olá, seja bem vindo';//Modo antigo de se fazer uma variável(string) mais uma string.
let msg4 = `${pessoa} olá, seja bem vindo.`;// Posso utilizar uma variavel entre as aspas ao contrário com um '$' e a variável concatenada e pôr uma string. 

document.getElementById("hello").innerHTML = concatenar;
console.log(msg4);

//Exercício

//O método prompt() é usado para solicitar informações ou entrada do usuário em um aplicativo ou software.  Temos o prompt de texto, umérico, senha, e de escolha.
let usuario = prompt("Qual é o seu nome?");
console.log(usuario);
//alert é um recurso javascript que exibe uma caixa de diálogo simples na janela do navegador com uma mensagem específica
alert(`${usuario}, seja bem vindo!`);
document.getElementById("usuario").innerHTML = usuario;
