// Définition de la classe PhotographerMedias
export default class PhotographerMedias {
    // Constructeur de la classe PhotographerMedias
    constructor(photographer, medias) {
        // Initialisation des propriétés photographer et medias avec les arguments passés au constructeur
        this.photographer = photographer;
        this.medias = medias;
    };

    // Méthode pour créer les médias du photographe
    createPhotographerMedias() {
        // Sélection de l'élément du DOM où les médias seront insérés
        const profilePageContent = document.querySelector(".media-section");
        // Création du contenu HTML pour les médias
        const content = `
            <section class="gallery">
                ${this.medias.map(media => {
            // Chaque média peut être une image ou une vidéo, donc on crée le contenu HTML en conséquence
            const mediaContent = media.image
                ? ` <img class="gallery_thumbnail" src="assets/photographers-medias/${this.photographer.name}/${media.image}" alt="${media.title}">`
                : ` <video class="gallery_thumbnail" aria-label="${media.title}">
                        <source src="assets/photographers-medias/${this.photographer.name}/${media.video}" type="video/mp4">
                    </video>`;
            // Renvoie le contenu HTML pour chaque média
            return `
                    <article class="gallery_card">                           
                        <a href="#" data-media=${media.id} role="link" aria-label="View media large">
                            <figure>${mediaContent}</figure>
                        </a>
                        <figcaption>
                            <h2>${media.title}</h2>
                                <div role="group" aria-label="Like button and number of likes">
                                    <span class="nbLike">${media.likes}</span> 
                                    <button class="btn_like" type="button" aria-label="Like" data-id="${media.id}">
                                        <span class="fas fa-heart" aria-hidden="true"></span>
                                    </button> 
                                </div>
                        </figcaption>
                    </article>
                `;
        }).join("")}
            </section >
            <aside>
                <p class="photographer_Likes">
                    <span class="photographer_likes_count"></span>
                    <span class="fas fa-heart" aria-hidden="true"></span>
                </p>
                <span>${this.photographer.price}€ / jour</span>
            </aside>
        `;

        // Insertion du contenu HTML dans la page
        profilePageContent.innerHTML = content;
        // Renvoie le contenu HTML pour utilisation ultérieure
        return content;
    };
};
