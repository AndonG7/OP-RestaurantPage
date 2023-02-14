import { addDesertsMainSection } from "./desertsPage/mainSection";

export function desertsLoad (content) {
    const desertsMainSection = addDesertsMainSection();

    content.appendChild(desertsMainSection);
}