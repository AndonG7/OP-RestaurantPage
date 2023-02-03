const nav = document.createElement('nav');
            const logo = document.createElement('div');
            const ul = document.createElement('ul');
                const li1 = document.createElement('li');
                const li2 = document.createElement('li');
                const li3 = document.createElement('li');
                const li4 = document.createElement('li');

export default nav;

export function addNavBar () {
    //Add classes
    logo.classList.add('logo');
    ul.classList.add('links');

    //Inner HTML
    logo.textContent = "RAMAZOTTI";
    li1.textContent = "Home";
    li2.textContent = "Menu";
    li3.textContent = "About Us";
    li4.textContent = "Contact";

    //Appending 
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    nav.appendChild(logo);
    nav.appendChild(ul);

    //Add active class
    li1.classList.add('navActive');

    return nav;
}