const nav = document.createElement('nav');
        const logo = document.createElement('div');
        const menu = document.createElement('div');
            const menuHome = document.createElement('a');
            const menuMenu = document.createElement('a');
            const menuAboutUs = document.createElement('a');
            const menuContact = document.createElement('a');

export function addNavBar (content) {
    //Add classes
    nav.classList.add('navBar');
        logo.classList.add('logo');
        menu.classList.add('menu');

    //Inner HTML
    logo.innerHTML = "RAMAZOTTI";

    menuHome.innerHTML = "Home";
    menuMenu.innerHTML = "Menu";
    menuAboutUs.innerHTML = "About Us";
    menuContact.innerHTML = "Contact";

    //Appending 
    menu.appendChild(menuHome);
    menu.appendChild(menuMenu);
    menu.appendChild(menuContact);
    menu.appendChild(menuAboutUs);

    nav.appendChild(logo);
    nav.appendChild(menu);

    content.appendChild(nav);
}

//Animated navigation on scroll

const [red, green, blue, alpha] = [255, 255, 255, 0];

window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150;
    y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
    y = y-1;
    const [r, g, b, a] = [red, green, blue, alpha+(y*1.5)];
    nav.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    if (y > 0.5) {
        nav.style.color = `rgb(0, 0, 0)`;
        nav.style.gap = '40vw';
        nav.style.padding = '10px 0';
        logo.style.fontSize = '1.5rem';
        menu.style.fontSize = '1.2rem';
    } else {
        nav.style.color = `rgb(255, 255, 255)`;
        nav.style.gap = '30vw';
        nav.style.padding = '20px 0'
        logo.style.fontSize = '2rem';
        menu.style.fontSize = '1.6rem';
    }
    if (y === 1) {
        nav.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0)`;
    }
  })