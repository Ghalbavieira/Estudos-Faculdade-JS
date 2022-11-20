
function multi(n1, n2) {
    return n1 * n2;
    //console.log(multi(3, 3)); //imprimirá 9
}

console.log(multi(3, 3)); //imprimirá 9



// Arrow Functions

const multiplicacao2 = (n1, n2) => {
    return n1 * n2;
}
console.log(multiplicacao2(3, 2)); //imprimirá 6
    

const multiplicacao = (n1, n2) => n1 * n2;
console.log(multiplicacao(3, 5)); //imprimirá 15


// confira um comparativo onde o método JS map pode ser definido e utilizado com e sem arrow function:

/* Método JS map
Utilizado para aplicar uma função, recebida como parâmetro, nos elementos de um array, devolvendo ao final um novo array. */

var cores = [
    { id: 1, nome: 'Amarelo' },
    { id: 2, nome: 'Verde' },
    { id: 3, nome: 'Azul' },
    { id: 4, nome: 'Branco' },
    { id: 5, nome: 'Preto' }
    ];
    //Caso você queira extrair apenas os nomes do array 'cores'
    //Exemplo 1: utilizando um laço foreach
    //Criando um novo array para receber os nomes 

    var nomesCores = [];
    //Percorrendo o array cores e atribuindo ao novo array os nomes

    cores.forEach(function (cor) {
    nomesCores.push(cor.nome);
    });

    console.log(nomesCores); //imprimirá ["Amarelo", "Verde", "Azul", "Branco", "Preto"]
    //Exemplo 2: utilizando arrow function 

    const coresNomes = cores.map(cor => cor.nome);
    console.log(coresNomes); //imprimirá ["Amarelo", "Verde", "Azul", "Branco", "Preto"]