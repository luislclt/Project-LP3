/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Contactos = [];
var CorFundo;

var posicao;

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
    var conf=confirm ("Tem a certeza que deseja remover?"); // confirm
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
    window.location.href="Editar.html";
}

function AdicionarFavoritos() {
    
    var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
    var indice = ObterIndice(Contactos,x);
    if (Contactos[indice].Fav == "sim") {
        Contactos[indice].Fav = "nao";
        console.log("Removido dos Favoritos com Sucesso!");
        window.location.reload();
        //ListarContacto(indice);
    }else{
        Contactos[indice].Fav = "sim";
        console.log("Adicionado aos Favoritos com Sucesso!");
        window.location.reload();
        
    }
    guardarLocalStorage();
}

function validarCampoNumero(inputNumero){ // verifica se o Campo Nome esta vazio
    if (inputNumero.value === ""){ // Esta Vazio
        return false; // Nao Aceita esta Campo
    }else{
        return true; // Aceitou este Campo
    }
}

function validarCampoNome(inputNome){ // verifica se o Campo Nome esta vazio
    if (inputNome.value === ""){ // Esta Vazio
        return false; // Nao Aceita esta Campo
    }else{
        return true; // Aceitou este Campo
    }
}
/*
function VerificaCampos(){ // verifica se os campos estao vazios
    var inputNome = document.getElementById('Nome'); // recebe o parametro do input Nome 
    var inputNumero = document.getElementById('Numero'); // recebe o parametro do input Numero
    
    if (validarCampoNome(inputNome)===true && validarCampoNumero(inputNumero)===false){
        AbrirLocalStorage();
        PesquisarNome(inputNome);
    }else{
        if (validarCampoNome(inputNome)===false && validarCampoNumero(inputNumero)===true){
            AbrirLocalStorage();
            PesquisarNumero(inputNumero);
        }
    }
}
*/
function VerificaCampos(){ // verifica se os campos estao vazios
    
    var inputpesquisa = document.getElementById('pesquisa'); // recebe o parametro do input Nome 
    
    if (validarCampoNome(inputpesquisa)===true){
        AbrirLocalStorage();
        var resultadonome = PesquisarNome(inputpesquisa);
    }else{
    if (validarCampoNumero(inputpesquisa)===true){
        AbrirLocalStorage();
        var resultadonumero = PesquisarNumero(inputpesquisa);
    }
    }
    if(resultadonome===false && resultadonumero=== false) alert("Este Contacto não existe!");
    
}

