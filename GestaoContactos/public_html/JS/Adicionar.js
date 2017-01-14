/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Contactos = [];
var CorFundo;

function Alterar(){
    var cor = document.getElementById('cor');
    
    if (cor.value == 'cornsilk'){
        CorFundo ='cornsilk';
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFF8DC, #A0522D)";
        
    }else if(cor.value == 'bisque'){
        CorFundo ='bisque';
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFE4C4, #FFA54F)";
        
    }else if(cor.value == 'burlywood'){
        CorFundo ='burlywood';
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFD39B, #8B7355)";
        
    }else if(cor.value == 'peachpuff'){
        CorFundo ='peachpuff';
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFDAB9, #D2691E)";
    }
    localStorage.setItem('fundo', CorFundo);
}

function SelectedCorFundo(){
    var cor = document.getElementById('cor');
    var link = document.getElementById('link');
    
    if (CorFundo == 'cornsilk'){
        document.getElementById(CorFundo).selected="selected";
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFF8DC, #A0522D)";
        
    }else if(CorFundo == 'bisque'){
        document.getElementById(CorFundo).selected="selected";
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFE4C4, #FFA54F)";
        
    }else if(CorFundo == 'burlywood'){
        document.getElementById(CorFundo).selected="selected";
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFD39B, #8B7355)";
        
    }else if(CorFundo == 'peachpuff'){
        document.getElementById(CorFundo).selected="selected";
        document.getElementsByTagName("body")[0].style.background="-webkit-linear-gradient(left, #FFDAB9, #D2691E)";
        
    }
}

function AbrirLocalStorageCor() {
    if(localStorage.fundo != null){
        CorFundo = localStorage.fundo;
    }else{
        CorFundo = 'cornsilk'; //DEFAULT
    }
}

function GuardarContactos(text) {    
    if (typeof (localStorage) !== "undefined")   {
        //alert(text);        
        var finaltext = "";        
        finaltext = finaltext + "<?xml version="+'"'+"1.0"+'"'+" encoding="+'"'+"utf-8"+'"'+" ?>"
                              + "<Contacts xmlns:tp="+'"'+"http://xml.netbeans.org/schema/TP.AvC"+'"'+">" 
                              + text
                              + "</Contacts>";  
        localStorage.setItem('Contacto', finaltext);
        //alert(finaltext);
    }else {
        alert("Sorry, your browser does not support web storage...");
    }
    
}

function CarregarContactos(){
    if(typeof(localStorage) !== "undefined") {
        //Contactos = JSON.parse(localStorage.contacto);
        loadDataFromDatabase(localStorage.getItem('Contacto'));
        //var xml = JSON.parse(localStorage.XML);
            alert("Carregado com sucesso!");
    }else {
            alert("Não existe informação!");
    }
}

