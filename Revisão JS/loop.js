let senhaFinal = Number(102030);
let senha;

do {
     senha = Number(prompt('Digite a senha'));
    

    if (senhaFinal === senha) {
        console.log('Seja bem vindo!');
        alert('Seja bem vindo!');
    } else {
        console.log('Senha incorreta, por favor repita!');
        alert('Senha incorreta, por favor repita!');
    }
} while (senha !== senhaFinal);