import { addHeader } from "./homePage/header";
import { addMenuSection } from "./homePage/menuSection";
import { addContact } from "./homePage/contactSection";

export function homeLoad (content) {
    const headerElement = addHeader();
    const menuSectionElement = addMenuSection();
    const contact = addContact();

    content.appendChild(headerElement);
    content.appendChild(menuSectionElement);
    content.appendChild(contact);


}