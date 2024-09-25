// Fonction pour récupérer l'ID du photographe depuis l'URL
function getPhotographerIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id'); // Récupère l'ID du photographe dans l'URL
}

// Fonction pour récupérer les données du photographe correspondant à l'ID
async function getPhotographerData() {
    const photographerId = getPhotographerIdFromUrl(); // Appel de la fonction pour obtenir l'ID
    if (!photographerId) {
        console.error("Aucun ID de photographe trouvé dans l'URL");
        return;
    }
    
    // Récupérer les données des photographes à partir du fichier JSON
    try {
        const response = await fetch('data/photographers.json');
        const data = await response.json();
        const photographer = data.photographers.find(p => p.id == photographerId);

        if (photographer) {
            console.log("Photographe sélectionné :", photographer); // Vérification console
            displayPhotographer(photographer); // Appel de la fonction pour afficher les données
        } else {
            console.error("Photographe non trouvé");
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}

// Fonction pour afficher les données du photographe dans la section .photograph-header
function displayPhotographer(photographer) {
    // Remplir les informations sur la page
    const photographHeader = document.querySelector('.photograph-header');
    
    // Injecter le contenu dynamique
    photographHeader.innerHTML = `
        <div class="photograph-info">
            <h1>${photographer.name}</h1>
            <p>${photographer.city}, ${photographer.country}</p>
            <p>${photographer.tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <div class="photograph-portrait">
            <img src="assets/photographers/${photographer.portrait}" alt="Portrait de ${photographer.name}">
        </div>
        
    `;
}

// Appel de la fonction pour obtenir et afficher les données du photographe
getPhotographerData();
