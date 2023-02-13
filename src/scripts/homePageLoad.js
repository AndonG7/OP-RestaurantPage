import { addHeader } from "./homePage/header";
import { addMenuSection } from "./homePage/menuSection";

export function homeLoad (content) {
    const headerElement = addHeader();
    const menuSectionElement = addMenuSection();

    content.appendChild(headerElement);
    content.appendChild(menuSectionElement);
}