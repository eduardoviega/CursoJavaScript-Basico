// ================ 1° (Variáveis): ================ //
console.log("1° (Variáveis):");
let ano = 2022;
let mes = 5;
let dia = 23;
console.log(dia+'/'+mes+'/'+ano+'\n'+ano+'\n'+mes+'\n'+dia+'\n\n ');


// ================ 2° (Tipos primitivos): ================ //
console.log("2° (Tipos primitivos):");
let nome = 'Rafael';         // String literal
let sobrenome = undefined;   // Undefined
let idade = 25;              // Number literal
let estaAprovado = true;     // Boolean
let corSelecionado = null    // Redefinir um valor
console.log(nome+'\n'+sobrenome+'\n'+idade+'\n'+estaAprovado+'\n'+corSelecionado+'\n\n ');


// ================ 3° (Objetos): ================ //
console.log("3° (Objetos):");
let nome2 = 'Rafael';
let idade2 = 25;
let estaAprovado2 = true;
let sobrenome2 = undefined;

let pessoa = {
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de souza'
};
console.log(pessoa);
console.log('\n ');


// ================ 4° (Arrays): ================ //
console.log("4° (Arrays):");
let familia = [true,45,'jhonatan',17];
console.log(familia.length+'\n'+familia[0]+'\n\n ');
let nomeDoColega = [];


// ================ 5° (Funções): ================ //
console.log("5° (Funções):");
let corSite = "azul";
function resetaCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("verde","claro");
console.log(corSite+'\n\n ');


// ================ 6° (Tipos de Funções): ================ //
console.log("6° (Tipos de Funções):");
// Realiza uma ação, sem retornar nada
function dizerNome(){
    console.log('jhonatan');
}
dizerNome();

// Faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor){
    return valor*2;
}
//console.log(Multiplicar Por Dois(5));
let resultado = MultiplicarPorDois(5);
console.log(resultado+'\n\n ');


// ================ 7° (Operadores aritméticos): ================ //
console.log("7° (Operadores aritméticos):");
let salario = 100;
console.log(salario+salario);
console.log(salario-salario);
console.log(salario*salario);
console.log(salario/salario);
console.log(5**5);

let idade3 = 18;
console.log(idade3++ +'\n'+ idade3 +'\n'+ ++idade3 +'\n\n ');


// ================ 8° (Operadores de atribuição): ================ //
console.log("8° (Operadores de atribuição):");
let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
valorTecladoGamer += valorTecladoGamer;
// valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;
console.log(valorTecladoGamer+'\n\n ');
valorTecladoGamer -= valorTecladoGamer;



// ================ 9° (Operadores de igualdade): ================ //
console.log("9° (Operadores de igualdade):");
// Igualdade estrita
console.log( 1 === 1);
console.log('1'=== 1);

// Igualdade solta
console.log( 1 == 1);
console.log('1'== 1);
console.log('\n\n ');


// ================ 10° (Operador ternário): ================ //
console.log("10° (Operador ternário):");
// Tem um cliente,100 premium,comum
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo+'\n\n ');


// ================ 11° (Operadores lógicos): ================ //
console.log("11° (Operadores lógicos):");
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;

// Operador Lógico E (&&)
// Retorna TRUE se os dois operandos forem true
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log('Pode aplicar(&&):',podeAplicar);

// Operador Lógico OU (||)
// Retornar true se um dos operandos forem true
podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log('Pode aplicar(||):',podeAplicar);

// Operador Lógico NOT(!)
let candidatoRecusado =! podeAplicar;
console.log('Candidato recusado(!):',candidatoRecusado+'\n\n ');


// ================ 12° (Operadores booleanos): ================ //
console.log("12° (Operadores booleanos):");
// False:
//  undefined
//  null
//  ''
//  0
//  false
//  NaN - not a number

//  Truthy
let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil+'\n\n ');



// ================ 13° Mini-Projeto(Trocando valores de variáveis): ================ //
console.log("13° Mini-Projeto(Trocando valores de variáveis):");
let a = 'vermelho';
let b = 'azul';
let c = a;
a = b;
b = c;

console.log(a);
console.log(b+'\n\n ');



// ================ 14° (IF... ELSE...): ================ //
console.log("14° (IF... ELSE...):");
// Se a hora estiver entre 06:00 até 12:00: Bom dia!
// Se estiver entre 12:00 até 18:00: Boa tarde!
// Caso contrário: Boa noite!
let hora = 22;
if(hora > 6 && hora < 12){
    console.log("Bom dia\n\n ");
}
else if(hora > 12 && hora < 18){
    console.log("Boa tarde\n\n ");
}
else{
    console.log("Boa noite\n\n ");
}



