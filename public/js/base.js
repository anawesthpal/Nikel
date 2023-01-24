const nome = "Ana Westhpal";
let nome2 = "";
let pessoaDefault = {
    nome: "Ana Westhpal",
    idade: "34",
    trabalho:"Publicitária"
}

let nomes = ["Ana Weshtpal", "Paula Padilha", "Manoela Machado",];
let pessoas = [
    {
        nome: "Ana Westhpal",
        idade: "34",
        trabalho:"Publicitária"
    },
    {
        nome: "Manoela Machado",
        idade: "39",
        trabalho:"Engª Ambiental"
    }
];

function alterarNome () {
    nome2 = "Manoela Machado";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoas);
}

function imprimirPessoas() {
    console.log("--------------IMPRIMIR PESSOAS--------------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro" 
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Manoela Machado",
//  idade: "39",
//  trabalho:"Engª Ambiental"
//});



//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome ();