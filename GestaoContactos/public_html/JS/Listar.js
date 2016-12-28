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
        link.href="styles/cornsilk.css";
    }else{
        if(cor.value == 'bisque'){
            link.href="styles/bisque.css";
        }else{
            if(cor.value == 'burlywood'){
                link.href="styles/burlywood.css";
            }else{
                if(cor.value == 'peachpuff'){
                    link.href="styles/peachpuff.css";
                }
            }
        }
    }
}

function guardarLocalStorage(){
    var s = JSON.stringify(Contactos);
    localStorage.setItem('contacto', s);              //guardar os albuns
}

function OrdenarContactos(a, b) {
    if(a.nome>b.nome){
         return 1;
    }
    if(a.nome<b.nome){
         return -1;
    }
    return 0;
}

function removerContacto(){
    
    
    
    //this.parentNode.remove();
    guardarLocalStorage();
}

function editarContacto(){
    //guardarLocalStorage(this.parentNode);
    //this.parentNode;
    //var a = Contactos.indexOf(this.parentElement.id);
    alert(this.parentElement);
}

function ListarContactos () {
        Contactos.sort(OrdenarContactos);
        
    for (var i=0; i<=Contactos.length-1;i++){
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
        var Outro=document.createElement("p");
        var Obs=document.createElement("p");
        var Grupo=document.createElement("p");
        var Fav=document.createElement("p");
        var Espaco=document.createElement("p");
        
        var nomet=document.createTextNode(Contactos[i].nome);
        var emailt=document.createTextNode(Contactos[i].email);
        var telefonet=document.createTextNode(Contactos[i].telefone);
        var tipot=document.createTextNode(Contactos[i].tipo);
        var DOBt=document.createTextNode(Contactos[i].DOB);
        var Facebookt=document.createTextNode(Contactos[i].Facebook);
        var Googlet=document.createTextNode(Contactos[i].Google);
        var LinkedInt=document.createTextNode(Contactos[i].LinkedIn);
        var Instagramt=document.createTextNode(Contactos[i].Instagram);
        var Outrot=document.createTextNode(Contactos[i].Outro);
        var Obst=document.createTextNode(Contactos[i].Obs);
        var Grupot=document.createTextNode(Contactos[i].Grupo);
        var Favt=document.createTextNode(Contactos[i].Fav);
        var Espacot=document.createTextNode("************************");
        
        nome.appendChild(nomet);
        email.appendChild(emailt);
        telefone.appendChild(telefonet);
        tipo.appendChild(tipot);
        DOB.appendChild(DOBt);
        Facebook.appendChild(Facebookt);
        Google.appendChild(Googlet);
        LinkedIn.appendChild(LinkedInt);
        Instagram.appendChild(Instagramt);
        Outro.appendChild(Outrot);
        Obs.appendChild(Obst);
        Grupo.appendChild(Grupot);
        Fav.appendChild(Favt);
        Espaco.appendChild(Espacot);
        
        artigo.appendChild(nome);
        artigo.appendChild(email);
        artigo.appendChild(telefone);
        artigo.appendChild(tipo);
        artigo.appendChild(DOB);
        artigo.appendChild(Facebook);
        artigo.appendChild(Google);
        artigo.appendChild(LinkedIn);
        artigo.appendChild(Instagram);
        artigo.appendChild(Outro);
        artigo.appendChild(Obs);
        artigo.appendChild(Grupo);
        artigo.appendChild(Fav);
        
        
        document.getElementById('Contactos').appendChild(artigo);
        
        var btnremove = document.createElement('button');
        btnremove.innerHTML = 'Remover';
        btnremove.addEventListener('click', removerContacto);
        artigo.appendChild(btnremove);
        
        var btnedita = document.createElement('button');
        btnedita.innerHTML = 'Editar';
        btnedita.addEventListener('click', editarContacto);
        artigo.appendChild(btnedita);
        
        
        
        artigo.appendChild(Espaco);
    }
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null){
        Contactos = JSON.parse(localStorage.contacto);
        ListarContactos();
    }else{
        var vazio=document.createTextNode("Não existem Contactos");
        var erro= document.getElementById("Erro");
        alert(erro);
        erro.appendChild(vazio);
    }
}

function init(){
    var color = document.getElementById('cor');
    color.addEventListener('change', alterar);
    AbrirLocalStorage();
}

document.addEventListener('DOMContentLoaded', init);