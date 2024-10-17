// Récupère les éléments de la page
const contactButton = document.querySelector('.open-modal'); // Bouton "Contactez-moi"
const closeModalButton = document.querySelector('.close-modal'); // Bouton pour fermer la modale (croix)
const contactModal = document.getElementById('contact_modal'); // Modale elle-même

window.addEventListener('DOMContentLoaded', () => {
    const contactModal = document.getElementById('contact_modal');
    
    // Forcer le masquage de la modale au chargement de la page
    contactModal.style.display = 'none';
    contactModal.setAttribute('aria-hidden', 'true');
});


// Fonction pour ouvrir la modale
function openModal() {
    contactModal.setAttribute('aria-hidden', 'false');
    contactModal.style.display = 'flex'; // Affiche la modale
    
    // Gestion du focus : on met le focus sur le premier champ du formulaire
    const firstInput = contactModal.querySelector('input');
    if (firstInput) {
        firstInput.focus();
    }
}

// Fonction pour fermer la modale
function closeModal() {
    contactModal.setAttribute('aria-hidden', 'true');
    contactModal.style.display = 'none'; // Masque la modale
}

// Ajouter les écouteurs d'événements
if (contactButton) {
    contactButton.addEventListener('click', openModal); 
}

if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal); 
}

// Gestion de la fermeture via la touche "Échap"
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
