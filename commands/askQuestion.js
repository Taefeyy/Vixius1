// Nécéssité de nettoyer le code et ajouter les commentaires
/* Demande d'une question */


module.exports = {
    demandequestion :() => {


        var y = 0; 


        //Import des variables, tableaux, objects etc... venant d'un autre fichier du projet.
        var ind = require('../index.js');
        var variables = require('./variables.js');
        var question = require('./questionsListe.js');


            messageid = ind.message.author.id;                                            //Questions
    
    
    
            if (variables.on != 1){                                                             //Vérification si l'événement est commencé
    
                ind.message.reply("Désolé, les questions sont actuellement fermées");
    
                return;
    
            };
    
            if (variables.idSalonQuestion === 0){                                            //Vérification si un salon pour les questions a bien été définit
    
                ind.message.reply("Vous devriez demander à un maître du jeu si un salon a bien été séléctionné pour éxecuter cette requête, si nécessaire voir commande : ?help");

                return;
    
            };
    
            if (ind.message.channelId != variables.idSalonQuestion &&  variables.idSalonQuestion != 0){               //Vérification si la question est posée dans le bon salon
    
                ind.message.reply("Êtes-vous certain d'avoir posé la question dans le bon salon ? Essayez plutôt en : "+"<#"+variables.idSalonQuestion+">");
    
                return;
    
            };
    
    
    
            if (variables.t === 0){                                                       //avertissement si la temporisation n'a pas été définie
    
                ind.message.reply("Êtes-vous certain d'avoir défini un temps imparti ? \nSi ce n'est pas le cas, veuillez en définir un avant de faire la demande d'une nouvelle question");
    
                return;  
    
            };
    
            let pos = variables.identification.indexOf(ind.message.author.id);
            let tempsRestant = Math.round((variables.horaire[pos]+variables.t-Date.now())/1000) ;
            var txt = ind.message.content;
            var numb = txt.match(/\d/g);
            numb = numb.join("");
    
            if (numb>question.length) return;
    
            if (pos === -1 ){                          
            variables.identification.push(ind.message.author.id);
            variables.horaire.push(Date.now());
            ind.Client.channels.cache.get(variables.idSalonQuestion).send("<@"+ind.message.author.id+">");
            ind.Client.channels.cache.get(variables.idSalonQuestion).send(question[numb-1]);
            variables.occupe = 1;
            ind.Client.channels.cache.get(variables.idSalonQuestion).send("Temps : "+variables.t/1000+" secondes").then((chrono) =>{
    
                    var temps2 = setInterval(function(){
    
                        if (y >= variables.t/1000 ) {
    
                            ind.Client.channels.cache.get(variables.idSalonQuestion).send("temps écoulé");
    
                            for (let mj = variables.autorisation.length-1; mj >= 0; mj--){
                                if (variables.role[mj]==="user"){
                                ind.Client.channels.cache.get(variables.idSalonQuestion).send(`<@`+variables.autorisation[mj]+">");
                                }
                                else {
                                ind.Client.channels.cache.get(variables.idSalonQuestion).send(`<@&`+variables.autorisation[mj]+">");   
                                }
                            }
                            
                            y -= variables.t/1000;
    
                            clearInterval(temps2);
                            variables.occupe=0;
                            return;
    
                        }
    
                        y += 1;
    
                        chrono.edit("Temps : "+(variables.t/1000-y)+" secondes");   
    
                    }, 1000);
    
                });
    
            }
    
            else if  (tempsRestant < 0){
            variables.identification.splice(pos, 1);
    
        
            variables.horaire.splice(pos,1);
            ind.Client.channels.cache.get(variables.idSalonQuestion).send("<@"+ind.message.author.id+">");
            ind.Client.channels.cache.get(variables.idSalonQuestion).send(question[numb-1]);
            variables.occupe = 1;
            ind.Client.channels.cache.get(variables.idSalonQuestion).send("Temps : "+variables.t/1000+" secondes").then((chrono) =>{
    
                    var temps2 = setInterval(function(){
                        y += 1;
                        chrono.edit("Temps : "+((variables.t/1000)-y)+" secondes"); 
                        if (y >= variables.t/1000 ) {
    
                            ind.Client.channels.cache.get(variables.idSalonQuestion).send("temps écoulé");
    
                            for (let mj = variables.autorisation.length-1; mj >= 0; mj--){
                                if (variables.role[mj]==="user"){
                                ind.Client.channels.cache.get(variables.idSalonQuestion).send(`<@`+variables.autorisation[mj]+">");
                                }
                                else {
                                ind.Client.channels.cache.get(variables.idSalonQuestion).send(`<@&`+variables.autorisation[mj]+">");   
                                }
                            }
                            
                            y -= variables.t/1000;
    
                            clearInterval(temps2);
                            variables.occupe=0;
                            return;
    
                        }
    
                        //y += 1;
    
                    }, 1000);
    
                });
            variables.identification.push(ind.message.author.id);
            variables.horaire.push(Date.now());
            }
    
            else {
            ind.message.reply(`Vous devez encore patienter ${tempsRestant} secondes.`);
            };
        
    }
};