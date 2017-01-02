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

function ListarContacto (pos) {
    
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
    var Fav=document.createElement("img");
    
    nome.id=Contactos[pos].nome;
    
    var nomet=document.createTextNode(Contactos[pos].nome);
    var emailt=document.createTextNode(Contactos[pos].email);
    var telefonet=document.createTextNode(Contactos[pos].telefone);
    var tipot=document.createTextNode(Contactos[pos].tipo);
    var DOBt=document.createTextNode(Contactos[pos].DOB);
    var Facebookt=document.createTextNode(Contactos[pos].Facebook);
    var Googlet=document.createTextNode(Contactos[pos].Google);
    var LinkedInt=document.createTextNode(Contactos[pos].LinkedIn);
    var Instagramt=document.createTextNode(Contactos[pos].Instagram);
    var OutraRedet=document.createTextNode(Contactos[pos].OutraRede);
    var Obst=document.createTextNode(Contactos[pos].Obs);
    
    
    if (Contactos[pos].Amigos == "sim") var Amigost=document.createTextNode("Amigos"); else var Amigost=document.createTextNode("");
    if (Contactos[pos].Trabalho == "sim") var Trabalhot=document.createTextNode("Trabalho"); else var Trabalhot=document.createTextNode("");
    if (Contactos[pos].Familia == "sim") var Familiat=document.createTextNode("Familia"); else var Familiat=document.createTextNode("");
    if (Contactos[pos].OutroGrupo == "sim") var OutroGrupot=document.createTextNode("Outro"); else var OutroGrupot=document.createTextNode("");
    if (Contactos[pos].Fav == "sim"){
        Fav.src="Images/estrelaOn.png";
        
    }else Fav.src="Images/estrelaOff.png";
    
        
    nome.appendChild(nomet);
    email.appendChild(emailt);
    telefone.appendChild(telefonet);
    tipo.appendChild(tipot);
    DOB.appendChild(DOBt);
    Facebook.appendChild(Facebookt);
    Google.appendChild(Googlet);
    LinkedIn.appendChild(LinkedInt);
    Instagram.appendChild(Instagramt);
    OutraRede.appendChild(OutraRedet);
    Obs.appendChild(Obst);
    Amigos.appendChild(Amigost);
    Trabalho.appendChild(Trabalhot);
    Familia.appendChild(Familiat);
    OutroGrupo.appendChild(OutroGrupot);
    
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
    
    document.getElementById('Contacto').appendChild(artigo);
    
    console.log("Listado com Sucesso!");
    
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null){
        Contactos = JSON.parse(localStorage.contacto);
        //console.log("storage -- ok");
    }else{
        var MenssagemErro=document.createTextNode("Impossível Listar Contactos");
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
    
    var Contactos = JSON.parse(localStorage.contacto);
    if(localStorage.contacto!= null && Contactos.length > 0){
        
        AbrirLocalStorage();
        SelectedCorFundo();
        var color = document.getElementById('cor');
        color.addEventListener('change', Alterar);

        ListarContacto(Contactos.length-1);
        
    }else window.location.href="index.html";
    
}

document.addEventListener('DOMContentLoaded', init);