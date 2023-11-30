import {content} from './index.js';

function footer() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const trademark = document.createElement('p');
    trademark.textContent = 'Behrad Noorani';
    footer.appendChild(trademark);

    const github = document.createElement('a');
    github.href = 'https://github.com/bnoora';
    github.target = '_blank';
    github.textContent = 'Github';
    footer.appendChild(github);

    content.appendChild(footer);
    return footer;
}

export {footer};