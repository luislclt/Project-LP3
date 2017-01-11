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
    return 0; // igual
}

function ObterIndice(array, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i].nome === value) {
            return i; // retorna posicao
        }
    }
    return -1; // nao encontrou value
}

function removerContacto(){
    var conf=confirm ("Tem a certeza que deseja remover?"); // usa confirm
    if(conf==true){
        var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
        var indice = ObterIndice(Contactos,x);
        if (indice > -1) {
            Contactos.splice(indice, 1);
            window.location.reload();
        }else{
            var MenssagemErro=document.createTextNode("Erro ao remover Contacto!");
            var Erro = document.getElementById("Erro");
            Erro.appendChild(MenssagemErro); // Escreve MenssagemErro no <div>
            console.log(Erro);
        }
    
        //this.parentNode.remove();
        guardarLocalStorage();
    }
    
}

function editarContacto(){
    //guardarLocalStorage(this.parentNode);
    //this.parentNode;
    //var a = Contactos.indexOf(this.parentElement.id);
    var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
    var indice = ObterIndice(Contactos,x);
    guardarLocalStorageContact(indice); // guarda indice a editar
    window.location.href="Editar.html";
}

function mostarContacto(){
    var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
    var indice = ObterIndice(Contactos,x);
    guardarLocalStorageContact(indice);
}

function AdicionarFavoritos() {
    
    var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
    var indice = ObterIndice(Contactos,x);
    var btnfavorito = document.createElement('input');
    if (Contactos[indice].Fav == "sim") {
        Contactos[indice].Fav = "nao";
        btnfavorito.src="Images/estrelaOff.png";
        //alert("Removido dos Favoritos com Sucesso!");
        console.log("Removido dos Favoritos com Sucesso!");
        window.location.reload();
    }else{
        Contactos[indice].Fav = "sim";
        btnfavorito.src="Images/estrelaOn.png";
        //alert("Adicionado aos Favoritos com Sucesso!");
        console.log("Adicionado aos Favoritos com Sucesso!");
        window.location.reload();
    }
        
    guardarLocalStorage();
}

