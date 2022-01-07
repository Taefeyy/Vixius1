/* Variables, tableaux, objets etc... */

var ind = require("../index.js");

//Exportation des variables.
module.exports.prefix= "#";                         /*utilisé pour les commandes /!\ pour un fonctionnement optimale dans l'index il y a un préfix
                                                    qui a directement été définit par la valeur et pas par la variable, prudence lors de modification
                                                    il faudra également le modifier là bas!*/

module.exports.on=0;                                //utilisé pour définir si l'event quesiton est on/off

module.exports.t=0;                                 //utilisé pour définir le temps de réponse disponible

module.exports.autorisation=[];                     //tableau utilisé pour enregister l'id des maîtres du jeu

module.exports.role=[];                             /*tableau utilisé définissant si c'est un rôle ou une personne enregistrée en tant que mj
                                                    ce tableau travaille en parrallèle avec le tableau autorisation, la valeur de role[0] dépendra
                                                    de si l'idée enregistrée en autorisation[0] est une id utilsateur ou rôle*/

module.exports.msgChanId=ind.message.channelId;     //utilisé pour récupérer l'id du salon dans le quel un message est envoyé

module.exports.idSalonQuestion=0;                   //utilisé pour définir l'id du salon de le quel les questions seront posées

module.exports.identification =[];
module.exports.horaire=[];
module.exports.intervale = 30000;
module.exports.occupe=0;