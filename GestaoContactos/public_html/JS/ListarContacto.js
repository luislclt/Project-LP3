/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Contactos = [];

function alterar(){
    var cor = document.getElementById('cor');
    var link = document.getElementById('link');
    if (cor.value == 'cornsilk'){
        fundo='cornsilk';
        link.href="styles/cornsilk.css";
    }else{
        if(cor.value == 'bisque'){
            fundo='bisque';
            link.href="styles/bisque.css";
        }else{
            if(cor.value == 'burlywood'){
                fundo='burlywood';
                link.href="styles/burlywood.css";
            }else{
                if(cor.value == 'peachpuff'){
                    fundo='peachpuff';
                    link.href="styles/peachpuff.css";
                }
            }
        }
    }
    guardarLocalStorage();
}


function CorFundo(){
    var cor = document.getElementById('cor');
    var link = document.getElementById('link');
    if (fundo == 'cornsilk'){
       document.getElementById(fundo).selected="selected";
        link.href="styles/cornsilk.css";
    }else{
        if(fundo == 'bisque'){
           document.getElementById(fundo).selected="selected";
           link.href="styles/bisque.css";
        }else{
            if(fundo == 'burlywood'){
                document.getElementById(fundo).selected="selected";
                link.href="styles/burlywood.css";
            }else{
                if(fundo == 'peachpuff'){
                    document.getElementById(fundo).selected="selected";
                    link.href="styles/peachpuff.css";
                }
            }
        }
    }
}


function Voltar(){
    window.location.href="index.html";
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
        var Fav=document.createElement("p");
        
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
        
        alert("Grupos: --");
    
    
        if (Contactos[pos].Amigos == "sim") var Amigost=document.createTextNode("Amigos"); else var Amigost=document.createTextNode("");
        if (Contactos[pos].Trabalho == "sim") var Trabalhot=document.createTextNode("Trabalho"); else var Trabalhot=document.createTextNode("");
        if (Contactos[pos].Familia == "sim") var Familiat=document.createTextNode("Familia"); else var Familiat=document.createTextNode("");
        if (Contactos[pos].OutroGrupo == "sim") var OutroGrupot=document.createTextNode("Outro"); else var OutroGrupot=document.createTextNode("");
        if (Contactos[pos].Fav == "sim") var Favt=document.createTextNode("Favorito"); else var Favt=document.createTextNode("");
        
         alert("Depois Grupos: --");
        
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
        Fav.appendChild(Favt);
        
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
        
        var btnVoltar = document.getElementById('Voltar');
        btnVoltar.addEventListener('click', Voltar);
    
    alert("Adicionado com Sucesso!");
    
}


function AbrirLocalStorage() {
    if (localStorage.contacto != null){
        Contactos = JSON.parse(localStorage.contacto);
        fundo = localStorage.fundo;
        alert("storage -- ok");
    }else{
        var vazio=document.createTextNode("Impossível adicionar Contactos");
        var erro= document.getElementById("Erro");
        alert(erro);
        erro.appendChild(vazio);
    }
}

function init(){
    AbrirLocalStorage();
    CorFundo();
    var color = document.getElementById('cor');
    color.addEventListener('change', alterar);
    
    ListarContacto(Contactos.length-1);
    
}

document.addEventListener('DOMContentLoaded', init);