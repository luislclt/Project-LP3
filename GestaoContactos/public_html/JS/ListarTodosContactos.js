/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Contactos = [];
var CorFundo;

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
    localStorage.setItem('contacto', s); //guardar 
}

function guardarLocalStorageContact(indice){
    var s = JSON.stringify(Contactos);
    localStorage.setItem('contacto', s); //guardar 
    localStorage.setItem('indice',indice);
}

function OrdenarContactos(a, b) {
    if(a.nome>b.nome){
         return 1; // a maior
    }
    if(a.nome<b.nome){
         return -1; // b maior
    }
    return 0; // igual
}

function ObterIndice(array, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i].nome === value) {
            return i; // retorna posicao
        }
    }
    return -1; // nao encontrou value
}

function removerContacto(){
    var conf=confirm ("Tem a certeza que deseja remover?"); // usa confirm
    if(conf==true){
        var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
        var indice = ObterIndice(Contactos,x);
        if (indice > -1) {
            Contactos.splice(indice, 1);
            ClientesparaXML();
            window.location.reload();
        }else{
            var MenssagemErro=document.createTextNode("Erro ao remover Contacto!");
            var Erro = document.getElementById("Erro");
            Erro.appendChild(MenssagemErro); // Escreve MenssagemErro no <div>
            console.log(Erro);
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
    guardarLocalStorageContact(indice); // guarda indice a editar
    window.location.href="Editar.html";
}

function mostarContacto(){
    var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
    var indice = ObterIndice(Contactos,x);
    guardarLocalStorageContact(indice);
    window.location.href="ListarContacto.html";
}

function AdicionarFavoritos() {
    
    var x = this.parentNode.getElementsByTagName("p")[0].getAttribute("id"); 
    var indice = ObterIndice(Contactos,x);
    var btnfavorito = document.createElement('input');
    if (Contactos[indice].Fav == "sim") {
        Contactos[indice].Fav = "nao";
        btnfavorito.src="Images/estrelaOff.png";
        //alert("Removido dos Favoritos com Sucesso!");
        console.log("Removido dos Favoritos com Sucesso!");
        window.location.reload();
    }else{
        Contactos[indice].Fav = "sim";
        btnfavorito.src="Images/estrelaOn.png";
        //alert("Adicionado aos Favoritos com Sucesso!");
        console.log("Adicionado aos Favoritos com Sucesso!");
        window.location.reload();
    }
        
    guardarLocalStorage();
}

function ListarContactos(){
    
    Contactos.sort(OrdenarContactos);
        
    for (var i=0; i<=Contactos.length-1; i++){
        
        var artigo=document.createElement("article");
        var nome=document.createElement("p");
      /*var email=document.createElement("p");
        var pais1=document.createElement("p");
        var pais2=document.createElement("p");
        var pais3=document.createElement("p");
        var pais4=document.createElement("p");
        var pais5=document.createElement("p");
        var telefone1=document.createElement("p");
        var telefone2=document.createElement("p");
        var telefone3=document.createElement("p");
        var telefone4=document.createElement("p");
        var telefone5=document.createElement("p");
        var tipo1=document.createElement("p");
        var tipo2=document.createElement("p");
        var tipo3=document.createElement("p");
        var tipo4=document.createElement("p");
        var tipo5=document.createElement("p");
        var DOB=document.createElement("p");
        var Facebook=document.createElement("p");
        var Google=document.createElement("p");
        var LinkedIn=document.createElement("p");
        var Instagram=document.createElement("p");
        var OutraRede=document.createElement("p");
        var Obs=document.createElement("p");
        var grupo=document.createElement("p");
        var amigos=document.createElement("p");
        var trabalho=document.createElement("p");
        var familia=document.createElement("p");
        var outroGrupo=document.createElement("p");
       */var Fav=document.createElement("p");
        var Espaco=document.createElement("p");
        var btnfavorito = document.createElement('input');
        btnfavorito.type="image";
        btnfavorito.addEventListener('click', AdicionarFavoritos);
        var paragrafo=document.createElement("p");   
        
        nome.id=Contactos[i].nome;
        
        var nometext=document.createTextNode("Nome: " + Contactos[i].nome);
        /*if (Contactos[i].email == "") var emailtext=document.createTextNode(Contactos[i].email); else var emailtext=document.createTextNode("Email: " + Contactos[i].email);
        
        var pais1text=document.createTextNode("País: " + Contactos[i].pais1);
        if(Contactos[i].telefone2 !== "") var pais2text=document.createTextNode("País: " + Contactos[i].pais2); else var pais2text=document.createTextNode("");
        if(Contactos[i].telefone3 !== "") var pais3text=document.createTextNode("País: " + Contactos[i].pais3); else var pais3text=document.createTextNode("");
        if(Contactos[i].telefone4 !== "") var pais4text=document.createTextNode("País: " + Contactos[i].pais4); else var pais4text=document.createTextNode("");
        if(Contactos[i].telefone5 !== "") var pais5text=document.createTextNode("País: " + Contactos[i].pais5); else var pais5text=document.createTextNode("");
        
        var telefone1text=document.createTextNode("Contacto1: " + Contactos[i].telefone1);
        if(Contactos[i].telefone2 !== "") var telefone2text=document.createTextNode("Contacto2: " + Contactos[i].telefone2); else var telefone2text=document.createTextNode("");
        if(Contactos[i].telefone3 !== "") var telefone3text=document.createTextNode("Contacto3: " + Contactos[i].telefone3); else var telefone3text=document.createTextNode("");
        if(Contactos[i].telefone4 !== "") var telefone4text=document.createTextNode("Contacto4: " + Contactos[i].telefone4); else var telefone4text=document.createTextNode("");
        if(Contactos[i].telefone5 !== "") var telefone5text=document.createTextNode("Contacto5: " + Contactos[i].telefone5); else var telefone5text=document.createTextNode("");
        
        
        
        if (Contactos[i].tipo1 == "P") var tipo1text=document.createTextNode("Tipo: Pessoal"); else if (Contactos[i].tipo1 == "W") var tipo1text=document.createTextNode("Tipo: Work"); else if (Contactos[i].tipo1 == "O") var tipo1text=document.createTextNode("Tipo: Other");
        if (Contactos[i].telefone2 != ""){
            if (Contactos[i].tipo2 == "P"){
                var tipo2text=document.createTextNode("Tipo: Pessoal");
            }else{
                if (Contactos[i].tipo2 == "W"){
                    var tipo2text=document.createTextNode("Tipo: Work");
                }else{
                    if (Contactos[i].tipo2 == "O"){
                        var tipo2text=document.createTextNode("Tipo: Other");
                    }
                }
            }
        }else{
            var tipo2text=document.createTextNode("");
        }


        if (Contactos[i].telefone3 != ""){
            if (Contactos[i].tipo3 == "P"){
                var tipo3text=document.createTextNode("Tipo: Pessoal");
            }else{
                if (Contactos[i].tipo3 == "W"){
                    var tipo3text=document.createTextNode("Tipo: Work");
                }else{
                    if (Contactos[i].tipo3 == "O"){
                        var tipo3text=document.createTextNode("Tipo: Other");
                    }
                }
            }
        }else{
            var tipo3text=document.createTextNode("");
        }


        if (Contactos[i].telefone4 != ""){
            if (Contactos[i].tipo4 == "P"){
                var tipo4text=document.createTextNode("Tipo: Pessoal");
            }else{
                if (Contactos[i].tipo4 == "W"){
                    var tipo4text=document.createTextNode("Tipo: Work");
                }else{
                    if (Contactos[i].tipo4 == "O"){
                        var tipo4text=document.createTextNode("Tipo: Other");
                    }
                }
            }
        }else{
            var tipo4text=document.createTextNode("");
        }


        if (Contactos[i].telefone5 != ""){
            if (Contactos[i].tipo5 == "P"){
                var tipo5text=document.createTextNode("Tipo: Pessoal");
            }else{
                if (Contactos[i].tipo5 == "W"){
                    var tipo5text=document.createTextNode("Tipo: Work");
                }else{
                    if (Contactos[i].tipo5 == "O"){
                        var tipo5text=document.createTextNode("Tipo: Other");
                    }
                }
            }
        }else{
            var tipo5text=document.createTextNode("");
        }
    
    
    
        if (Contactos[i].DOB == "") var DOBtext=document.createTextNode(Contactos[i].DOB); else var DOBtext=document.createTextNode("Data de Nascimento: " + Contactos[i].DOB);
        if (Contactos[i].Facebook == "") var Facebooktext=document.createTextNode(Contactos[i].Facebook); else var Facebooktext=document.createTextNode("Facebook: " + Contactos[i].Facebook);
        if (Contactos[i].Google == "") var Googletext=document.createTextNode(Contactos[i].Google); else var Googletext=document.createTextNode("Google+: " + Contactos[i].Google);
        if (Contactos[i].LinkedIn == "") var LinkedIntext=document.createTextNode(Contactos[i].LinkedIn); else var LinkedIntext=document.createTextNode("LinkedIn: " + Contactos[i].LinkedIn);
        if (Contactos[i].Instagram == "") var Instagramtext=document.createTextNode(Contactos[i].Instagram); else var Instagramtext=document.createTextNode("Instagram: " + Contactos[i].Instagram);
        if (Contactos[i].OutraRede == "") var OutraRedetext=document.createTextNode(Contactos[i].OutraRede); else var OutraRedetext=document.createTextNode("Outro: " + Contactos[i].OutraRede);
        if (Contactos[i].Obs == "") var Obstext=document.createTextNode(Contactos[i].Obs); else var Obstext=document.createTextNode("Observações: " + Contactos[i].Obs);
        
        if(Contactos[i].Amigos == "sim" && Contactos[i].Trabalho == "sim" || Contactos[i].Amigos == "sim" && Contactos[i].Familia == "sim" || Contactos[i].Amigos == "sim" && Contactos[i].OutroGrupo == "sim" || Contactos[i].Trabalho == "sim" && Contactos[i].Familia == "sim" || Contactos[i].Trabalho == "sim" && Contactos[i].OutroGrupo == "sim" || Contactos[i].Familia == "sim" && Contactos[i].OutroGrupo == "sim") var grupotext=document.createTextNode("Grupos: ");
        else if (Contactos[i].Amigos == "nao" && Contactos[i].Trabalho == "nao" && Contactos[i].Familia == "nao" && Contactos[i].OutroGrupo == "nao") var grupotext=document.createTextNode("");
        else var grupotext=document.createTextNode("Grupo: ");
        
        if (Contactos[i].Amigos == "sim") var Amigostext=document.createTextNode("Amigos"); else var Amigostext=document.createTextNode("");
        if (Contactos[i].Trabalho == "sim") var Trabalhotext=document.createTextNode("Trabalho"); else var Trabalhotext=document.createTextNode("");
        if (Contactos[i].Familia == "sim") var Familiatext=document.createTextNode("Familia"); else var Familiatext=document.createTextNode("");
        if (Contactos[i].OutroGrupo == "sim") var OutroGrupotext=document.createTextNode("Outro"); else var OutroGrupotext=document.createTextNode("");
      */if(Contactos[i].Fav == "sim"){
            btnfavorito.src="Images/estrelaOn.png";
        }else{
            btnfavorito.src="Images/estrelaOff.png";
        }
        
        var Espacotext = document.createTextNode("************************");
        
        nome.appendChild(nometext);
      /*email.appendChild(emailtext);
        pais1.appendChild(pais1text);
        telefone1.appendChild(telefone1text);
        tipo1.appendChild(tipo1text);
        pais2.appendChild(pais2text);
        telefone2.appendChild(telefone2text);
        tipo2.appendChild(tipo2text);
        pais3.appendChild(pais3text);
        telefone3.appendChild(telefone3text);
        tipo3.appendChild(tipo3text);
        pais4.appendChild(pais4text);
        telefone4.appendChild(telefone4text);
        tipo4.appendChild(tipo4text);
        pais5.appendChild(pais5text);
        telefone5.appendChild(telefone5text);
        tipo5.appendChild(tipo5text);
        DOB.appendChild(DOBtext);
        Facebook.appendChild(Facebooktext);
        Google.appendChild(Googletext);
        LinkedIn.appendChild(LinkedIntext);
        Instagram.appendChild(Instagramtext);
        OutraRede.appendChild(OutraRedetext);
        Obs.appendChild(Obstext);
        grupo.appendChild(grupotext);
        amigos.appendChild(Amigostext);
        trabalho.appendChild(Trabalhotext);
        familia.appendChild(Familiatext);
        outroGrupo.appendChild(OutroGrupotext);
        Espaco.appendChild(Espacotext);
         */
         
        artigo.appendChild(nome);
      /*artigo.appendChild(email);
        artigo.appendChild(pais1);
        artigo.appendChild(telefone1);
        artigo.appendChild(tipo1);
        artigo.appendChild(pais2);
        artigo.appendChild(telefone2);
        artigo.appendChild(tipo2);
        artigo.appendChild(pais3);
        artigo.appendChild(telefone3);
        artigo.appendChild(tipo3);
        artigo.appendChild(pais4);
        artigo.appendChild(telefone4);
        artigo.appendChild(tipo4);
        artigo.appendChild(pais5);
        artigo.appendChild(telefone5);
        artigo.appendChild(tipo5);
        artigo.appendChild(DOB);
        artigo.appendChild(Facebook);
        artigo.appendChild(Google);
        artigo.appendChild(LinkedIn);
        artigo.appendChild(Instagram);
        artigo.appendChild(OutraRede);
        artigo.appendChild(Obs);
        artigo.appendChild(grupo);
        artigo.appendChild(amigos);
        artigo.appendChild(trabalho);
        artigo.appendChild(familia);
        artigo.appendChild(outroGrupo);*/
        artigo.appendChild(btnfavorito);
        artigo.appendChild(paragrafo);
        
        
        document.getElementById('Contactos').appendChild(artigo);
        
        var btnremove = document.createElement('input');
        btnremove.type="image";
        btnremove.src="Images/remover.png";
        btnremove.width="88"; 
        btnremove.height="48";
        btnremove.addEventListener('click', removerContacto);
        artigo.appendChild(btnremove);
        
        var btnedita = document.createElement('input');
        btnedita.type="image";
        btnedita.src="Images/edit.png";
        btnedita.width="88"; 
        btnedita.height="48";
        btnedita.addEventListener('click', editarContacto);
        artigo.appendChild(btnedita);
        
        var btnmostrar = document.createElement('input');
        btnmostrar.type="image";
        btnmostrar.src="Images/mostrar.png";
        btnmostrar.width="88"; 
        btnmostrar.height="48";
        btnmostrar.addEventListener('click', mostarContacto);
        artigo.appendChild(btnmostrar);
        
    }
}

function AbrirLocalStorage() {
    if (localStorage.Contacto != null){
        //Contactos = JSON.parse(localStorage.contacto);
        ListarContactos();
    }else{
        var MenssagemErro=document.createTextNode("Não existem Contactos");
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
    CarregarContactos();
    AbrirLocalStorage();
    SelectedCorFundo();
    var color = document.getElementById('cor');
    color.addEventListener('change', Alterar);
}
document.addEventListener('DOMContentLoaded', init);