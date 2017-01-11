/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Contactos = [];
var CorFundo;

function Alterar(){
    var cor = document.getElementById('cor');
    //var link = document.getElementById('link');
    
    if (cor.value == 'cornsilk'){
        CorFundo ='cornsilk';
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFF8DC, #A0522D)";
        //link.href="styles/cornsilk.css";
        
    }else if(cor.value == 'bisque'){
        CorFundo ='bisque';
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFE4C4, #FFA54F)";
        //link.href="styles/bisque.css";
        
    }else if(cor.value == 'burlywood'){
        CorFundo ='burlywood';
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFD39B, #8B7355)";
        //link.href="styles/burlywood.css";
        
    }else if(cor.value == 'peachpuff'){
        CorFundo ='peachpuff';
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFDAB9, #D2691E)";
        //link.href="styles/peachpuff.css";
    }
    //guardarLocalStorage();
    localStorage.setItem('fundo', CorFundo);
}

function SelectedCorFundo(){
    var cor = document.getElementById('cor');
    var link = document.getElementById('link');
    
    if (CorFundo == 'cornsilk'){
        document.getElementById(CorFundo).selected="selected";
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFF8DC, #A0522D)";
        //link.href="styles/cornsilk.css";
        
    }else if(CorFundo == 'bisque'){
        document.getElementById(CorFundo).selected="selected";
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFE4C4, #FFA54F)";
        //link.href="styles/bisque.css";
        
    }else if(CorFundo == 'burlywood'){
        document.getElementById(CorFundo).selected="selected";
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFD39B, #8B7355)";
        //link.href="styles/burlywood.css";
        
    }else if(CorFundo == 'peachpuff'){
        document.getElementById(CorFundo).selected="selected";
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFDAB9, #D2691E)";
        //link.href="styles/peachpuff.css";
        
    }
}


function guardarLocalStorage(){
    var s = JSON.stringify(Contactos);
    localStorage.setItem('contacto', s); //guardar os albuns
}

