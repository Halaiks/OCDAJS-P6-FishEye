import Media from "./Media.js";

// Définition de la classe Video qui hérite de la classe Media
export default class Video extends Media {
    // Constructeur de la classe Video
    constructor(data) {
        // Appel du constructeur de la classe parente Media avec les données passées en argument
        super(data);
        // Ajout de la propriété video à l'objet créé, à partir des données passées en argument
        this.video = data.video;
    }
};
