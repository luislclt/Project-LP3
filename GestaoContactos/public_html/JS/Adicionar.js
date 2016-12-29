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
    alert(Contactos[pos].Outro);
    alert(Contactos[pos].Obs);
    alert(Contactos[pos].Grupo);
    alert(Contactos[pos].Fav);
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
        
        alert("3");
        var nome = document.getElementById('Nome');
        var telefone = document.getElementById('Numero');
        var aux=0;
        for (var i=0; i<Contactos.length; i++){
            alert("4");
            if (telefone.value === Contactos[i].numero){
                alert("5");
                alert("Número já existe!");
                aux=1;
            }
            if (nome.value === Contactos[i].nome){
                alert("6");
                alert("Nome já existe!");
                aux=1;
            }
        }
        alert("6");
        if (aux == 0){  
            alert("7");
            var email = document.getElementById('Email');
            var pais = document.getElementById('Pais');
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
            alert("8");
            Contactos.push({nome: nome.value, email: email.value, pais: pais.value, telefone: telefone.value, tipo: tipo.value, DOB: DOB.value, Facebook: facebook.value, Google: google.value, LinkedIn: linkedIn.value, Instagram: instagram.value, Outro: outro.value, Obs: obs.value, Grupo: Grupos[0], Fav: fav});
            alert("9");
            ListarContacto(Contactos.length-1);
            
            guardarLocalStorage();
        }else{
            alert("asfhlernf");
        }
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null){
        Contactos = JSON.parse(localStorage.contacto);
        alert("2");
        AdicionarContacto();
    }else{
        var vazio=document.createTextNode("Impossível adicionar Contactos");
        var erro= document.getElementById("Erro");
        alert(erro);
        erro.appendChild(vazio);
    }
}
function validarCampoNumero(inputNumero){ // verifica se o Campo Nome esta vazio
    if (inputNumero.value === ""){ // Esta Vazio
        inputNumero.className = "inputError"; //Span //campo vazio -- só de inputInvalido
        document.getElementById('inputNumeroInvalido').className = "inputMessageError"; // Mostra o Span Error
        return false; // Nao Aceita esta Campo
    }else{
        inputNumero.className = ""; // Default
        document.getElementById('inputNumeroInvalido').className = "inputMessageErrorHidden"; // Esconde a menssagem Erro
    }
    return true; // Aceitou este Campo
}

function validarCampoNome(inputNome){ // verifica se o Campo Nome esta vazio
    if (inputNome.value === ""){ // Esta Vazio
        inputNome.className = "inputError"; //Span //campo vazio -- só de inputInvalido
        document.getElementById('inputNomeInvalido').className = "inputMessageError"; // Mostra o Span Error
        return false; // Nao Aceita esta Campo
    }else{
        inputNome.className = ""; // Default
        document.getElementById('inputNomeInvalido').className = "inputMessageErrorHidden"; // Esconde a menssagem Erro
    }
    return true; // Aceitou este Campo
}


/*
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

    if (field.value === ""){
        alert("E-mail valido");
        return true; //(usuario.length ==0) && (dominio.length ==0) && (usuario.search("@")!=-1) && (dominio.search("@")!=-1) && (usuario.search(" ")!=-1) && (dominio.search(" ")!=-1) && (dominio.search(".")==-1) && (dominio.indexOf(".") ==0) && (dominio.lastIndexOf(".") > dominio.length - 1)
    } 
    else 
        if ((usuario.length >=1) && (dominio.length >=3) && (usuario.search("@")==-1) && (dominio.search("@")==-1) && (usuario.search(" ")==-1) && (dominio.search(" ")==-1) && (dominio.search(".")!=-1) && (dominio.indexOf(".") >=1) && (dominio.lastIndexOf(".") < dominio.length - 1)){
                    document.getElementById("msgemail").innerHTML="E-mail válido";
                    alert("E-mail valido");
                    return true;
        }else{
            document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
            alert("E-mail invalido");
            return false;
        }
}
*/

function validarCampoEmail(inputEmail) {
    usuario = inputEmail.value.substring(0, inputEmail.value.indexOf("@"));
    dominio = inputEmail.value.substring(inputEmail.value.indexOf("@")+ 1, inputEmail.value.length);
    if (inputEmail.value === ""){
        inputEmail.className = ""; // Default
        document.getElementById('inputEmailInvalido').className = "inputMessageErrorHidden"; // Esconde a menssagem Erro
        return true;
    } 
    else 
        if ((usuario.length >=1) && (dominio.length >=3) && (usuario.search("@")==-1) && (dominio.search("@")==-1) && (usuario.search(" ")==-1) && (dominio.search(" ")==-1) && (dominio.search(".")!=-1) && (dominio.indexOf(".") >=1) && (dominio.lastIndexOf(".") < dominio.length - 1)){
                    inputEmail.className = ""; // Default
                    document.getElementById('inputEmailInvalido').className = "inputMessageErrorHidden"; // Esconde a menssagem Erro
                    return true;
        }else{
        inputEmail.className = "inputError"; //Span //campo vazio -- só de inputInvalido
        document.getElementById('inputEmailInvalido').className = "inputMessageError"; // Mostra o Span Error
        
            return false;
        }
}



function VerificaCampos(){ // verifica se os campos estao vazios
    var flag = 0;
    var inputNome = document.getElementById('Nome'); // recebe o parametro do input Nome 
    var inputNumero = document.getElementById('Numero'); // recebe o parametro do input Numero
    var inputEmail = document.getElementById('Email'); // recebe o parametro do input Email
    
    /*while(flag == 0 || flag == 1 || flag == 2){
        alert("2 - flag=0");
        if (validarCampoNome(inputNome)===true) flag++, alert("2 - flag=1"); // flag = 1
        
        else if (validarCampoNumero(inputNumero)===true) flag++, alert("2 - flag=2"); // flag = 2
        
        else if (validarCampoNumero(inputEmail)===true) flag++, alert("2 - flag=3"); // flag = 3
        else flag = -1; // sai do ciclo mas sem sucesso
        
    }*/
    
    if (validarCampoNome(inputNome)===true && validarCampoEmail(inputEmail)===true && validarCampoNumero(inputNumero)===true){
    //if(flag == 2){    
        AbrirLocalStorage();
    }
        
    
    
    //adicionarComentario(inputNome.value);
    
}

function init(){
    
    var color = document.getElementById('cor');
    color.addEventListener('change', alterar);
    
    var btnEnviar = document.getElementById('Enviar');
    btnEnviar.addEventListener('click', VerificaCampos);

}

document.addEventListener('DOMContentLoaded', init);