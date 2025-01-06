export default class Api {

    // Constructeur de la classe Api qui initialise l'URL pour les requêtes API
    constructor(url) {
        this.url = url;  // Stocke l'URL passée en argument pour les futures requêtes
    }

    // Méthode asynchrone pour obtenir les données de l'URL
    async get() {
        try {
            // Envoi d'une requête fetch à l'URL et attente de la réponse
            const response = await fetch(this.url);

            // Conversion de la réponse en JSON et récupération des données
            const data = await response.json();

            // Retourne les données récupérées pour les utiliser dans le reste de l'application
            return data;
        } catch (err) {
            // En cas d'erreur, une exception est lancée avec un message d'erreur
            throw new Error(err);
        }
    }
};
