/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var contacto1 = {nome:"Joao",email:"joao@sapo.pt", pais:"+351", telefone:'91719372', tipo:"Pessoal", DOB:"2000-12-20", Facebook: "", Google: "", LinkedIn: "", Instagram: "", Outro: "", Obs: "", Grupo: "", Fav:""};
/*var contacto2 = {nome:"joca",email:"joca@sapo.pt", pais:"+35", telefone:'035145', tipo:"Pessoal", DOB:"2000-12-20", Facebook: "", Google: "", LinkedIn: "", Instagram: "", Outro: "", Obs: "", Grupo: "", Fav:""};
var contacto3 = {nome:"Joana",email:"jj@gmail.pt", pais:"+69", telefone:'03533145', tipo:"Trabalho", DOB:"2001-12-20", Facebook: "nao", Google: "", LinkedIn: "", Instagram: "", Outro: "", Obs: "", Grupo: "", Fav:""};
*/
var Contactos = [contacto1, contacto2, contacto3];


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


function init(){
    
    var color = document.getElementById('cor');
    color.addEventListener('change', alterar);
    
    guardarLocalStorage();
    
    for(var i=0; i<=Contactos.length;i++){
        
    }
    
}

document.addEventListener('DOMContentLoaded', init);        //inicializa