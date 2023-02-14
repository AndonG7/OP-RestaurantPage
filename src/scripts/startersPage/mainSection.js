const startersMainSection = document.createElement('div');
    const startersPage = document.createElement('div');
        const startersTitle = document.createElement('div');
        const startersGrid = document.createElement('grid');

export function addStartersMainSection() {
    //Add classes
    startersMainSection.classList.add('startersMainSection');
    startersPage.classList.add('startersPage');
    startersTitle.classList.add('startersTitle');
    startersGrid.classList.add('startersGrid');

    //Inner HTML
    startersTitle.innerHTML = "Starters";

    //Appending
    startersPage.appendChild(startersTitle);
    startersPage.appendChild(startersGrid);
    startersMainSection.appendChild(startersPage);
    
    //Animating
    
    return startersMainSection;
}