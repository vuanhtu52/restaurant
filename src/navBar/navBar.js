import "./navBar.css";

const createLogo = () => {
    const logo = document.createElement("a");
    logo.href = "*";
    logo.textContent = "My Sushi";
    logo.className = "logo";

    return logo;
};

const createNavItem = name => {
    const navItem = document.createElement("a");
    navItem.href = "*";
    navItem.textContent = name;
    navItem.className = "nav-item";
    navItem.id = name.toLowerCase();

    return navItem;
}

const createNavBar = () => {
    // Create the navbar
    const navBar = document.createElement("div");
    navBar.className = "nav-bar";

    // Add logo
    const logo = createLogo();
    navBar.appendChild(logo);

    // Add nav items
    const navItems = document.createElement("div");
    navItems.className = "nav-items";
    navItems.appendChild(createNavItem("Home"));
    navItems.appendChild(createNavItem("Menu"));
    navItems.appendChild(createNavItem("Contact"));
    navBar.appendChild(navItems);

    return navBar;
};

export default createNavBar;