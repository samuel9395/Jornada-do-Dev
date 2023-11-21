// CONDICIONAIS

// AQUI VAMOS USAR O EXPEMPLO ANTERIOR PARA NOS APROFUNDAR NO ASSUNTO

// Receber dois valores para fazer a nota média do aluno. Se o resultado for maior ou igual a 5 ele vai receber true(Arovado), se for menos ele vai receber false(Reprovado).

let media1 = Number(prompt('Digite a sua primeira nota'));
let media2 = Number(prompt('Digite a sua segunda nota'));
// Aqui notamos que no método prompt(), o envolvemos entre parênteses e adicionamos o método nátido 'Number' para converter textos em números

let mediaFinal = (media1+media2)/2;

if (mediaFinal >= 5) {
    console.log('Parabéns, você foi aprovado!');
    alert('Acertou MISERÁVI!');
} else { 
    console.log('Que pena, você foi reprovado!');
    alert('POH, QUE MERDA HEIN...');
}





