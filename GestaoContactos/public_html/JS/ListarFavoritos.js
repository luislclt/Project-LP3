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

function guardarLocalStorage(){
    var s = JSON.stringify(Contactos);
    localStorage.setItem('contacto', s); //Contactos
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
            
            if (Contactos[i].Amigos == "sim") var Amigost=document.createTextNode("Amigos"); else var Amigost=document.createTextNode("");
            if (Contactos[i].Trabalho == "sim") var Trabalhot=document.createTextNode("Trabalho"); else var Trabalhot=document.createTextNode("");
            if (Contactos[i].Familia == "sim") var Familiat=document.createTextNode("Familia"); else var Familiat=document.createTextNode("");
            if (Contactos[i].OutroGrupo == "sim") var OutroGrupot=document.createTextNode("Outro"); else var OutroGrupot=document.createTextNode("");
            
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
}

function AbrirLocalStorage() {
    if (localStorage.contacto != null && localStorage.contacto != "[]"){
        Contactos = JSON.parse(localStorage.contacto);
        ListarContactos();
    }else{
        var vazio=document.createTextNode("Não existem Contactos");
        var erro= document.getElementById("Erro");
        alert(erro);
        erro.appendChild(vazio);
    }
    if(localStorage.fundo != null){
        CorFundo = localStorage.fundo;
    }else{
        CorFundo = 'cornsilk'; //DEFAULT
    }
}

function init(){
    
    AbrirLocalStorage();
    SelectedCorFundo();
    var color = document.getElementById('cor');
    color.addEventListener('change', Alterar);
    
}
document.addEventListener('DOMContentLoaded', init);