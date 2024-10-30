// Récupère les éléments de la page
const contactButton = document.querySelector('.open-modal'); // Bouton "Contactez-moi"
const closeModalButton = document.querySelector('.close-modal'); // Bouton pour fermer la modale (croix)
const contactModal = document.getElementById('contact_modal'); // Modale elle-même
const contactForm = document.getElementById('contact-form'); // Formulaire de contact avec ID ajouté

// Assure que la modale ne s'affiche pas par défaut
window.addEventListener('DOMContentLoaded', () => {
    contactModal.style.display = 'none';
    contactModal.setAttribute('aria-hidden', 'true');
});

// Fonction pour ouvrir la modale
function openModal() {
    contactModal.setAttribute('aria-hidden', 'false');
    contactModal.style.display = 'flex';
    
    const firstInput = contactModal.querySelector('input');
    if (firstInput) {
        firstInput.focus();
    }
}

// Fonction pour fermer la modale
function closeModal() {
    contactModal.setAttribute('aria-hidden', 'true');
    contactModal.style.display = 'none';
}

// Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les données du formulaire
    const formData = new FormData(contactForm);

    // Valider le formulaire
    const errors = validateForm(formData);
    if (errors.length > 0) {
        // Afficher les erreurs
        alert('Erreur dans le formulaire:\n' + errors.join('\n'));
        return; // Empêcher la soumission si des erreurs sont présentes
    }

    // Si tout est valide, afficher les données dans la console
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    console.log('Données du formulaire :', formValues);

    // Fermer la modale après soumission
    closeModal();

    // Réinitialiser le formulaire
    contactForm.reset();
}

// Fonction de validation du formulaire
function validateForm(formData) {
    const errors = [];

    // Validation des champs de formulaire
    const prenom = formData.get('firstName');
    if (!prenom) {
        errors.push('Le champ "Prénom" est obligatoire.');
    }

    const nom = formData.get('lastName');
    if (!nom) {
        errors.push('Le champ "Nom" est obligatoire.');
    }

    const email = formData.get('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.push('Le champ "Email" est obligatoire.');
    } else if (!emailPattern.test(email)) {
        errors.push('Le champ "Email" doit avoir un format valide.');
    }

    const message = formData.get('message');
    if (!message || message.length < 10) {
        errors.push('Le message doit contenir au moins 10 caractères.');
    }

    return errors;
}

// Ajouter les écouteurs d'événements
if (contactButton) {
    contactButton.addEventListener('click', openModal); 
}

if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal); 
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Ajouter l'écouteur d'événement pour la soumission du formulaire
if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
}
