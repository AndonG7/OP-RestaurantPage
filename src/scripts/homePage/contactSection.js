const contact = document.createElement('div');

export function addContact () {
    //Add classes
    contact.classList.add('contactSection');

    //Inner HTML
    contact.innerHTML = `
        <h2>Reach Us</h2>
        <div class="contact-info">
            <div class="phone">
                <img src="../../src/images/call.svg">
                <span>043 609 909</span>
            </div>
            <h3>Find Us</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.966276981449!2d22.013395759138323!3d41.43995337837414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1356650877efea6b%3A0x3eaaca810aa88426!2zUGl6emEgcmVzdGF1cmFudCDigJ5SYW1henpvdGnigJw!5e0!3m2!1sen!2smk!4v1676506265246!5m2!1sen!2smk" width="100%" height="600" style="border:0; filter: invert(90%)" allowfullscreen="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    `;

    //Appending 

    //Animating

    return contact;
}