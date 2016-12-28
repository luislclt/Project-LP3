/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Contactos = [];

var Grupos = [];

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

function ListarContacto () {
    
    alert(Contactos[Contactos.length-1].nome);
    alert(Contactos[Contactos.length-1].email);
    alert(Contactos[Contactos.length-1].pais);
    alert(Contactos[Contactos.length-1].telefone);
    alert(Contactos[Contactos.length-1].tipo);
    alert(Contactos[Contactos.length-1].DOB);
    alert(Contactos[Contactos.length-1].Facebook);
    alert(Contactos[Contactos.length-1].Google);
    alert(Contactos[Contactos.length-1].LinkedIn);
    alert(Contactos[Contactos.length-1].Instagram);
    alert(Contactos[Contactos.length-1].Outro);
    alert(Contactos[Contactos.length-1].Obs);
    alert(Contactos[Contactos.length-1].Grupo);
    alert(Contactos[Contactos.length-1].Fav);
        
    guardarLocalStorage();
}

function isFavorito () {
    var i;
    var checkedValue = null; 
    var inputElements = document.getElementById('Fav');
        if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
      }
}

function AdicionarContacto() {
    
        alert("2");
        alert(Contactos[0].nome);
        var nome = document.getElementById('Nome');
        var email = document.getElementById('Email');
        var pais = document.getElementById('Pais');
        var telefone = document.getElementById('Numero');
        var tipo = document.getElementById('Tipo');
        var DOB = document.getElementById('DOB');
        var facebook = document.getElementById('Facebook');
        var google = document.getElementById('Google');
        var linkedIn = document.getElementById('LinkedIn');
        var instagram = document.getElementById('Instagram');
        var outro = document.getElementById('Outro');
        var obs = document.getElementById('Obs');
        var grupo = document.getElementById('Grupo');
        var fav = document.getElementById('Fav');
        
        Contactos.push({nome: nome.value, email: email.value, pais: pais.value, telefone: telefone.value, tipo: tipo.value, DOB: DOB.value, Facebook: facebook.value, Google: google.value, LinkedIn: linkedIn.value, Instagram: instagram.value, Outro: outro.value, Obs: obs.value, Grupo: Grupos[0], Fav: fav});
  
        ListarContacto();
    
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null){
        Contactos = JSON.parse(localStorage.contacto);
        alert("1");
        AdicionarContacto();
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
    
    var btn = document.getElementById('Enviar');
    btn.addEventListener('click', AbrirLocalStorage);
}

document.addEventListener('DOMContentLoaded', init);