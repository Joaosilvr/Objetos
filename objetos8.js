// exercicio 8


// A
const nomePessoa = {
    nome: 'joao',
    apelidos: ['jao','john','john lenon']
}

function entradaOb(nomePessoa) {
    console.log(`Eu sou ${nomePessoa.nome}, mas pode me chamar de: ${nomePessoa.apelidos[0]}, ${nomePessoa.apelidos[1]} ou ${nomePessoa.apelidos[2]}`);
}

entradaOb(nomePessoa)

// B

const novaPessoa = {
    ...nomePessoa,
    apelidos: ['zeca','zequinha','zecao']
}

entradaOb(novaPessoa)