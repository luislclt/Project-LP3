/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Contactos = [];
var CorFundo;

function Alterar(){
    var cor = document.getElementById('cor');
    
    if (cor.value == 'cornsilk'){
        CorFundo ='cornsilk';
        document.body.style.backgroundColor = 'cornsilk';
        
    }else if(cor.value == 'bisque'){
        CorFundo ='bisque';
        document.body.style.backgroundColor = 'bisque';
        
    }else if(cor.value == 'burlywood'){
        CorFundo ='burlywood';
        document.body.style.backgroundColor = 'burlywood';
        
    }else if(cor.value == 'peachpuff'){
        CorFundo ='peachpuff';
        document.body.style.backgroundColor = 'peachpuff';
    }
    localStorage.setItem('fundo', CorFundo);
}


function SelectedCorFundo(){
    var cor = document.getElementById('cor');
    
    if (CorFundo == 'cornsilk'){
        document.getElementById(CorFundo).selected="selected";
        document.body.style.backgroundColor = 'cornsilk';
        
    }else if(CorFundo == 'bisque'){
        document.getElementById(CorFundo).selected="selected";
        document.body.style.backgroundColor = 'bisque';
        
    }else if(CorFundo == 'burlywood'){
        document.getElementById(CorFundo).selected="selected";
        document.body.style.backgroundColor = 'burlywood';
        
    }else if(CorFundo == 'peachpuff'){
        document.getElementById(CorFundo).selected="selected";
        document.body.style.backgroundColor = 'peachpuff';
        
    }
}


function guardarLocalStorage(){
    var s = JSON.stringify(Contactos);
    localStorage.setItem('contacto', s); //guardar os albuns
}

function AdicionarContacto() {
    
    var nome = document.getElementById('Nome');
    var telefone = document.getElementById('Numero');
    var aux=0;
    
    alert("AdicionarContacto -- ok");
    
    for (var i=0; i<Contactos.length; i++){
        if (telefone.value === Contactos[i].numero){
            console.log("Número já existe!");
            alert("Número já existe!");
            aux=1;
        }
        if (nome.value === Contactos[i].nome){
            console.log("Nome já existe!");
            alert("Nome já existe!");
            aux=1;
        }
    }
    
    if (aux == 0){
        
        var email = document.getElementById('Email');
        var pais = document.getElementById('Pais');
        var tipo = document.getElementById('Tipo');
        var DOB = document.getElementById('DOB');
        var facebook = document.getElementById('Facebook');
        var google = document.getElementById('Google');
        var linkedIn = document.getElementById('LinkedIn');
        var instagram = document.getElementById('Instagram');
        var outrarede = document.getElementById('OutraRede');
        var obs = document.getElementById('Obs');
        var amigos = document.getElementById('Amigos');
        var trabalho = document.getElementById('Trabalho');
        var familia = document.getElementById('Familia');
        var outroGrupo = document.getElementById('OutroGrupo');
        var fav = document.getElementById('Fav');
        
        if (amigos.checked) amigos = "sim"; else amigos = "nao";
        if (trabalho.checked) trabalho = "sim"; else trabalho = "nao";
        if (familia.checked) familia = "sim"; else familia = "nao";
        if (outroGrupo.checked) outroGrupo = "sim"; else outroGrupo = "nao";
        if (fav.checked) fav = "sim"; else fav = "nao";
        
        Contactos.push({nome: nome.value, email: email.value, pais: pais.value, telefone: telefone.value, tipo: tipo.value, DOB: DOB.value, Facebook: facebook.value, Google: google.value, LinkedIn: linkedIn.value, Instagram: instagram.value, OutraRede: outrarede.value, Obs: obs.value, Amigos: amigos, Trabalho: trabalho, Familia: familia, OutroGrupo: outroGrupo, Fav: fav});
        alert("outra window -- ok");
        
        window.location.href="ListarContacto.html";
        //ListarContacto(Contactos.length-1);
            
        guardarLocalStorage();
        
    }else{
        var MenssagemErro=document.createTextNode("Impossível adicionar Contactos");
        var Erro = document.getElementById("Erro");
        Erro.appendChild(MenssagemErro); // Escreve MenssagemErro no <div>
        console.log(Erro);
    }
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null){
        Contactos = JSON.parse(localStorage.contacto);
        //fundo = localStorage.fundo;
        console.log("storage -- ok");
    }else{
        var MenssagemErro=document.createTextNode("Impossível adicionar Contactos");
        var Erro = document.getElementById("Erro");
        Erro.appendChild(MenssagemErro); // Escreve MenssagemErro no <div>
        console.log(Erro);
    }
    if(localStorage.fundo != null){
        CorFundo = localStorage.fundo;
    }else{
        CorFundo = 'cornsilk'; //DEFAULT
    }
}


