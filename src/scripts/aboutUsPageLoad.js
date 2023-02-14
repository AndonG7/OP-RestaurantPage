import { addAboutUsMainSection } from "./aboutUsPage/mainSection";

export function aboutUsLoad (content) {
    const aboutUsMainSection = addAboutUsMainSection();

    content.appendChild(aboutUsMainSection);
}