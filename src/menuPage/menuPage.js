import "./menuPage.css";
import Dish1 from "./dish1.png";
import Dish2 from "./dish2.png";
import Dish3 from "./dish3.png";
import Dish4 from "./dish4.png";
import Dish5 from "./dish5.png";
import Dish6 from "./dish6.png";
import Dish7 from "./dish7.png";
import Dish8 from "./dish8.png";
import Dish9 from "./dish9.png";

const createCard = (image, text) => {
    const card = document.createElement("div");
    card.className = "menu-card";

    const cardImage = new Image();
    cardImage.className = "menu-card-image";
    cardImage.src = image;
    card.appendChild(cardImage);

    const cardText = document.createElement("div");
    cardText.className = "menu-card-text";
    cardText.textContent = text;
    card.appendChild(cardText);

    return card
}

const createMenuPage = () => {
    const menuPage = document.createElement("div");
    menuPage.className = "menu-page";

    const cardsWrapper = document.createElement("div");
    cardsWrapper.className = "menu-wrapper";
    cardsWrapper.appendChild(createCard(Dish1, "Japanese boiled egg with salmon eggs,"));
    cardsWrapper.appendChild(createCard(Dish2, "Japanese boiled egg with eel."));
    cardsWrapper.appendChild(createCard(Dish3, "Japanese boiled egg."));
    cardsWrapper.appendChild(createCard(Dish4, "Miso Soup."));
    cardsWrapper.appendChild(createCard(Dish5, "Soup."));
    cardsWrapper.appendChild(createCard(Dish6, "Vegetarian Soup."));
    cardsWrapper.appendChild(createCard(Dish7, "Salmon eggs."));
    cardsWrapper.appendChild(createCard(Dish8, "Flying fish eggs."));
    cardsWrapper.appendChild(createCard(Dish9, "Mixed seaweed."));
    menuPage.appendChild(cardsWrapper);

    return menuPage;
}

export default createMenuPage;