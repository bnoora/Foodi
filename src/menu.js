import {content} from './index.js';

function menu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.classList.add('page');
    const menudiv = document.createElement('div');
    menudiv.id = 'menudiv';
    const menuItems = createMenu();
    menuItems.forEach((item) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');
        const name = document.createElement('h3');
        name.textContent = item.name;
        const price = document.createElement('p');
        price.textContent = item.price;
        const description = document.createElement('p');
        description.textContent = item.description;
        const image = document.createElement('img');
        image.src = `./images/${item.name}.png`;
        image.alt = item.name;
        menuItem.appendChild(image);
        menuItem.appendChild(name);
        menuItem.appendChild(price);
        menuItem.appendChild(description);
        menudiv.appendChild(menuItem);
    });

    menu.appendChild(menudiv);
    content.appendChild(menu);
    return menu;
}

class MenuItem {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

function createMenuItem(name, price, description) {
    const menuItem = new MenuItem(name, price, description);
    return menuItem;
}

function createMenu() {
    const menu = [];
    menu.push(createMenuItem('Chicken', '$5.00', 'Chicken is good'));
    menu.push(createMenuItem('Beef', '$10.00', 'Beef is good'));
    menu.push(createMenuItem('Pork', '$7.00', 'Pork is good'));
    menu.push(createMenuItem('Fish', '$6.00', 'Fish is good'));
    menu.push(createMenuItem('Vegetables', '$4.00', 'Vegetables are good'));
    menu.push(createMenuItem('Fruit', '$3.00', 'Fruit is good'));
    menu.push(createMenuItem('Bread', '$2.00', 'Bread is good'));
    return menu;
}


export {menu};
