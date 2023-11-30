import {contact} from './contact.js';
import {menu} from './menu.js';
import {home} from './home.js';
import {nav} from './nav.js';

const content = document.getElementById('content');

content.appendChild(nav());
content.appendChild(home());

const homebtn = document.getElementById('homebtn');
const menubtn = document.getElementById('menubtn');
const contactbtn = document.getElementById('contactbtn');

homebtn.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    content.appendChild(home());
}
);

menubtn.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    content.appendChild(menu());
}
);

contactbtn.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    content.appendChild(contact());
}
);

export {content};

