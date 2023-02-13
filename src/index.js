console.log("hello world");
import { homeLoad } from "./scripts/homePageLoad";
import { addNavBar } from "./scripts/navBar";

const content = document.getElementById('content');
content.classList.add('content');

addNavBar(content);
homeLoad(content);

