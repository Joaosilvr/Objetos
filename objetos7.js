// exercicios 8

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // "Caio", 23, True
console.log(minhaFuncao(pessoa, "altura")) // "Caio", 23, False

// Eu chutei que daria false pois nao continha backender, mas no console deu undefined, acredito que deu isso pois nao batia com o valor