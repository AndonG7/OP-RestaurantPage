const startersMainSection = document.createElement('div');
    const startersPage = document.createElement('div');
        const startersTitle = document.createElement('div');
        const startersGuides = document.createElement('div');
        const startersGrid = document.createElement('grid');

export function addStartersMainSection() {
    //Add classes
    startersMainSection.classList.add('startersMainSection');
    startersPage.classList.add('startersPage');
    startersTitle.classList.add('startersTitle');
    startersGuides.classList.add('startersGuides');
    startersGrid.classList.add('startersGrid');

    //Inner HTML
    startersTitle.innerHTML = "Starters";
    startersGuides.innerHTML = `
        <h3>Name</h3>
        <div></div>
        <h3>Price in EUR</div>
    `;
    startersGrid.innerHTML = `
        <div class="menu-img">
            <h3>Bacon Croquettes</h3>
            <img src="../../src/images/starters/baconCroquettes.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">20</div>
        
        <div class="menu-img">
            <h3>Bacon Rings</h3>
            <img src="../../src/images/starters/baconringsComplete.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">18</div>

        <div class="menu-img">
            <h3>Bruschetta</h3>
            <img src="../../src/images/starters/bruschetta.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">10</div>

        <div class="menu-img">
            <h3>Butter Chicken Rolls</h3>
            <img src="../../src/images/starters/butterChickenVolAuVents.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">20</div>

        <div class="menu-img">
            <h3>Moroccan Lamb Cigars</h3>
            <img src="../../src/images/starters/moroccanLambCigars.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">25</div>

        <div class="menu-img">
            <h3>Prawn Dumplings</h3>
            <img src="../../src/images/starters/prawnDumplings.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">20</div>

        <div class="menu-img">
            <h3>Salmon Nicoise</h3>
            <img src="../../src/images/starters/salmonNicoise.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">25</div>

        <div class="menu-img">
            <h3>Sweet Saganaki</h3>
            <img src="../../src/images/starters/sweetSaganaki.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">15</div>

        <div class="menu-img">
            <h3>Tuna Empanadillas</h3>
            <img src="../../src/images/starters/tunaEmpanadillas.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">25</div>

        <div class="menu-img">
            <h3>Buffalo Wings</h3>
            <img src="../../src/images/starters/wings.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">15</div>
    `;

    //Appending
    startersPage.appendChild(startersTitle);
    startersPage.appendChild(startersGuides);
    startersPage.appendChild(startersGrid);
    startersMainSection.appendChild(startersPage);
    
    //Animating
    
    return startersMainSection;
}