import "./menuPage.css";
import Dish1 from "./dish1.png";

const createCard = (image, text) => {

}

const createMenuPage = () => {
    const menuPage = document.createElement("div");
    menuPage.textContent = "menu page";

    // const cardsWrapper = document.createElement("div");
    // cardsWrapper.appendChild(createCard(Dish1, "Japanese boiled egg with salmon eggs,"));
    // menuPage.appendChild(cardsWrapper);

    return menuPage;
}

export default createMenuPage;