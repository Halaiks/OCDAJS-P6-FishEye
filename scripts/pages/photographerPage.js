import Api from "../api/Api.js";
import PhotographerHeader from "../templates/PhotographerHeader.js";
import PhotographerMedias from "../templates/PhotographerMedias.js";
import Photographer from "../models/Photographer.js";
import MediasFactory from "../factories/MediasFactory.js";
import { displayTotalLikes } from "../utils/likes.js";
import { openCloseFormContact, validateForm } from "../utils/form.js";
import { openCloseFilterMenu, displayMediaWithFilter } from "../utils/filter.js";
import { displayLightbox } from "../utils/lightbox.js";

// Création d'une instance de l'API pour les photographes
const photographersApi = new Api("data/photographers.json");
// Récupération de l'ID du photographe depuis l'URL
const photographerId = new URLSearchParams(window.location.search).get("id");

// Fonction pour obtenir un photographe par son ID
export const getPhotographerById = async () => {
    const { photographers, media } = await photographersApi.get();
    const photographer = photographers
        .map(photographer => new Photographer(photographer))
        .find(photographer => photographer.id == photographerId);
    const medias = media
        .map(media => new MediasFactory(media))
        .filter(media => media.photographerId == photographerId);
    return { photographer, medias };
};

// Fonction pour afficher la page de profil d'un photographe
const displayProfilePage = async () => {
    const { photographer, medias } = await getPhotographerById();

    // Création de l'en-tête du photographe
    const headerTemplate = new PhotographerHeader(photographer);
    headerTemplate.createPhotographerHeader();
    // Création des médias du photographe
    const mediasTemplate = new PhotographerMedias(photographer, medias);
    mediasTemplate.createPhotographerMedias();

    // Affichage du total des likes, gestion du formulaire de contact, du menu de filtre et de la lightbox
    displayTotalLikes();
    openCloseFormContact();
    openCloseFilterMenu();
    displayMediaWithFilter(mediasTemplate);
    validateForm();
    displayLightbox(mediasTemplate);
};

// Appel de la fonction pour afficher la page de profil
displayProfilePage();
