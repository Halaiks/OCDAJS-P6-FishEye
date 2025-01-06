// Définition de la classe Media
export default class Media {
    // Constructeur de la classe Media
    constructor(data) {
        // Initialisation des propriétés de l'objet créé avec les données passées en argument
        this.id = data.id; // Identifiant du média
        this.photographerId = data.photographerId; // Identifiant du photographe qui a créé le média
        this.title = data.title; // Titre du média
        this.likes = data.likes; // Nombre de likes du média
        this.date = data.date; // Date de création du média
        this.price = data.price; // Prix du média
        this.alt = data.alt; // Texte alternatif pour le média, pour l'accessibilité
    }
};
