import { Media } from '../templates/mediaFactory.js';


// Fonction pour récupérer les données des photographes à partir d'un fichier JSON
async function getPhotographers() {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    return { photographers: data.photographers };
}

// Fonction pour obtenir l'ID du photographe à partir de l'URL
function getPhotographerIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Fonction pour récupérer les données d'un photographe spécifique
async function getPhotographerData() {
    const photographerId = getPhotographerIdFromUrl();
    const { photographers } = await getPhotographers();
    const photographer = photographers.find(p => p.id == photographerId);
    
    if (photographer) {
        displayPhotographer(photographer);
        await getMediaData(photographer);
    }
}

// Fonction pour récupérer les médias d'un photographe spécifique
async function getMediaData(photographer) {
    const response = await fetch('data/photographers.json'); 
    const data = await response.json();
    const media = data.media.filter(m => m.photographerId == photographer.id); 

    if (media.length > 0) {
        displayMedia(media, photographer);
    }
}

// Fonction pour afficher les informations d'un photographe sur la page
function displayPhotographer(photographer) {
    const photographHeader = document.querySelector('.photograph-header');
    const photographerModel = photographerTemplate(photographer);

    // Ajouter les informations du photographe
    const userCardDOM = photographerModel.detailUserCard();
    photographHeader.appendChild(userCardDOM);

    // Sélectionner le bouton de contact dans le HTML
    const contactButton = document.querySelector('.contact_button');
    
    // Ajouter le bouton de contact après les informations du photographe
    photographHeader.appendChild(contactButton);

    // Créer un conteneur pour l'image du photographe et l'ajouter séparément
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('photograph-portrait-container');

    const photographerImg = document.createElement('img');
    photographerImg.setAttribute("src", photographerModel.picture);
    photographerImg.setAttribute("alt", `Portrait de ${photographer.name}`);
    photographerImg.classList.add('photograph-portrait'); // Tu peux styliser cette classe

    imgContainer.appendChild(photographerImg);
    photographHeader.appendChild(imgContainer); // Ajouter l'image séparément dans un autre div
}


// Fonction pour afficher les médias associés à un photographe
function displayMedia(media, photographer) {
    const mediaSection = document.querySelector('.media-section');
    
    mediaSection.innerHTML = '';

    let totalLikes = 0;

    media.forEach(item => {
        const mediaItem = new Media(item, photographer.name); // Passer le nom du photographe
        const mediaDOM = mediaItem.getMediaDOM(); // Récupère le DOM
        mediaSection.appendChild(mediaDOM); // Ajoute l'élément au conteneur
        totalLikes += item.likes; // Ajoute les likes de chaque média au total
    });

    // Met à jour l'encart en bas avec le total des likes et le prix
    const likesCountElement = document.querySelector('.likes-count');
    likesCountElement.textContent = totalLikes;

    const priceElement = document.querySelector('.photographer-info-bar .price');
    priceElement.textContent = `${photographer.price}€/jour`;
}

getPhotographerData();
