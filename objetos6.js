// exercicio 6

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // "juca", 3 , "SRD"
console.log(gato) // "Juba", 3 , "SRD"
console.log(tartaruga) // "jubo", 3, "SRD"

// B
// ele puxa as informaçoes do objeto Cachorro para o Gato, mas o nome muda para Juba e mantém a idade e a raca do objeto cachorro