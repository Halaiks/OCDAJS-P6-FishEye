// Définition de la fonction displayLightbox qui prend en argument un objet medias
export const displayLightbox = medias => {

    // Sélection des éléments du DOM nécessaires pour la lightbox
    const lightboxWrapper = document.querySelector('.lightbox_wrapper');
    const btnClose = document.querySelector('.btn_close_lightbox');
    const btnPrevious = document.querySelector('.btn_previous');
    const btnNext = document.querySelector('.btn_next');
    const lightboxMedia = document.querySelector('.lightbox_media');
    const mediaProvider = Array.from(document.querySelectorAll('.gallery_card a'));

    // Extraction des propriétés de l'objet medias
    const photographer = medias.photographer;
    const mediasList = medias.medias;
    // Initialisation de l'indice du média actuel
    let currentIndex = 0; 

    // Ajout d'un événement click sur chaque lien de média
    mediaProvider.forEach(media => {
        media.addEventListener('click', () => {
            // Récupération de l'ID du média cliqué et recherche de son indice dans la liste de médias
            const mediaId = media.dataset.media;
            const mediaIndex = mediasList.findIndex(media => media.id == mediaId);
            // Mise à jour de l'indice du média actuel
            currentIndex = mediaIndex;
            // Affichage de la lightbox et mise en focus du bouton de fermeture
            lightboxWrapper.style.display = 'flex';
            btnClose.focus();
            // Appel de la fonction qui met à jour le contenu de la lightbox
            lightboxTemplate();
        });
    });
        
    // Fonction qui met à jour le contenu de la lightbox en fonction du média actuel
    const lightboxTemplate = () => {
        const currentMedia = mediasList[currentIndex];
        
        lightboxMedia.innerHTML = `
            ${currentMedia.image ? `
            <img src="assets/photographers-medias/${photographer.name}/${currentMedia.image}" alt="${currentMedia.alt}">` : 
            `<video controls aria-label="${currentMedia.alt}"><source src="assets/photographers-medias/${photographer.name}/${currentMedia.video}" type="video/mp4"></video>`}

            <figcaption>${currentMedia.title}</figcaption>
        `;
    };
    
    // Fonction qui ferme la lightbox et réinitialise son contenu
    const closeLightbox = () => {
        lightboxWrapper.style.display = 'none';
        lightboxMedia.innerHTML = '';
    };

    // Fonction qui passe au média suivant et met à jour la lightbox
    const nextMedia = () => {
        currentIndex++;
        if (currentIndex > mediasList.length - 1) currentIndex = 0;
        lightboxTemplate();
        showActiveBtn(btnNext);
    };

    // Fonction qui passe au média précédent et met à jour la lightbox
    const previousMedia = () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = mediasList.length - 1;
        lightboxTemplate();
        showActiveBtn(btnPrevious);
    };

    // Fonction qui met en évidence le bouton actif
    const showActiveBtn = btn => {
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 100);
    };        
        
    // Gestion des touches du clavier pour contrôler la lightbox
    document.addEventListener('keyup', e => {
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                previousMedia();
                break;
            case 'ArrowRight':
                nextMedia();
                break;
        };
    });

    // Ajout d'événements click sur les boutons de contrôle de la lightbox
    btnPrevious.addEventListener('click', () => previousMedia());
    btnNext.addEventListener('click', () => nextMedia());
    btnClose.addEventListener('click', () => closeLightbox());
};
