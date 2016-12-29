/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


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


function ListarContacto (pos) {
    
    alert(Contactos[pos].nome);
    alert(Contactos[pos].email);
    alert(Contactos[pos].pais);
    alert(Contactos[pos].telefone);
    alert(Contactos[pos].tipo);
    alert(Contactos[pos].DOB);
    alert(Contactos[pos].Facebook);
    alert(Contactos[pos].Google);
    alert(Contactos[pos].LinkedIn);
    alert(Contactos[pos].Instagram);
    alert(Contactos[pos].OutraRede);
    alert(Contactos[pos].Obs);
    if (Contactos[pos].Amigos.checked) alert("Amigos");
    if (Contactos[pos].Trabalho.checked) alert("Trabalho");
    if (Contactos[pos].Familia.checked) alert("Familia");
    if (Contactos[pos].OutroGrupo.checked) alert("Outro");
    if (Contactos[pos].Fav.checked) alert("Favorito");
    
    alert("Adicionado com Sucesso!");
    window.location.href="TodosContactos.html";
}


function init(){
    AbrirLocalStorage();
    CorFundo();
    var color = document.getElementById('cor');
    color.addEventListener('change', alterar);
    
    var btnEnviar = document.getElementById('Enviar');
    btnEnviar.addEventListener('click', VerificaCampos);
    
}

document.addEventListener('DOMContentLoaded', init);