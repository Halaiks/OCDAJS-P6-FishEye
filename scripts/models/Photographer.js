export default class Photographer {

    // Constructeur de la classe Photographer qui initialise les propriétés du photographe avec les données fournies
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
    }
}
