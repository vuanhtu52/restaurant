import "./homePage.css";
import Sushi from "./sushi.jpg";

const createLeftContent = () => {
    const leftContent = document.createElement("div");
    leftContent.className = "left-content";

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    leftContent.appendChild(wrapper);

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "My Sushi";
    wrapper.appendChild(title);

    const subtitle = document.createElement("div");
    subtitle.className = "subtitle";
    subtitle.textContent = "Purest Sushi Experience Focusing on Premium Quality Ingredients."
    wrapper.appendChild(subtitle);

    const menuButton = document.createElement("button");
    menuButton.className = "menu-button";
    menuButton.textContent = "Check Menu";
    wrapper.appendChild(menuButton);

    return leftContent;
}

const createRightContent = () => {
    const rightCotent = document.createElement("div");
    rightCotent.className = "right-content";

    const image = new Image();
    image.src = Sushi;
    rightCotent.appendChild(image);

    return rightCotent;
}

const createBottomContent = () => {
    const bottomContent = document.createElement("div");
    bottomContent.className = "bottom-content";
    
    const title = document.createElement("div");
    title.className = "bottom-title";
    title.textContent = "Why My Sushi?"
    bottomContent.appendChild(title);

    const cardsWrapper = document.createElement("div");
    cardsWrapper.className = "cards-wrapper";
    cardsWrapper.appendChild(createCard("Hot Deals & Offers", "We want to show you some love by giving you discount off food in our restaurants."));
    cardsWrapper.appendChild(createCard("Self Pick-Up", "Self Pick-up is a service which allows you to place Self Pick-up orders through our App."));
    cardsWrapper.appendChild(createCard("Fastest Delivery", "Choose your food. We will deliver to you as fast as we can. Download the app and enjoy our food."));
    bottomContent.appendChild(cardsWrapper);

    return bottomContent;
}

const createCard = (title, content) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardTitle = document.createElement("div");
    cardTitle.className = "card-title";
    cardTitle.textContent = title;
    card.appendChild(cardTitle);
    
    const cardContent = document.createElement("div");
    cardContent.className = "card-content";
    cardContent.textContent = content;
    card.appendChild(cardContent);

    return card;
}

const createHomePage = () => {
    // Create the home page
    const homePage = document.createElement("div");
    homePage.className = "home-page";

    // Create content on the left
    const leftContent = createLeftContent();
    homePage.appendChild(leftContent);

    // Create content on the right
    const rightContent = createRightContent();
    homePage.appendChild(rightContent);

    // Create content on the bottom
    const bottomContent = createBottomContent();
    homePage.appendChild(bottomContent);

    return homePage;
}

export default createHomePage;