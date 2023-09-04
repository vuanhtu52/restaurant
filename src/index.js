import createNavBar from "./navBar/navBar";
import createHomePage from "./homePage/homePage";
import createMenuPage from "./menuPage/menuPage";
import createContactPage from "./contactPage/contactPage";
import "./style.css";

let currentPage = "home";

const switchPage = pageId => {
    const content = document.querySelector("#content");
    content.removeChild(content.lastChild);
    if (pageId === "home") {
        content.appendChild(createHomePage());
    } else if (pageId === "menu") {
        content.appendChild(createMenuPage());
    } else {
        content.appendChild(createContactPage());
    }
}

const setNavBar = navBar => {
    const navItems = navBar.querySelectorAll(".nav-item");
    navItems.forEach(navItem => {
        navItem.addEventListener("click", event => {
            // Prevent a tag from navigating
            event.preventDefault();
            // Set currentPage to the clicked page
            if (currentPage !== navItem.id) {
                currentPage = navItem.id;
            }
            // Remove active class on all nav items
            navItems.forEach(navItem => {
                navItem.className = "nav-item";
            });
            // Set active class for the clicked nav item
            navItem.className = "nav-item active";
            // Switch to new page
            switchPage(navItem.id);
        });
    });
}

const loadPage = () => {
    const content = document.querySelector("#content");

    const navBar = createNavBar();
    setNavBar(navBar);
    content.appendChild(navBar);

    const homePage = createHomePage();
    content.appendChild(homePage);
}

loadPage();

