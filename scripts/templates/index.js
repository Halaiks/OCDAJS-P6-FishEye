export default class PhotographerCard {

    // Constructeur qui prend en argument un objet photographe
    constructor(photographer) {
        this.photographer = photographer; // Stocke les données du photographe
    }

    // Méthode pour créer l'élément de carte HTML du photographe
    createPhotographerCard() {
        // Création d'un élément article pour contenir la carte du photographe
        const article = document.createElement('article');

        // Modèle de carte avec lien, image, nom, localisation, slogan et tarif du photographe
        const photographerCard = `
            <a href="photographer.html?id=${this.photographer.id}" role="link" aria-label="Voir le profil de ${this.photographer.name}">
                <img class="photographer_thumbnail" src="assets/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
                <h2 class="photographer_name">${this.photographer.name}</h2>
            </a>
            <p class="photographer_location">${this.photographer.city}, ${this.photographer.country}</p>
            <p class="photographer_tagline">${this.photographer.tagline}</p>
            <span class="photographer_price">${this.photographer.price}€/jour</span>
        `;

        // Affectation du modèle HTML à l'intérieur de l'élément article
        article.innerHTML = photographerCard;

        return article;
    }
}
