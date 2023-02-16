const footer = document.createElement('footer');

export function addFooter (content) {
    //Add classes
    footer.classList.add('footer');

    //Inner HTML
    footer.innerHTML = "Copyright © 2023 Andon Gjorgjiev. All Rights Reserved.";

    //Style
    footer.style.background = "black";
    footer.style.color = "white";
    footer.style.textAlign = "center";

    content.appendChild(footer);
}