// ================ 15° (SWITCH... CASE...): ================ //
console.log("15° (SWITCH... CASE...):");
let permissao = 'comum'; // comum,gerente,diretor
switch(permissao){
    case'comum':
    console.log('usuário comum\n\n ');
    break;
    
    case'gerente':
    console.log('usuário gerente\n\n ');
    break;
    
    case'diretor':
    console.log('usuário diretor\n\n ');
    break;
    
    default:
    console.log('Usuário não reconhecido!\n\n ');
}



// ================ 16° (LOOPS de repetição) ================ //
console.log("16° (LOOPS de repetição):");
// // // // // FOR:
for(let i = 1; i <= 5; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
for(let i = 5; i >= 1; i--){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// // // // // WHILE LOOP:
let j = 5;
while(j >= 1){
    if(j % 2 !== 0){
        console.log(j);
    }
    j--;
}

// // // // // DO...WHILE:
let k = 0;
do{
    k++;
    console.log('digitando!',k);
}while(k < 10)

// // // // // FOR-IN:
const pessoa2 = {
    nome: 'Jhonatan',
    idade: 25
};
for(let chave in pessoa){
    console.log(chave, pessoa['nome']);
}
const cores2 = ['Vermelho','Azul','Verde'];
for(let indice in cores2){
    console.log(indice, cores2[indice])
}

// // // // // FOR-OF:
const cores3 = ['Vermelho','Azul','Verde'];
for(let cor of cores3){
    console.log(cor);
}
console.log('\n ');


// ================ 17° Mini-Projeto(Máximo entre dois valores) ================ //
console.log("17° Mini-Projeto(Máximo entre dois valores):");
// Escreva uma função que usa 2 números e retorna o maior entre eles
let valorMaior = max(12,14);
console.log(valorMaior+'\n\n ');

function max(numero1,numero2){
    // return numero1 > numero2 ? numero1: numero2;
    if(numero1 > numero2)
    return numero1;
    return numero2;
}


// ================ 18° Mini-Projeto(FizzBuzz) ================ //
console.log("18° Mini-Projeto(FizzBuzz):");
// Divisível por 3 => Fizz 
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não divisível por 3 ou 5 => entrada
// Não é um número => 'Não é um número'

const resultado1 = fizzBuzz(15);
console.log(resultado1+'\n\n ');

function fizzBuzz(entrada){
    if(typeof entrada !== "number")
    return 'Não é um número';
    if(entrada % 3 == 0 && entrada % 5 == 0)
    return 'FizzBuzz';
    if(entrada % 3 == 0)
        return 'Fizz';
    if(entrada % 5 == 0)
        return 'Buzz';
    return entrada;
}


// ================ 19° Mini-Projeto(Medidor de velocidade) ================ //
console.log("19° Mini-Projeto(Medidor de velocidade):");
// Velocidade máxima de até 70
// A cada 5km acima do limite você ganha 1 ponto
// Math.Floor(): para arredondar valores
// Caso pontos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(140);
function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if(velocidade <= velocidadeMaxima)
    console.log('Ok\n\n ');
    else{
        console.log("Acima do limite de velocidade!");
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
        if(pontos >= 12)
        console.log("Carteira suspensa!\n\n ")
        else
        console.log(pontos+'\n\n ');
    }
}


// ================ 20° Mini-Projeto(Par ou Impar) ================ //
console.log("20° Mini-Projeto(Par ou Impar):");
// Receber uma quantidade de valores para avaliar
// função exibe se cada valorépar ou impar
exibirTipo(5);
function exibirTipo(limite){
    for(let i = 0; i < limite; i++){
        if(i % 2 == 0)
        console.log(i+': PAR');
        else
        console.log(i+': IMPAR');
    }
}
console.log('\n ');


// ================ 21° Mini-Projeto(Encontre o String) ================ //
console.log("21° Mini-Projeto(Encontre o String):");
// Criar um método para ler propriedades de um objetoe
// exibir somente as propriedades do tipo string que estão nesse objeto
const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem:'Thor'
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(let chave in obj){
        if(typeof obj[chave] === 'string')
            console.log(obj[chave]);
    }
}
console.log('\n ');


// ================ 22° Mini-Projeto(Multiplos de 3 e 5) ================ //
console.log("22° Mini-Projeto(Multiplos de 3 e 5):"); 
// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5
somar(15);
function somar(limite){
    let somatorio = 0;
    for(let i = 1; i <= limite; i++){
        if(i % 3 == 0 || i % 5 == 0)
            somatorio += i;
    }
    console.log(somatorio+'\n\n ');
}


// ================ 23° Mini-Projeto(Média nota escolar) ================ //
console.log("23° Mini-Projeto(Média nota escolar):");
// Obter a média a partir de um array
//  0 - 59: E  /  60 - 69: D  /  70 - 79: C  /  80 - 89: B  /  90 - 100: A
const array = [70,70,10];
console.log(mediaDoAluno(array)+'\n\n ');

