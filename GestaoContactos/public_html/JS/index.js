/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * 
 * Inicia a pagina Web
 * Com a cor de fundo guardada na localStorage
 */

/*
var contacto1 = {nome:"Joao",email:"joao@sapo.pt", pais:"+351", telefone:'91719372', tipo:"Pessoal", DOB:"2000-12-20", Facebook: "", Google: "", LinkedIn: "", Instagram: "", Outro: "", Obs: "", Grupo: "", Fav:""};
var contacto2 = {nome:"joca",email:"joca@sapo.pt", pais:"+35", telefone:'035145', tipo:"Pessoal", DOB:"2000-12-20", Facebook: "", Google: "", LinkedIn: "", Instagram: "", Outro: "", Obs: "", Grupo: "", Fav:""};
var contacto3 = {nome:"Joana",email:"jj@gmail.pt", pais:"+69", telefone:'03533145', tipo:"Trabalho", DOB:"2001-12-20", Facebook: "nao", Google: "", LinkedIn: "", Instagram: "", Outro: "", Obs: "", Grupo: "", Fav:""};

var Contactos = [contacto1, contacto2, contacto3];
*/
var Contactos = []; // struct Contactos
var CorFundo;

/* alterar()
 * Verifica a cor e altera o link para o css correspondente
 */
function Alterar(){
    var cor = document.getElementById('cor');
    var link = document.getElementById('link');
    
    if (cor.value == 'cornsilk'){
        CorFundo ='cornsilk';
        link.href="styles/cornsilk.css";
        
    }else if(cor.value == 'bisque'){
        CorFundo ='bisque';
        link.href="styles/bisque.css";
        
    }else if(cor.value == 'burlywood'){
        CorFundo ='burlywood';
        link.href="styles/burlywood.css";
        
    }else if(cor.value == 'peachpuff'){
        CorFundo ='peachpuff';
        link.href="styles/peachpuff.css";
    }
    //guardarLocalStorage();
    localStorage.setItem('fundo', CorFundo);
}

function SelectedCorFundo(){
    var cor = document.getElementById('cor');
    var link = document.getElementById('link');
    
    if (CorFundo == 'cornsilk'){
        document.getElementById(CorFundo).selected="selected";
        link.href="styles/cornsilk.css";
        
    }else if(CorFundo == 'bisque'){
        document.getElementById(CorFundo).selected="selected";
        link.href="styles/bisque.css";
        
    }else if(CorFundo == 'burlywood'){
        document.getElementById(CorFundo).selected="selected";
        link.href="styles/burlywood.css";
        
    }else if(CorFundo == 'peachpuff'){
        document.getElementById(CorFundo).selected="selected";
        link.href="styles/peachpuff.css";
        
    }
}

function guardarLocalStorage(){
    var s = JSON.stringify(Contactos);
    localStorage.setItem('contacto', s);              //guardar os albuns
    localStorage.setItem('fundo', CorFundo);
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null){
        Contactos = JSON.parse(localStorage.contacto);
    }
    if(localStorage.fundo != null){
        CorFundo = localStorage.fundo;
    }else{
        //CorFundo = localStorage.fundo;
        CorFundo = 'cornsilk'; //DEFAULT
    }
}

function init(){
    
    AbrirLocalStorage();
    SelectedCorFundo();
    var color = document.getElementById('cor');
    color.addEventListener('change', Alterar);
    
    
    guardarLocalStorage(); // Guardar Contactos & corFundo Default
    
}

document.addEventListener('DOMContentLoaded', init); //inicializa