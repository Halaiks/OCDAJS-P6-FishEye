    async function getPhotographers() {
        console.log("getPhotographers: Début de la fonction"); // Appel fonction
// Utiliser fetch pour récupérer le fichier JSON
try {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    const photographers = data.photographers; // Extraire les photographes du fichier JSON
    
    console.log("getPhotographers: photographers récupérés", photographers); // Affiche les photographes récupérés
    return { photographers };
} catch (error) {
    console.error("Erreur lors de la récupération des photographes :", error);
    return { photographers: [] }; // Retourne un tableau vide en cas d'erreur
}

        console.log("getPhotographers: photographers récupérés", photographers); // Affiche les photographes récupérés
        // et bien retourner le tableau photographers seulement une fois récupéré
    }

    async function displayData(photographers) {
        console.log("displayData: Photographers reçus", photographers); // Vérifie que les photographes sont passés à la fonction
        const photographersSection = document.querySelector(".photographer_section");
        console.log("displayData: photographersSection trouvé", photographersSection); // Vérifie si la section est bien trouvée

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            console.log("displayData: Ajout d'un photographe à la section", photographer); // Affiche chaque photographe ajouté
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        console.log("init: Début de l'initialisation"); // Verif initialisation
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        console.log("init: Photographers récupérés", photographers); // Vérif si les photographes sont bien récupérés
        displayData(photographers);
    }
    
    init();
    
