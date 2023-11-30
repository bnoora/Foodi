import {content} from './index.js';

function home() {
    const home = document.createElement('div');
    home.classList.add('home');

    const homediv = document.createElement('div');
    homediv.id = 'homediv';

    const head = document.createElement('h1');
    head.textContent = 'Foodi';
    homediv.appendChild(head);

    const subhead = document.createElement('h2');
    subhead.textContent = 'The best food in town';
    homediv.appendChild(subhead);

    const description = document.createElement('p');
    description.textContent = 'We want to be the very best that no one ever was.';
    homediv.appendChild(description);

    // const image = document.createElement('img');
    // image.src = './images/food.png';
    // image.alt = 'Food';
    // homediv.appendChild(image);


    home.appendChild(homediv);
    content.appendChild(home);
    return home;
}

export {home};