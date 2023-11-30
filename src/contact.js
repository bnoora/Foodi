import {content} from './index.js';

function contact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const head = document.createElement('h1');
    head.textContent = 'Contact Us';
    contact.appendChild(head);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: 123-456-7890';
    contact.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'Email: foodi@food.com';
    contact.appendChild(email);

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Food Street';
    contact.appendChild(address);

    content.appendChild(contact);
    return contact;
}

export {contact};
