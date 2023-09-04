import createNavBar from "./navBar/navBar";
import createHomePage from "./homePage/homePage";
import "./style.css"

const loadPage = () => {
    const content = document.querySelector("#content");
    content.appendChild(createNavBar());

    const homePage = createHomePage();
    content.appendChild(homePage);
}

loadPage();