function AdicionarContacto() {
    
    var nome = document.getElementById('Nome');
    var telefone1 = document.getElementById('Numero1');
    var telefone2 = document.getElementById('Numero2');
    var telefone3 = document.getElementById('Numero3');
    var telefone4 = document.getElementById('Numero4');
    var telefone5 = document.getElementById('Numero5');
    var aux=0;
    
    alert("AdicionarContacto -- ok");
    
    if (telefone2.value !== "" && telefone2.value === telefone1.value){
        console.log("Número igual ao de cima!");
        alert("Número igual ao de cima!");
        aux=1;
    }else{
        alert("telefone3!=");
        if (telefone3.value !== ""){
            if(telefone3.value === telefone2.value || telefone3.value === telefone1.value){
                console.log("Número igual ao de cima!");
                alert("Número igual ao de cima!");
                aux=1;
            }else{
                alert("telefone4!=");
                if (telefone4.value !== ""){
                    if (telefone4.value === telefone3.value || telefone4.value === telefone2.value || telefone4.value === telefone1.value){
                        console.log("Número igual ao de cima!");
                        alert("Número igual ao de cima!");
                        aux=1;
                    }else{
                        alert("telefone5!=");
                        if (telefone5.value !== ""){
                            if (telefone5.value === telefone4.value || telefone5.value === telefone3.value || telefone5.value === telefone2.value || telefone5.value === telefone1.value){
                                console.log("Número igual ao de cima!");
                                alert("Número igual ao de cima!");
                                aux=1;
                            }else{
                                for (var i=0; i<Contactos.length; i++){
                                    alert("1");
                                    if (telefone1.value === Contactos[i].telefone1 || telefone1.value === Contactos[i].telefone2 || telefone1.value === Contactos[i].telefone3 || telefone1.value === Contactos[i].telefone4 || telefone1.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }alert("2");
                                    if (telefone2.value === Contactos[i].telefone1 || telefone2.value === Contactos[i].telefone2 || telefone2.value === Contactos[i].telefone3 || telefone2.value === Contactos[i].telefone4 || telefone2.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }alert("3");
                                    if (telefone3.value === Contactos[i].telefone1 || telefone3.value === Contactos[i].telefone2 || telefone3.value === Contactos[i].telefone3 || telefone3.value === Contactos[i].telefone4 || telefone3.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }alert("4");
                                    if (telefone4.value === Contactos[i].telefone1 || telefone4.value === Contactos[i].telefone2 || telefone4.value === Contactos[i].telefone3 || telefone4.value === Contactos[i].telefone4 || telefone4.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }alert("5");
                                    if (telefone5.value === Contactos[i].telefone1 || telefone5.value === Contactos[i].telefone2 || telefone5.value === Contactos[i].telefone3 || telefone5.value === Contactos[i].telefone4 || telefone5.value === Contactos[i].telefone5){

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
                            }
                        }
                    }
                }
            }
        }
    }
    
    var facebook = document.getElementById('Facebook');
    var google = document.getElementById('Google');
    var linkedIn = document.getElementById('LinkedIn');
    var instagram = document.getElementById('Instagram');
    var outrarede = document.getElementById('OutraRede');
    
    if(facebook.value==="" && google.value==="" && linkedIn.value==="" && instagram.value==="" && outrarede.value===""){
        console.log("Tem de inserir uma rede social!");
        alert("Tem de inserir uma rede social!");
        aux=1;
    }
    
    var amigos = document.getElementById('Amigos');
    var trabalho = document.getElementById('Trabalho');
    var familia = document.getElementById('Familia');
    var outroGrupo = document.getElementById('OutroGrupo');
    
    if(amigos.checked===false && trabalho.checked===false && familia.checked===false && outroGrupo.checked===false){
        console.log("Tem de selecionar algum grupo!");
        alert("Tem de selecionar algum grupo!");
        aux=1;
    }
    
    if (aux == 0){
        
        var email = document.getElementById('Email');
        
        var pais1 = document.getElementById('Pais1');
        var pais2 = document.getElementById('Pais2');
        var pais3 = document.getElementById('Pais3');
        var pais4 = document.getElementById('Pais4');
        var pais5 = document.getElementById('Pais5');
        
        
        var tipo1 = document.getElementById('Tipo1');
        var tipo2 = document.getElementById('Tipo2');
        var tipo3 = document.getElementById('Tipo3');
        var tipo4 = document.getElementById('Tipo4');
        var tipo5 = document.getElementById('Tipo5');
        
        var DOB = document.getElementById('DOB');
        var obs = document.getElementById('Obs');
        var fav = document.getElementById('Fav');
        
        if (amigos.checked) amigos = "sim"; else amigos = "nao";
        if (trabalho.checked) trabalho = "sim"; else trabalho = "nao";
        if (familia.checked) familia = "sim"; else familia = "nao";
        if (outroGrupo.checked) outroGrupo = "sim"; else outroGrupo = "nao";
        if (fav.checked) fav = "sim"; else fav = "nao";
        
        Contactos.push({nome: nome.value, email: email.value, pais1: pais1.value, telefone1: telefone1.value, tipo1: tipo1.value, pais2: pais2.value, telefone2: telefone2.value, tipo2: tipo2.value, pais3: pais3.value, telefone3: telefone3.value, tipo3: tipo3.value, pais4: pais4.value, telefone4: telefone4.value, tipo4: tipo4.value, pais5: pais5.value, telefone5: telefone5.value, tipo5: tipo5.value, DOB: DOB.value, Facebook: facebook.value, Google: google.value, LinkedIn: linkedIn.value, Instagram: instagram.value, OutraRede: outrarede.value, Obs: obs.value, Amigos: amigos, Trabalho: trabalho, Familia: familia, OutroGrupo: outroGrupo, Fav: fav});
        alert("outra window -- ok");
        
        var indice=Contactos.length-1;
        
        localStorage.setItem('indice',indice);
        window.location.href="ListarContacto.html";
            
        guardarLocalStorage();
        
    }else{
        var MenssagemErro=document.createTextNode("Impossível adicionar Contactos");
        var Erro = document.getElementById("Erro");
        Erro.appendChild(MenssagemErro); // Escreve MenssagemErro no <div>
        console.log(Erro);
        aux==0;
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
    var inputNumero = document.getElementById('Numero1'); // recebe o parametro do input Numero
    var inputEmail = document.getElementById('Email'); // recebe o parametro do input Email
   
    
    if (validarCampoNome(inputNome)===true && validarCampoEmail(inputEmail)===true && validarCampoNumero(inputNumero)===true){
        alert("valida -- ok");
        AbrirLocalStorage();
        AdicionarContacto();
    }
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
    
    var btnEstrela = document.getElementById("estrela");
    btnEstrela.addEventListener('click', MudaEstrela);
    
}

document.addEventListener('DOMContentLoaded', init);