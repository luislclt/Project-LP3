/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Contactos = [];
var CorFundo;

var ContactosVistos = [];
var posicao;
//var flag=0;

function Alterar(){
    var cor = document.getElementById('cor');
    
    if (cor.value == 'cornsilk'){
        CorFundo ='cornsilk';
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFF8DC, #A0522D)";
        
    }else if(cor.value == 'bisque'){
        CorFundo ='bisque';
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFE4C4, #FFA54F)";
        
    }else if(cor.value == 'burlywood'){
        CorFundo ='burlywood';
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFD39B, #8B7355)";
        
    }else if(cor.value == 'peachpuff'){
        CorFundo ='peachpuff';
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFDAB9, #D2691E)";
    }
    localStorage.setItem('fundo', CorFundo);
}

function SelectedCorFundo(){
    var cor = document.getElementById('cor');
    var link = document.getElementById('link');
    
    if (CorFundo == 'cornsilk'){
        document.getElementById(CorFundo).selected="selected";
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFF8DC, #A0522D)";
        
    }else if(CorFundo == 'bisque'){
        document.getElementById(CorFundo).selected="selected";
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFE4C4, #FFA54F)";
        
    }else if(CorFundo == 'burlywood'){
        document.getElementById(CorFundo).selected="selected";
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFD39B, #8B7355)";
        
    }else if(CorFundo == 'peachpuff'){
        document.getElementById(CorFundo).selected="selected";
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFDAB9, #D2691E)";
    }
}

function guardarLocalStorage(){
    var s = JSON.stringify(Contactos);
    localStorage.setItem('contacto', s); //guardar
}

function guardarLocalStorageContact(indice){
    var s = JSON.stringify(Contactos);
    localStorage.setItem('contacto', s); //guardar
    localStorage.setItem('indice',indice);
}

function OrdenarContactos(a, b) {
    if(a.nome>b.nome){
         return 1; // a maior
    }
    if(a.nome<b.nome){
         return -1; // b maior
    }
    return 0; // iguais
}

function ObterIndice(array, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i].nome === value) {
            return i; // retorna posicao value
        }
    }
    return -1; // nao encontrou value
}

function removerContacto(){
    var conf=confirm ("Tem a certeza que deseja remover?");
    if(conf==true){
        var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
        var indice = ObterIndice(Contactos,x);
        if (indice > -1) {
            Contactos.splice(indice, 1);
            window.location.reload();
        }else{
            console.log("Erro ao remover!!");
        }
        guardarLocalStorage();
    }
}

function editarContacto(){
    var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
    var indice = ObterIndice(Contactos,x);
    guardarLocalStorageContact(indice);
    state=0;
    localStorage.setItem('state', state);
    window.location.href="Editar.html";
}

function AdicionarFavoritos() {
    var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
    var indice = ObterIndice(Contactos,x);
    if (Contactos[indice].Fav == "sim") {
        Contactos[indice].Fav = "nao";
        console.log("Removido dos Favoritos com Sucesso!");
        window.location.reload();
    }else{
        Contactos[indice].Fav = "sim";
        console.log("Adicionado aos Favoritos com Sucesso!");
        window.location.reload();
    }
    guardarLocalStorage();
}

