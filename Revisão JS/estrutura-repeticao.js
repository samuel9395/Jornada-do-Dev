/* ESTRUTURAS DE REPETIÇÃO


for (inicializador; condição-saida; expressão-final){
    // executar o nosso código
}
// inicializador vai ser uma variável que recebe um número com a quantidade de vezes que a repetição será executada
// condição de saída definimos quando a contagem da função inicializador deve parar. Geralmente esse método é usado com o operador de comparação.
// expressão final faz com que o inicializador faça mais ou menos contagem
*/

// EXERCÍCIO 06

let notas = [2,7,5,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,50,20,10,5];
let total = 0;
notas.push(10); //Aqui resolvi testar esse método

// quando usamos o length pegamos a quantidade de itens que tem em nosso arrays
// no caso de adicionar mais itens no array, por isso depois do ';' na estrutura repeticoes adcionamos o '++'  
for (let repeticoes = 0; repeticoes < notas.length; repeticoes++){
    total = total + notas[repeticoes]; // notas[repeticoes] o 'for' está indo no arrays pegando item por item, ai estamos informadndo para o total que ele vai ter que somar cada item. A "let repeticoes" informa a posição de cada item.
    //então 'total = 0' soma com 'notas[arrays]' que no caso a posição '0' é igual a '2', e logo 'total' passar a valer 'total = 2', e assim vai sucessivamente. 
    //total += notas[repeticoes] PODEMOS TAMBÉM FAZER DESSA MANEIRA PARA ECONOMIZAR CÓDIGO
}

console.log(`O total do seu dinheiro é:${total}`);