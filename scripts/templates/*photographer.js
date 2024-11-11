function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;
    console.log("Data reçue:", data); // Log des données initiales

    const picture = `assets/photographers/${portrait}`;


    function getUserCardDOM() {
        const article = document.createElement('article');
        // Création du lien qui redirige vers la page du photographe avec son ID
        const link = document.createElement('a');
        link.setAttribute('href', `photographer.html?id=${data.id}`);

        const img = document.createElement('img');
        img.setAttribute("src", picture)

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const location = document.createElement('p');
        location.textContent = `${city}, ${country}`;
        location.classList.add('location');

        const taglineElement = document.createElement('p');
        taglineElement.textContent = tagline;

        const priceElement = document.createElement('p');
        priceElement.textContent = `${price}€/jour`;
        priceElement.classList.add('price');

        // Rendre l'image et le nom focusables et cliquables
        link.appendChild(img);
        link.appendChild(h2);

        article.appendChild(link);
        article.appendChild(location);
        article.appendChild(taglineElement);
            article.appendChild(priceElement);
        

        return (article);
    }

    function detailUserCard() {
        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const location = document.createElement('p');
        location.textContent = `${city}, ${country}`;
        location.classList.add('location');

        const taglineElement = document.createElement('p');
        taglineElement.textContent = tagline;

       article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(taglineElement);

        return (article);
    }

    return { name, picture, getUserCardDOM, detailUserCard }
}