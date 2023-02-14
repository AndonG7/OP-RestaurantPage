//Load Different Pages
export function load(active) {  
    if (active === "home") {
        content.innerHTML = "";
        addNavBar(content);
        homeLoad(content);
    }

    if (active === "aboutUs") {
        content.innerHTML = "";
        addNavBar(content);
        aboutUsLoad(content);
    }

    if (active === "starters") {
        content.innerHTML = "";
        addNavBar(content);
        startersLoad(content);
    }

    if (active === "main") {
        content.innerHTML = "";
        addNavBar(content);
        mainLoad(content);
    }

    if (active === "deserts") {
        content.innerHTML = "";
        addNavBar(content);
        desertsLoad(content);
    }
    
}

console.log("hello world");
import { homeLoad } from "./scripts/homePageLoad";
import { startersLoad } from "./scripts/startersPageLoad";
import { mainLoad } from "./scripts/mainPageLoad";
import { desertsLoad } from "./scripts/desertsPageLoad";
import { addNavBar } from "./scripts/navBar";

const content = document.getElementById('content');
content.classList.add('content');
let activePage = "home";

addNavBar(content);
load(activePage);



