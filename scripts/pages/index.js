import Api from "../api/Api.js";
import Photographer from "../models/Photographer.js";
import PhotographerCard from "../templates/index.js";

// Sélection de la section du DOM où les cartes des photographes seront ajoutées
const photographersSection = document.querySelector(".photographer_section");

// Création d'une instance de l'API pour obtenir les données depuis le fichier JSON
const photographersApi = new Api("data/photographers.json");

// Fonction asynchrone pour afficher les photographes
const displayPhotographers = async () => {

    // Récupération des données de l'API
    const photographersData = await photographersApi.get();
    
    // Accès à la liste des photographes depuis les données récupérées
    const photographers = photographersData.photographers;

    // Transformation des données des photographes en instances de Photographer, 
    // puis génération de chaque carte de photographe et ajout à la section du DOM
    photographers
        .map(photographer => new Photographer(photographer)) 
        .forEach(photographer => { 
            const template = new PhotographerCard(photographer); 
            const photographerCard = template.createPhotographerCard(); 
            photographersSection.appendChild(photographerCard);
        });
};

displayPhotographers();
