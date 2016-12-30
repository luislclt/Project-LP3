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


function ListarContacto(pos){
        
    var artigo=document.createElement("article");
    
    document.getElementById('Nome').value=Contactos[pos].nome;
    document.getElementById('Email').value=Contactos[pos].email;
    document.getElementById('Numero').value=Contactos[pos].telefone;
    document.getElementById('Tipo').value=Contactos[pos].tipo;
    document.getElementById('DOB').value=Contactos[pos].DOB;
    document.getElementById('Facebook').value=Contactos[pos].Facebook;
    document.getElementById('Google').value=Contactos[pos].Google;
    document.getElementById('LinkedIn').value=Contactos[pos].LinkedIn;
    document.getElementById('Instagram').value=Contactos[pos].Instagram;
    document.getElementById('OutraRede').value=Contactos[pos].OutraRede;
    document.getElementById('Obs').value=Contactos[pos].Obs;
    document.getElementById('')
    if (Contactos[pos].Amigos == "sim") document.getElementById('Amigos').checked=true; else document.getElementById('Amigos').checked=false;
    if (Contactos[pos].Trabalho == "sim") document.getElementById('Trabalho').checked=true; else document.getElementById('Trabalho').checked=false;
    if (Contactos[pos].Familia == "sim") document.getElementById('Familia').checked=true; else document.getElementById('Familia').checked=false;
    if (Contactos[pos].OutroGrupo == "sim") document.getElementById('OutroGrupo').checked=true; else document.getElementById('OutroGrupo').checked=false;
    if (Contactos[pos].Fav == "sim"){
        document.getElementById('Fav').checked=true;
    }else document.getElementById('Fav').checked=false;   
        
        
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
        var Favt=document.createTextNode("Favorito");
    }else var Favt=document.createTextNode("");
        
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
   
    
}

function guardarLocalStorage(){
    var s = JSON.stringify(Contactos);
    localStorage.setItem('contacto', s);              //guardar os albuns
    localStorage.setItem('fundo',fundo);
}


function EditarContacto() {
        var nome = document.getElementById('Nome');
        var telefone = document.getElementById('Numero');
        var aux=0;
        alert("AdicionarContacto -- ok");
        for (var i=0; i<Contactos.length; i++){
            if (telefone.value === Contactos[i].numero){
                alert("Número já existe!");
                aux=1;
            }
            if (nome.value === Contactos[i].nome){
                alert("Nome já existe!");
                aux=1;
            }
        }
        if (aux == 0){
            var email = document.getElementById('Email');
            var pais = document.getElementById('Pais');
            var tipo = document.getElementById('Tipo');
            var DOB = document.getElementById('DOB');
            var facebook = document.getElementById('Facebook');
            var google = document.getElementById('Google');
            var linkedIn = document.getElementById('LinkedIn');
            var instagram = document.getElementById('Instagram');
            var outrarede = document.getElementById('OutraRede');
            var obs = document.getElementById('Obs');
            var amigos = document.getElementById('Amigos');
            var trabalho = document.getElementById('Trabalho');
            var familia = document.getElementById('Familia');
            var outroGrupo = document.getElementById('OutroGrupo');
            var fav = document.getElementById('Fav');
            
            if (amigos.checked) amigos = "sim"; else amigos = "nao";
            if (trabalho.checked) trabalho = "sim"; else trabalho = "nao";
            if (familia.checked) familia = "sim"; else familia = "nao";
            if (outroGrupo.checked) outroGrupo = "sim"; else outroGrupo = "nao";
            if (fav.checked) fav = "sim"; else fav = "nao";
            
            Contactos[indice]=({nome: nome.value, email: email.value, pais: pais.value, telefone: telefone.value, tipo: tipo.value, DOB: DOB.value, Facebook: facebook.value, Google: google.value, LinkedIn: linkedIn.value, Instagram: instagram.value, OutraRede: outrarede.value, Obs: obs.value, Amigos: amigos, Trabalho: trabalho, Familia: familia, OutroGrupo: outroGrupo, Fav: fav});
            alert("outra window -- ok");
            
            window.location.href="ListarEditar.html";

            guardarLocalStorage();
        }else{
            alert("Impossivel editar Contacto");
        }
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null){
        Contactos = JSON.parse(localStorage.contacto);
        fundo= localStorage.fundo;
        indice=localStorage.indice;
    }else{
        fundo= localStorage.fundo;
        indice=localStorage.indice;
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
    
    if (validarCampoNome(inputNome)===true && validarCampoEmail(inputEmail)===true && validarCampoNumero(inputNumero)===true){
    //if(flag == 2){   
        alert("valida -- ok");
        AbrirLocalStorage();
        EditarContacto();
    }
}

function init(){
    
    AbrirLocalStorage();
    CorFundo();
    ListarContacto(indice);
    var color = document.getElementById('cor');
    color.addEventListener('change', alterar);
    
    var btnEnviar = document.getElementById('Enviar');
    btnEnviar.addEventListener('click', VerificaCampos);   
}

document.addEventListener('DOMContentLoaded', init);