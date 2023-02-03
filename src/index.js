console.log("hello world");
import { homeLoad } from "./scripts/homeLoad";
import  header  from "./scripts/homeTab/header";
import nav from "./scripts/navBar";
import { stickyNavi } from "./scripts/stickyNav";

const content = document.getElementById('content');


homeLoad(content);
stickyNavi(nav, header);