function ListarContactos(){
    
    Contactos.sort(OrdenarContactos);
        
    for (var i=0; i<=Contactos.length-1; i++){
        
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
        var grupo=document.createElement("p");
        var amigos=document.createElement("p");
        var trabalho=document.createElement("p");
        var familia=document.createElement("p");
        var outroGrupo=document.createElement("p");
        var Fav=document.createElement("p");
        var Espaco=document.createElement("p");
        var btnfavorito = document.createElement('input');
        btnfavorito.type="image";
        btnfavorito.addEventListener('click', AdicionarFavoritos);
        var paragrafo=document.createElement("p");   
        
        nome.id=Contactos[i].nome;
        
        var nometext=document.createTextNode("Nome: " + Contactos[i].nome);
        if (Contactos[i].email == "") var emailtext=document.createTextNode(Contactos[i].email); else var emailtext=document.createTextNode("Email: " + Contactos[i].email);
        var telefonetext=document.createTextNode("Contacto: " + Contactos[i].telefone);
        if (Contactos[i].tipo == "") var tipotext=document.createTextNode(Contactos[i].tipo); else var tipotext=document.createTextNode("Tipo de Contacto: " + Contactos[i].tipo);
        if (Contactos[i].DOB == "") var DOBtext=document.createTextNode(Contactos[i].DOB); else var DOBtext=document.createTextNode("Data de Nascimento: " + Contactos[i].DOB);
        if (Contactos[i].Facebook == "") var Facebooktext=document.createTextNode(Contactos[i].Facebook); else var Facebooktext=document.createTextNode("Facebook: " + Contactos[i].Facebook);
        if (Contactos[i].Google == "") var Googletext=document.createTextNode(Contactos[i].Google); else var Googletext=document.createTextNode("Google+: " + Contactos[i].Google);
        if (Contactos[i].LinkedIn == "") var LinkedIntext=document.createTextNode(Contactos[i].LinkedIn); else var LinkedIntext=document.createTextNode("LinkedIn: " + Contactos[i].LinkedIn);
        if (Contactos[i].Instagram == "") var Instagramtext=document.createTextNode(Contactos[i].Instagram); else var Instagramtext=document.createTextNode("Instagram: " + Contactos[i].Instagram);
        if (Contactos[i].OutraRede == "") var OutraRedetext=document.createTextNode(Contactos[i].OutraRede); else var OutraRedetext=document.createTextNode("Outro: " + Contactos[i].OutraRede);
        if (Contactos[i].Obs == "") var Obstext=document.createTextNode(Contactos[i].Obs); else var Obstext=document.createTextNode("Observações: " + Contactos[i].Obs);
        
        if (Contactos[i].tipo == "P") var tipotext=document.createTextNode("Pessoal"); else if (Contactos[i].tipo == "W") var tipotext=document.createTextNode("Work"); else if (Contactos[i].tipo == "O") var tipotext=document.createTextNode("Other");
        
        if(Contactos[i].Amigos == "sim" && Contactos[i].Trabalho == "sim" || Contactos[i].Amigos == "sim" && Contactos[i].Familia == "sim" || Contactos[i].Amigos == "sim" && Contactos[i].OutroGrupo == "sim" || Contactos[i].Trabalho == "sim" && Contactos[i].Familia == "sim" || Contactos[i].Trabalho == "sim" && Contactos[i].OutroGrupo == "sim" || Contactos[i].Familia == "sim" && Contactos[i].OutroGrupo == "sim") var grupotext=document.createTextNode("Grupos: ");
        else if (Contactos[i].Amigos == "nao" && Contactos[i].Trabalho == "nao" && Contactos[i].Familia == "nao" && Contactos[i].OutroGrupo == "nao") var grupotext=document.createTextNode("");
        else var grupotext=document.createTextNode("Grupo: ");
        
        if (Contactos[i].Amigos == "sim") var Amigostext=document.createTextNode("Amigos"); else var Amigostext=document.createTextNode("");
        if (Contactos[i].Trabalho == "sim") var Trabalhotext=document.createTextNode("Trabalho"); else var Trabalhotext=document.createTextNode("");
        if (Contactos[i].Familia == "sim") var Familiatext=document.createTextNode("Familia"); else var Familiatext=document.createTextNode("");
        if (Contactos[i].OutroGrupo == "sim") var OutroGrupotext=document.createTextNode("Outro"); else var OutroGrupotext=document.createTextNode("");
        if(Contactos[i].Fav == "sim"){
            btnfavorito.src="Images/estrelaOn.png";
        }else{
            btnfavorito.src="Images/estrelaOff.png";
        }
        
        
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
        grupo.appendChild(grupotext);
        amigos.appendChild(Amigostext);
        trabalho.appendChild(Trabalhotext);
        familia.appendChild(Familiatext);
        outroGrupo.appendChild(OutroGrupotext);
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
        artigo.appendChild(grupo);
        artigo.appendChild(amigos);
        artigo.appendChild(trabalho);
        artigo.appendChild(familia);
        artigo.appendChild(outroGrupo);
        artigo.appendChild(btnfavorito);
        artigo.appendChild(paragrafo);
        
        
        document.getElementById('Contactos').appendChild(artigo);
        
        var btnremove = document.createElement('input');
        btnremove.type="image";
        btnremove.src="Images/remover.png";
        btnremove.width="68"; 
        btnremove.height="48";
        btnremove.addEventListener('click', removerContacto);
        artigo.appendChild(btnremove);
        
        var btnedita = document.createElement('input');
        btnedita.type="image";
        btnedita.src="Images/edit.png";
        btnedita.width="68"; 
        btnedita.height="48";
        btnedita.addEventListener('click', editarContacto);
        artigo.appendChild(btnedita);
        
        var btnmostrar = document.createElement('input');
        btnmostrar.type="image";
        btnmostrar.src="Images/mostrar.png";
        btnmostrar.width="68"; 
        btnmostrar.height="48";
        btnmostrar.addEventListener('click', mostarContacto);
        artigo.appendChild(btnmostrar);
        
    }
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null){
        Contactos = JSON.parse(localStorage.contacto);
        ListarContactos();
    }else{
        var MenssagemErro=document.createTextNode("Não existem Contactos");
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

function init(){
    AbrirLocalStorage();
    SelectedCorFundo();
    var color = document.getElementById('cor');
    color.addEventListener('change', Alterar);
}
document.addEventListener('DOMContentLoaded', init);