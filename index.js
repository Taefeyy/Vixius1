const { SSL_OP_EPHEMERAL_RSA } = require("constants");
const Discord = require("discord.js");
const { traceDeprecation } = require("process");
const Client = new Discord.Client({
    intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
});

const prefix = "!question";
const salonid = "908734123181506581";
const reponseid ="913772917593112586";
var x = 0;
var u = 10;
const silv = "399869239630102528";

Client.on("ready", ()=>{
    console.log("bot opérationnel");
});

Client.on("messageCreate", message => {
    messageid=message.author.id
    if(message.content === prefix + "0" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** TEST **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+"\nQuestion : **TEST**");
        var temps = setInterval(function(){
            var y = x++ ;
            //var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du temps imparti");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                }
        }, 1000);
        
    }
    }

        if(message.content === prefix + "1" && message.channelId === salonid){
            Client.channels.cache.get(reponseid).send("<@"+messageid+">");
            Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
            setTimeout(question, 3000);
            function question(){
            Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+"\nQuestion : **Citez les 5 classes de personnages de la team PVP n°1 de la guilde?**");
            var temps = setInterval(function(){
                var y = x++ ;
                var z = u-- ;
                    if (y == 15 ) {
                        Client.channels.cache.get(reponseid).send("Fin du temps imparti");
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        clearInterval(temps);
                    }
            }, 1000);
            
        }
    }

    if(message.content === prefix + "2" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+"\nQuestion : **Qui est Mister Vixius 2021 ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                    //var y = 0;
                }
        }, 1000);
        
    }
    }

     
        if(message.content === prefix + "3" && message.channelId === salonid){
            Client.channels.cache.get(reponseid).send("<@"+messageid+">");
            Client.channels.cache.get(reponseid).send("Catégorie : ** Métiers **");
            setTimeout(question, 3000);
            function question(){
            Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel est le taux d'obtention de Rune Ra Vi quand on brise des Sandales Adin ?**");
            var temps = setInterval(function(){
                var y = x++ ;
                var z = u-- ;
                    if (y == 15 ) {
                        Client.channels.cache.get(reponseid).send("Fin du chrono");
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        var y = x--;
                        clearInterval(temps);
                       // var y = 0;
                    }
            }, 1000);
            
        }
    }

    if(message.content === prefix + "4" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Où se situe le PNJ Herdegrize ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                    //var y = 0;
                }
        }, 1000);
        
    }
    } 

    if(message.content === prefix + "5" && message.channelId === salonid){
    Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Retro **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quelle était la zone XP THL avant Otomaï et Frigost ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);
    
    }
    }

    if(message.content === prefix + "6" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Monstres **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel jeu de mot se cache dans le nom de l'Archimonstre Scarouarze l'Epopée ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    }

    
    
    if(message.content === prefix + "7" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** classe **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quelle est la stratégie du poudre abandon du Roublard ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "8" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Monstres **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel jeu de mot se cache dans le nom de l'Archimonstre Fansiss la Brêle ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "9" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Classes **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **A quel niveau l'Enutrof apprend-il le sort Pelle Animée ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "10" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Classes **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel est l'effet de l'état Traqué ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "11" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Métiers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **A la dizaine près et avec bonus pack, combien faut-il de crafts 2 cases pour passer un métier de lvl 1 à 10 ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "12" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Retro **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quelle est la particularité du sort Maitrise d'Arme sur Dofus Retro ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "13" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel membre de Vixius a récemment soloté le Glourseleste ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "14" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quelle est la zone d'effet du sort Maitrise de l'Arc ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "15" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **A 50k près, combien coûte le trajet en Zaap de Tainéla à Sufokia ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                    //var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "16" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel succès obtient-t-on lorsqu'on réussit le Bworker Full succès ?** ");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
                //var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "17" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Monstres **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Parmi ces monstes, lequel n'OS pas : Gloutovore, Tynril, Fauchalak, Pitraille**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "18" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Retro **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **vant Frigost, Otomaï et hors période de Nowel, qui était le plus gros boss du jeu ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "19" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Monstres **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel monstre unique se trouve en -24,-27 ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                    //var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "20" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **En quelle année Bonta a-t-elle été crée ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "21" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Pour quelle raison Padgref Demoël est-il recherché ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "22" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **A la dizaine près, à combien s'élevait le nombre d'heures de jeu d'Echyne au 15 novembre 2021 ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "23" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Qui est Miss Vixius 2021 ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "24" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Comment obtient-on l'émote Saluer ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
                //var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "25" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **D'après le Recueil de Rabmablague, quel est le plat préféré d'un Steamer ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                    //var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "26" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Retro **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+"\nQuestion : **A quelles classes appartenaient les trois bandits de Cania que l'on pouvait trouver aléatoirement dans la zone et quel dofus se dropaient sur eux ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "27" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel donjon faut-il réussir lors de la quête Où est passée la 7e Compagnie ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "28" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Métiers **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **La Silicate est un minerai de couleur rouge ou verte ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
                //var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "29" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Dans la guilde, qui a récemment validé le Klime ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                    //var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "30" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel Zaap squatte Mageinster ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "31" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Citez 4 alliances dont Vixius a fait partie**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "32" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Brakmar est gouverné par un Triumvirat, qu'est ce que c'est ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "33" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Monstres **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+"\nQuestion : **Dans quelle zone peut-on trouver Musha l'Oni ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "34" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Comment s'appelle le fils adoptif d'Otomaï ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "35" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Monstres **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Comment se nomme l'Archimonstre Gloutovore ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                 //   var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "36" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Monstres **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Comment s'appelle le Dragoss nommé de feu dans le Sanctuaire des Dragoeufs ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "37" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel est le coût en PA de Raulebaque ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "38" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **D'après le Recueil de Rabmablague, quel est le dessert préféré d'un Osamodas ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
                //var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "39" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **A quel Zaap correspond les coordonnées 25;-4 ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "40" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Métiers **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" Quel bois peut se couper à partir du niveau 70 du métier Bucheron ?");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "41" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel régime politique possède Bonta ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "42" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Que se passe-t-il si un joueur est soigné après avoir été touché par une Griffe de Céangal ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "43" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **A quoi sert le sort Purge ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "44" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel Boss Mageinster a-t-il soloté avec brio dernièrement ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
                //var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "45" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel est le sort spécial du Sadida ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "46" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel Masque permet de lancer le sort Picada ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "47" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Retro **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Incarnam a-t-elle toujours existé ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "48" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Comment se nomme le Dragon qui a pondu le Dofus Turquoise ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "49" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Que signifie Ankama ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "50" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **A partir de combien de dégats de base est-il plus intéressant d'avoir des caractéristiques que des + Do ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "51" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Les dégats de la Concentration de Chakra s'appliquent-ils sur des pièges d'un autre Sram que celui ayant lancé le sort ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "52" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel est l'ordre élémentaire des dégats infligés par le sort Embuscade ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 

    if(message.content === prefix + "53" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel pouvoir détient Danathor à Bonta : royauté, exécutif, militaire, législatif ou judiciaire ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                 //   var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "54" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel est le démon le plus connu de Dofus ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "55" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Métiers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Lequel de ces bois n'existe pas en vrai, l'if, l'ébène, le charme, le kalyptus, l'orme ou le tremble ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "56" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Combien de quêtes faut-il avoir réalisé pour obtenir le succès En quête d'exploit**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "57" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Monstres **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **A quel monstre correspond l'Archimonstre Corboyard l'Enigmatique ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "58" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Retro **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quelles sont les 3 classes qui n'étaient pas dans le jeu de base ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "59" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **D'après le Recueil de Rabmablague, que met une Zobale pour rester élégante même dans les égouts de Brakmar ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "60" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Métiers **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quelle est la recette de la Cire de Gligli ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "61" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel donjon correspond à la Quête : Là-Haut sur la Montagne ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                    //var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "62" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Combien de joueurs sont-ils nécessaires pour ouvrir l'accès à l'emote Applaudir ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
                //var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "63" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Monstres **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Sur quel monstre peut-on droper une Flamme spectrale ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "64" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Classes **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Vrai ou faux, si un ennemi marche dans un piège de masse, il subira moins de dégats que s'il marche au centre**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
             //   var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "65" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Métiers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **A la centaine près et avec bonus pack, combien faut-il de crafts 4 cases pour passer un métier de lvl 80 à 100 ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "66" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Monstres **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **A quel monstre correspond l'Archimonstre Pioulette la Coquine ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "67" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quels sont les dommages de base occasionnés par le sort Tempête de Puissance au niveau 6 ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "68" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Dans la guilde, qui possède un Vulbis ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "69" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Combien de belges font partie de la guilde ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "70" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Monstres **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Comment se nomme l'Archimonstre Black Wabbit ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "71" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Le sort Trêve rend-il invulnérable ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                    //var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "72" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Retro **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Pour quelle raison le joueur XxRamboPLxX s'est rendu célèbre ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "73" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Qui a écrit Mémoires d'une Tête Brulée ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "74" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Qui est abonné aux jets pourris de tutus ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "75" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quelle est l'offrande du 14 Jouiller ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "76" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quelle est la date de création de la guilde ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
                //var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "77" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Stuff **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Citez 3 armes qui peuvent soigner**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "78" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quelle est la couleur principale de Vixius ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
                //var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "79" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Métiers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel est le point unitaire d'une Rune PO ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "80" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Comment s'appelle le mois d'Avril dans le Krosmoz ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
                //var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "81" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Le sort Pandalku nécessite-t-il l'état Saoul ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                //    var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "82" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel est le symbole de la guilde ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
             //   var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "83" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quelles sont les coordonnées du Zaap Coin des Bouftous ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "84" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Retro **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Sur Dofus Retro, Tainéla était une zone acessible sans être abonné, vrai ou faux ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "85" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel est le bonus de l'Almanax du 1er Javian ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "86" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Classe **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quel est le logo du sort Mot Vampirique ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "87" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Métiers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Comment s'appelle la ressource rare correspondante à la pêche du Poisson-Chaton ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "88" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Retro **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **ur Retro, quel était l'exacte opposé du Coup Critique ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "89" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **A quel film fait référence la Quête de Frigost qui consiste à prendre part à des combats secrets dans un Taverne ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                    //var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "90" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Qui a confié le Dofus des Glaces au Comte Harebourg ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
                //var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "91" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Métiers **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Quelle est la recette de la farine complète ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                   // var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "92" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Guilde **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Busy a-t-il plus d'heures de jeu ou d'heures de sexe ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
                //var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "93" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Monstres **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Lequel de ces monstres n'a pas de faiblesses face au feu : Ecumouth, Boufmouth de Guerre, Solfataré, Aperiglours, Yokaï Givrefoux**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                 //   var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "94" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Retro **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **Avant l'arrivée de l'Île d'Otomaï, était-il possible de réinitialiser ses caractéristiques ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
              //  var y = 0;
            }
    }, 1000);

    }
    } 
    
    if(message.content === prefix + "95" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
        Client.channels.cache.get(reponseid).send("Catégorie : ** Lore **");
        setTimeout(question, 3000);
        function question(){
        Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+"\nQuestion : **Comment s'appelle l'Art Martial des Pandawas ?**");
        var temps = setInterval(function(){
            var y = x++ ;
            var z = u-- ;
                if (y == 15 ) {
                    Client.channels.cache.get(reponseid).send("Fin du chrono");
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    var y = x--;
                    clearInterval(temps);
                  //  var y = 0;
                }
        }, 1000);
        
    }
    }

    if(message.content === prefix + "96" && message.channelId === salonid){
        Client.channels.cache.get(reponseid).send("<@"+messageid+">");
    Client.channels.cache.get(reponseid).send("Catégorie : ** Univers **");
    setTimeout(question, 3000);
    function question(){
    Client.channels.cache.get(reponseid).send("<@" +silv+ ">"+" \nQuestion : **A quoi correspond le Succès Fongicide ?**");
    var temps = setInterval(function(){
        var y = x++ ;
        var z = u-- ;
            if (y == 15 ) {
                Client.channels.cache.get(reponseid).send("Fin du chrono");
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                var y = x--;
                clearInterval(temps);
               // var y = 0;
            }
    }, 1000);

    }
    }
});

Client.login(process.env.token);