function validarCampoNumero(inputNumero){ // verifica se o Campo Nome esta vazio
    if (inputNumero.value === ""){ // Esta Vazio
        inputNumero.className = "inputError"; //Span //campo vazio -- só de inputInvalido
        document.getElementById('inputNumeroInvalido').className = "inputMessageError"; // Mostra o Span Error
        return false; // Nao Aceita esta Campo
    }else{
        inputNumero.className = ""; // Default
        document.getElementById('inputNumeroInvalido').className = "inputMessageErrorHidden"; // Esconde a menssagem Erro
    }
    return true; // Aceitou este Campo
}

function validarCampoNome(inputNome){ // verifica se o Campo Nome esta vazio
    if (inputNome.value === ""){ // Esta Vazio
        inputNome.className = "inputError"; //Span //campo vazio -- só de inputInvalido
        document.getElementById('inputNomeInvalido').className = "inputMessageError"; // Mostra o Span Error
        return false; // Nao Aceita esta Campo
    }else{
        inputNome.className = ""; // Default
        document.getElementById('inputNomeInvalido').className = "inputMessageErrorHidden"; // Esconde a menssagem Erro
    }
    return true; // Aceitou este Campo
}

function validarCampoEmail(inputEmail) {
    usuario = inputEmail.value.substring(0, inputEmail.value.indexOf("@"));
    dominio = inputEmail.value.substring(inputEmail.value.indexOf("@")+ 1, inputEmail.value.length);
    if (inputEmail.value === ""){
        inputEmail.className = ""; // Default
        document.getElementById('inputEmailInvalido').className = "inputMessageErrorHidden"; // Esconde a menssagem Erro
        return true;
    } 
    else if ((usuario.length >=1) && (dominio.length >=3) && (usuario.search("@")==-1) && (dominio.search("@")==-1) && (usuario.search(" ")==-1) && (dominio.search(" ")==-1) && (dominio.search(".")!=-1) && (dominio.indexOf(".") >=1) && (dominio.lastIndexOf(".") < dominio.length - 1)){
        
        inputEmail.className = ""; // Default
        document.getElementById('inputEmailInvalido').className = "inputMessageErrorHidden"; // Esconde a menssagem Erro
        return true;
        
    }else{
        
        inputEmail.className = "inputError"; //Span //campo vazio -- só de inputInvalido
        document.getElementById('inputEmailInvalido').className = "inputMessageError"; // Mostra o Span Error
        return false;
    }
}

function VerificaCampos(){ // verifica se os campos estao vazios
    var flag = 0;
    var inputNome = document.getElementById('Nome'); // recebe o parametro do input Nome 
    var inputNumero = document.getElementById('Numero'); // recebe o parametro do input Numero
    var inputEmail = document.getElementById('Email'); // recebe o parametro do input Email
    
    /*while(flag == 0 || flag == 1 || flag == 2){
        alert("2 - flag=0");
        if (validarCampoNome(inputNome)===true) flag++, alert("2 - flag=1"); // flag = 1
        
        else if (validarCampoNumero(inputNumero)===true) flag++, alert("2 - flag=2"); // flag = 2
        
        else if (validarCampoNumero(inputEmail)===true) flag++, alert("2 - flag=3"); // flag = 3
        else flag = -1; // sai do ciclo mas sem sucesso
        
    }*/
    
    if (validarCampoNome(inputNome)===true && validarCampoEmail(inputEmail)===true && validarCampoNumero(inputNumero)===true){
    //if(flag == 2){   
        alert("valida -- ok");
        AbrirLocalStorage();
        AdicionarContacto();
    }
}

function Voltar(){
    
    window.location.href="index.html";
}

function MudaEstrela(){
    var fav = document.getElementById('Fav');
    if (fav.checked) document.getElementById("estrela").src="Images/estrelaOff.png"; else document.getElementById("estrela").src="Images/estrelaOn.png";
}

function init(){
    
    AbrirLocalStorage();
    SelectedCorFundo();
    var color = document.getElementById('cor');
    color.addEventListener('change', Alterar);
    
    var btnEnviar = document.getElementById('Enviar');
    btnEnviar.addEventListener('click', VerificaCampos);
    
    var btnVoltar = document.getElementById('Voltar');
    btnVoltar.addEventListener('click', Voltar);
    
    var btnEstrela = document.getElementById("estrela");
    btnEstrela.addEventListener('click', MudaEstrela);
    
}

document.addEventListener('DOMContentLoaded', init);