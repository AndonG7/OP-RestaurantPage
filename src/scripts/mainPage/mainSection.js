const mainMainSection = document.createElement('div');
    const mainPage = document.createElement('div');
        const mainTitle = document.createElement('div');
        const mainGuides = document.createElement('div');
        const mainGrid = document.createElement('grid');

export function addMainMainSection() {
    //Add classes
    mainMainSection.classList.add('mainMainSection');
    mainPage.classList.add('mainPage');
    mainTitle.classList.add('mainTitle');
    mainGuides.classList.add('mainGuides');
    mainGrid.classList.add('mainGrid');

    //Inner HTML
    mainTitle.innerHTML = "Main Course";
    mainGuides.innerHTML = `
        <h3>Name</h3>
        <div></div>
        <h3>Price in EUR</div>
    `;

    mainGrid.innerHTML = `
        <div class="menu-img">
            <h3>Pizza Capricciosa</h3>
            <img src="../../images/main/capricciosaPizza.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">30</div>
        
        <div class="menu-img">
            <h3>Pasta Carbonara</h3>
            <img src="../../images/main/carbonara.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">25</div>
        
        <div class="menu-img">
            <h3>Pizza Carbonara</h3>
            <img src="../../images/main/carbonaraPizza.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">30</div>
        
        <div class="menu-img">
            <h3>Chicago Style Pizza</h3>
            <img src="../../images/main/chicagoPizza.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">35</div>
        
        <div class="menu-img">
            <h3>Feta Pasta</h3>
            <img src="../../images/main/fetaPasta.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">25</div>
        
        <div class="menu-img">
            <h3>Hawaiian Style Pizza</h3>
            <img src="../../images/main/hawaiiPizza.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">30</div>
        
        <div class="menu-img">
            <h3>Pizza Margherita</h3>
            <img src="../../images/main/margheritaPizza.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">30</div>
        
        <div class="menu-img">
            <h3>New York Style Pizza</h3>
            <img src="../../images/main/newyorkPizza.png">
        </div>
        <div class="dots"></div>
        <div class="menu-price">30</div>
        
        
    `;

    //Appending
    mainPage.appendChild(mainTitle);
    mainPage.appendChild(mainGuides);
    mainPage.appendChild(mainGrid);
    mainMainSection.appendChild(mainPage);
    
    //Animating
    
    return mainMainSection;
}