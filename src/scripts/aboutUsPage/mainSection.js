const aboutUsMainSection = document.createElement('div');
    const aboutUsPage = document.createElement('div');
        const aboutUsTitle = document.createElement('div');
export function addAboutUsMainSection() {
    //Add classes
    aboutUsMainSection.classList.add('aboutUsMainSection');
    aboutUsPage.classList.add('aboutUsPage');
    aboutUsTitle.classList.add('aboutUsTitle');

    //Inner HTML
    aboutUsPage.innerHTML = `
    <h1>About Our Journey</h1>
    <p>\u0009Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in arcu at enim pretium consectetur. Donec sed fringilla felis. Cras elementum lacus ut eros tincidunt imperdiet. Aenean pellentesque semper fermentum. Suspendisse tincidunt, risus nec hendrerit eleifend, justo nisi gravida enim, vel elementum nisl nisi id mauris. Cras tincidunt gravida dui sed molestie. Curabitur non semper metus, vel consectetur libero. Vivamus at mauris accumsan, condimentum tellus maximus, egestas mauris. In feugiat justo ac aliquam porttitor. Etiam cursus, felis vitae tincidunt sagittis, urna lacus placerat nisl, sed vulputate elit erat non eros. Donec eleifend elementum sapien, ut porta felis porttitor quis. Nulla feugiat neque aliquam augue imperdiet consectetur. Ut quis elit a mauris scelerisque lacinia. Proin lectus erat, congue id dapibus vel, consectetur pellentesque enim. Duis venenatis laoreet diam quis cursus. Sed accumsan iaculis dolor, a finibus eros.
    </p>
    <p>
    Curabitur et condimentum felis, at ultricies dolor. Phasellus placerat ac nisl eu auctor. Vivamus sit amet neque nec arcu vulputate luctus. Vivamus vitae purus lobortis, rutrum nisi a, faucibus tellus. Nulla nec tristique ligula. Ut massa massa, luctus cursus metus eu, interdum molestie neque. Proin erat nulla, cursus ut orci id, finibus ullamcorper leo. Sed posuere pulvinar risus sit amet venenatis. In vestibulum neque ornare suscipit vehicula. Etiam tempus congue felis, ac egestas nulla porta id. Vestibulum volutpat lacus eget ultricies molestie. Phasellus pellentesque nisi vitae quam malesuada tincidunt. Praesent eget arcu sollicitudin, scelerisque risus id, pellentesque metus. Suspendisse felis neque, elementum quis arcu sed, sodales pulvinar nisl.
    </p>
    `;

    //Appending
    aboutUsPage.appendChild(aboutUsTitle);
    aboutUsMainSection.appendChild(aboutUsPage);
    
    //Animating
    
    return aboutUsMainSection;
}