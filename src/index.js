//Load Different Pages
export function load(active) {  
    if (active === "home") {
        content.innerHTML = "";
        addNavBar(content);
        homeLoad(content);
        addFooter(content);
    }

    if (active === "aboutUs") {
        content.innerHTML = "";
        addNavBar(content);
        aboutUsLoad(content);
        addFooter(content);
    }

    if (active === "starters") {
        content.innerHTML = "";
        addNavBar(content);
        startersLoad(content);
        addFooter(content);
    }

    if (active === "main") {
        content.innerHTML = "";
        addNavBar(content);
        mainLoad(content);
        addFooter(content);
    }

    if (active === "deserts") {
        content.innerHTML = "";
        addNavBar(content);
        desertsLoad(content);
        addFooter(content);
    }
    
}

console.log("hello world");
import { homeLoad } from "./scripts/homePageLoad";
import { startersLoad } from "./scripts/startersPageLoad";
import { mainLoad } from "./scripts/mainPageLoad";
import { desertsLoad } from "./scripts/desertsPageLoad";
import { aboutUsLoad } from "./scripts/aboutUsPageLoad";
import { addNavBar } from "./scripts/navBar";
import { addFooter } from "./scripts/footer";

const content = document.getElementById('content');
content.classList.add('content');
let activePage = "home";

content.innerHTML = "";
addNavBar(content);
load(activePage);
addFooter(content);



