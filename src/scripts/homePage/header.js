import { checkVisibility } from "../viewportVisibility";

const header = document.createElement('header');
        const banner = document.createElement('div');
            const bigLogo = document.createElement('div');
                const innerText = document.createElement('div');
        const divider = document.createElement('div');

export default header;

export function addHeader () {
    //Add classes
    banner.classList.add('banner');
    bigLogo.classList.add('bigLogo')
    innerText.classList.add('innerText');
    divider.classList.add('custom-shape-divider-bottom-1676318227');

    //Inner HTML
    innerText.innerHTML = "PIZZERIA";
    bigLogo.innerHTML = "RAMAZOTTI";
    divider.innerHTML = `
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
    </svg>
    `;

    //Appending 
    bigLogo.appendChild(innerText);
    banner.appendChild(bigLogo);
    header.appendChild(banner);
    header.appendChild(divider);

    //Animating
    setTimeout(function(){
        bigLogo.style.opacity = "1";
    }, 1000);
    setTimeout(function(){
        innerText.style.opacity = "1";
    }, 2000);

    return header;
}

// <div class="custom-shape-divider-bottom-1676318227">
//     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
//         <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
//     </svg>
// </div>