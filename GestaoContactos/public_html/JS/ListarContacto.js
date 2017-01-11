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
    var pais1=document.createElement("p");
    var pais2=document.createElement("p");
    var pais3=document.createElement("p");
    var pais4=document.createElement("p");
    var pais5=document.createElement("p");
    var telefone1=document.createElement("p");
    var telefone2=document.createElement("p");
    var telefone3=document.createElement("p");
    var telefone4=document.createElement("p");
    var telefone5=document.createElement("p");
    var tipo1=document.createElement("p");
    var tipo2=document.createElement("p");
    var tipo3=document.createElement("p");
    var tipo4=document.createElement("p");
    var tipo5=document.createElement("p");
    var DOB=document.createElement("p");
    var Facebook=document.createElement("p");
    var Google=document.createElement("p");
    var LinkedIn=document.createElement("p");
    var Instagram=document.createElement("p");
    var OutraRede=document.createElement("p");
    var Obs=document.createElement("p");
    var grupo=document.createElement("p");
    var Amigos=document.createElement("p");
    var Trabalho=document.createElement("p");
    var Familia=document.createElement("p");
    var OutroGrupo=document.createElement("p");
    var Fav=document.createElement("img");
    
    nome.id=Contactos[pos].nome;
    
    var nomet=document.createTextNode(Contactos[pos].nome);
    var emailt=document.createTextNode(Contactos[pos].email);
    var paist=document.createTextNode(Contactos[pos].pais);
   
    var DOBt=document.createTextNode(Contactos[pos].DOB);
    var Facebookt=document.createTextNode(Contactos[pos].Facebook);
    var Googlet=document.createTextNode(Contactos[pos].Google);
    var LinkedInt=document.createTextNode(Contactos[pos].LinkedIn);
    var Instagramt=document.createTextNode(Contactos[pos].Instagram);
    var OutraRedet=document.createTextNode(Contactos[pos].OutraRede);
    var Obst=document.createTextNode(Contactos[pos].Obs);
    
    var nomet=document.createTextNode("Nome: " + Contactos[pos].nome);
    if (Contactos[pos].email == "") var emailt=document.createTextNode(Contactos[pos].email); else var emailt=document.createTextNode("Email: " + Contactos[pos].email);
    var paist=document.createTextNode("Pais: " + Contactos[pos].pais);
    
    var pais1t=document.createTextNode("País: " + Contactos[pos].pais1);
    if(Contactos[pos].telefone2 !== "") var pais2t=document.createTextNode("País: " + Contactos[pos].pais2); else var pais2t=document.createTextNode("");
    if(Contactos[pos].telefone3 !== "") var pais3t=document.createTextNode("País: " + Contactos[pos].pais3); else var pais3t=document.createTextNode("");
    if(Contactos[pos].telefone4 !== "") var pais4t=document.createTextNode("País: " + Contactos[pos].pais4); else var pais4t=document.createTextNode("");
    if(Contactos[pos].telefone5 !== "") var pais5t=document.createTextNode("País: " + Contactos[pos].pais5); else var pais5t=document.createTextNode("");
   
    var telefone1t=document.createTextNode("Contacto1: " + Contactos[pos].telefone1);
    if(Contactos[pos].telefone2 !== "") var telefone2t=document.createTextNode("Contacto2: " + Contactos[pos].telefone2); else var telefone2t=document.createTextNode("");
    if(Contactos[pos].telefone3 !== "") var telefone3t=document.createTextNode("Contacto3: " + Contactos[pos].telefone3); else var telefone3t=document.createTextNode("");
    if(Contactos[pos].telefone4 !== "") var telefone4t=document.createTextNode("Contacto4: " + Contactos[pos].telefone4); else var telefone4t=document.createTextNode("");
    if(Contactos[pos].telefone5 !== "") var telefone5t=document.createTextNode("Contacto5: " + Contactos[pos].telefone5); else var telefone5t=document.createTextNode("");
    
    if (Contactos[pos].tipo1 == "P") var tipo1t=document.createTextNode("Tipo: Pessoal"); else if (Contactos[pos].tipo1 == "W") var tipo1t=document.createTextNode("Tipo: Work"); else if (Contactos[pos].tipo1 == "O") var tipo1t=document.createTextNode("Tipo: Other");
    if (Contactos[pos].telefone2 != ""){
        if (Contactos[pos].tipo2 == "P"){
            var tipo2t=document.createTextNode("Tipo: Pessoal");
        }else{
            if (Contactos[pos].tipo2 == "W"){
                var tipo2t=document.createTextNode("Tipo: Work");
            }else{
                if (Contactos[pos].tipo2 == "O"){
                    var tipo2t=document.createTextNode("Tipo: Other");
                }
            }
        }
    }else{
        var tipo2t=document.createTextNode("");
    }
    
    
    if (Contactos[pos].telefone3 != ""){
        if (Contactos[pos].tipo3 == "P"){
            var tipo3t=document.createTextNode("Tipo: Pessoal");
        }else{
            if (Contactos[pos].tipo3 == "W"){
                var tipo3t=document.createTextNode("Tipo: Work");
            }else{
                if (Contactos[pos].tipo3 == "O"){
                    var tipo3t=document.createTextNode("Tipo: Other");
                }
            }
        }
    }else{
        var tipo3t=document.createTextNode("");
    }
    
    
    if (Contactos[pos].telefone4 != ""){
        if (Contactos[pos].tipo4 == "P"){
            var tipo4t=document.createTextNode("Tipo: Pessoal");
        }else{
            if (Contactos[pos].tipo4 == "W"){
                var tipo4t=document.createTextNode("Tipo: Work");
            }else{
                if (Contactos[pos].tipo4 == "O"){
                    var tipo4t=document.createTextNode("Tipo: Other");
                }
            }
        }
    }else{
        var tipo4t=document.createTextNode("");
    }
    
    
    if (Contactos[pos].telefone5 != ""){
        if (Contactos[pos].tipo5 == "P"){
            var tipo5t=document.createTextNode("Tipo: Pessoal");
        }else{
            if (Contactos[pos].tipo5 == "W"){
                var tipo5t=document.createTextNode("Tipo: Work");
            }else{
                if (Contactos[pos].tipo5 == "O"){
                    var tipo5t=document.createTextNode("Tipo: Other");
                }
            }
        }
    }else{
        var tipo5t=document.createTextNode("");
    }
    
    if (Contactos[pos].DOB == "") var DOBt=document.createTextNode(Contactos[pos].DOB); else var DOBt=document.createTextNode("Data de Nascimento: " + Contactos[pos].DOB);
    if (Contactos[pos].Facebook == "") var Facebookt=document.createTextNode(Contactos[pos].Facebook); else var Facebookt=document.createTextNode("Facebook: " + Contactos[pos].Facebook);
    if (Contactos[pos].Google == "") var Googlet=document.createTextNode(Contactos[pos].Google); else var Googlet=document.createTextNode("Google+: " + Contactos[pos].Google);
    if (Contactos[pos].LinkedIn == "") var LinkedInt=document.createTextNode(Contactos[pos].LinkedIn); else var LinkedInt=document.createTextNode("LinkedIn: " + Contactos[pos].LinkedIn);
    if (Contactos[pos].Instagram == "") var Instagramt=document.createTextNode(Contactos[pos].Instagram); else var Instagramt=document.createTextNode("Instagram: " + Contactos[pos].Instagram);
    if (Contactos[pos].OutraRede == "") var OutraRedet=document.createTextNode(Contactos[pos].OutraRede); else var OutraRedet=document.createTextNode("Outro: " + Contactos[pos].OutraRede);
    if (Contactos[pos].Obs == "") var Obst=document.createTextNode(Contactos[pos].Obs); else var Obst=document.createTextNode("Observações: " + Contactos[pos].Obs);
    
    
    
    
    
    if(Contactos[pos].Amigos == "sim" && Contactos[pos].Trabalho == "sim" || Contactos[pos].Amigos == "sim" && Contactos[pos].Familia == "sim" || Contactos[pos].Amigos == "sim" && Contactos[pos].OutroGrupo == "sim" || Contactos[pos].Trabalho == "sim" && Contactos[pos].Familia == "sim" || Contactos[pos].Trabalho == "sim" && Contactos[pos].OutroGrupo == "sim" || Contactos[pos].Familia == "sim" && Contactos[pos].OutroGrupo == "sim") var grupot=document.createTextNode("Grupos: ");
    else if (Contactos[pos].Amigos == "nao" && Contactos[pos].Trabalho == "nao" && Contactos[pos].Familia == "nao" && Contactos[pos].OutroGrupo == "nao") var grupot=document.createTextNode("");
    else var grupot=document.createTextNode("Grupo: ");
    
    if (Contactos[pos].Amigos == "sim") var Amigost=document.createTextNode("Amigos"); else var Amigost=document.createTextNode("");
    if (Contactos[pos].Trabalho == "sim") var Trabalhot=document.createTextNode("Trabalho"); else var Trabalhot=document.createTextNode("");
    if (Contactos[pos].Familia == "sim") var Familiat=document.createTextNode("Familia"); else var Familiat=document.createTextNode("");
    if (Contactos[pos].OutroGrupo == "sim") var OutroGrupot=document.createTextNode("Outro"); else var OutroGrupot=document.createTextNode("");
    if (Contactos[pos].Fav == "sim"){
        Fav.src="Images/estrelaOn.png";
        
    }else Fav.src="Images/estrelaOff.png";
    
        
    nome.appendChild(nomet);
    email.appendChild(emailt);
    pais1.appendChild(pais1t);
    telefone1.appendChild(telefone1t);
    tipo1.appendChild(tipo1t);
    pais2.appendChild(pais2t);
    telefone2.appendChild(telefone2t);
    tipo2.appendChild(tipo2t);
    pais3.appendChild(pais3t);
    telefone3.appendChild(telefone3t);
    tipo3.appendChild(tipo3t);
    pais4.appendChild(pais4t);
    telefone4.appendChild(telefone4t);
    tipo4.appendChild(tipo4t);
    pais5.appendChild(pais5t);
    telefone5.appendChild(telefone5t);
    tipo5.appendChild(tipo5t);
    DOB.appendChild(DOBt);
    Facebook.appendChild(Facebookt);
    Google.appendChild(Googlet);
    LinkedIn.appendChild(LinkedInt);
    Instagram.appendChild(Instagramt);
    OutraRede.appendChild(OutraRedet);
    Obs.appendChild(Obst);
    grupo.appendChild(grupot);
    Amigos.appendChild(Amigost);
    Trabalho.appendChild(Trabalhot);
    Familia.appendChild(Familiat);
    OutroGrupo.appendChild(OutroGrupot);
    
    artigo.appendChild(nome);
    artigo.appendChild(email);
    artigo.appendChild(pais1);
    artigo.appendChild(telefone1);
    artigo.appendChild(tipo1);
    artigo.appendChild(pais2);
    artigo.appendChild(telefone2);
    artigo.appendChild(tipo2);
    artigo.appendChild(pais3);
    artigo.appendChild(telefone3);
    artigo.appendChild(tipo3);
    artigo.appendChild(pais4);
    artigo.appendChild(telefone4);
    artigo.appendChild(tipo4);
    artigo.appendChild(pais5);
    artigo.appendChild(telefone5);
    artigo.appendChild(tipo5);
    artigo.appendChild(DOB);
    artigo.appendChild(Facebook);
    artigo.appendChild(Google);
    artigo.appendChild(LinkedIn);
    artigo.appendChild(Instagram);
    artigo.appendChild(OutraRede);
    artigo.appendChild(Obs);
    artigo.appendChild(grupo);
    artigo.appendChild(Amigos);
    artigo.appendChild(Trabalho);
    artigo.appendChild(Familia);
    artigo.appendChild(OutroGrupo);
    artigo.appendChild(Fav);
    
    document.getElementById('Contacto').appendChild(artigo);
    
    console.log("Listado com Sucesso!");
    localStorage.setItem('indice', -1);
    
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null){
        Contactos = JSON.parse(localStorage.contacto);
        indice=localStorage.indice;
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
    if(localStorage.contacto!= null && localStorage.contacto != "[]" && localStorage.indice != -1 ){ //&& Contactos.length > 0
        
        AbrirLocalStorage();
        SelectedCorFundo();
        var color = document.getElementById('cor');
        color.addEventListener('change', Alterar);

        ListarContacto(indice);
        
        
    }else window.location.href="index.html";
    
}

document.addEventListener('DOMContentLoaded', init);