function validarCampoNumero(inputNumero){ // verifica se o Campo Nome esta vazio
    k=inputNumero.replace(/"/g, '');
    if (inputNumero === "" || isNaN(k)==true){ // Esta Vazio
        return false; // Nao Aceita esta Campo
    }else{
        return true; // Aceitou este Campo
    }
}

function validarCampoNome(inputNome){ // verifica se o Campo Nome esta vazio
    if (inputNome === ""){ // Esta Vazio
        return false; // Nao Aceita esta Campo
    }else{
        return true; // Aceitou este Campo
    }
}

function VerificaCampos(inputpesquisa){ // verifica se os campos estao vazios
    //window.location.reload();
    //if(localStorage.InputCampo == null || localStorage.InputCampo == -1) inputpesquisa = document.getElementById('pesquisa'); // recebe o parametro do input Nome 
    
    if (validarCampoNumero(inputpesquisa)===true){
            AbrirLocalStorage();
            Contactos.sort(OrdenarContactos);
            for (var i=0; i<=Contactos.length-1; i++){
                var resultadonumero = PesquisarNumero(inputpesquisa,i);
            }
            if(resultadonumero === true){
                state++;
                console.log("state++ "+state);
            }
            //if(resultadonumero === false) state1++;
        }else{
            if (validarCampoNome(inputpesquisa)===true){
            AbrirLocalStorage();
            cont=0;
            Contactos.sort(OrdenarContactos);
            for (var i=0; i<=Contactos.length-1; i++){

                var resultadonome = PesquisarNome(inputpesquisa, i);
            }
            if(resultadonome === true){

                state++;
                console.log("state++ "+state);
            }
        }    
    }
    if(resultadonome===false && resultadonumero=== false){
        alert("Este Contacto não existe!");
        state1++;
        console.log("state message Error: "+state);
        
    } 
}
/*
function ListarContacto(pos){
    window.location.href="ListarContacto.html";
}
*/

function mostarContacto(){
    var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
    var indice = ObterIndice(Contactos,x);
    guardarLocalStorageContact(indice);
    window.location.href="ListarContacto.html";
}

function ListarContacto(pos){
    var artigo=document.getElementById("contacto");
    var artigo1=document.createElement("article");
    
    var nome=document.createElement("p");
    var telefone=document.createElement("p");
    var pais1=document.createElement("p");
    var telefone1=document.createElement("p");
    var Espaco=document.createElement("p");
    
    nome.id=Contactos[pos].nome;
    
    var paist=document.createTextNode(Contactos[pos].pais);
    var nometext=document.createTextNode("Nome: " + Contactos[pos].nome);
    var pais1t=document.createTextNode("País: " + Contactos[pos].pais1);
    var telefone1t=document.createTextNode("Contacto: " + Contactos[pos].telefone1);
    var Espacotext = document.createTextNode("************************");
    
    nome.appendChild(nometext);
    pais1.appendChild(pais1t);
    telefone1.appendChild(telefone1t);
    Espaco.appendChild(Espacotext);
    
    artigo1.appendChild(nome);
    artigo1.appendChild(pais1);
    artigo1.appendChild(telefone1);
    
    artigo.appendChild(artigo1);
    
    localStorage.setItem('InputCampo', -1);
        
    var btnremove = document.createElement('input');
        btnremove.type="image";
        btnremove.src="Images/remover.png";
        btnremove.width="88"; 
        btnremove.height="48";
        btnremove.addEventListener('click', removerContacto);
        artigo1.appendChild(btnremove);
        
    var btnedita = document.createElement('input');
        btnedita.type="image";
        btnedita.src="Images/edit.png";
        btnedita.width="88"; 
        btnedita.height="48";
        btnedita.addEventListener('click', editarContacto);
        artigo.appendChild(btnedita);
    artigo1.appendChild(btnedita);
    
    var btnmostrar = document.createElement('input');
        btnmostrar.type="image";
        btnmostrar.src="Images/mostrar.png";
        btnmostrar.width="88"; 
        btnmostrar.height="48";
        btnmostrar.addEventListener('click', mostarContacto);
        artigo1.appendChild(btnmostrar);

}

function PesquisarNome(nome,i){
    var re = new RegExp(nome);
    var name=JSON.stringify(Contactos[i].nome);
    if (name.match(re)==nome){
        //flag = 1;
        ContactosVistos.push({nome: Contactos[i].nome});
        ListarContacto(i);
        cont++;
        return true;
    }
    return false;
}


function PesquisarNumero(numero,i){
    Contactos.sort(OrdenarContactos);
    var number1=JSON.stringify(Contactos[i].telefone1);
    var number2=JSON.stringify(Contactos[i].telefone2);
    var number3=JSON.stringify(Contactos[i].telefone3);
    var number4=JSON.stringify(Contactos[i].telefone4);
    var number5=JSON.stringify(Contactos[i].telefone5);
    var re = new RegExp(numero);
        if (number1.match(re) == numero || number2.match(re) == numero || number3.match(re) == numero || number4.match(re) == numero || number5.match(re) == numero){
            
            ListarContacto(i);
            cont++;
            return true;
        }
    return false;
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null ){
        Contactos = JSON.parse(localStorage.contacto);
    }else{
        var vazio=document.createTextNode("Não existem Contactos");
        var erro= document.getElementById("Erro");
        alert(erro);
        erro.appendChild(vazio);
    }
    if(localStorage.fundo != null){
        CorFundo = localStorage.fundo;
    }else{
        CorFundo = 'cornsilk'; //DEFAULT
    }
    
}

function init(){
    state = 0;
    cont=0;
    AbrirLocalStorage();
    SelectedCorFundo();
    var color = document.getElementById('cor');
    color.addEventListener('change', Alterar);
    
    var btnEnviar = document.getElementById('Enviar');
    
    btnEnviar.addEventListener('click', function(){
    var InputCampo = document.getElementById('pesquisa');
    localStorage.setItem('InputCampo', InputCampo.value);
    alert("local");
 
    if(state == 0 && InputCampo.value!=""){
        console.log("state == 0 : " +state);
        if(localStorage.InputCampo != null && localStorage.InputCampo != -1){
            //var inputpesquisa = document.getElementById('pesquisa');
            alert("if");
            VerificaCampos(localStorage.InputCampo);
            state++;
        } // recebe o parametro do input Nome 
    }else if(state > 0){
        var parent=document.getElementById("contacto");
        var remove=document.getElementsByTagName('article');
        cont++;
        for(i=cont;i>1;i--){
            parent.removeChild(remove[cont]);
            cont--;
        }
        console.log("state == 1 : " +state);
        VerificaCampos(localStorage.InputCampo);
        }
    });
}

document.addEventListener('DOMContentLoaded', init);