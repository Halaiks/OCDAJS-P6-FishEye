export default class PhotographerHeader {
    constructor(photographer) {
        this.photographer = photographer;
    };

    createPhotographerHeader() {
        const profilePageHeader = document.querySelector(".photograph-header");
        const formName = document.querySelector(".modal_form_name");
        formName.textContent = this.photographer.name;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = `Découvrez ${this.photographer.name}, photographe professionnel basé à ${this.photographer.city}, ${this.photographer.country} offrant ses services à partir de ${this.photographer.price} € / jour.`;
        };
        const about = `
            <div class="photographer_profile__infos">
                <h1 class="photographer_name">${this.photographer.name}</h1>
                <p class="location">${this.photographer.city}, ${this.photographer.country}</p>
                <p class="tagline">${this.photographer.tagline}</p>    
            </div>
            <button class="contact_button" type="button" aria-label="Open contact form">Contactez-moi</button>
            <img src="assets/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;
        profilePageHeader.innerHTML = about;
        return about;
    };
};