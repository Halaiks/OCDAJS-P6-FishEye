import Image from '../models/Image.js';
import Video from '../models/Video.js';

// Exportation par défaut de la classe MediasFactory, une fabrique pour créer des instances de médias
export default class MediasFactory {

    // Constructeur qui prend en paramètre les données d'un média
    constructor(data) {
        // Vérifie si les données contiennent une image, et crée une instance de la classe Image
        if (data.image) {
            return new Image(data);
        } 
        // Si les données contiennent une vidéo, crée une instance de la classe Video
        else if (data.video) {
            return new Video(data);
        } 
        // Si le type de média est inconnu, lance une erreur
        else {
            throw 'Unknown data type';
        }
    }
}
