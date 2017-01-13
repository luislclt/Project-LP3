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

function VerificaCampos(inputpesquisa){ // verifica se os campos estao vazios
    //window.location.reload();
    //if(localStorage.InputCampo == null || localStorage.InputCampo == -1) inputpesquisa = document.getElementById('pesquisa'); // recebe o parametro do input Nome 
    
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
        
        //if(resultadonome === false) state1++;
    }else{
        if (validarCampoNumero(inputpesquisa)===true){
            AbrirLocalStorage();
            var resultadonumero = PesquisarNumero(inputpesquisa);
            if(resultadonumero === true){
                state++;
                console.log("state++ "+state);
            }
            //if(resultadonumero === false) state1++;
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

function ShowFilterList() {
    for (var i=0; i<Contactos.length; i++){
        
    }
}

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    //li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < Contactos.length; i++) {
        a = Contactos[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            Contactos[i].style.display = "";
        } else {
            Contactos[i].style.display = "none";
        }
    }
}

function mostarContacto(){
    var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
    var indice = ObterIndice(Contactos,x);
    guardarLocalStorageContact(indice);
    window.location.href="ListarContacto.html";
}

function ListarContacto(pos){
    //window.location.reload();
    var artigo=document.getElementById("contacto");
    var artigo1=document.createElement("article");
    
    var nome=document.createElement("p");
    var telefone=document.createElement("p");
    var pais1=document.createElement("p");
    var telefone1=document.createElement("p");
  /*var email=document.createElement("p");
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
    var Fav=document.createElement("p");*/
    var Espaco=document.createElement("p");
    
    nome.id=Contactos[pos].nome;
    
    var paist=document.createTextNode(Contactos[pos].pais);
    var nometext=document.createTextNode("Nome: " + Contactos[pos].nome);
    /*if (Contactos[pos].email == "") var emailtext=document.createTextNode(Contactos[pos].email); else emailtext=document.createTextNode("Email: " + Contactos[pos].email);*/
    
    var pais1t=document.createTextNode("País: " + Contactos[pos].pais1);
    var telefone1t=document.createTextNode("Contacto: " + Contactos[pos].telefone1);/*
    if (Contactos[pos].tipo == "") var tipotext=document.createTextNode(Contactos[pos].tipo); else tipotext=document.createTextNode("Tipo de Contacto: " + Contactos[pos].tipo);
    if (Contactos[pos].DOB == "") var DOBtext=document.createTextNode(Contactos[pos].DOB); else DOBtext=document.createTextNode("Data de Nascimento: " + Contactos[pos].DOB);
    if (Contactos[pos].Facebook == "") var Facebooktext=document.createTextNode(Contactos[pos].Facebook); else Facebooktext=document.createTextNode("Facebook: " + Contactos[pos].Facebook);
    if (Contactos[pos].Google == "") var Googletext=document.createTextNode(Contactos[pos].Google); else Googletext=document.createTextNode("Google+: " + Contactos[pos].Google);
    if (Contactos[pos].LinkedIn == "") var LinkedIntext=document.createTextNode(Contactos[pos].LinkedIn); else LinkedIntext=document.createTextNode("LinkedIn: " + Contactos[pos].LinkedIn);
    if (Contactos[pos].Instagram == "") var Instagramtext=document.createTextNode(Contactos[pos].Instagram); else Instagramtext=document.createTextNode("Instagram: " + Contactos[pos].Instagram);
    if (Contactos[pos].OutraRede == "") var OutraRedetext=document.createTextNode(Contactos[pos].OutraRede); else OutraRedetext=document.createTextNode("Outro: " + Contactos[pos].OutraRede);
    if (Contactos[pos].Obs == "") var Obstext=document.createTextNode(Contactos[pos].Obs); else Obstext=document.createTextNode("Observações: " + Contactos[pos].Obs);
    
    if (Contactos[pos].Amigos == "sim") var Amigostext=document.createTextNode("Grupo: Amigos"); else Amigostext=document.createTextNode("");
    if (Contactos[pos].Trabalho == "sim") var Trabalhotext=document.createTextNode("Grupo: Trabalho"); else Trabalhotext=document.createTextNode("");
    if (Contactos[pos].Familia == "sim") var Familiatext=document.createTextNode("Grupo: Familia"); else Familiatext=document.createTextNode("");
    if (Contactos[pos].OutroGrupo == "sim") var OutroGrupotext=document.createTextNode("Grupo: Outro"); else OutroGrupotext=document.createTextNode("");
    if (Contactos[pos].Fav == "sim"){
        var Favtext=document.createTextNode("Favorito");
    }else Favtext=document.createTextNode("");*/
    
    var Espacotext = document.createTextNode("************************");
    
    nome.appendChild(nometext);
    pais1.appendChild(pais1t);
    telefone1.appendChild(telefone1t);
  /*email.appendChild(emailtext);
    ;
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
    Fav.appendChild(Favtext);*/
    Espaco.appendChild(Espacotext);
    
    artigo1.appendChild(nome);
    artigo1.appendChild(pais1);
    artigo1.appendChild(telefone1);
 /* artigo1.appendChild(email);
    
    artigo1.appendChild(tipo);
    artigo1.appendChild(DOB);
    artigo1.appendChild(Facebook);
    artigo1.appendChild(Google);
    artigo1.appendChild(LinkedIn);
    artigo1.appendChild(Instagram);
    artigo1.appendChild(OutraRede);
    artigo1.appendChild(Obs);
    artigo1.appendChild(Amigos);
    artigo1.appendChild(Trabalho);
    artigo1.appendChild(Familia);
    artigo1.appendChild(OutroGrupo);
    artigo1.appendChild(Fav);
    artigo1.appendChild(Fav);*/
    artigo.appendChild(artigo1);
    
    localStorage.setItem('InputCampo', -1);
    //localStorage.InputCampo = -1;
    
    //document.getElementById('Apresentar').appendChild(artigo);
        
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
/*
function PesquisarNome(nome){
    Contactos.sort(OrdenarContactos);
    for (var i=0; i<=Contactos.length-1; i++){
        if (nome.value == Contactos[i].nome){
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
*/

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
    
    alert(state);
    //if(VerificaCampos != true) window.location.reload();
    
    //if(localStorage.InputCampo != null && localStorage.InputCampo != -1){
        
        //VerificaCampos(localStorage.InputCampo);
        
    //}

    
    var btnEnviar = document.getElementById('Enviar');
    btnEnviar.addEventListener('click', function(){
        var InputCampo = document.getElementById('pesquisa');
        //localStorage.InputCampo = InputCampo;
        localStorage.setItem('InputCampo', InputCampo.value);
        alert("local");
        
        //if(localStorage.InputCampo != null){ // && localStorage.InputCampo.value != -1
                //alert("if");
                //VerificaCampos(localStorage.InputCampo);
        //} // recebe o parametro do input Nome 
            if(state == 0 && InputCampo.value!=""){
            console.log("state == 0 : " +state);
            alert("if");
            if(localStorage.InputCampo != null && localStorage.InputCampo != -1){
                //var inputpesquisa = document.getElementById('pesquisa');
                alert("if");
                VerificaCampos(localStorage.InputCampo);
                state++;
            } // recebe o parametro do input Nome 
            
            //localStorage.setItem('InputCampo', document.getElementById('pesquisa'))
            }else if(state > 0){
                var parent=document.getElementById("contacto");
                var remove=document.getElementsByTagName('article');
                cont++;
                for(i=cont;i>1;i--){
                    parent.removeChild(remove[cont]);
                    cont--;
                }
                alert("else");
                console.log("state == 1 : " +state);
                VerificaCampos(localStorage.InputCampo);

                //var InputCampo = document.getElementById('pesquisa');
                //localStorage.setItem('InputCampo', InputCampo.value);



                //window.location.reload();
            }
        
    });
    
    //por causa dos states  tem qe ter 3 estados
    //2 tentativa do enviar  tipo   asd d epois maria   --> maria
    
    /*
    var campo = document.getElementById('pesquisa');
    campo.addEventListener('change', function(){
        if(state1 == 2){
            window.location.reload();
            state1 = 0;
        }
         
    });
    */
}

document.addEventListener('DOMContentLoaded', init);