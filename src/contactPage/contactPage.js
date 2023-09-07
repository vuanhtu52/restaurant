import "./contactPage.css";

const createContactPage = () => {
    const contactPage = document.createElement("div");
    contactPage.className = "contact-page";
    

    const phone = document.createElement("div");
    phone.textContent = "Phone number: 0123-456-789.";
    contactPage.appendChild(phone);
    
    const address = document.createElement("div");
    address.textContent = "Address: 1234 Street, NY, USA.";
    contactPage.appendChild(address); 

    return contactPage;
}

export default createContactPage;