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

function guardarLocalStorageContact(indice){
    var s = JSON.stringify(Contactos);
    localStorage.setItem('contacto', s);              //guardar os albuns
    localStorage.setItem('fundo',fundo);
    localStorage.setItem('indice',indice);
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

function ObterIndice(array, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i].nome === value) {
            return i;
        }
    }
    return -1;
}

function removerContacto(){
    var conf=confirm ("Tem a certeza que deseja remover?");
    if(conf==true){
        var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
        var indice = ObterIndice(Contactos,x);
        if (indice > -1) {
            Contactos.splice(indice, 1);
            window.location.reload();
        }else{
            alert("erro ao remover!!");
        }
    
        //this.parentNode.remove();
        guardarLocalStorage();
    }
    
}

function editarContacto(){
    //guardarLocalStorage(this.parentNode);
    //this.parentNode;
    //var a = Contactos.indexOf(this.parentElement.id);
    var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
    var indice = ObterIndice(Contactos,x);
    guardarLocalStorageContact(indice);
    window.location.href="Editar.html";
}

function AdicionarFavoritos() {
    
    var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
    var indice = ObterIndice(Contactos,x);
    if (Contactos[indice].Fav == "sim") {
        Contactos[indice].Fav = "nao";
        alert("Removido dos Favoritos com Sucesso!");
        window.location.reload();
    }else{
        Contactos[indice].Fav = "sim";
        alert("Adicionado aos Favoritos com Sucesso!");
        window.location.reload();
    }
        
    guardarLocalStorage();
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
        var OutraRede=document.createElement("p");
        var Obs=document.createElement("p");
        var amigos=document.createElement("p");
        var trabalho=document.createElement("p");
        var familia=document.createElement("p");
        var outroGrupo=document.createElement("p");
        var Fav=document.createElement("p");
        var Espaco=document.createElement("p");
        
        nome.id=Contactos[i].nome;
        
        var nometext=document.createTextNode("Nome: " + Contactos[i].nome);
        if (Contactos[i].email == "") var emailtext=document.createTextNode(Contactos[i].email); else var emailtext=document.createTextNode("Email: " + Contactos[i].email);
        var telefonetext=document.createTextNode("Contacto: " + Contactos[i].telefone);
        if (Contactos[i].tipo == "") var tipotext=document.createTextNode(Contactos[i].tipo); else var tipotext=document.createTextNode("Tipo de Contacto: " + Contactos[i].tipo);
        if (Contactos[i].DOB == "") var DOBtext=document.createTextNode(Contactos[i].DOB); else var DOBtext=document.createTextNode("Data de Nascimento: " + Contactos[i].DOB);
        if (Contactos[i].Facebook == "") var Facebooktext=document.createTextNode(Contactos[i].Facebook); else var Facebooktext=document.createTextNode("Facebook: " + Contactos[i].Facebook);
        if (Contactos[i].Google == "") var Googletext=document.createTextNode(Contactos[i].Google); else var Googletext=document.createTextNode("Google+: " + Contactos[i].Google);
        if (Contactos[i].LinkedIn == "") var LinkedIntext=document.createTextNode(Contactos[i].LinkedIn); else var LinkedIntext=document.createTextNode("LinkedIn: " + Contactos[i].LinkedIn);
        if (Contactos[i].Instagram == "") var Instagramtext=document.createTextNode(Contactos[i].Instagram); else var Instagramtext=document.createTextNode("Instagram: " + Contactos[i].Instagram);
        if (Contactos[i].OutraRede == "") var OutraRedetext=document.createTextNode(Contactos[i].OutraRede); else var OutraRedetext=document.createTextNode("Outro: " + Contactos[i].OutraRede);
        if (Contactos[i].Obs == "") var Obstext=document.createTextNode(Contactos[i].Obs); else var Obstext=document.createTextNode("Observações: " + Contactos[i].Obs);
        
        
        if (Contactos[i].Amigos == "sim") var Amigostext=document.createTextNode("Grupo: Amigos"); else var Amigostext=document.createTextNode("");
        if (Contactos[i].Trabalho == "sim") var Trabalhotext=document.createTextNode("Grupo: Trabalho"); else var Trabalhotext=document.createTextNode("");
        if (Contactos[i].Familia == "sim") var Familiatext=document.createTextNode("Grupo: Familia"); else var Familiatext=document.createTextNode("");
        if (Contactos[i].OutroGrupo == "sim") var OutroGrupotext=document.createTextNode("Grupo: Outro"); else var OutroGrupotext=document.createTextNode("");
        if (Contactos[i].Fav == "sim"){
            var Favtext=document.createTextNode("Favorito");
        }else var Favtext=document.createTextNode("");
        
        
        var Espacotext=document.createTextNode("************************");
        
        nome.appendChild(nometext);
        email.appendChild(emailtext);
        telefone.appendChild(telefonetext);
        tipo.appendChild(tipotext);
        DOB.appendChild(DOBtext);
        Facebook.appendChild(Facebooktext);
        Google.appendChild(Googletext);
        LinkedIn.appendChild(LinkedIntext);
        Instagram.appendChild(Instagramtext);
        OutraRede.appendChild(OutraRedetext);
        Obs.appendChild(Obstext);
        amigos.appendChild(Amigostext);
        trabalho.appendChild(Trabalhotext);
        familia.appendChild(Familiatext);
        outroGrupo.appendChild(OutroGrupotext);
        Fav.appendChild(Favtext);
        Espaco.appendChild(Espacotext);
        
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
        
        var btnfavorito = document.createElement('button');
        btnfavorito.innerHTML = 'Favorito';
        btnfavorito.addEventListener('click', AdicionarFavoritos);
        
        
        artigo.appendChild(btnfavorito);
        
        artigo.appendChild(Espaco);
    }
    if(Contactos.length>0){
        var btnVoltarB=document.createElement("button");
        var btnText=document.createTextNode("Voltar");
        btnVoltarB.appendChild(btnText);
        btnVoltarB.addEventListener('click', Voltar);
        document.getElementById("VoltarB").appendChild(btnVoltarB);
    } 
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