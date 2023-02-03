import { addHeader } from "./homeTab/header";
import { addQuote } from "./homeTab/quote";
import { addNavBar } from "./navBar";

export function homeLoad (content) {
    const headerElement = addHeader();
    const quoteElement = addQuote();
    const navBarElement = addNavBar();

    content.appendChild(headerElement);
    content.appendChild(navBarElement);
    content.appendChild(quoteElement);
}