function loadDataFromDatabase(xml) {
    
    // Limpar o array
    /*while(Contactos.length){
        Contactos.pop();
    }*/
    
    alert("Isto é o xml loadDataFromDatabase: \n"+xml);
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml, "text/xml");  
    
    var tag_contactos = xmlDoc.getElementsByTagName("Contact");
    alert(tag_contactos.length);
    
   // var tag_nome = tag_contactos;      
    var tag_email = xmlDoc.getElementsByTagName("Email");
    
    var tag_pais = xmlDoc.getElementsByTagName("Country"); 
    var tag_numero_telefone = xmlDoc.getElementsByTagName("PhoneNumber");  
    var tag_tipo_telefone = xmlDoc.getElementsByTagName("Telephone");  // Telephone -> Type 
    /*var tag_pais = xmlDoc.getElementsByTagName("Country"); 
    var tag_numero_telefone = xmlDoc.getElementsByTagName("PhoneNumber");  
    var tag_tipo_telefone = xmlDoc.getElementsByTagName("Telephone");  // Telephone -> Type 
    var tag_pais = xmlDoc.getElementsByTagName("Country"); 
    var tag_numero_telefone = xmlDoc.getElementsByTagName("PhoneNumber");  
    var tag_tipo_telefone = xmlDoc.getElementsByTagName("Telephone");  // Telephone -> Type 
    var tag_pais = xmlDoc.getElementsByTagName("Country"); 
    var tag_numero_telefone = xmlDoc.getElementsByTagName("PhoneNumber");  
    var tag_tipo_telefone = xmlDoc.getElementsByTagName("Telephone");  // Telephone -> Type 
    var tag_pais = xmlDoc.getElementsByTagName("Country"); 
    var tag_numero_telefone = xmlDoc.getElementsByTagName("PhoneNumber");  
    var tag_tipo_telefone = xmlDoc.getElementsByTagName("Telephone");  // Telephone -> Type 
    */
    var tag_anos = xmlDoc.getElementsByTagName("BirthDate");
    //var tag_social = xmlDoc.getElementsByTagName("SocialNetwork"); // SocialNetwork -> Type
    var tag_obser = xmlDoc.getElementsByTagName("Obs");
    var tag_grupo_numero = xmlDoc.getElementsByTagName("Contact");  // Contact -> Group
    var tag_favorito = xmlDoc.getElementsByTagName("Contact");  // Contact -> IsFavorite
     
    
    for(var i=0;i<tag_contactos.length;i++){
        var tag_nome = tag_contactos[0].childNodes[0];
        var tag_email = tag_contactos[0].childNodes[1];
        if(tag_email.nodeName=="Email"){
            alert("Email: " + tag_email.childNodes[0].nodevalue);
        }else{
            var tag_tipo_telefone1 = tag_contactos[i].childNodes[1].childNodes[2].getAttribute('Type');
            alert("tipo telefone: " + tag_tipo_telefone1.valueOf());
            var tag_numero_telefone1 = tag_contactos[i].childNodes[1].childNodes[1].childNodes[0];
            alert("Telefone: " + tag_numero_telefone1.nodeValue);
            var tag_pais1 = tag_contactos[i].childNodes[1].childNodes[0].childNodes[0];
            alert("Pais: " + tag_pais1.nodeValue);
            
            if(tag_contactos[i].childNodes[1].childNodes[3].nodeName=="Telephone" ){
                var tel2 = tag_contactos[i].childNodes[1].childNodes[3];
                var tag_tipo_telefone2 = tel2.childNodes[2].getAttribute('Type');
                alert("tipo telefone: " + tag_tipo_telefone2.valueOf());
                var tag_numero_telefone2 = tel2.childNodes[1].childNodes[0];
                alert("Telefone: " + tag_numero_telefone2.nodeValue);
                var tag_pais2 = tel2.childNodes[0].childNodes[0];
                alert("Pais: " + tag_pais2.nodeValue);
              
            }
        }
        
        //alert("Grupo de telefone: " + tag_grupo_numero[i].childNodes[0].nodeValue); //tag_grupo_numero[i].getAttribute('Group')
        alert("Favorito: " + tag_favorito[i].childNodes[0].nodeValue); //tag_favorito[i].getAttribute('IsFavorite')
        //alert(tag_social[i].childNodes[0].nodeValue);
        //alert("Tipo da rede social: " + tag_social[i].getAttribute('Type'));
        //alert(tag_anos[i].childNodes[0].nodeValue);
        //alert(tag_obser[i].childNodes[0].nodeValue);
        
        // Vai guardar tudo o que leu do xml num array 
        if(telefone2[i]!=undefined && telefone3[i]!=undefined && telefone4[i]!=undefined && telefone5[i]!=undefined){
            Contactos.push({ grupo: '"' + tag_grupo_numero[i].getAttribute('Group') + '"',
                         Fav: '"' + tag_favorito[i].getAttribute('IsFavorite') + '"',
                         nome: '"' + tag_nome[i].childNodes[0].nodeValue + '"',
                         telefone1: '"' + tag_numero_telefone[i].childNodes[0].nodeValue + '"',
                       //email: '"' + tag_email[i].childNodes[0].nodeValue + '"',
                         tipo1: '"' + tag_tipo_telefone[i].getAttribute('Type') + '"',
                         pais1: '"' + tag_pais[i].childNodes[0].nodeValue + '"',
                       /*telefone2: "",
                         tipo2: "",
                         pais2: "",
                         telefone3: "",
                         tipo3: "",
                         pais3: "",
                         telefone4: "",
                         tipo4: "",
                         pais4: "",
                         telefone5: "",
                         tipo5: "",
                         pais5: ""*/
                         //social: tag_social[i].childNodes[0].nodeValue,
                         //typesocial: tag_social[i].getAttribute('Type'),
                         //birthdate: tag_anos[i].childNodes[0].nodeValue,
                         //observa: tag_obser[i].childNodes[0].nodeValue,
                       });
            var ultimapos=Contactos.lenght-1;           
            if(tag_email[i]!=undefined){
                Contactos[ultimapos].email='"' + tag_nome[i].childNodes[0].nodeValue + '"';
            }
            if(telefone2[i]!=undefined){
                Contactos[ultimapos].telefone2= '"' + tag_numero_telefone[i].childNodes[1].nodeValue + '"';
            }else{
                Contactos[ultimapos].telefone2= "";
                Contactos[ultimapos].tipo2= "";
                Contactos[ultimapos].pais2= "";
            }
        }else{
            if(tag_email[i]!=undefined && telefone2[i]!=undefined && telefone3[i]!=undefined && telefone4[i]!=undefined && telefone5[i]!=undefined)
            Contactos.push({ grupo: '"' + tag_grupo_numero[i].getAttribute('Group') + '"',
                         Fav: '"' + tag_favorito[i].getAttribute('IsFavorite') + '"',
                         nome: '"' + tag_nome[i].childNodes[0].nodeValue + '"',
                         telefone1: '"' + tag_numero_telefone[i].childNodes[0].nodeValue + '"',
                         email: "",
                         tipo1: '"' + tag_tipo_telefone[i].getAttribute('Type') + '"',
                         pais1: '"' + tag_pais[i].childNodes[0].nodeValue + '"',
                         telefone2: "",
                         tipo2: "",
                         pais2: "",
                         telefone3: "",
                         tipo3: "",
                         pais3: "",
                         telefone4: "",
                         tipo4: "",
                         pais4: "",
                         telefone5: "",
                         tipo5: "",
                         pais5: ""
                         //social: tag_social[i].childNodes[0].nodeValue,
                         //typesocial: tag_social[i].getAttribute('Type'),
                         //birthdate: tag_anos[i].childNodes[0].nodeValue,
                         //observa: tag_obser[i].childNodes[0].nodeValue
                       });
        }
        
    }
}


