import {contact} from './contact.js';
import {menu} from './menu.js';
import {home} from './home.js';
import {nav} from './nav.js';
import { footer } from './footer.js';


const content = document.getElementById('content');

content.appendChild(nav());
content.appendChild(home());
content.appendChild(footer());

const footerElement = content.querySelector('footer'); 

const homebtn = document.getElementById('homebtn');
const menubtn = document.getElementById('menubtn');
const contactbtn = document.getElementById('contactbtn');

const replaceContent = (newContent) => {
    const toRemove = content.getElementsByClassName('page');
    if (toRemove.length > 0) {
        content.removeChild(toRemove[0]);
    }
    content.insertBefore(newContent, footerElement); 
};

homebtn.addEventListener('click', () => replaceContent(home()));
menubtn.addEventListener('click', () => replaceContent(menu()));
contactbtn.addEventListener('click', () => replaceContent(contact()));


export {content};