function mediaDoAluno(notas){
    let media = 0;
    for(let nota of notas){
        media += nota;
    }
    media /= (notas.length);

    if(media <= 59) return 'E';
    if(media <= 69) return 'D';
    if(media <= 79) return 'C';    
    if(media <= 89) return 'B';    
    if(media <= 100) return 'A';
    return 'Inválido!'
}


// ================ 24° Mini-Projeto(Contador de asteríscos) ================ //
console.log("24° Mini-Projeto(Contador de asteríscos):");
// Criar uma função que exibe a quantidade
// que aquela linha possui
exibirAsteriscos(10);
function exibirAsteriscos(linhas){
    let padrao = ' ';
    for(let i = 1; i < linhas; i++){
        padrao += '*';
        console.log(padrao);
    }
//          OU... 
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = ' ';
        for(let i = 0; i <linha; i++){
              padrao += '*';
        }
        console.log(padrao);
    }
}
console.log('\n ');


// ================ 25° Mini-Projeto(Números Primos) ================ //
console.log("25° Mini-Projeto(Números Primos):");
// Criar função para mostrar os números primos
// Primos
// Compostos

// Ex: 10,11
// 10 - (1 ou por ele mesmo)
// 10 - 1,2,4,6,10
// 11 - 1,11
exibirNumerosPrimos(15);
function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if(NumeroPrimo(numero))
            console.log(numero);
    }
}
function NumeroPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0)
            return false;
    }
    return true;
}
console.log('\n ');


// ================ 26° (Factory functions) ================ //
console.log("26° (Factory functions):");
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}
const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);
console.log('\n ');

// ===================== < OU > ===================== //

// ================ 27° (Constructor functions) ================ //
console.log("27° (Constructor functions):");
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhotela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
          console.log("Fazendo Ligação ...");
   }
}
const celular = new Celular('ASUS',5.5,5000);
console.log(celular);
console.log('\n ');


// ================ 28° (Natureza dinâmica de objetos) ================ //
console.log("28° (Natureza dinâmica de objetos):");
const mouse = {
    cor: 'red',
    marcar: 'dazz'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('mudando DPI');
}
console.log(mouse);
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);
console.log('\n ');


// ================ 29° (Clonando objetos) ================ //
console.log("29° (Clonando objetos):");
const celular2 = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical:155,
        horizontal:75
    },
    ligar: function(){
        console.log("Fazendo Ligação ...");
    }
}

const novoObjeto = Object.assign({
    bateria:5000
},
celular2);
console.log(novoObjeto);

const objeto2 = {... celular2};
console.log(objeto2);
console.log('\n ');


// ================ 30° (Math) ================ //
console.log("30° (Math):");
// Número inteiro entre (max-1) e min:
// console.log(Math.random()*(max - min) + min);
console.log(Math.floor(Math.random()*(11 - 1) + 1));

// Retorna maior valor:
console.log(Math.max(5,6,9,3,7));

// Retorna menor valor:
console.log(Math.min(5,6,9,3,7));
console.log('\n ');


// ================ 31° (String) ================ //
console.log("31° (String):");
// Tipo primitivo
const mensagem = 'minha primeira mensagem';
// Tipo objeto
const outraMensagem = new String(' bom dia ');

console.log(typeof mensagem);
console.log(typeof outraMensagem);

console.log(outraMensagem.length);
console.log(outraMensagem[2]);

console.log(mensagem.includes('primeira'));
console.log(mensagem.includes('vermelho'));
console.log(mensagem.startsWith('verde'));
console.log(mensagem.endsWith('mensagem'));
console.log(mensagem.indexOf('primeira'));
console.log(mensagem.replace('minha','sua'));
 
console.log(outraMensagem.trim());

console.log(mensagem.split(' '));
console.log('\n ');


// ================ 32° (Template literal) ================ //
console.log("32° (Template literal):");
// Object {}
// Boolean true,false
// string '',""
// Template ``

const outra = `Oi isso é minha
'primeira' mensagem`;

const nome3 = 'Rafael';

const email =
`Olá ${nome3} ${2+2}

Obrigado por se increver no canal

Para acompanhar os vídeos não se esqueça de ativar o sino.

Obrigado,
Eduardo.`;
console.log(outra);
console.log(nome);
console.log(email+'\n\n ');

// ================ 33° (Date) ================ //
console.log("33° (Date):");
const Date1 = new Date();
const Date2 = new Date('June 01 2022 13:30');
const Date3 = new Date(2022,06,01,13,30);

Date3.setFullYear(2030);
console.log(Date1+'\n'+Date2+'\n'+Date3+'\n\n ');


