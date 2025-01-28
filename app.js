// criando a variavel do tipo lista  para armazenar o nome

let amigos = [];


function pegarValor(){
    let amigo = document.getElementById('amigo').value;
    

    if(!amigo){
        alert('Digite um nome válido');
        
    }else{
        amigos.push(amigo);
        lerNomes();
        
       
            
    }

}


//atribuir ação para o botão adcionar

function adicionarAmigo() {

        pegarValor();
        limparCampo();     
        
}


function lerNomes() {
    
    listaAmigos = document.getElementById('listaAmigos');
    for(let i = 0; i < amigos.length; i++){
      var nome = amigos[i]
        
    }
    listaAmigos.innerHTML += nome += ' - ' ;
}



function sortearAmigo() {
   
    let numeroSorteado = parseInt(Math.random() * amigos.length + 0 );
    if(amigos.length == 0){
        alert('Digite nomes para ser sorteados')
    }else{
    for(let i = 0; i < amigos.length; i++){
    var nomeEscolhido = amigos[numeroSorteado]
        
    }
    let nomeSorteado = document.getElementById('resultado');
    nomeSorteado.innerHTML += nomeEscolhido  ;
    }
    limparCampoResultado();
}


function limparCampo() {
    let campo = document.querySelector('input')
    campo.value = '';
    
}


function limparCampoResultado( ) {
    let campoResultado = document.getElementById('resultado')
    campoResultado.value = ' ';
    
}







   
    






