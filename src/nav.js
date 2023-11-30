import {content, getElementById} from './index.js';

function nav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    const navul = document.createElement('ul');
    navul.classList.add('navul');
    const navli1 = document.createElement('li');
    const navli2 = document.createElement('li');
    const navli3 = document.createElement('li');
    navul.appendChild(navli1);
    navul.appendChild(navli2);
    navul.appendChild(navli3);

    const homebtn = document.createElement('button');
    homebtn.id = 'homebtn';
    homebtn.classList.add('navbtn');
    homebtn.textContent = 'Home';
    navli1.appendChild(homebtn);

    const menubtn = document.createElement('button');
    menubtn.id = 'menubtn';
    menubtn.classList.add('navbtn');
    menubtn.textContent = 'Menu';
    navli2.appendChild(menubtn);

    const contactbtn = document.createElement('button');
    contactbtn.id = 'contactbtn';
    contactbtn.classList.add('navbtn');
    contactbtn.textContent = 'Contact';
    navli3.appendChild(contactbtn);

    nav.appendChild(navul);
    content.appendChild(nav);
}

export {nav};