// ================ 34° (Objeto Endereço) ================ //
console.log("34° (Objeto Endereço):");
// Criar um objeto que contem:
// Rua
// Cidade
// CEP
// exibirEndereco(endereco)

let endereco = {
    rua: 'A',
    cidade: 'B',
    cep: 'C'
};

function exibirEndereco(endereco){
    for(chave in endereco)
        console.log(chave, endereco[chave]);
}
exibirEndereco(endereco);
console.log('\n ');


// ================ 35° (Igualdade de Objetos) ================ //
console.log("35° (Igualdade de Objetos):");
function Endereco(rua, cidade,  cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
};

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');
const endereco3 = endereco1;

function saoIguais(endereco1, endereco2){
    return endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade && endereco1.cep === endereco2.cep;     
}

function temEnderecoMemoriaIguais(endereco1, endereco2) {
    //comparando se a referência do objeto aponta para o mesmo endereço de memória
    return endereco1 === endereco3;
}

console.log(saoIguais(endereco1, endereco2));
console.log(temEnderecoMemoriaIguais(endereco1, endereco3));
console.log('\n ');


// ================ 36° Mini-Projeto(Objeto postagem de blog) ================ //
console.log("36° Mini-Projeto(Objeto postagem de blog):");
// // Crie um objeto de postagem que contenha as seguintes propriedades
// // postagem
// /*
// titulo 
// mensagem
// autor
// visualizacoes
// comentarios
//     (autor,mensagem)
// estaAoVivo
// */

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios : [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo: true
}
console.log(postagem);
console.log('\n ');


// ================ 37° (Constructor function) ================ //
console.log("37° (Constructor function):");
function Postagem(titulo, mensagem, autor){
        this.titulo = titulo,
        this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem1 = new Postagem('a','b','c');
console.log(postagem1);
console.log('\n ');


// ================ 38° Mini-Projeto(Faixa de preço) ================ //
console.log("38° Mini-Projeto(Faixa de preço):");
// Crie um array de objetos de faixa de preço para que ele possa ser usado em um site

// ========= Primeira Opção ========= //
let faixas = [
    {tooltip: "até R$700", minimo:0, maximo:700},
    {tooltip: "de R$700 até R$1000", minimo:700, maximo:1000},
    {tooltip: "R$1000 ou mais", minimo:1000, maximo:99999}
]

// ====== Segunda Opção(Factory Function) ====== //
function criarFaixaPreco(tooltip, minimo, maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}
let faixas2 = [
    criarFaixaPreco('a',1,100),
    criarFaixaPreco('b',100,1000),
    criarFaixaPreco('c',1000,10000)
]

// ========= Terceira Opção ========= //
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}
let faixas3 = [
    new FaixaPreco('d',10,20),
    new FaixaPreco('e',20,30),
    new FaixaPreco('f',30,40)
]

console.log(faixas);
console.log(faixas2);
console.log(faixas3);
console.log('\n ');


// ================ 39° (Introdução a Arrays) ================ //
console.log("39° (Introdução a Arrays):");
const numeros = [1,2,3];

//Inicio
numeros.unshift(0);
console.log(numeros);

//Meio
numeros.splice(1,0,'a'); //inserir, deletar, conteudo
console.log(numeros);

//Final
numeros.push(5);
console.log(numeros);
console.log('\n ');


// ================ 40° (Encontrando elementos do tipo primitivo) ================ //
console.log("40° (Encontrando elementos do tipo primitivo):");
const numeros1 = [1,2,3,1,4];
console.log(numeros1.indexOf(1));
console.log(numeros1.indexOf(5));
console.log(numeros1.indexOf(1) !== -1);
console.log(numeros1.includes(1));
console.log('\n ');


// ================ 41° (Encontrando elementos do tipo referência) ================ //
console.log("41° (Encontrando elementos do tipo referência):");
const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});
console.log(marca);
console.log('\n ');


// ================ 42° (Arrow function) ================ //
console.log("42° (Arrow function):");
const marca1 = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
    {id:3, nome:'c'}
]
// Mostra só o que tem o nome igual ao buscado
console.log(marca1.find((marca1) => marca1.nome === 'c'));
console.log('\n ');


// ================ 43° (Removendo elementos array) ================ //
console.log("43° (Removendo elementos array):");
const numeros2 = [1,2,3,4,5,6];
numeros2.push();
numeros2.unshift();
numeros2.splice();

//Final
const ultimo = numeros2.pop();
console.log(ultimo);
console.log(numeros2);

//Início
const primeiro = numeros2.shift();
console.log(primeiro);
console.log(numeros2);

//Meio
const meio = numeros2.splice(2,1);//
console.log(meio);
console.log(numeros2);
console.log('\n ');
