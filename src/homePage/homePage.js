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
    bottomContent.textContent = "bottom";

    return bottomContent;
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