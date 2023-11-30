import {contact} from './contact.js';
import {menu} from './menu.js';
import {home} from './home.js';
import {nav} from './nav.js';
import { footer } from './footer.js';


const content = document.getElementById('content');

content.appendChild(nav());
content.appendChild(home());
content.appendChild(footer());


const homebtn = document.getElementById('homebtn');
const menubtn = document.getElementById('menubtn');
const contactbtn = document.getElementById('contactbtn');

homebtn.addEventListener('click', () => {
    const toRemove = content.getElementsByClassName('page');
    content.removeChild(toRemove[0]);
    content.appendChild(home());

}
);

menubtn.addEventListener('click', () => {
    const toRemove = content.getElementsByClassName('page');
    content.removeChild(toRemove[0]);
    content.appendChild(menu());
}
);

contactbtn.addEventListener('click', () => {
    const toRemove = content.getElementsByClassName('page');
    content.removeChild(toRemove[0]);
    content.appendChild(contact());
}
);


export {content};