function ListarContacto(pos){
    
    
    var artigo=document.createElement("article");
        
    var nome=document.createElement("p");
    var email=document.createElement("p");
    var telefone=document.createElement("p");
    var tipo=document.createElement("p");
    var DOB=document.createElement("p");
    var Facebook=document.createElement("p");
    var Google=document.createElement("p");
    var LinkedIn=document.createElement("p");
    var Instagram=document.createElement("p");
    var OutraRede=document.createElement("p");
    var Obs=document.createElement("p");
    var Amigos=document.createElement("p");
    var Trabalho=document.createElement("p");
    var Familia=document.createElement("p");
    var OutroGrupo=document.createElement("p");
    var Fav=document.createElement("p");
    var Espaco=document.createElement("p");
    
    nome.id=Contactos[pos].nome;
        
    var nometext=document.createTextNode("Nome: " + Contactos[pos].nome);
    if (Contactos[pos].email == "") var emailtext=document.createTextNode(Contactos[pos].email); else var emailtext=document.createTextNode("Email: " + Contactos[pos].email);
    
    var telefonetext=document.createTextNode("Contacto: " + Contactos[pos].telefone);
    if (Contactos[pos].tipo == "") var tipotext=document.createTextNode(Contactos[pos].tipo); else var tipotext=document.createTextNode("Tipo de Contacto: " + Contactos[pos].tipo);
    if (Contactos[pos].DOB == "") var DOBtext=document.createTextNode(Contactos[pos].DOB); else var DOBtext=document.createTextNode("Data de Nascimento: " + Contactos[pos].DOB);
    if (Contactos[pos].Facebook == "") var Facebooktext=document.createTextNode(Contactos[pos].Facebook); else var Facebooktext=document.createTextNode("Facebook: " + Contactos[pos].Facebook);
    if (Contactos[pos].Google == "") var Googletext=document.createTextNode(Contactos[pos].Google); else var Googletext=document.createTextNode("Google+: " + Contactos[pos].Google);
    if (Contactos[pos].LinkedIn == "") var LinkedIntext=document.createTextNode(Contactos[pos].LinkedIn); else var LinkedIntext=document.createTextNode("LinkedIn: " + Contactos[pos].LinkedIn);
    if (Contactos[pos].Instagram == "") var Instagramtext=document.createTextNode(Contactos[pos].Instagram); else var Instagramtext=document.createTextNode("Instagram: " + Contactos[pos].Instagram);
    if (Contactos[pos].OutraRede == "") var OutraRedetext=document.createTextNode(Contactos[pos].OutraRede); else var OutraRedetext=document.createTextNode("Outro: " + Contactos[pos].OutraRede);
    if (Contactos[pos].Obs == "") var Obstext=document.createTextNode(Contactos[pos].Obs); else var Obstext=document.createTextNode("Observações: " + Contactos[pos].Obs);
    
    if (Contactos[pos].Amigos == "sim") var Amigostext=document.createTextNode("Grupo: Amigos"); else var Amigostext=document.createTextNode("");
    if (Contactos[pos].Trabalho == "sim") var Trabalhotext=document.createTextNode("Grupo: Trabalho"); else var Trabalhotext=document.createTextNode("");
    if (Contactos[pos].Familia == "sim") var Familiatext=document.createTextNode("Grupo: Familia"); else var Familiatext=document.createTextNode("");
    if (Contactos[pos].OutroGrupo == "sim") var OutroGrupotext=document.createTextNode("Grupo: Outro"); else var OutroGrupotext=document.createTextNode("");
    if (Contactos[pos].Fav == "sim"){
        var Favtext=document.createTextNode("Favorito");
    }else var Favtext=document.createTextNode("");
    
    var Espacotext = document.createTextNode("************************");
    
    nome.appendChild(nometext);
    email.appendChild(emailtext);
    telefone.appendChild(telefonetext);
    tipo.appendChild(tipotext);
    DOB.appendChild(DOBtext);
    Facebook.appendChild(Facebooktext);
    Google.appendChild(Googletext);
    LinkedIn.appendChild(LinkedIntext);
    Instagram.appendChild(Instagramtext);
    OutraRede.appendChild(OutraRedetext);
    Obs.appendChild(Obstext);
    Amigos.appendChild(Amigostext);
    Trabalho.appendChild(Trabalhotext);
    Familia.appendChild(Familiatext);
    OutroGrupo.appendChild(OutroGrupotext);
    Fav.appendChild(Favtext);
    Espaco.appendChild(Espacotext);
    
    artigo.appendChild(nome);
    artigo.appendChild(email);
    artigo.appendChild(telefone);
    artigo.appendChild(tipo);
    artigo.appendChild(DOB);
    artigo.appendChild(Facebook);
    artigo.appendChild(Google);
    artigo.appendChild(LinkedIn);
    artigo.appendChild(Instagram);
    artigo.appendChild(OutraRede);
    artigo.appendChild(Obs);
    artigo.appendChild(Amigos);
    artigo.appendChild(Trabalho);
    artigo.appendChild(Familia);
    artigo.appendChild(OutroGrupo);
    artigo.appendChild(Fav);
    
    document.getElementById('Apresentar').appendChild(artigo);
        
    var btnremove = document.createElement('button');
    btnremove.innerHTML = 'Remover';
    btnremove.addEventListener('click', removerContacto);
    artigo.appendChild(btnremove);
        
    var btnedita = document.createElement('button');
    btnedita.innerHTML = 'Editar';
    btnedita.addEventListener('click', editarContacto);
    artigo.appendChild(btnedita);
        
    var btnfavorito = document.createElement('button');
    btnfavorito.innerHTML = 'Favorito';
    btnfavorito.addEventListener('click', AdicionarFavoritos);
    artigo.appendChild(btnfavorito);
    
    

}

function PesquisarNome(nome){
    
    Contactos.sort(OrdenarContactos);
    for (var i=0; i<=Contactos.length-1; i++){
        if (nome.value == Contactos[i].nome){
            //flag = 1;
            
            if(i == posicao) return false;
            else{
                posicao=i;
            ListarContacto(i);
            return true;
        }
        }
    }
    return false;
 
}

/*
(adicionar no inicio do codigo: var ContactosVistos=[];) 

function PesquisarNome(nome){
    
    Contactos.sort(OrdenarContactos);
    for (var i=0; i<=Contactos.length-1; i++){
        if (Contactos[i].nome.search(nome.value)!=-1){
            //flag = 1;
            var flagNomeListado=0;
            for(var j=0; j<=ContactosVistos.length-1; j++){
                if(ContactosVistos[j].nome == Contactos[i].nome){
                    flagNomeListado=1;
                }
            }
            if(flagNomeListado==1) return false;
            else{
            ContactosVistos.push({nome: Contactos[i].nome});
            ListarContacto(i);
            
            }
            //return true;
        }
    }
    return false;
 
}
 */


function PesquisarNumero(numero){
    
    Contactos.sort(OrdenarContactos);
    for (var i=0; i<=Contactos.length-1; i++){
        if (numero.value == Contactos[i].telefone){
            
            if(i == posicao) return false;
            else{
                posicao=i;
            ListarContacto(i);
            return true;
        }
        }
    }
    return false;
 
}


function Voltar(){
    window.location.href="index.html";
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null){
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
    AbrirLocalStorage();
    SelectedCorFundo();
    var color = document.getElementById('cor');
    color.addEventListener('change', Alterar);
    
    var btnVoltar = document.getElementById('Voltar');
    btnVoltar.addEventListener('click', Voltar);
    
    var btnEnviar = document.getElementById('Enviar');
    btnEnviar.addEventListener('click', VerificaCampos);
    
}

document.addEventListener('DOMContentLoaded', init);