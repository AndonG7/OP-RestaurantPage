const desertsMainSection = document.createElement('div');
    const desertsPage = document.createElement('div');
        const desertsTitle = document.createElement('div');
        const desertsGrid = document.createElement('grid');

export function addDesertsMainSection() {
    //Add classes
    desertsMainSection.classList.add('desertsMainSection');
    desertsPage.classList.add('desertsPage');
    desertsTitle.classList.add('desertsTitle');
    desertsGrid.classList.add('desertsGrid');

    //Inner HTML
    desertsTitle.innerHTML = "Deserts";

    //Appending
    desertsPage.appendChild(desertsTitle);
    desertsPage.appendChild(desertsGrid);
    desertsMainSection.appendChild(desertsPage);
    
    //Animating
    
    return desertsMainSection;
}