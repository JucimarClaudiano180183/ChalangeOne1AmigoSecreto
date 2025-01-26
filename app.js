// criando a variavel do tipo lista  para armazenar o nome

let amigos = [];


function pegarValor(){
    let amigo = document.getElementById('amigo').value;
    return amigo;
    
     

}


//atribuir ação para o botão adcionar

function adicionarAmigo() {


        if(!pegarValor()){
            alert('Digite um nome válido')
            
        }else{
            amigos.push(pegarValor());
            console.log(amigos);

        }
        
        limparCampo();
}

function limparCampo() {
    let campo = document.querySelector('input')
    campo.value = '';
    
}

adicionarAmigo();






