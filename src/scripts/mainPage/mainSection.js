const mainMainSection = document.createElement('div');
    const mainPage = document.createElement('div');
        const mainTitle = document.createElement('div');
        const mainGrid = document.createElement('grid');

export function addMainMainSection() {
    //Add classes
    mainMainSection.classList.add('mainMainSection');
    mainPage.classList.add('mainPage');
    mainTitle.classList.add('mainTitle');
    mainGrid.classList.add('mainGrid');

    //Inner HTML
    mainTitle.innerHTML = "main";

    //Appending
    mainPage.appendChild(mainTitle);
    mainPage.appendChild(mainGrid);
    mainMainSection.appendChild(mainPage);
    
    //Animating
    
    return mainMainSection;
}