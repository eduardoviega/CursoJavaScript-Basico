/*
-> Você precisa pegar o nome da pessoa que está tentando entrar naquele lugar.

-> Você precisa perguntar a ele(a) quem a convidou para essa festa.

-> Você precisa de um botão na tela que quando clicar irá acessar
o seu código javascript para verificar se a pessoa que está 
tentando entrar foi de fato convidada por quem ela diz que a 
convidou. 

(Ex: nome da pessoa Jhonatan, quem convidou para a festa?
Cristian. Clico no botão, o javascript pega as informações que
eu preenchi na tela e verifica no meu código javascript se aquela
pessoa está dentro está dentro da lista de convidados do Cristian,
o meu nome está lá.)

-> Caso meu nome esteja, eu vou alterar a descrição de "Pesquisando"
para "Você pode Entrar!". 

-> Caso meu nome não esteja, eu vou alterar a descrição de 
"Pesquisando" para "Você não pode Entrar!".
*/

function VerificarEntrada(){
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Eduardo', 'Jonas', 'Carol', 'Jhonatan'];
    
    NomeConvidado = document.getElementById('nome').value;
    QuemConvidou = document.getElementById('convidadoPor').value;   

    if(ConvidadosCristian.includes(NomeConvidado) && QuemConvidou == 'Cristian'){
        document.getElementById('permissaoDeEntrada').innerText = 'Você pode entrar!'
    }
    else{
        document.getElementById('permissaoDeEntrada').innerText = 'Você não pode entrar!'
    }
}
