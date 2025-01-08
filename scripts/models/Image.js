import Media from "./Media.js";

// Définition de la classe Image qui hérite de la classe Media
export default class Image extends Media {
    // Constructeur de la classe Image
    constructor(data) {
        // Appel du constructeur de la classe parente Media avec les données passées en argument
        super(data);
        // Ajout de la propriété image à l'objet créé, à partir des données passées en argument
        this.image = data.image;
    }
};
