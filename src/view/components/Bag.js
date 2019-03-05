/**
 * Pick all data's items and display in my bag
 */
export default class Bag {
    constructor(el) {
        this.state = {
            friends: [],
        }
        this.renderBag(el, this.state.friends.length);
    }

    renderBag(element, n) {
        const button = document.createElement('button');
        button.setAttribute('class', 'second--title btn btn-secondary');
        button.innerHTML = `<a href='#'>List ${n}</a>`;
        element.appendChild(button);
    }
}