function AdicionarContacto() {
    
    var nome = document.getElementById('Nome');
    var telefone1 = document.getElementById('Numero1');
    var telefone2 = document.getElementById('Numero2');
    var telefone3 = document.getElementById('Numero3');
    var telefone4 = document.getElementById('Numero4');
    var telefone5 = document.getElementById('Numero5');
    var aux=0;
    
    alert("AdicionarContacto -- ok");
    
    if (telefone2.value !== "" && telefone2.value === telefone1.value){
        console.log("Número igual ao de cima!");
        alert("Número igual ao de cima!");
        aux=1;
    }else{
        alert("telefone3!=");
        if (telefone3.value !== ""){
            if(telefone3.value === telefone2.value || telefone3.value === telefone1.value){
                console.log("Número igual ao de cima!");
                alert("Número igual ao de cima!");
                aux=1;
            }else{
                alert("telefone4!=");
                if (telefone4.value !== ""){
                    if (telefone4.value === telefone3.value || telefone4.value === telefone2.value || telefone4.value === telefone1.value){
                        console.log("Número igual ao de cima!");
                        alert("Número igual ao de cima!");
                        aux=1;
                    }else{
                        alert("telefone5!=");
                        if (telefone5.value !== ""){
                            if (telefone5.value === telefone4.value || telefone5.value === telefone3.value || telefone5.value === telefone2.value || telefone5.value === telefone1.value){
                                console.log("Número igual ao de cima!");
                                alert("Número igual ao de cima!");
                                aux=1;
                            }else{
                                for (var i=0; i<Contactos.length; i++){
                                    alert("1");
                                    if (telefone1.value === Contactos[i].telefone1 || telefone1.value === Contactos[i].telefone2 || telefone1.value === Contactos[i].telefone3 || telefone1.value === Contactos[i].telefone4 || telefone1.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }alert("2");
                                    if (telefone2.value === Contactos[i].telefone1 || telefone2.value === Contactos[i].telefone2 || telefone2.value === Contactos[i].telefone3 || telefone2.value === Contactos[i].telefone4 || telefone2.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }alert("3");
                                    if (telefone3.value === Contactos[i].telefone1 || telefone3.value === Contactos[i].telefone2 || telefone3.value === Contactos[i].telefone3 || telefone3.value === Contactos[i].telefone4 || telefone3.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }alert("4");
                                    if (telefone4.value === Contactos[i].telefone1 || telefone4.value === Contactos[i].telefone2 || telefone4.value === Contactos[i].telefone3 || telefone4.value === Contactos[i].telefone4 || telefone4.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }alert("5");
                                    if (telefone5.value === Contactos[i].telefone1 || telefone5.value === Contactos[i].telefone2 || telefone5.value === Contactos[i].telefone3 || telefone5.value === Contactos[i].telefone4 || telefone5.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }
                                    if (nome.value === Contactos[i].nome){
                                        console.log("Nome já existe!");
                                        alert("Nome já existe!");
                                        aux=1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    var facebook = document.getElementById('Facebook');
    var google = document.getElementById('Google');
    var linkedIn = document.getElementById('LinkedIn');
    var instagram = document.getElementById('Instagram');
    var outrarede = document.getElementById('OutraRede');
    
    if(facebook.value==="" && google.value==="" && linkedIn.value==="" && instagram.value==="" && outrarede.value===""){
        console.log("Tem de inserir uma rede social!");
        alert("Tem de inserir uma rede social!");
        aux=1;
    }
    
    var amigos = document.getElementById('Amigos');
    var trabalho = document.getElementById('Trabalho');
    var familia = document.getElementById('Familia');
    var outroGrupo = document.getElementById('OutroGrupo');
    
    if(amigos.checked===false && trabalho.checked===false && familia.checked===false && outroGrupo.checked===false){
        console.log("Tem de selecionar algum grupo!");
        alert("Tem de selecionar algum grupo!");
        aux=1;
    }
    
    if (aux == 0){
        
        var email = document.getElementById('Email');
        
        var pais1 = document.getElementById('Pais1');
        var pais2 = document.getElementById('Pais2');
        var pais3 = document.getElementById('Pais3');
        var pais4 = document.getElementById('Pais4');
        var pais5 = document.getElementById('Pais5');
        
        
        var tipo1 = document.getElementById('Tipo1');
        var tipo2 = document.getElementById('Tipo2');
        var tipo3 = document.getElementById('Tipo3');
        var tipo4 = document.getElementById('Tipo4');
        var tipo5 = document.getElementById('Tipo5');
        
        var DOB = document.getElementById('DOB');
        var obs = document.getElementById('Obs');
        var fav = document.getElementById('Fav');
        
        if (amigos.checked) amigos = "sim"; else amigos = "nao";
        if (trabalho.checked) trabalho = "sim"; else trabalho = "nao";
        if (familia.checked) familia = "sim"; else familia = "nao";
        if (outroGrupo.checked) outroGrupo = "sim"; else outroGrupo = "nao";
        if (fav.checked) fav = "sim"; else fav = "nao";
        
        Contactos.push({nome: nome.value, email: email.value, pais1: pais1.value, telefone1: telefone1.value, tipo1: tipo1.value, pais2: pais2.value, telefone2: telefone2.value, tipo2: tipo2.value, pais3: pais3.value, telefone3: telefone3.value, tipo3: tipo3.value, pais4: pais4.value, telefone4: telefone4.value, tipo4: tipo4.value, pais5: pais5.value, telefone5: telefone5.value, tipo5: tipo5.value, DOB: DOB.value, Facebook: facebook.value, Google: google.value, LinkedIn: linkedIn.value, Instagram: instagram.value, OutraRede: outrarede.value, Obs: obs.value, Amigos: amigos, Trabalho: trabalho, Familia: familia, OutroGrupo: outroGrupo, Fav: fav});
        alert("outra window -- ok");
        
        var indice=Contactos.length-1;
        
        
        
        var xml = "";
        
        for(var i = 0; i<Contactos.length;i++){
        id = i;
        xml = xml     + "<Contact>"
                      + "<Name>" + Contactos[i].nome + "</Name>"
                      if(Contactos[i].email!=""){
                        xml = xml + "<Email>" + Contactos[i].email.valueOf() + "</Email>" 
                      }
                      xml = xml  +  "<Telephone>"
                        + "<Country>" + Contactos[i].pais1 + "</Country>"
                        + "<PhoneNumber>" + Contactos[i].telefone1 + "</PhoneNumber>"
                        + "<Telephone Type="+'"'+ Contactos[i].tipo1+'"'+">"
                      + "</Telephone>"
                      if(Contactos[i].telefone2!=""){
                          xml = xml + "<Telephone>"
                          + "<Country>" + Contactos[i].pais2 + "</Country>"
                          + "<PhoneNumber>" + Contactos[i].telefone2 + "</PhoneNumber>"
                          + "<Telephone Type="+'"'+ Contactos[i].tipo2+'"'+">"
                        + "</Telephone>"   
                      }
                      if(Contactos[i].telefone3!=""){
                          xml = xml + "<Telephone>"
                          + "<Country>" + Contactos[i].pais3 + "</Country>"
                          + "<PhoneNumber>" + Contactos[i].telefone3 + "</PhoneNumber>"
                          + "<Telephone Type="+'"'+ Contactos[i].tipo3+'"'+">"
                        + "</Telephone>"  
                      }
                      if(Contactos[i].telefone4!=""){
                          xml = xml + "<Telephone>"
                          + "<Country>" + Contactos[i].pais4 + "</Country>"
                          + "<PhoneNumber>" + Contactos[i].telefone4 + "</PhoneNumber>"
                          + "<Telephone Type="+'"'+ Contactos[i].tipo4+'"'+">"
                        + "</Telephone>"  
                      }
                      if(Contactos[i].telefone5!=""){
                         xml = xml + "<Telephone>"
                         + "<Country>" + Contactos[i].pais5 + "</Country>"
                         + "<PhoneNumber>" + Contactos[i].telefone5 + "</PhoneNumber>"
                         + "<Telephone Type="+'"'+ Contactos[i].tipo5+'"'+">"
                        + "</Telephone>" 
                      }
                      xml = xml  + "<BirthDate>" + Contactos[i].DOB.valueOf() + "</BirthDate>"
                    if(Contactos[i].Facebook!=""){
                        xml = xml + "<SocialNetwork Type="+'"F"'+">" + Contactos[i].Facebook + "</SocialNetwork>"
                      }
                      if(Contactos[i].Google!=""){
                        xml = xml + "<SocialNetwork Type="+'"G"'+">" + Contactos[i].Google + "</SocialNetwork>"
                      }
                      if(Contactos[i].LinkedIn!=""){
                        xml = xml + "<SocialNetwork Type="+'"L"'+">" + Contactos[i].LinkedIn + "</SocialNetwork>"
                      }
                      if(Contactos[i].Instagram!=""){
                        xml = xml + "<SocialNetwork Type="+'"I"'+">" + Contactos[i].Instagram + "</SocialNetwork>"
                      }
                      if(Contactos[i].OutraRede!=""){
                        xml = xml + "<SocialNetwork Type="+'"O"'+">" + Contactos[i].OutraRede + "</SocialNetwork>"
                      }
                      //+ "<SocialNetwork Type="+'"'+ Contactos[i]['typesocial']+'"'+">"+Contactos[i]['social']+"</SocialNetwork>" 
                      if(Contactos[i].Obs!=""){
                          xml = xml + "<Obs>" + Contactos[i].Obs + "</Obs>"
                      }
                    
                      xml = xml  + "<Contact Group="+'"'+ Contactos[i].Amigos+'"'+Contactos[i].Familia+'"'+Contactos[i].Trabalho+'"'+Contactos[i].OutroGrupo+'"'+'"'+" IsFavorite="+'"'+ Contactos[i].Fav+'"'+">"
                                 + "</Contact>";
        }
        
        alert("Isto é o XML: "+xml+" posiçao: "+i);
        GuardarContactos(xml);
        //limpar();
        
        
        //guardarLocalStorage1(xml);
        
        //localStorage.setItem('indice',indice);
        window.location.href="ListarContacto.html";
            
        //guardarLocalStorage();
        
    }else{
        var MenssagemErro=document.createTextNode("Impossível adicionar Contactos");
        var Erro = document.getElementById("Erro");
        Erro.appendChild(MenssagemErro); // Escreve MenssagemErro no <div>
        console.log(Erro);
        aux==0;
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
    else if ((usuario.length >=1) && (dominio.length >=3) && (usuario.search("@")==-1) && (dominio.search("@")==-1) && (usuario.search(" ")==-1) && (dominio.search(" ")==-1) && (dominio.search(".")!=-1) && (dominio.indexOf(".") >=1) && (dominio.lastIndexOf(".") < dominio.length - 1)){
        
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
    var inputNumero = document.getElementById('Numero1'); // recebe o parametro do input Numero
    var inputEmail = document.getElementById('Email'); // recebe o parametro do input Email
   
    
    if (validarCampoNome(inputNome)===true && validarCampoEmail(inputEmail)===true && validarCampoNumero(inputNumero)===true){
        alert("valida -- ok");
        CarregarContactos();
        AdicionarContacto();
    }
}

function MudaEstrela(){
    var fav = document.getElementById('Fav');
    if (fav.checked) document.getElementById("estrela").src="Images/estrelaOff.png"; else document.getElementById("estrela").src="Images/estrelaOn.png";
}

function init(){
    
    AbrirLocalStorageCor();
    SelectedCorFundo();
    var color = document.getElementById('cor');
    color.addEventListener('change', Alterar);
    
    var btnEnviar = document.getElementById('Enviar');
    btnEnviar.addEventListener('click', VerificaCampos);
    
    var btnEstrela = document.getElementById("estrela");
    btnEstrela.addEventListener('click', MudaEstrela);
    
}

document.addEventListener('DOMContentLoaded', init);
