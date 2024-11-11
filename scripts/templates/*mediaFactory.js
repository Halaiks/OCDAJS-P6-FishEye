// mediaFactory.js
class Media {
    constructor(mediaData, photographerName) {
        this.id = mediaData.id;
        this.photographerId = mediaData.photographerId;
        this.title = mediaData.title;
        this.image = mediaData.image;
        this.video = mediaData.video; 
        this.likes = mediaData.likes;
        this.date = mediaData.date;
        this.price = mediaData.price;
        this.photographerName = photographerName; // Ajout du nom du photographe
    }

    getMediaDOM() {
        const mediaElement = document.createElement('div');
        mediaElement.className = 'media-item';

        // Utiliser le nom du photographe pour former le chemin correct
        const mediaPath = `assets/photographers-medias/${this.photographerName}/`;

        if (this.image) {
            mediaElement.innerHTML = `
                <img src="${mediaPath}${this.image}" alt="${this.title}">
                <div class="media-info">
                    <h3>${this.title}</h3>
                    <p>${this.likes} <i class="fa fa-heart"></i></p>
                </div>
            `;
        } else if (this.video) {
            mediaElement.innerHTML = `
                <video controls>
                    <source src="${mediaPath}${this.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="media-info">
                    <h3>${this.title}</h3>
                    <p>${this.likes} <i class="fa fa-heart"></i></p>
                </div>
            `;
        }

        return mediaElement;
    }
}

export { Media };
