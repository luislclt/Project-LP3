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

function guardarLocalStorage(){
    var s = JSON.stringify(Contactos);
    localStorage.setItem('contacto', s);              //guardar os albuns
    localStorage.setItem('fundo',fundo);
}

function OrdenarFavoritos(a, b) {
    if(a.nome>b.nome){
         return 1;
    }
    if(a.nome<b.nome){
         return -1;
    }
    return 0;
}

function ObterIndice(array, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i].nome === value) {
            return i;
        }
    }
    return -1;
}

function removerFavorito(btnremove){
    var conf=confirm ("Tem a certeza que deseja remover dos Favoritos?");
    if(conf==true){
        var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
        var indice = ObterIndice(Contactos,x);
        if (indice > -1) {
            Contactos[indice].Fav = "nao";
            VerificarExisteFavoritos();
            window.location.reload();
        }else{
            alert("erro ao remover!!");
        }
        guardarLocalStorage();
        
    }
    
}


function VerificarExisteFavoritos(){
    
    var aux=0;
    for(var i=0; i<=Contactos.length-1;i++){
        if(Contactos[i].Fav == "sim"){
            aux=1;
        }
    }
    if(aux==1){
        var btnVoltarB=document.createElement("button");
        var btnText=document.createTextNode("Voltar");
        btnVoltarB.appendChild(btnText);
        btnVoltarB.addEventListener('click', Voltar);
        document.getElementById("VoltarB").appendChild(btnVoltarB);
    }
}


function ListarContactos () {
    Contactos.sort(OrdenarFavoritos);
    
    for (var i=0; i<=Contactos.length-1;i++){
        if(Contactos[i].Fav == "sim"){
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
            var amigos=document.createElement("p");
            var trabalho=document.createElement("p");
            var familia=document.createElement("p");
            var outroGrupo=document.createElement("p");
            var Espaco=document.createElement("p");

            nome.id=Contactos[i].nome;
            alert("3");

            var nomet=document.createTextNode(Contactos[i].nome);
            var emailt=document.createTextNode(Contactos[i].email);
            var telefonet=document.createTextNode(Contactos[i].telefone);
            var tipot=document.createTextNode(Contactos[i].tipo);
            var DOBt=document.createTextNode(Contactos[i].DOB);
            var Facebookt=document.createTextNode(Contactos[i].Facebook);
            var Googlet=document.createTextNode(Contactos[i].Google);
            var LinkedInt=document.createTextNode(Contactos[i].LinkedIn);
            var Instagramt=document.createTextNode(Contactos[i].Instagram);
            var OutraRedet=document.createTextNode(Contactos[i].OutraRede);
            var Obst=document.createTextNode(Contactos[i].Obs);
            
            alert("4");
            
            if (Contactos[i].Amigos == "sim") var Amigost=document.createTextNode("Amigos"); else var Amigost=document.createTextNode("");
            if (Contactos[i].Trabalho == "sim") var Trabalhot=document.createTextNode("Trabalho"); else var Trabalhot=document.createTextNode("");
            if (Contactos[i].Familia == "sim") var Familiat=document.createTextNode("Familia"); else var Familiat=document.createTextNode("");
            if (Contactos[i].OutroGrupo == "sim") var OutroGrupot=document.createTextNode("Outro"); else var OutroGrupot=document.createTextNode("");
            
            
            var Espacot=document.createTextNode("************************");
            
            alert("5");

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
            amigos.appendChild(Amigost);
            trabalho.appendChild(Trabalhot);
            familia.appendChild(Familiat);
            outroGrupo.appendChild(OutroGrupot);
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
            artigo.appendChild(OutraRede);
            artigo.appendChild(Obs);
            artigo.appendChild(amigos);
            artigo.appendChild(trabalho);
            artigo.appendChild(familia);
            artigo.appendChild(outroGrupo);

            document.getElementById('Contactos').appendChild(artigo);

            var btnremove = document.createElement('input');
            btnremove.src="Images/estrelaOn.png";
            btnremove.type="image";
            //btnremove.innerHTML = 'Remover';
            btnremove.addEventListener('click', removerFavorito);
            
            artigo.appendChild(btnremove);

            artigo.appendChild(Espaco);
        }
    }
    VerificarExisteFavoritos();
}

function Voltar(){
    window.location.href="index.html";
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null){
        Contactos = JSON.parse(localStorage.contacto);
        fundo= localStorage.fundo;
        ListarContactos();
    }else{
        var vazio=document.createTextNode("Não existem Contactos");
        var erro= document.getElementById("Erro");
        alert(erro);
        erro.appendChild(vazio);
    }
}

function init(){
    AbrirLocalStorage();
    CorFundo();
    var btnVoltar = document.getElementById('Voltar');
    btnVoltar.addEventListener('click', Voltar);
    var color = document.getElementById('cor');
    color.addEventListener('change', alterar);   
}
document.addEventListener('DOMContentLoaded', init);