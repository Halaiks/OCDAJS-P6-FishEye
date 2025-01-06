import { displayTotalLikes } from "../utils/likes.js";
import { displayLightbox } from "../utils/lightbox.js";

// Définition de la fonction openCloseFilterMenu qui ouvre et ferme le menu de filtre
export const openCloseFilterMenu = () => {
    // Sélection des éléments du DOM nécessaires pour le menu de filtre
    const filterMenu = document.querySelector(".dropdown_content");
    const filterMenuButton = document.querySelector(".btn_drop");
    const filterButtons = document.querySelectorAll(".dropdown_content button");

    // Ajout d'un événement click sur le bouton du menu de filtre
    filterMenuButton.addEventListener("click", () => {
        // Récupération de l'état actuel du menu de filtre
        const isExpanded = filterMenuButton.getAttribute("aria-expanded") === "true" || false;
        // Inversion de l'état du menu de filtre
        filterMenuButton.setAttribute("aria-expanded", !isExpanded);
        // Ajout ou retrait de la classe CSS qui applique l'effet de rideau au menu de filtre
        filterMenu.classList.toggle("curtain_effect");
        // Rotation de l'icône de flèche vers le bas
        document.querySelector(".fa-chevron-down").classList.toggle("rotate");

        // Mise à jour de l'attribut aria-hidden du menu de filtre en fonction de son état
        const newAriaHiddenValue = filterMenu.classList.contains("curtain_effect") ? "false" : "true";
        filterMenu.setAttribute("aria-hidden", newAriaHiddenValue);

        // Mise à jour de l'attribut tabindex des boutons de filtre en fonction de l'état du menu de filtre
        const newTabIndexValue = filterMenu.classList.contains("curtain_effect") ? "0" : "-1";
        filterButtons.forEach(button => button.setAttribute("tabindex", newTabIndexValue));
    });
};

// Définition de la fonction displayMediaWithFilter qui affiche les médias en fonction du filtre sélectionné
export const displayMediaWithFilter = mediasTemplate => {
    // Sélection des éléments du DOM nécessaires pour le filtre
    const currentFilter = document.querySelector('#current_filter');
    const allFilters = Array.from(document.querySelectorAll('.dropdown_content li button'))

    // Recherche du filtre déjà sélectionné et masquage de celui-ci
    let filterAlreadySelected = allFilters.find(filter => filter.textContent == currentFilter.textContent);
    filterAlreadySelected.style.display = 'none';

    // Ajout d'un événement click sur chaque bouton de filtre
    allFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Mise à jour du filtre actuel et affichage du filtre précédemment sélectionné
            currentFilter.textContent = filter.textContent;
            if (filterAlreadySelected) filterAlreadySelected.style.display = 'block';

            // Mise à jour du filtre déjà sélectionné et masquage de celui-ci
            filterAlreadySelected = filter;
            filterAlreadySelected.style.display = 'none';

            // Tri des médias en fonction du filtre sélectionné
            sortByFilter(filter.textContent);
        })
    });

    // Fonction qui trie les médias en fonction de la valeur du filtre
    const sortByFilter = filterValue => {
        switch (filterValue) {
            case 'Titre':
                mediasTemplate.medias.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'Popularité':
                mediasTemplate.medias.sort((a, b) => b.likes - a.likes);
                break;
            case 'Date':
                mediasTemplate.medias.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
        }
        
        // Création des médias du photographe et affichage du total des likes
        mediasTemplate.createPhotographerMedias();
        const mediasfiltered = mediasTemplate;
        displayLightbox(mediasfiltered);
        displayTotalLikes();
 
        // Animation des cartes de médias
        const mediaElements = document.querySelectorAll('.gallery_card');
        mediaElements.forEach((media, index) => {
            setTimeout(() => {
                media.classList.add('animeCard');
            }, 100 * index);
        });   
    };
};
