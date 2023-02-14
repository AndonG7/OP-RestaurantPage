import { addStartersMainSection } from "./startersPage/mainSection.js";

export function startersLoad (content) {
    const startersMainSection = addStartersMainSection();

    content.appendChild(startersMainSection);
}