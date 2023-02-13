import { checkVisibility } from "../viewportVisibility";

const menuSection = document.createElement('div');
    const menuTitle = document.createElement('div');
    const menuOptions = document.createElement('div');
        const menuStarter = document.createElement('div');
        const menuMain = document.createElement('div');
        const menuDesert = document.createElement('div');

export function addMenuSection (content) {
    //Add classes
    menuSection.classList.add('mennuSection');
    menuTitle.classList.add('menuTitle');
    menuOptions.classList.add('menuOptions');
    menuStarter.classList.add('starter');
    menuStarter.classList.add('menuOption');
    menuMain.classList.add('main');
    menuMain.classList.add('menuOption');
    menuDesert.classList.add('desert');
    menuDesert.classList.add('menuOption');

    //Inner HTML
    menuTitle.innerHTML = "MENU";
    menuStarter.innerHTML = `
        <p2>Starters</p2>
        <img class="soup" src="../../images/soup.png">
    `;
    menuMain.innerHTML = `
    <p2>Main Course</p2>
    <img class="soup" src="../../images/pizza.png">
    `;
    menuDesert.innerHTML = `
    <p2>Deserts</p2>
    <img class="soup" src="../../images/soup.png">
    `;

    //Appending 
    menuSection.appendChild(menuTitle);
    menuOptions.appendChild(menuStarter);
    menuOptions.appendChild(menuMain);
    menuOptions.appendChild(menuDesert);
    menuSection.appendChild(menuOptions);

    //Animating
    window.addEventListener('scroll', function() {
        if(checkVisibility(menuTitle)) {
            menuTitle.style.opacity = "1";
        }
    });



    return menuSection;
}