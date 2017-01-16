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
        var finaltext = "";        
        finaltext = finaltext + "<?xml version="+'"'+"1.0"+'"'+" encoding="+'"'+"utf-8"+'"'+" ?>"
                              + "<Contacts xmlns:tp="+'"'+"http://xml.netbeans.org/schema/TP.AvC"+'"'+">" 
                              + text
                              + "</Contacts>";  
        localStorage.setItem('Contacto', finaltext);
    }else {
        console.log("Sorry, your browser does not support web storage...");
    }
    
}

function CarregarContactos(){
    if(typeof(localStorage) !== "undefined") {
        //Contactos = JSON.parse(localStorage.contacto);
        LerContactos(localStorage.getItem('Contacto'));
        //var xml = JSON.parse(localStorage.XML);
            console.log("Carregado com sucesso!");
    }else {
            console.log("Não existe informação!");
    }
}

function LerContactos(xml) {

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml, "text/xml");  
    
    var tag_contactos = xmlDoc.getElementsByTagName("Contact");
 
    for(var i=0;i<tag_contactos.length;i++){
        var tag_nome = tag_contactos[i].childNodes[0];
        Contactos.push({nome: tag_nome.childNodes[0].nodeValue, Fav: tag_contactos[i].getAttribute('IsFavorite')});
        var ultimapos=Contactos.length-1;
        
        if(tag_contactos[i].getAttribute('Group')=="naonaonaonao"){
            Contactos[ultimapos].Amigos = "nao";
            Contactos[ultimapos].Familia = "nao";
            Contactos[ultimapos].Trabalho = "nao";
            Contactos[ultimapos].OutroGrupo = "nao";
        }else{
            if(tag_contactos[i].getAttribute('Group')=="simnaonaonao"){
                Contactos[ultimapos].Amigos = "sim";
                Contactos[ultimapos].Familia = "nao";
                Contactos[ultimapos].Trabalho = "nao";
                Contactos[ultimapos].OutroGrupo = "nao";
            }else{
                if(tag_contactos[i].getAttribute('Group')=="naosimnaonao"){
                    Contactos[ultimapos].Amigos = "nao";
                    Contactos[ultimapos].Familia = "sim";
                    Contactos[ultimapos].Trabalho = "nao";
                    Contactos[ultimapos].OutroGrupo = "nao";
                }else{
                    if(tag_contactos[i].getAttribute('Group')=="simsimnaonao"){
                        Contactos[ultimapos].Amigos = "sim";
                        Contactos[ultimapos].Familia = "sim";
                        Contactos[ultimapos].Trabalho = "nao";
                        Contactos[ultimapos].OutroGrupo = "nao"   
                    }else{
                        if(tag_contactos[i].getAttribute('Group')=="naonaosimnao"){
                            Contactos[ultimapos].Amigos = "nao";
                            Contactos[ultimapos].Familia = "nao";
                            Contactos[ultimapos].Trabalho = "sim";
                            Contactos[ultimapos].OutroGrupo = "nao"
                        }else{
                            if(tag_contactos[i].getAttribute('Group')=="simnaosimnao"){
                                Contactos[ultimapos].Amigos = "sim";
                                Contactos[ultimapos].Familia = "nao";
                                Contactos[ultimapos].Trabalho = "sim";
                                Contactos[ultimapos].OutroGrupo = "nao";
                            }else{
                                if(tag_contactos[i].getAttribute('Group')=="naosimsimnao"){
                                    Contactos[ultimapos].Amigos = "nao";
                                    Contactos[ultimapos].Familia = "sim";
                                    Contactos[ultimapos].Trabalho = "sim";
                                    Contactos[ultimapos].OutroGrupo = "nao";
                                }else{
                                    if(tag_contactos[i].getAttribute('Group')=="simsimsimnao"){
                                        Contactos[ultimapos].Amigos = "sim";
                                        Contactos[ultimapos].Familia = "sim";
                                        Contactos[ultimapos].Trabalho = "sim";
                                        Contactos[ultimapos].OutroGrupo = "nao"
                                    }else{
                                        if(tag_contactos[i].getAttribute('Group')=="naonaonaosim"){
                                            Contactos[ultimapos].Amigos = "nao";
                                            Contactos[ultimapos].Familia = "nao";
                                            Contactos[ultimapos].Trabalho = "nao";
                                            Contactos[ultimapos].OutroGrupo = "sim";
                                        }else{
                                            if(tag_contactos[i].getAttribute('Group')=="simnaonaosim"){
                                                Contactos[ultimapos].Amigos = "sim";
                                                Contactos[ultimapos].Familia = "nao";
                                                Contactos[ultimapos].Trabalho = "nao";
                                                Contactos[ultimapos].OutroGrupo = "sim";
                                            }else{
                                                if(tag_contactos[i].getAttribute('Group')=="naosimnaosim"){
                                                    Contactos[ultimapos].Amigos = "nao";
                                                    Contactos[ultimapos].Familia = "sim";
                                                    Contactos[ultimapos].Trabalho = "nao";
                                                    Contactos[ultimapos].OutroGrupo = "sim";
                                                }else{
                                                    if(tag_contactos[i].getAttribute('Group')=="simsimnaosim"){
                                                        Contactos[ultimapos].Amigos = "sim";
                                                        Contactos[ultimapos].Familia = "sim";
                                                        Contactos[ultimapos].Trabalho = "nao";
                                                        Contactos[ultimapos].OutroGrupo = "sim"   
                                                    }else{
                                                        if(tag_contactos[i].getAttribute('Group')=="naonaosimsim"){
                                                            Contactos[ultimapos].Amigos = "nao";
                                                            Contactos[ultimapos].Familia = "nao";
                                                            Contactos[ultimapos].Trabalho = "sim";
                                                            Contactos[ultimapos].OutroGrupo = "sim"
                                                        }else{
                                                            if(tag_contactos[i].getAttribute('Group')=="simnaosimsim"){
                                                                Contactos[ultimapos].Amigos = "sim";
                                                                Contactos[ultimapos].Familia = "nao";
                                                                Contactos[ultimapos].Trabalho = "sim";
                                                                Contactos[ultimapos].OutroGrupo = "sim";
                                                            }else{
                                                                if(tag_contactos[i].getAttribute('Group')=="naosimsimsim"){
                                                                    Contactos[ultimapos].Amigos = "nao";
                                                                    Contactos[ultimapos].Familia = "sim";
                                                                    Contactos[ultimapos].Trabalho = "sim";
                                                                    Contactos[ultimapos].OutroGrupo = "sim";
                                                                }else{
                                                                    if(tag_contactos[i].getAttribute('Group')=="simsimsimsim"){
                                                                        Contactos[ultimapos].Amigos = "sim";
                                                                        Contactos[ultimapos].Familia = "sim";
                                                                        Contactos[ultimapos].Trabalho = "sim";
                                                                        Contactos[ultimapos].OutroGrupo = "sim";
                                                                    }    
                                                                }        
                                                            }            
                                                        }                
                                                    }                    
                                                }                        
                                            }
                                        }    
                                    }
                                }        
                            }            
                        }   
                    }
                }
            }
        }
        var tag_email = tag_contactos[i].childNodes[1];
        if(tag_email!=undefined && tag_email.nodeName=="Email"){
            Contactos[ultimapos].email= tag_email.childNodes[0].nodeValue;
            var tel1 = tag_contactos[i].childNodes[2]
            var tag_tipo_telefone1 = tel1.childNodes[2].getAttribute('Type');
            var tag_numero_telefone1 = tel1.childNodes[1].childNodes[0];
            var tag_pais1 = tel1.childNodes[0].childNodes[0];
            
            Contactos[ultimapos].telefone1= tag_numero_telefone1.nodeValue;
            Contactos[ultimapos].pais1= tag_pais1.nodeValue;
            Contactos[ultimapos].tipo1= tag_tipo_telefone1.valueOf();
                
            if(tag_contactos[i].childNodes[3]!=undefined && tag_contactos[i].childNodes[3].nodeName=="Telephone" ){
                var tel2 = tag_contactos[i].childNodes[3];///////////////////
                var tag_tipo_telefone2 = tel2.childNodes[2].getAttribute('Type');
                var tag_numero_telefone2 = tel2.childNodes[1].childNodes[0];
                var tag_pais2 = tel2.childNodes[0].childNodes[0];
                
                Contactos[ultimapos].telefone2= tag_numero_telefone2.nodeValue;
                Contactos[ultimapos].pais2= tag_pais2.nodeValue;
                Contactos[ultimapos].tipo2= tag_tipo_telefone2.valueOf();
                
                if(tag_contactos[i].childNodes[4]!=undefined && tag_contactos[i].childNodes[4].nodeName=="Telephone" ){
                    var tel3 = tag_contactos[i].childNodes[4];
                    var tag_tipo_telefone3 = tel3.childNodes[2].getAttribute('Type');
                    var tag_numero_telefone3 = tel3.childNodes[1].childNodes[0];
                    var tag_pais3 = tel3.childNodes[0].childNodes[0];
                    
                    Contactos[ultimapos].telefone3= tag_numero_telefone3.nodeValue;
                    Contactos[ultimapos].pais3= tag_pais3.nodeValue;
                    Contactos[ultimapos].tipo3= tag_tipo_telefone3.valueOf();
                    
                    if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="Telephone" ){
                        var tel4 = tag_contactos[i].childNodes[5];
                        var tag_tipo_telefone4 = tel4.childNodes[2].getAttribute('Type');
                        var tag_numero_telefone4 = tel4.childNodes[1].childNodes[0];
                        var tag_pais4 = tel4.childNodes[0].childNodes[0];
                        
                        Contactos[ultimapos].telefone4= tag_numero_telefone4.nodeValue;
                        Contactos[ultimapos].pais4= tag_pais4.nodeValue;
                        Contactos[ultimapos].tipo4= tag_tipo_telefone4.valueOf();
                        
                        if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Telephone" ){
                            var tel5 = tag_contactos[i].childNodes[6];
                            var tag_tipo_telefone5 = tel5.childNodes[2].getAttribute('Type');
                            var tag_numero_telefone5 = tel5.childNodes[1].childNodes[0];
                            var tag_pais5 = tel5.childNodes[0].childNodes[0];
                            
                            Contactos[ultimapos].telefone5= tag_numero_telefone5.nodeValue;
                            Contactos[ultimapos].pais5= tag_pais5.nodeValue;
                            Contactos[ultimapos].tipo5= tag_tipo_telefone5.valueOf();
                        
                        }else{
                            var tag_anos = tag_contactos[i].childNodes[6].childNodes[0];
                            Contactos[ultimapos].DOB= tag_anos.nodeValue;
                            
                            if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                if(tag_contactos[i].childNodes[7].getAttribute('Type')=="F"){
                                    Contactos[ultimapos].Facebook= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                    if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                        if(tag_contactos[i].childNodes[8].getAttribute('Type')=="G"){
                                            Contactos[ultimapos].Google= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;  

                                            if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                if(tag_contactos[i].childNodes[9].getAttribute('Type')=="L"){
                                                     Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;

                                                    if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="SocialNetwork"){
                                                        if(tag_contactos[i].childNodes[10].getAttribute('Type')=="I"){
                                                            Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;

                                                            if(tag_contactos[i].childNodes[11]!=undefined && tag_contactos[i].childNodes[11].nodeName=="SocialNetwork"){
                                                                if(tag_contactos[i].childNodes[11].getAttribute('Type')=="O"){
                                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[11].childNodes[0].nodeValue;

                                                                    if(tag_contactos[i].childNodes[12]!=undefined && tag_contactos[i].childNodes[12].nodeName=="Obs"){
                                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[12].childNodes[0].nodeValue;
                                                                    }    
                                                                }
                                                            }
                                                        }else{
                                                            if(tag_contactos[i].childNodes[10].getAttribute('Type')=="O"){
                                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                                if(tag_contactos[i].childNodes[11]!=undefined && tag_contactos[i].childNodes[11].nodeName=="Obs"){
                                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[11].childNodes[0].nodeValue;
                                                                }    
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(tag_contactos[i].childNodes[9].getAttribute('Type')=="I"){
                                                        Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;

                                                        if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="SocialNetwork"){
                                                            if(tag_contactos[i].childNodes[10].getAttribute('Type')=="O"){
                                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                                if(tag_contactos[i].childNodes[11]!=undefined && tag_contactos[i].childNodes[11].nodeName=="Obs"){
                                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[11].childNodes[0].nodeValue;
                                                                }    
                                                            }
                                                        }
                                                    }else{
                                                        if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                            }    
                                                        }
                                                    }
                                                }
                                            }

                                        }else{
                                            if(tag_contactos[i].childNodes[8].getAttribute('Type')=="L"){
                                                Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                               if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                   if(tag_contactos[i].childNodes[9].getAttribute('Type')=="I"){
                                                       Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;

                                                       if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="SocialNetwork"){
                                                           if(tag_contactos[i].childNodes[10].getAttribute('Type')=="O"){
                                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                               if(tag_contactos[i].childNodes[11]!=undefined && tag_contactos[i].childNodes[11].nodeName=="Obs"){
                                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[11].childNodes[0].nodeValue;
                                                                }    
                                                           }
                                                       }
                                                   }else{
                                                       if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                           if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                            }    
                                                       }
                                                   }
                                               }
                                           }else{
                                               if(tag_contactos[i].childNodes[8].getAttribute('Type')=="I"){
                                                   Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                   if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                       if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                           if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                            }
                                                       }
                                                   }
                                               }else{
                                                   if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }
                                                    }
                                               }
                                           }
                                        }
                                    }       
                                }else{
                                    if(tag_contactos[i].childNodes[7].getAttribute('Type')=="G"){
                                        Contactos[ultimapos].Google= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;  

                                        if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                            if(tag_contactos[i].childNodes[8].getAttribute('Type')=="L"){
                                                 Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                    if(tag_contactos[i].childNodes[9].getAttribute('Type')=="I"){
                                                        Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;

                                                        if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="SocialNetwork"){
                                                            if(tag_contactos[i].childNodes[10].getAttribute('Type')=="O"){
                                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                                if(tag_contactos[i].childNodes[11]!=undefined && tag_contactos[i].childNodes[11].nodeName=="Obs"){
                                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[11].childNodes[0].nodeValue;
                                                                }
                                                            }
                                                        }
                                                    }else{
                                                        if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                            }
                                                        }
                                                    }
                                                }
                                            }else{
                                                if(tag_contactos[i].childNodes[8].getAttribute('Type')=="I"){
                                                    Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                    if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                        if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                    }else{
                                        if(tag_contactos[i].childNodes[7].getAttribute('Type')=="L"){
                                            Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                           if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                               if(tag_contactos[i].childNodes[8].getAttribute('Type')=="I"){
                                                   Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                   if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                       if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                           if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                            }
                                                       }
                                                   }
                                               }else{
                                                   if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }
                                                   }
                                               }
                                           }
                                       }else{
                                           if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                               Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                               if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                   if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }
                                                   }
                                               }
                                           }else{
                                               if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }
                                               }
                                           }
                                       }
                                    }
                                }

                                if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                }else{

                                }
                                //adidionar os outros
                            }else{
                                if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                    
                                }
                            }
                        } 
                        
                    }else{
                        var tag_anos = tag_contactos[i].childNodes[5].childNodes[0];
                        Contactos[ultimapos].DOB= tag_anos.nodeValue;
                        if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                            if(tag_contactos[i].childNodes[6].getAttribute('Type')=="F"){
                                Contactos[ultimapos].Facebook= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                    if(tag_contactos[i].childNodes[7].getAttribute('Type')=="G"){
                                        Contactos[ultimapos].Google= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;  

                                        if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                            if(tag_contactos[i].childNodes[8].getAttribute('Type')=="L"){
                                                 Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                    if(tag_contactos[i].childNodes[9].getAttribute('Type')=="I"){
                                                        Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;

                                                        if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="SocialNetwork"){
                                                            if(tag_contactos[i].childNodes[10].getAttribute('Type')=="O"){
                                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;

                                                                if(tag_contactos[i].childNodes[11]!=undefined && tag_contactos[i].childNodes[11].nodeName=="Obs"){
                                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[11].childNodes[0].nodeValue;
                                                                }    
                                                            }
                                                        }
                                                    }else{
                                                        if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                            }    
                                                        }
                                                    }
                                                }
                                            }else{
                                                if(tag_contactos[i].childNodes[8].getAttribute('Type')=="I"){
                                                    Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                    if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                        if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                            }    
                                                        }
                                                    }
                                                }else{
                                                    if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }    
                                                    }
                                                }
                                            }
                                        }

                                    }else{
                                        if(tag_contactos[i].childNodes[7].getAttribute('Type')=="L"){
                                            Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                           if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                               if(tag_contactos[i].childNodes[8].getAttribute('Type')=="I"){
                                                   Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                   if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                       if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                           if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                            }    
                                                       }
                                                   }
                                               }else{
                                                   if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }    
                                                   }
                                               }
                                           }
                                       }else{
                                           if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                               Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                               if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                   if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }
                                                   }
                                               }
                                           }else{
                                               if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }
                                                }
                                           }
                                       }
                                    }
                                }       
                            }else{
                                if(tag_contactos[i].childNodes[6].getAttribute('Type')=="G"){
                                    Contactos[ultimapos].Google= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;  

                                    if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                        if(tag_contactos[i].childNodes[7].getAttribute('Type')=="L"){
                                             Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                            if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                if(tag_contactos[i].childNodes[8].getAttribute('Type')=="I"){
                                                    Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                    if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                        if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }
                                                    }
                                                }
                                            }
                                        }else{
                                            if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                                Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                                if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                    if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }
                                                    }
                                                }
                                            }else{
                                                if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                }else{
                                    if(tag_contactos[i].childNodes[6].getAttribute('Type')=="L"){
                                        Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                       if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                           if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                               Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                               if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                   if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }
                                                   }
                                               }
                                           }else{
                                               if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }
                                               }
                                           }
                                       }
                                   }else{
                                       if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                           Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                           if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                               if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }
                                               }
                                           }
                                       }else{
                                           if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                }
                                           }
                                       }
                                   }
                                }
                            }

                            if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                            }else{

                            }
                            //adidionar os outros
                        }else{
                            if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                            }
                        }
                    }
                }else{
                    var tag_anos = tag_contactos[i].childNodes[4].childNodes[0];
                    Contactos[ultimapos].DOB= tag_anos.nodeValue;
                    
                    if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                        if(tag_contactos[i].childNodes[5].getAttribute('Type')=="F"){
                            Contactos[ultimapos].Facebook= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                            if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                if(tag_contactos[i].childNodes[6].getAttribute('Type')=="G"){
                                    Contactos[ultimapos].Google= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;  

                                    if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                        if(tag_contactos[i].childNodes[7].getAttribute('Type')=="L"){
                                             Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                            if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                if(tag_contactos[i].childNodes[8].getAttribute('Type')=="I"){
                                                    Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                    if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                        if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;

                                                            if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                            }    
                                                        }
                                                    }
                                                }else{
                                                    if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }    
                                                    }
                                                }
                                            }
                                        }else{
                                            if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                                Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                                if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                    if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }    
                                                    }
                                                }
                                            }else{
                                                if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }    
                                                }
                                            }
                                        }
                                    }

                                }else{
                                    if(tag_contactos[i].childNodes[6].getAttribute('Type')=="L"){
                                        Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                       if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                           if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                               Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                               if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                   if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }    
                                                   }
                                               }
                                           }else{
                                               if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }    
                                               }
                                           }
                                       }
                                   }else{
                                       if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                           Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                           if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                               if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }
                                               }
                                           }
                                       }else{
                                           if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                }
                                            }
                                       }
                                   }
                                }
                            }       
                        }else{
                            if(tag_contactos[i].childNodes[5].getAttribute('Type')=="G"){
                                Contactos[ultimapos].Google= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;  

                                if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                    if(tag_contactos[i].childNodes[6].getAttribute('Type')=="L"){
                                         Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                        if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                            if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                                Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                                if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                    if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }
                                                    }
                                                }
                                            }else{
                                                if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }
                                                }
                                            }
                                        }
                                    }else{
                                        if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                            Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                            if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }
                                                }
                                            }
                                        }else{
                                            if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                }
                                            }
                                        }
                                    }
                                }

                            }else{
                                if(tag_contactos[i].childNodes[5].getAttribute('Type')=="L"){
                                    Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                   if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                       if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                           Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                           if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                               if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }
                                               }
                                           }
                                       }else{
                                           if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                }
                                           }
                                       }
                                   }
                               }else{
                                   if(tag_contactos[i].childNodes[5].getAttribute('Type')=="I"){
                                       Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                       if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                           if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                }
                                           }
                                       }
                                   }else{
                                       if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                           if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                            }
                                       }
                                   }
                               }
                            }
                        }

                        if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                        }
                    }else{
                        if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="Obs"){
                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                        }
                    } 
                }
            }else{
                var tag_anos = tag_contactos[i].childNodes[3].childNodes[0];
                Contactos[ultimapos].DOB= tag_anos.nodeValue;
                
                if(tag_contactos[i].childNodes[4]!=undefined && tag_contactos[i].childNodes[4].nodeName=="SocialNetwork"){
                    if(tag_contactos[i].childNodes[4].getAttribute('Type')=="F"){
                        Contactos[ultimapos].Facebook= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;
                        
                        if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                            if(tag_contactos[i].childNodes[5].getAttribute('Type')=="G"){
                                Contactos[ultimapos].Google= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;  
                                
                                if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                    if(tag_contactos[i].childNodes[6].getAttribute('Type')=="L"){
                                         Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                         
                                        if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                            if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                                Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                
                                                if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                    if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        
                                                        if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                        }    
                                                    }
                                                }
                                            }else{
                                                if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }    
                                                }
                                            }
                                        }
                                    }else{
                                        if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                            Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                            if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }    
                                                }
                                            }
                                        }else{
                                            if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                }    
                                            }
                                        }
                                    }
                                }
                                
                            }else{
                                if(tag_contactos[i].childNodes[5].getAttribute('Type')=="L"){
                                    Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                   if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                       if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                           Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                           if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                               if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }    
                                               }
                                           }
                                       }else{
                                           if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                }    
                                           }
                                       }
                                   }
                               }else{
                                   if(tag_contactos[i].childNodes[5].getAttribute('Type')=="I"){
                                       Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                       if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                           if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                }
                                           }
                                       }
                                   }else{
                                       if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                           if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                            }
                                        }
                                   }
                               }
                            }
                        }       
                    }else{
                        if(tag_contactos[i].childNodes[4].getAttribute('Type')=="G"){
                            Contactos[ultimapos].Google= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;  

                            if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                if(tag_contactos[i].childNodes[5].getAttribute('Type')=="L"){
                                     Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                    if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                        if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                            Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                            if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                    }
                                                }
                                            }
                                        }else{
                                            if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                }
                                            }
                                        }
                                    }
                                }else{
                                    if(tag_contactos[i].childNodes[5].getAttribute('Type')=="I"){
                                        Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                        if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                            if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                }
                                            }
                                        }
                                    }else{
                                        if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                            if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                            }
                                        }
                                    }
                                }
                            }

                        }else{
                            if(tag_contactos[i].childNodes[4].getAttribute('Type')=="L"){
                                Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;

                               if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                   if(tag_contactos[i].childNodes[5].getAttribute('Type')=="I"){
                                       Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                       if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                           if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                }
                                           }
                                       }
                                   }else{
                                       if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                           if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                            }
                                       }
                                   }
                               }
                           }else{
                               if(tag_contactos[i].childNodes[4].getAttribute('Type')=="I"){
                                   Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;

                                   if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                       if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                           if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                            }
                                       }
                                   }
                               }else{
                                   if(tag_contactos[i].childNodes[4].getAttribute('Type')=="O"){
                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;
                                       if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="Obs"){
                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                        }
                                   }
                               }
                           }
                        }
                    }
                    
                    if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="Obs"){
                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                    }else{
                        
                    }
                    //adidionar os outros
                }else{
                    if(tag_contactos[i].childNodes[4]!=undefined && tag_contactos[i].childNodes[4].nodeName=="Obs"){
                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;
                    }
                }
            }
        }else{
            var tel1 = tag_contactos[i].childNodes[1]
            var tag_tipo_telefone1 = tel1.childNodes[2].getAttribute('Type');
            var tag_numero_telefone1 = tel1.childNodes[1].childNodes[0];
            var tag_pais1 = tel1.childNodes[0].childNodes[0];
            
            Contactos[ultimapos].telefone1= tag_numero_telefone1.nodeValue;
            Contactos[ultimapos].pais1= tag_pais1.nodeValue;
            Contactos[ultimapos].tipo1= tag_tipo_telefone1.valueOf();

            if(tag_contactos[i].childNodes[2]!=undefined && tag_contactos[i].childNodes[2].nodeName=="Telephone" ){
                var tel2 = tag_contactos[i].childNodes[2];
                var tag_tipo_telefone2 = tel2.childNodes[2].getAttribute('Type');
                var tag_numero_telefone2 = tel2.childNodes[1].childNodes[0];
                var tag_pais2 = tel2.childNodes[0].childNodes[0];
                
                Contactos[ultimapos].telefone2= tag_numero_telefone2.nodeValue;
                Contactos[ultimapos].pais2= tag_pais2.nodeValue;
                Contactos[ultimapos].tipo2= tag_tipo_telefone2.valueOf();
                
                if(tag_contactos[i].childNodes[3]!=undefined && tag_contactos[i].childNodes[3].nodeName=="Telephone" ){
                    var tel3 = tag_contactos[i].childNodes[3];
                    var tag_tipo_telefone3 = tel3.childNodes[2].getAttribute('Type');
                    var tag_numero_telefone3 = tel3.childNodes[1].childNodes[0];
                    var tag_pais3 = tel3.childNodes[0].childNodes[0];
                    
                    Contactos[ultimapos].telefone3= tag_numero_telefone3.nodeValue;
                    Contactos[ultimapos].pais3= tag_pais3.nodeValue;
                    Contactos[ultimapos].tipo3= tag_tipo_telefone3.valueOf();
                    
                    if(tag_contactos[i].childNodes[4]!=undefined && tag_contactos[i].childNodes[4].nodeName=="Telephone" ){
                        var tel4 = tag_contactos[i].childNodes[4];
                        var tag_tipo_telefone4 = tel4.childNodes[2].getAttribute('Type');
                        var tag_numero_telefone4 = tel4.childNodes[1].childNodes[0];
                        var tag_pais4 = tel4.childNodes[0].childNodes[0];
                        
                        Contactos[ultimapos].telefone4= tag_numero_telefone4.nodeValue;
                        Contactos[ultimapos].pais4= tag_pais4.nodeValue;
                        Contactos[ultimapos].tipo4= tag_tipo_telefone4.valueOf();
                        
                        if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="Telephone" ){
                            var tel5 = tag_contactos[i].childNodes[5];
                            var tag_tipo_telefone5 = tel5.childNodes[2].getAttribute('Type');
                            var tag_numero_telefone5 = tel5.childNodes[1].childNodes[0];    
                            var tag_pais5 = tel5.childNodes[0].childNodes[0];
                            
                            Contactos[ultimapos].telefone5= tag_numero_telefone5.nodeValue;
                            Contactos[ultimapos].pais5= tag_pais5.nodeValue;
                            Contactos[ultimapos].tipo5= tag_tipo_telefone5.valueOf();
                        
                        }else{
                            var tag_anos = tag_contactos[i].childNodes[5].childNodes[0];
                            Contactos[ultimapos].DOB= tag_anos.nodeValue;
                            
                            if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                if(tag_contactos[i].childNodes[6].getAttribute('Type')=="F"){
                                    Contactos[ultimapos].Facebook= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                    if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                        if(tag_contactos[i].childNodes[7].getAttribute('Type')=="G"){
                                            Contactos[ultimapos].Google= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;  

                                            if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                if(tag_contactos[i].childNodes[8].getAttribute('Type')=="L"){
                                                     Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                    if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                        if(tag_contactos[i].childNodes[9].getAttribute('Type')=="I"){
                                                            Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;

                                                            if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="SocialNetwork"){
                                                                if(tag_contactos[i].childNodes[10].getAttribute('Type')=="O"){
                                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;

                                                                    if(tag_contactos[i].childNodes[11]!=undefined && tag_contactos[i].childNodes[11].nodeName=="Obs"){
                                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[11].childNodes[0].nodeValue;
                                                                    }    
                                                                }
                                                            }
                                                        }else{
                                                            if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                                if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                                }    
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(tag_contactos[i].childNodes[8].getAttribute('Type')=="I"){
                                                        Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                        if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                            if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                                if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                                }    
                                                            }
                                                        }
                                                    }else{
                                                        if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                            if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            }    
                                                        }
                                                    }
                                                }
                                            }

                                        }else{
                                            if(tag_contactos[i].childNodes[7].getAttribute('Type')=="L"){
                                                Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                               if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                   if(tag_contactos[i].childNodes[8].getAttribute('Type')=="I"){
                                                       Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                       if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                           if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                               if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                                }    
                                                           }
                                                       }
                                                   }else{
                                                       if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                           if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            }    
                                                       }
                                                   }
                                               }
                                           }else{
                                               if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                                   Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                                   if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                       if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                           if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            }
                                                       }
                                                   }
                                               }else{
                                                   if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }
                                                    }
                                               }
                                           }
                                        }
                                    }       
                                }else{
                                    if(tag_contactos[i].childNodes[6].getAttribute('Type')=="G"){
                                        Contactos[ultimapos].Google= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;  

                                        if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                            if(tag_contactos[i].childNodes[7].getAttribute('Type')=="L"){
                                                 Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                                if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                    if(tag_contactos[i].childNodes[8].getAttribute('Type')=="I"){
                                                        Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                        if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                            if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                                if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                                }
                                                            }
                                                        }
                                                    }else{
                                                        if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                            if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            }
                                                        }
                                                    }
                                                }
                                            }else{
                                                if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                                    Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                                    if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                        if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                            if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                    }else{
                                        if(tag_contactos[i].childNodes[6].getAttribute('Type')=="L"){
                                            Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                           if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                               if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                                   Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                                   if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                       if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                           if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            }
                                                       }
                                                   }
                                               }else{
                                                   if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }
                                                   }
                                               }
                                           }
                                       }else{
                                           if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                               Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                               if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                   if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }
                                                   }
                                               }
                                           }else{
                                               if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }
                                               }
                                           }
                                       }
                                    }
                                }

                                if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                }else{

                                }
                                //adidionar os outros
                            }else{
                                if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                    
                                }
                            }
                        } 
                        
                    }else{
                        var tag_anos = tag_contactos[i].childNodes[4].childNodes[0];
                        Contactos[ultimapos].DOB= tag_anos.nodeValue;
                        
                        if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                            if(tag_contactos[i].childNodes[5].getAttribute('Type')=="F"){
                                Contactos[ultimapos].Facebook= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                    if(tag_contactos[i].childNodes[6].getAttribute('Type')=="G"){
                                        Contactos[ultimapos].Google= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;  

                                        if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                            if(tag_contactos[i].childNodes[7].getAttribute('Type')=="L"){
                                                 Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                                if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                    if(tag_contactos[i].childNodes[8].getAttribute('Type')=="I"){
                                                        Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                        if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="SocialNetwork"){
                                                            if(tag_contactos[i].childNodes[9].getAttribute('Type')=="O"){
                                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;

                                                                if(tag_contactos[i].childNodes[10]!=undefined && tag_contactos[i].childNodes[10].nodeName=="Obs"){
                                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[10].childNodes[0].nodeValue;
                                                                }    
                                                            }
                                                        }
                                                    }else{
                                                        if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                            if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            }    
                                                        }
                                                    }
                                                }
                                            }else{
                                                if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                                    Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                                    if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                        if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                            if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            }    
                                                        }
                                                    }
                                                }else{
                                                    if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }    
                                                    }
                                                }
                                            }
                                        }

                                    }else{
                                        if(tag_contactos[i].childNodes[6].getAttribute('Type')=="L"){
                                            Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                           if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                               if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                                   Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                                   if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                       if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                           if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                            }    
                                                       }
                                                   }
                                               }else{
                                                   if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }    
                                                   }
                                               }
                                           }
                                       }else{
                                           if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                               Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                               if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                   if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }
                                                   }
                                               }
                                           }else{
                                               if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }
                                                }
                                           }
                                       }
                                    }
                                }       
                            }else{
                                if(tag_contactos[i].childNodes[5].getAttribute('Type')=="G"){
                                    Contactos[ultimapos].Google= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;  

                                    if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                        if(tag_contactos[i].childNodes[6].getAttribute('Type')=="L"){
                                             Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                            if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                                    Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                                    if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                        if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                            if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }
                                                    }
                                                }
                                            }
                                        }else{
                                            if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                                Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                                if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                    if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }
                                                    }
                                                }
                                            }else{
                                                if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                }else{
                                    if(tag_contactos[i].childNodes[5].getAttribute('Type')=="L"){
                                        Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                       if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                           if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                               Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                               if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                   if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }
                                                   }
                                               }
                                           }else{
                                               if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }
                                               }
                                           }
                                       }
                                   }else{
                                       if(tag_contactos[i].childNodes[5].getAttribute('Type')=="I"){
                                           Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                           if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                               if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }
                                               }
                                           }
                                       }else{
                                           if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                }
                                           }
                                       }
                                   }
                                }
                            }

                            if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                            }else{

                            }
                            //adidionar os outros
                        }else{
                            if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="Obs"){
                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                            }
                        }
                    }
                }else{
                    var tag_anos = tag_contactos[i].childNodes[3].childNodes[0];
                    Contactos[ultimapos].DOB= tag_anos.nodeValue;
                    
                    if(tag_contactos[i].childNodes[4]!=undefined && tag_contactos[i].childNodes[4].nodeName=="SocialNetwork"){
                        if(tag_contactos[i].childNodes[4].getAttribute('Type')=="F"){
                            Contactos[ultimapos].Facebook= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;

                            if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                if(tag_contactos[i].childNodes[5].getAttribute('Type')=="G"){
                                    Contactos[ultimapos].Google= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;  

                                    if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                        if(tag_contactos[i].childNodes[6].getAttribute('Type')=="L"){
                                             Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                            if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                if(tag_contactos[i].childNodes[7].getAttribute('Type')=="I"){
                                                    Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;

                                                    if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="SocialNetwork"){
                                                        if(tag_contactos[i].childNodes[8].getAttribute('Type')=="O"){
                                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;

                                                            if(tag_contactos[i].childNodes[9]!=undefined && tag_contactos[i].childNodes[9].nodeName=="Obs"){
                                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[9].childNodes[0].nodeValue;
                                                            }    
                                                        }
                                                    }
                                                }else{
                                                    if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }    
                                                    }
                                                }
                                            }
                                        }else{
                                            if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                                Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                                if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                    if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }    
                                                    }
                                                }
                                            }else{
                                                if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }    
                                                }
                                            }
                                        }
                                    }

                                }else{
                                    if(tag_contactos[i].childNodes[5].getAttribute('Type')=="L"){
                                        Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                       if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                           if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                               Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                               if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                   if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                       if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }    
                                                   }
                                               }
                                           }else{
                                               if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }    
                                               }
                                           }
                                       }
                                   }else{
                                       if(tag_contactos[i].childNodes[5].getAttribute('Type')=="I"){
                                           Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                           if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                               if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }
                                               }
                                           }
                                       }else{
                                           if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                }
                                            }
                                       }
                                   }
                                }
                            }       
                        }else{
                            if(tag_contactos[i].childNodes[4].getAttribute('Type')=="G"){
                                Contactos[ultimapos].Google= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;  

                                if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                    if(tag_contactos[i].childNodes[5].getAttribute('Type')=="L"){
                                         Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                        if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                            if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                                Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;

                                                if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                    if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                        if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }
                                                    }
                                                }
                                            }else{
                                                if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }
                                                }
                                            }
                                        }
                                    }else{
                                        if(tag_contactos[i].childNodes[5].getAttribute('Type')=="I"){
                                            Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                            if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                                if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }
                                                }
                                            }
                                        }else{
                                            if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                                if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                }
                                            }
                                        }
                                    }
                                }

                            }else{
                                if(tag_contactos[i].childNodes[4].getAttribute('Type')=="L"){
                                    Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;

                                   if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                       if(tag_contactos[i].childNodes[5].getAttribute('Type')=="I"){
                                           Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                           if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                               if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }
                                               }
                                           }
                                       }else{
                                           if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                }
                                           }
                                       }
                                   }
                               }else{
                                   if(tag_contactos[i].childNodes[4].getAttribute('Type')=="I"){
                                       Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;

                                       if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                           if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                }
                                           }
                                       }
                                   }else{
                                       if(tag_contactos[i].childNodes[4].getAttribute('Type')=="O"){
                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;
                                           if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="Obs"){
                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                            }
                                       }
                                   }
                               }
                            }
                        }

                        if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="Obs"){
                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                        }
                    }else{
                        if(tag_contactos[i].childNodes[4]!=undefined && tag_contactos[i].childNodes[4].nodeName=="Obs"){
                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;
                        }
                    } 
                }
            }else{
                var tag_anos = tag_contactos[i].childNodes[2].childNodes[0];
                Contactos[ultimapos].DOB= tag_anos.nodeValue;
                
                if(tag_contactos[i].childNodes[3]!=undefined && tag_contactos[i].childNodes[3].nodeName=="SocialNetwork"){
                    if(tag_contactos[i].childNodes[3].getAttribute('Type')=="F"){
                        Contactos[ultimapos].Facebook= tag_contactos[i].childNodes[3].childNodes[0].nodeValue;
                        
                        if(tag_contactos[i].childNodes[4]!=undefined && tag_contactos[i].childNodes[4].nodeName=="SocialNetwork"){
                            if(tag_contactos[i].childNodes[4].getAttribute('Type')=="G"){
                                Contactos[ultimapos].Google= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;  
                                
                                if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                    if(tag_contactos[i].childNodes[5].getAttribute('Type')=="L"){
                                         Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                         
                                        if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                            if(tag_contactos[i].childNodes[6].getAttribute('Type')=="I"){
                                                Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                
                                                if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="SocialNetwork"){
                                                    if(tag_contactos[i].childNodes[7].getAttribute('Type')=="O"){
                                                        Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                        
                                                        if(tag_contactos[i].childNodes[8]!=undefined && tag_contactos[i].childNodes[8].nodeName=="Obs"){
                                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[8].childNodes[0].nodeValue;
                                                        }    
                                                    }
                                                }
                                            }else{
                                                if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }    
                                                }
                                            }
                                        }
                                    }else{
                                        if(tag_contactos[i].childNodes[5].getAttribute('Type')=="I"){
                                            Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                            if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                                if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }    
                                                }
                                            }
                                        }else{
                                            if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                                if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                }    
                                            }
                                        }
                                    }
                                }
                                
                            }else{
                                if(tag_contactos[i].childNodes[4].getAttribute('Type')=="L"){
                                    Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;

                                   if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                       if(tag_contactos[i].childNodes[5].getAttribute('Type')=="I"){
                                           Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                           if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                               if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                   Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                   if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }    
                                               }
                                           }
                                       }else{
                                           if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                }    
                                           }
                                       }
                                   }
                               }else{
                                   if(tag_contactos[i].childNodes[4].getAttribute('Type')=="I"){
                                       Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;

                                       if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                           if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                }
                                           }
                                       }
                                   }else{
                                       if(tag_contactos[i].childNodes[4].getAttribute('Type')=="O"){
                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;
                                           if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="Obs"){
                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                            }
                                        }
                                   }
                               }
                            }
                        }       
                    }else{
                        if(tag_contactos[i].childNodes[3].getAttribute('Type')=="G"){
                            Contactos[ultimapos].Google= tag_contactos[i].childNodes[3].childNodes[0].nodeValue;  

                            if(tag_contactos[i].childNodes[4]!=undefined && tag_contactos[i].childNodes[4].nodeName=="SocialNetwork"){
                                if(tag_contactos[i].childNodes[4].getAttribute('Type')=="L"){
                                     Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;

                                    if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                        if(tag_contactos[i].childNodes[5].getAttribute('Type')=="I"){
                                            Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;

                                            if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="SocialNetwork"){
                                                if(tag_contactos[i].childNodes[6].getAttribute('Type')=="O"){
                                                    Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                    if(tag_contactos[i].childNodes[7]!=undefined && tag_contactos[i].childNodes[7].nodeName=="Obs"){
                                                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[7].childNodes[0].nodeValue;
                                                    }
                                                }
                                            }
                                        }else{
                                            if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                                if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                }
                                            }
                                        }
                                    }
                                }else{
                                    if(tag_contactos[i].childNodes[4].getAttribute('Type')=="I"){
                                        Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;

                                        if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                            if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                                Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                                if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                }
                                            }
                                        }
                                    }else{
                                        if(tag_contactos[i].childNodes[4].getAttribute('Type')=="O"){
                                            Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;
                                            if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="Obs"){
                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                            }
                                        }
                                    }
                                }
                            }

                        }else{
                            if(tag_contactos[i].childNodes[3].getAttribute('Type')=="L"){
                                Contactos[ultimapos].LinkedIn= tag_contactos[i].childNodes[3].childNodes[0].nodeValue;

                               if(tag_contactos[i].childNodes[4]!=undefined && tag_contactos[i].childNodes[4].nodeName=="SocialNetwork"){
                                   if(tag_contactos[i].childNodes[4].getAttribute('Type')=="I"){
                                       Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;

                                       if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="SocialNetwork"){
                                           if(tag_contactos[i].childNodes[5].getAttribute('Type')=="O"){
                                               Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                               if(tag_contactos[i].childNodes[6]!=undefined && tag_contactos[i].childNodes[6].nodeName=="Obs"){
                                                    Contactos[ultimapos].OBS= tag_contactos[i].childNodes[6].childNodes[0].nodeValue;
                                                }
                                           }
                                       }
                                   }else{
                                       if(tag_contactos[i].childNodes[4].getAttribute('Type')=="O"){
                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;
                                           if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="Obs"){
                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                            }
                                       }
                                   }
                               }
                           }else{
                               if(tag_contactos[i].childNodes[3].getAttribute('Type')=="I"){
                                   Contactos[ultimapos].Instagram= tag_contactos[i].childNodes[3].childNodes[0].nodeValue;

                                   if(tag_contactos[i].childNodes[4]!=undefined && tag_contactos[i].childNodes[4].nodeName=="SocialNetwork"){
                                       if(tag_contactos[i].childNodes[4].getAttribute('Type')=="O"){
                                           Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;
                                           if(tag_contactos[i].childNodes[5]!=undefined && tag_contactos[i].childNodes[5].nodeName=="Obs"){
                                                Contactos[ultimapos].OBS= tag_contactos[i].childNodes[5].childNodes[0].nodeValue;
                                            }
                                       }
                                   }
                               }else{
                                   if(tag_contactos[i].childNodes[3].getAttribute('Type')=="O"){
                                       Contactos[ultimapos].OutraRede= tag_contactos[i].childNodes[3].childNodes[0].nodeValue;
                                       if(tag_contactos[i].childNodes[4]!=undefined && tag_contactos[i].childNodes[4].nodeName=="Obs"){
                                            Contactos[ultimapos].OBS= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;
                                        }
                                   }
                               }
                           }
                        }
                    }
                    
                    if(tag_contactos[i].childNodes[4]!=undefined && tag_contactos[i].childNodes[4].nodeName=="Obs"){
                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[4].childNodes[0].nodeValue;
                    }else{
                        
                    }
                    //adidionar os outros
                }else{
                    if(tag_contactos[i].childNodes[3]!=undefined && tag_contactos[i].childNodes[3].nodeName=="Obs"){
                        Contactos[ultimapos].OBS= tag_contactos[i].childNodes[3].childNodes[0].nodeValue;
                    }
                }
            }
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
    
    console.log("AdicionarContacto -- ok");
    
    if (telefone2.value !== "" && telefone2.value === telefone1.value){
        console.log("Número igual ao de cima!");
        alert("Número igual ao de cima!");
        aux=1;
    }else{
        if (telefone3.value !== ""){
            if(telefone3.value === telefone2.value || telefone3.value === telefone1.value){
                console.log("Número igual ao de cima!");
                alert("Número igual ao de cima!");
                aux=1;
            }else{
                if (telefone4.value !== ""){
                    if (telefone4.value === telefone3.value || telefone4.value === telefone2.value || telefone4.value === telefone1.value){
                        console.log("Número igual ao de cima!");
                        alert("Número igual ao de cima!");
                        aux=1;
                    }else{
                        if (telefone5.value !== ""){
                            if (telefone5.value === telefone4.value || telefone5.value === telefone3.value || telefone5.value === telefone2.value || telefone5.value === telefone1.value){
                                console.log("Número igual ao de cima!");
                                console.log("Número igual ao de cima!");
                                aux=1;
                            }else{
                                for (var i=0; i<Contactos.length; i++){
                                    if (telefone1.value === Contactos[i].telefone1 || telefone1.value === Contactos[i].telefone2 || telefone1.value === Contactos[i].telefone3 || telefone1.value === Contactos[i].telefone4 || telefone1.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }
                                    if (telefone2.value === Contactos[i].telefone1 || telefone2.value === Contactos[i].telefone2 || telefone2.value === Contactos[i].telefone3 || telefone2.value === Contactos[i].telefone4 || telefone2.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }
                                    if (telefone3.value === Contactos[i].telefone1 || telefone3.value === Contactos[i].telefone2 || telefone3.value === Contactos[i].telefone3 || telefone3.value === Contactos[i].telefone4 || telefone3.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }
                                    if (telefone4.value === Contactos[i].telefone1 || telefone4.value === Contactos[i].telefone2 || telefone4.value === Contactos[i].telefone3 || telefone4.value === Contactos[i].telefone4 || telefone4.value === Contactos[i].telefone5){

                                        console.log("Número já existe!");
                                        alert("Número já existe!");
                                        aux=1;
                                    }
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
        
        var indice=Contactos.length-1;
        
        
        
        var xml = "";
        
        for(var i = 0; i<Contactos.length;i++){
        id = i;
        xml = xml     + "<Contact Group="+'"' + Contactos[i].Amigos + Contactos[i].Familia + Contactos[i].Trabalho + Contactos[i].OutroGrupo+'" '+  "IsFavorite="+'"'+ Contactos[i].Fav+'"'+">"
                      + "<Name>" + Contactos[i].nome + "</Name>"
                      if(Contactos[i].email!="" && Contactos[i].email!=undefined){
                        xml = xml + "<Email>" + Contactos[i].email.valueOf() + "</Email>" 
                      }
                      xml = xml  +  "<Telephone>"
                        + "<Country>" + Contactos[i].pais1 + "</Country>"
                        + "<PhoneNumber>" + Contactos[i].telefone1 + "</PhoneNumber>"
                        + "<Telephone Type="+'"'+ Contactos[i].tipo1+'"'+"></Telephone>"
                      + "</Telephone>"
                      if(Contactos[i].telefone2!="" && Contactos[i].telefone2!=undefined){
                          xml = xml + "<Telephone>"
                          + "<Country>" + Contactos[i].pais2 + "</Country>"
                          + "<PhoneNumber>" + Contactos[i].telefone2 + "</PhoneNumber>"
                          + "<Telephone Type="+'"'+ Contactos[i].tipo2+'"'+"></Telephone>"
                        + "</Telephone>"   
                      }
                      if(Contactos[i].telefone3!="" && Contactos[i].telefone3!=undefined){
                          xml = xml + "<Telephone>"
                          + "<Country>" + Contactos[i].pais3 + "</Country>"
                          + "<PhoneNumber>" + Contactos[i].telefone3 + "</PhoneNumber>"
                          + "<Telephone Type="+'"'+ Contactos[i].tipo3+'"'+"></Telephone>"
                        + "</Telephone>"  
                      }
                      if(Contactos[i].telefone4!="" && Contactos[i].telefone4!=undefined){
                          xml = xml + "<Telephone>"
                          + "<Country>" + Contactos[i].pais4 + "</Country>"
                          + "<PhoneNumber>" + Contactos[i].telefone4 + "</PhoneNumber>"
                          + "<Telephone Type="+'"'+ Contactos[i].tipo4+'"'+"></Telephone>"
                        + "</Telephone>"  
                      }
                      if(Contactos[i].telefone5!="" && Contactos[i].telefone5!=undefined){
                         xml = xml + "<Telephone>"
                         + "<Country>" + Contactos[i].pais5 + "</Country>"
                         + "<PhoneNumber>" + Contactos[i].telefone5 + "</PhoneNumber>"
                         + "<Telephone Type="+'"'+ Contactos[i].tipo5+'"'+"></Telephone>"
                        + "</Telephone>" 
                      }
                      if(Contactos[i].DOB!=""){
                          xml = xml  + "<BirthDate>" + Contactos[i].DOB + "</BirthDate>"
                      }
                      else{
                         var d = new Date(); 
                         xml = xml  + "<BirthDate>" + d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + "</BirthDate>" 
                      }
                    if(Contactos[i].Facebook!="" && Contactos[i].Facebook!=undefined){
                        xml = xml + "<SocialNetwork Type="+'"F"'+">" + Contactos[i].Facebook + "</SocialNetwork>"
                      }
                      if(Contactos[i].Google!="" && Contactos[i].Google!=undefined){
                        xml = xml + "<SocialNetwork Type="+'"G"'+">" + Contactos[i].Google + "</SocialNetwork>"
                      }
                      if(Contactos[i].LinkedIn!="" && Contactos[i].LinkedIn!=undefined){
                        xml = xml + "<SocialNetwork Type="+'"L"'+">" + Contactos[i].LinkedIn + "</SocialNetwork>"
                      }
                      if(Contactos[i].Instagram!="" && Contactos[i].Instagram!=undefined){
                        xml = xml + "<SocialNetwork Type="+'"I"'+">" + Contactos[i].Instagram + "</SocialNetwork>"
                      }
                      if(Contactos[i].OutraRede!="" && Contactos[i].OutraRede!=undefined){
                        xml = xml + "<SocialNetwork Type="+'"O"'+">" + Contactos[i].OutraRede + "</SocialNetwork>"
                      }
                      //+ "<SocialNetwork Type="+'"'+ Contactos[i]['typesocial']+'"'+">"+Contactos[i]['social']+"</SocialNetwork>" 
                      if(Contactos[i].Obs!="" && Contactos[i].Obs!=undefined){
                          xml = xml + "<Obs>" + Contactos[i].Obs + "</Obs>"
                      }
                    
                      xml = xml  + "</Contact>";
        }
        GuardarContactos(xml);
        //limpar();
        
        
        //localStorage.setItem('indice',indice);
        localStorage.setItem('indice',indice);
        window.location.href="ListarContacto.html";
            
        
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
        AdicionarContacto();
    }
}

function MudaEstrela(){
    var fav = document.getElementById('Fav');
    if (fav.checked) document.getElementById("estrela").src="Images/estrelaOff.png"; else document.getElementById("estrela").src="Images/estrelaOn.png";
}

function AbrirLocalStorage(){
    if (localStorage.Contacto != null){
        CarregarContactos();
    }else{
        var MenssagemErro=document.createTextNode("Impossivel editar Contacto");
        var Erro = document.getElementById("Erro");
        Erro.appendChild(MenssagemErro); // Escreve MenssagemErro no <div>
        console.log(Erro);
    }
    
    if(localStorage.fundo != null){
        CorFundo = localStorage.fundo;
    }else{
        CorFundo = 'cornsilk'; //DEFAULT
    }
}

function init(){
    
    AbrirLocalStorage();
    AbrirLocalStorageCor();
    SelectedCorFundo();
    var color = document.getElementById('cor');
    color.addEventListener('change', Alterar);
    
    var btnEnviar = document.getElementById('Enviar');
    btnEnviar.type="image";
    btnEnviar.src="Images/Enviar.png";
    btnEnviar.addEventListener('click', VerificaCampos);
    
    var btnEstrela = document.getElementById("estrela");
    btnEstrela.addEventListener('click', MudaEstrela);
    
}

document.addEventListener('DOMContentLoaded', init);
