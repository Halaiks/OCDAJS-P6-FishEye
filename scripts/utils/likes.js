// Importation de la fonction getPhotographerById depuis le fichier photographerPage.js
import { getPhotographerById } from "../pages/photographerPage.js";

// Fonction pour afficher le total des likes
export const displayTotalLikes = async () => {
    // Récupération des médias du photographe
    const { medias } = await getPhotographerById();
    // Sélection de tous les boutons like et de l'élément où le total des likes sera affiché
    const allBtnLike = document.querySelectorAll(".btn_like");
    const likesElement = document.querySelector(".photographer_likes_count");

    // Fonction pour mettre à jour le total des likes
    const updateTotalLikes = () => {
        // Calcul du total des likes
        const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);
        // Affichage du total des likes
        likesElement.textContent = `${totalLikes}`;
    };

    // Mise à jour initiale du total des likes
    updateTotalLikes();

    // Ajout d'un événement click sur chaque bouton like pour mettre à jour le nombre de likes du média correspondant
    allBtnLike.forEach(btn => {
        btn.addEventListener("click", () => {
            // Récupération du média correspondant au bouton like
            const media = medias.find(media => media.id == btn.dataset.id);

            // Si le bouton like est déjà aimé, on décrémente le nombre de likes, sinon on l'incrémente
            !btn.classList.contains("liked") ? media.likes++ : media.likes--;

            // On bascule la classe "liked" sur le bouton like
            btn.classList.toggle("liked");

            // On met à jour l'affichage du nombre de likes du média
            const likesElement = btn.previousElementSibling;
            likesElement.textContent = `${media.likes}`;

            // On met à jour le total des likes
            updateTotalLikes();
        });
    });
};
