/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Contactos = [];
var CorFundo;

function GuardarContactos(text) {    
    if (typeof (localStorage) !== "undefined")   {      
        var finaltext = "";        
        finaltext = finaltext + "<?xml version="+'"'+"1.0"+'"'+" encoding="+'"'+"utf-8"+'"'+" ?>"
                              + "<Contacts xmlns:tp="+'"'+"http://xml.netbeans.org/schema/TP.AvC"+'"'+">" 
                              + text
                              + "</Contacts>";  
        localStorage.setItem('Contacto', finaltext);
    }else {
        alert("Sorry, your browser does not support web storage...");
    }
    
}

function ClientesparaXML(){
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
                    xml = xml  + "<BirthDate>" + Contactos[i].DOB + "</BirthDate>"
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

    alert("Isto é o XML: "+xml+" posiçao: "+i);
    GuardarContactos(xml);
}

function CarregarContactos(){
    if(typeof(localStorage) !== "undefined") {
        loadDataFromDatabase(localStorage.getItem('Contacto'));
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

function guardarLocalStorage(){
    var s = JSON.stringify(Contactos);
    localStorage.setItem('contacto', s);
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

function removerFavorito(){
    var conf=confirm ("Tem a certeza que deseja remover dos Favoritos?");
    if(conf==true){
        var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
        var indice = ObterIndice(Contactos,x);
        if (indice > -1) {
            Contactos[indice].Fav = "nao";
            window.location.reload();
        }else{
            alert("erro ao remover!!");
        }
        ClientesparaXML();
    }
}

function ListarContactos () {
    Contactos.sort(OrdenarFavoritos);
    
    for (var i=0; i<=Contactos.length-1;i++){
        if(Contactos[i].Fav == "sim"){
            
            var artigo=document.createElement("article");
        
            var nome=document.createElement("p");
            var pais1=document.createElement("p");
            var telefone1=document.createElement("p");
          /*var email=document.createElement("p");
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
            var outroGrupo=document.createElement("p");*/
            var Espaco=document.createElement("p");

            nome.id=Contactos[i].nome;

            var nomet=document.createTextNode(Contactos[i].nome);
            var pais1t=document.createTextNode("País: " + Contactos[i].pais1);
            var telefone1t=document.createTextNode("Contacto: " + Contactos[i].telefone1);
          /*var emailt=document.createTextNode(Contactos[i].email);
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
            */
            var Espacot=document.createTextNode("************************");
            
            nome.appendChild(nomet);
            pais1.appendChild(pais1t);
            telefone1.appendChild(telefone1t);
          /*email.appendChild(emailt);
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
            outroGrupo.appendChild(OutroGrupot);*/
            Espaco.appendChild(Espacot);

            artigo.appendChild(nome);
            artigo.appendChild(pais1);
            artigo.appendChild(telefone1);
           /*artigo.appendChild(email);
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
            artigo.appendChild(outroGrupo);*/

            document.getElementById('Contactos').appendChild(artigo);

            var btnremove = document.createElement('input');
            btnremove.src="Images/estrelaOn.png";
            btnremove.type="image";
            btnremove.addEventListener('click', removerFavorito);
            
            artigo.appendChild(btnremove);

            artigo.appendChild(Espaco);
        }
    }
}

function AbrirLocalStorage() {
    if (localStorage.Contacto != null && localStorage.Contacto != "[]"){
        CarregarContactos()
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
        CorFundo = 'cornsilk';
    }
}

function init(){
    AbrirLocalStorage();
    SelectedCorFundo();
    var color = document.getElementById('cor');
    color.addEventListener('change', Alterar);
}
document.addEventListener('DOMContentLoaded', init);