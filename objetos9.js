// exercicio 9

const objeto1 = { 
    nome: 'joao',
    idade: 21,
    profissao: 'programador'
}

const objeto2 = {
    nome: 'jonas',
    idade: 28,
    profissao: 'veterinário'
}

function receberOb(pessoa) {
    const resultado = []
    resultado.push(pessoa.nome)
    resultado.push(pessoa.nome.length)
    resultado.push(pessoa.idade)
    resultado.push(pessoa.profissao)
    resultado.push(pessoa.profissao.length)
    return resultado
}
console.log(receberOb(objeto1));
console.log(receberOb(objeto2));
