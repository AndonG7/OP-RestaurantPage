import { addMainMainSection } from "./mainPage/mainSection.js";

export function mainLoad (content) {
    const mainMainSection = addMainMainSection();

    content.appendChild(mainMainSection);
}