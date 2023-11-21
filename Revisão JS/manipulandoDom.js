/*
// CAPTURANDO UM ELEMENTO PELO O ID

let titulo = document.getElementById("titulo1");

// CAPTURANDO POR CLASSE

let titulo2 = document.getElementsByClassName("titulo2");

// CAPTURANDO POR TAGS

let tags = document.getElementsByTagName("h1");

console.log(titulo)
console.log(titulo2)
console.log(tags)

let novoTitulo = document.getElementById("nome").innerHTML = "Gerando um titulo com o JavaScript";

let novoTitulo = document.getElementById("nome").innerHTML = prompt('Qual é o seu nome?');

let novoElemento = document.createElement("h2");//criando um elemento com js para o html
novoElemento.innerHTML = "Olá, sou um elemento gerado via JavaScript";//inputando valores ao elemento criado
document.body.appendChild(novoElemento);//criando o elemento dentro do html, dentro do body.

let msg = prompt("Ver mensagem escondida? 1 para sim, e 2 para não.");

if (msg === "1"){
    let novoElemento = document.createElement("h5");
    novoElemento.innerHTML = "Olá, sou um elemento gerado via JavaScript";
    document.body.appendChild(novoElemento);
}

let deleteName = document.getElementById("msg");
deleteName.remove();//Aqui podemos ver uma maneira como podemos remover um elemento html
*/
