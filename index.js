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
const QUESTION_TIMEOUT = 18; // seconds

const prefix = "!question";
const salonid = "908734123181506581";
const reponseid ="913772917593112586";
const silv = "399869239630102528";

Client.on("ready", ()=>{
    console.log("bot opérationnel");
});

function askQuestion(category, question) {
    return (messageId) => {
        Client.channels.cache.get(reponseid).send(`<@${messageId}>`);
        Client.channels.cache.get(reponseid).send(`Catégorie : ** ${category} **`);

        setTimeout(() => {
            Client.channels.cache.get(reponseid).send(`<@${silv}>
Question : **${question}**`);
            setTimeout(() => {
                Client.channels.cache.get(reponseid).send("Fin du temps imparti");
            }, 1000 * QUESTION_TIMEOUT);
        }, 3000);
    };
}

const questions = {
    0: askQuestion('TEST', 'TEST'),
    1: askQuestion('Guilde', 'Citez les 5 classes de personnages de la team PVP n°1 de la guilde?'),
    2: askQuestion('Guilde', 'Qui est Mister Vixius 2021 ?'),
    3: askQuestion('Métiers', 'Quel est le taux d\'obtention de Rune Ra Vi quand on brise des Sandales Adin ?'),
    4: askQuestion('Lore', 'Où se situe le PNJ Herdegrize ?'),
    5: askQuestion('Retro', 'Quelle était la zone XP THL avant Otomaï et Frigost ?'),
    6: askQuestion('Monstres', 'Quel jeu de mot se cache dans le nom de l\'Archimonstre Scarouarze l\'Epopée ?'),
    7: askQuestion('classe', 'Quelle est la stratégie du poudre abandon du Roublard ?'),
    8: askQuestion('Monstres', 'Quel jeu de mot se cache dans le nom de l\'Archimonstre Fansiss la Brêle ?'),
    9: askQuestion('Classes', 'A quel niveau l\'Enutrof apprend-il le sort Pelle Animée ?'),
    10: askQuestion('Classes', 'Quel est l\'effet de l\'état Traqué ?'),
    11: askQuestion('Métiers', 'A la dizaine près et avec bonus pack, combien faut-il de crafts 2 cases pour passer un métier de lvl 1 à 10 ?'),
    12: askQuestion('Retro', 'Quelle est la particularité du sort Maitrise d\'Arme sur Dofus Retro ?'),
    13: askQuestion('Guilde', 'Quel membre de Vixius a récemment soloté le Glourseleste ?'),
    14: askQuestion('Classe', 'Quelle est la zone d\'effet du sort Maitrise de l\'Arc ?'),
    15: askQuestion('Univers', 'A 50k près, combien coûte le trajet en Zaap de Tainéla à Sufokia ?'),
    16: askQuestion('Univers', 'Quel succès obtient-t-on lorsqu\'on réussit le Bworker Full succès ?'),
    17: askQuestion('Monstres', 'Parmi ces monstes, lequel n\'OS pas : Gloutovore, Tynril, Fauchalak, Pitraille'),
    18: askQuestion('Retro', 'Avant Frigost, Otomaï et hors période de Nowel, qui était le plus gros boss du jeu ?'),
    19: askQuestion('Monstres', 'Quel monstre unique se trouve en -24,-27 ?'),
    20: askQuestion('Lore', 'En quelle année Bonta a-t-elle été crée ?'),
    21: askQuestion('Lore', 'Pour quelle raison Padgref Demoël est-il recherché ?'),
    22: askQuestion('Guilde', 'A la dizaine près, à combien s\'élevait le nombre d\'heures de jeu d\'Echyne au 15 novembre 2021 ?'),
    23: askQuestion('Guilde', 'Qui est Miss Vixius 2021 ?'),
    24: askQuestion('Univers', 'Comment obtient-on l\'émote Saluer ?'),
    25: askQuestion('Lore', 'D\'après le Recueil de Rabmablague, quel est le plat préféré d\'un Steamer ?'),
    26: askQuestion('Retro', 'A quelles classes appartenaient les trois bandits de Cania que l\'on pouvait trouver aléatoirement dans la zone et quel dofus se dropaient sur eux ?'),
    27: askQuestion('Univers', 'Quel donjon faut-il réussir lors de la quête Où est passée la 7e Compagnie ?'),
    28: askQuestion('Métiers', 'La Silicate est un minerai de couleur rouge ou verte ?'),
    29: askQuestion('Guilde', 'Dans la guilde, qui a récemment validé le Klime ?'),
    30: askQuestion('Guilde', 'Quel Zaap squatte Mageinster ?'),
    31: askQuestion('Guilde', 'Citez 4 alliances dont Vixius a fait partie'),
    32: askQuestion('Lore', 'Brakmar est gouverné par un Triumvirat, qu\'est ce que c\'est ?'),
    33: askQuestion('Monstres', 'Dans quelle zone peut-on trouver Musha l\'Oni ?'),
    34: askQuestion('Lore', 'Comment s\'appelle le fils adoptif d\'Otomaï ?'),
    35: askQuestion('Monstres', 'Comment se nomme l\'Archimonstre Gloutovore ?'),
    36: askQuestion('Monstres', 'Comment s\'appelle le Dragoss nommé de feu dans le Sanctuaire des Dragoeufs ?'),
    37: askQuestion('Classe', 'Quel est le coût en PA de Raulebaque ?'),
    38: askQuestion('Lore', 'D\'après le Recueil de Rabmablague, quel est le dessert préféré d\'un Osamodas ?'),
    39: askQuestion('Univers', 'A quel Zaap correspond les coordonnées 25;-4 ?'),
    40: askQuestion('Métiers', 'Quel bois peut se couper à partir du niveau 70 du métier Bucheron ?'),
    41: askQuestion('Lore', 'Quel régime politique possède Bonta ?'),
    42: askQuestion('Classe', 'Que se passe-t-il si un joueur est soigné après avoir été touché par une Griffe de Céangal ?'),
    43: askQuestion('Classe', 'A quoi sert le sort Purge ?'),
    44: askQuestion('Guilde', 'Quel Boss Mageinster a-t-il soloté avec brio dernièrement ?'),
    45: askQuestion('Classe', 'Quel est le sort spécial du Sadida ?'),
    46: askQuestion('Classe', 'Quel Masque permet de lancer le sort Picada ?'),
    47: askQuestion('Retro', 'Incarnam a-t-elle toujours existé ?'),
    48: askQuestion('Lore', 'Comment se nomme le Dragon qui a pondu le Dofus Turquoise ?'),
    49: askQuestion('Lore', 'Que signifie Ankama ?'),
    50: askQuestion('Classe', 'A partir de combien de dégats de base est-il plus intéressant d\'avoir des caractéristiques que des + Do ?'),
    51: askQuestion('Classe', 'Les dégats de la Concentration de Chakra s\'appliquent-ils sur des pièges d\'un autre Sram que celui ayant lancé le sort ?'),
    52: askQuestion('Classe', 'Quel est l\'ordre élémentaire des dégats infligés par le sort Embuscade ?'),
    53: askQuestion('Lore', 'Quel pouvoir détient Danathor à Bonta : royauté, exécutif, militaire, législatif ou judiciaire ?'),
    54: askQuestion('Lore', 'Quel est le démon le plus connu de Dofus ?'),
    55: askQuestion('Métiers', 'Lequel de ces bois n\'existe pas en vrai, l\'if, l\'ébène, le charme, le kalyptus, l\'orme ou le tremble ?'),
    56: askQuestion('Univers', 'Combien de quêtes faut-il avoir réalisé pour obtenir le succès En quête d\'exploit'),
    57: askQuestion('Monstres', 'A quel monstre correspond l\'Archimonstre Corboyard l\'Enigmatique ?'),
    58: askQuestion('Retro', 'Quelles sont les 3 classes qui n\'étaient pas dans le jeu de base ?'),
    59: askQuestion('Lore', 'D\'après le Recueil de Rabmablague, que met une Zobale pour rester élégante même dans les égouts de Brakmar ?'),
    60: askQuestion('Métiers', 'Quelle est la recette de la Cire de Gligli ?'),
    61: askQuestion('Univers', 'Quel donjon correspond à la Quête : Là-Haut sur la Montagne ?'),
    62: askQuestion('Univers', 'Combien de joueurs sont-ils nécessaires pour ouvrir l\'accès à l\'emote Applaudir ?'),
    63: askQuestion('Monstres', 'Sur quel monstre peut-on droper une Flamme spectrale ?'),
    64: askQuestion('Classes', 'Vrai ou faux, si un ennemi marche dans un piège de masse, il subira moins de dégats que s\'il marche au centre'),
    65: askQuestion('Métiers', 'A la centaine près et avec bonus pack, combien faut-il de crafts 4 cases pour passer un métier de lvl 80 à 100 ?'),
    66: askQuestion('Monstres', 'A quel monstre correspond l\'Archimonstre Pioulette la Coquine ?'),
    67: askQuestion('Classe', 'Quels sont les dommages de base occasionnés par le sort Tempête de Puissance au niveau 6 ?'),
    68: askQuestion('Guilde', 'Dans la guilde, qui possède un Vulbis ?'),
    69: askQuestion('Guilde', 'Combien de belges font partie de la guilde ?'),
    70: askQuestion('Monstres', 'Comment se nomme l\'Archimonstre Black Wabbit ?'),
    71: askQuestion('Classe', 'Le sort Trêve rend-il invulnérable ?'),
    72: askQuestion('Retro', 'Pour quelle raison le joueur XxRamboPLxX s\'est rendu célèbre ?'),
    73: askQuestion('Lore', 'Qui a écrit Mémoires d\'une Tête Brulée ?'),
    74: askQuestion('Guilde', 'Qui est abonné aux jets pourris de tutus ?'),
    75: askQuestion('Univers', 'Quelle est l\'offrande du 14 Jouiller ?'),
    76: askQuestion('Guilde', 'Quelle est la date de création de la guilde ?'),
    77: askQuestion('Stuff', 'Citez 3 armes qui peuvent soigner'),
    78: askQuestion('Guilde', 'Quelle est la couleur principale de Vixius ?'),
    79: askQuestion('Métiers', 'Quel est le point unitaire d\'une Rune PO ?'),
    80: askQuestion('Univers', 'Comment s\'appelle le mois d\'Avril dans le Krosmoz ?'),
    81: askQuestion('Classe', 'Le sort Pandalku nécessite-t-il l\'état Saoul ?'),
    82: askQuestion('Guilde', 'Quel est le symbole de la guilde ?'),
    83: askQuestion('Univers', 'Quelles sont les coordonnées du Zaap Coin des Bouftous ?'),
    84: askQuestion('Retro', 'Sur Dofus Retro, Tainéla était une zone acessible sans être abonné, vrai ou faux ?'),
    85: askQuestion('Univers', 'Quel est le bonus de l\'Almanax du 1er Javian ?'),
    86: askQuestion('Classe', 'Quel est le logo du sort Mot Vampirique ?'),
    87: askQuestion('Métiers', 'Comment s\'appelle la ressource rare correspondante à la pêche du Poisson-Chaton ?'),
    88: askQuestion('Retro', 'Sur Retro, quel était l\'exacte opposé du Coup Critique ?'),
    89: askQuestion('Univers', 'A quel film fait référence la Quête de Frigost qui consiste à prendre part à des combats secrets dans un Taverne ?'),
    90: askQuestion('Lore', 'Qui a confié le Dofus des Glaces au Comte Harebourg ?'),
    91: askQuestion('Métiers', 'Quelle est la recette de la farine complète ?'),
    92: askQuestion('Guilde', 'Busy a-t-il plus d\'heures de jeu ou d\'heures de sexe ?'),
    93: askQuestion('Monstres', 'Lequel de ces monstres n\'a pas de faiblesses face au feu : Ecumouth, Boufmouth de Guerre, Solfataré, Aperiglours, Yokaï Givrefoux'),
    94: askQuestion('Retro', 'Avant l\'arrivée de l\'Île d\'Otomaï, était-il possible de réinitialiser ses caractéristiques ?'),
    95: askQuestion('Lore', 'Comment s\'appelle l\'Art Martial des Pandawas ?'),
    96: askQuestion('Univers', 'A quoi correspond le Succès Fongicide ?'),
};

Client.on("messageCreate", message => {
    const messageId = message.author.id;

    const questionId = Object.keys(questions).find((id) => message.content === prefix + id);
    if (questionId && message.channelId === salonid) {
        questions[questionId](messageId);
    }
});

Client.login(process.env.TOKEN);
