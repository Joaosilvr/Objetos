const pessoa = {
    nome: 'Maria',
    idade: 20,
    generoMusical:'rock'
}

   
function minhaFuncao(p) {
    
    const novaPessoa = {
        ...p,
        comidasFav: ['strogonoff', 'churrasco','pão de alho'],
        melhorAmigo: {
            nome:'joão',
            idade: 20,
        }
    }
    console.log(`O nome da pessoa é ${novaPessoa.nome}, e suas comidas preferidas são ${novaPessoa.comidasFav[0]},${novaPessoa.comidasFav[1]} e ${novaPessoa.comidasFav[2]} e seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`);

}


minhaFuncao(pessoa)















