const desertsMainSection = document.createElement('div');
    const desertsPage = document.createElement('div');
        const desertsTitle = document.createElement('div');
        const desertsGuides = document.createElement('div');
        const desertsGrid = document.createElement('grid');

export function addDesertsMainSection() {
    //Add classes
    desertsMainSection.classList.add('desertsMainSection');
    desertsPage.classList.add('desertsPage');
    desertsTitle.classList.add('desertsTitle');
    desertsGuides.classList.add('desertsGuides');
    desertsGrid.classList.add('desertsGrid');

    //Inner HTML
    desertsTitle.innerHTML = "Deserts";
    desertsGuides.innerHTML = `
        <h3>Name</h3>
        <div></div>
        <h3>Price in EUR</div>
    `;

    desertsGrid.innerHTML = `
        <div class="menu-img">
            <h3>Apple Pie</h3>
            <img src="../../src/images/deserts/applePie.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">15</div>
        
        <div class="menu-img">
            <h3>Banoffee Pie</h3>
            <img src="../../src/images/deserts/banoffeePie.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">15</div>
        
        <div class="menu-img">
            <h3>Cannoli</h3>
            <img src="../../src/images/deserts/cannoli.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">20</div>
        
        <div class="menu-img">
            <h3>Cheese Cake</h3>
            <img src="../../src/images/deserts/cheeseCake.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">15</div>
        
        <div class="menu-img">
            <h3>Chocolate Cake</h3>
            <img src="../../src/images/deserts/chocoCake.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">20</div>
        
        <div class="menu-img">
            <h3>Chocolate Mousse</h3>
            <img src="../../src/images/deserts/chocoMousse.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">15</div>
        
        <div class="menu-img">
            <h3>Fruit Tart</h3>
            <img src="../../src/images/deserts/fruitTart.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">12</div>
        
        <div class="menu-img">
            <h3>Gelato Icecream</h3>
            <img src="../../src/images/deserts/gelatoIcecream.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">15</div>
        
        <div class="menu-img">
            <h3>Panna Cotta</h3>
            <img src="../../src/images/deserts/pannaCotta.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">22</div>
        
        <div class="menu-img">
            <h3>Tiramisu</h3>
            <img src="../../src/images/deserts/tiramisu.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">20</div>
        
    `;

    //Appending
    desertsPage.appendChild(desertsTitle);
    desertsPage.appendChild(desertsGuides);
    desertsPage.appendChild(desertsGrid);
    desertsMainSection.appendChild(desertsPage);
    
    //Animating
    
    return desertsMainSection;
}