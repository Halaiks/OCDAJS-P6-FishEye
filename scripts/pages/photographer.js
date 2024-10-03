async function getPhotographers() {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    return { photographers: data.photographers };
}

function getPhotographerIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function getPhotographerData() {
    const photographerId = getPhotographerIdFromUrl();
    const { photographers } = await getPhotographers();
    const photographer = photographers.find(p => p.id == photographerId);

    if (photographer) {
        displayPhotographer(photographer);
    }
}

function displayPhotographer(photographer) {
    const photographHeader = document.querySelector('.photograph-header');
    const photographerModel = photographerTemplate(photographer);

    photographHeader.innerHTML = `
            <div class="photograph-info">
            <h2>${photographerModel.name}</h2>
            <p class="location">${photographer.city}, ${photographer.country}</p>
            <p class="tagline">${photographer.tagline}</p>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <div class="photograph-portrait">
            <img src="${photographerModel.picture}">
            </div>
    `;
}

getPhotographerData();
