let carrinho = []

const fruta1 = {
    nome: 'maçã',
    disponibilidade: true
}
const fruta2 = {
    nome: 'uva',
    disponibilidade: true
}
const fruta3 = {
    nome: 'melancia',
    disponibilidade: true
}

function recebaFruta(fruta) {
    carrinho.push(fruta)
}
recebaFruta(fruta1)
recebaFruta(fruta2)
recebaFruta(fruta3)
 
console.log(carrinho);
