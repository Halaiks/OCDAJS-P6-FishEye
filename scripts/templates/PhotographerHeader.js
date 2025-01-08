// Définition de la classe PhotographerHeader
export default class PhotographerHeader {
    // Constructeur de la classe PhotographerHeader
    constructor(photographer) {
        // Initialisation de la propriété photographer avec l'argument passé au constructeur
        this.photographer = photographer;
    };

    // Méthode pour créer l'en-tête du photographe
    createPhotographerHeader() {
        // Sélection des éléments du DOM nécessaires pour l'en-tête
        const profilePageHeader = document.querySelector(".photograph-header");
        const formName = document.querySelector(".modal_form_name");
        // Mise à jour du nom du photographe dans le formulaire
        formName.textContent = this.photographer.name;
        // Mise à jour de la meta description avec les informations du photographe
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = `Découvrez ${this.photographer.name}, photographe professionnel basé à ${this.photographer.city}, ${this.photographer.country} offrant ses services à partir de ${this.photographer.price} € / jour.`;
        };
        // Création de l'en-tête du photographe
        const about = `
            <div class="photographer_profile__infos">
                <h1 class="photographer_name">${this.photographer.name}</h1>
                <p class="location">${this.photographer.city}, ${this.photographer.country}</p>
                <p class="tagline">${this.photographer.tagline}</p>    
            </div>
            <button class="contact_button" type="button" aria-label="Open contact form">Contactez-moi</button>
            <img src="assets/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;
        // Insertion de l'en-tête dans la page
        profilePageHeader.innerHTML = about;
        // Retour de l'en-tête pour utilisation ultérieure
        return about;
    };
};
