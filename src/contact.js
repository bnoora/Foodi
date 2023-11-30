import {content} from './index.js';

function contact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.classList.add('page');

    const contactDiv = document.createElement('div');
    contactDiv.id = 'contactdiv';

    const head = document.createElement('h1');
    head.textContent = 'Contact Us';
    contactDiv.appendChild(head);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: 123-456-7890';
    contactDiv.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'Email: foodi@food.com';
    contactDiv.appendChild(email);

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Food Street';
    contactDiv.appendChild(address);


    contact.appendChild(contactDiv);
    content.appendChild(contact);
    return contact;
}

export {contact};
