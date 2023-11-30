import contact from './contact';
import menu from './menu';
import home from './home';
import nav from './nav';

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

