// exercicio 3

const filmes = {
    direcao: 'disney',
    nome: 'Deadpool e wolverine',
    ano: 2024,
    elenco: ['hugh Jackman','Ryan Reynolds','Chris Evans'],
    assistiu: true,
}
console.log(filmes.direcao);
console.log(filmes.nome);
console.log(filmes.ano);
console.log(filmes['elenco']);
console.log(filmes['assistiu']);

filmes.personagens = ['Wolverine','Deadpool','Tocha humana']

console.log(filmes.elenco[0],'=',filmes.personagens[0]);
console.log(filmes.elenco[1],'=',filmes.personagens[1]);
console.log(filmes.elenco[2],'=',filmes.personagens[2]);


filmes.elenco.splice(0,1,'xuxa') // fiz 2 só para fixar
filmes.elenco[0] = 'xuxa1' // só para fixar
console.log(filmes.elenco);

console.log(filmes);
   