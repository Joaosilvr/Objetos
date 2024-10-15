// 1. Criando e acessando propriedades de um objeto
// Crie um objeto chamado carro com as propriedades marca, modelo e ano. Em seguida, crie uma função chamada mostrarDetalhes que retorne uma string com os detalhes do carro (marca, modelo e ano).

const carro = {
  marca: 'Civic',
  modelo: 'Chevrolet',
  ano: 2002,
  mostrarDetalhes: function () {
    console.log(
      `O carro é ${carro.marca},o modelo do carro é ${carro.modelo}, e o ano é ${carro.ano}.`,
    );
  },
};
carro.mostrarDetalhes();

// 2. Adicionando métodos a um objeto
// Crie um objeto chamado pessoa com as propriedades nome e idade. Adicione um método cumprimentar dentro do objeto, que retorne uma saudação, incluindo o nome da pessoa.

const pessoa = {
  nome: 'João',
  idade: 21,
  cumprimentar: function () {
    let nome = pessoa.nome; // reforçando transformar objeto em uma variavel para nao precisar ficar chamando varias propriedades
    console.log(`Olá ${nome}`);
  },
};
pessoa.cumprimentar();

// 3. Atualizando propriedades de um objeto
// Crie um objeto chamado livro com as propriedades titulo, autor e anoPublicacao. Em seguida, crie uma função chamada atualizarAno que receba o objeto livro e um novo ano, atualizando o valor da propriedade anoPublicacao.

const livro = {
  titulo: 'Eu sou a Lenda',
  autor: 'joaquin',
  anoPublicado: 2002,
  atualizarAno: function (livro, atAno) {
    livro.anoPublicado = atAno;
  },
};
livro.atualizarAno(livro, 2012);
console.log(livro);

// 4. Clonando objetos
// Crie uma função chamada clonarObjeto que receba um objeto como argumento e retorne uma cópia exata desse objeto.

function clonarObjeto(objeto) {
  const clone = {
    ...objeto,
  };
  return clone;
}
console.log(clonarObjeto(livro));

// fixar o uso do Spread
