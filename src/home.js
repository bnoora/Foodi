import {content, getElementById} from './index.js';

function home() {
    const home = document.createElement('div');
    home.classList.add('home');

    const head = document.createElement('h1');
    head.textContent = 'Foodi';
    home.appendChild(head);

    const subhead = document.createElement('h2');
    subhead.textContent = 'The best food in town';
    home.appendChild(subhead);

    const description = document.createElement('p');
    description.textContent = 'We want to be the very best that no one ever was.';
    home.appendChild(description);

    const image = document.createElement('img');
    image.src = './images/food.png';
    image.alt = 'Food';
    home.appendChild(image);

    content.appendChild(home);
}

export {home};