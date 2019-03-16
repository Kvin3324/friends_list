import Modal from "./Modal";

/**
 * Pick all data's items and display in my bag
 * @param {HTMLElement} el the html element to render the bag component.
 * @param {Array} friendsTab the friends Array use for create modal and show number of friends in list.
 */
export default class Bag {
    constructor(el, friendsTab = []) {
        this.state = {
            friends: friendsTab
        }
        this.renderBag(el, this.state.friends);
        this.renderModal(this.state.friends);
    }

    /**
     * Check if modal component already exist in the DOM, if not call `new Modal()` class.
     * @param {Array} friendsData The data to pass in `new Modal()`.
     */
    renderModal = friendsData => {
        if (!document.querySelector("#myModal")) {
            this.btnProps.addEventListener("click", () => new Modal(friendsData));
        }
    };

    /**
     * Render the bag component, check if already exist in the DOM to update or create.
     * @param {HTMLElement} element The element to add or update the component.
     * @param {Array} n The array of data to get length for rendering.
     */
    renderBag(element, n) {
        const button = document.createElement('button');

        button.setAttribute('class', 'second--title btn btn-secondary');
        button.innerHTML = `<a href='#'>List ${n.length}</a>`;
        this.btnProps = button;

        if (n.length === 0) {
            element.appendChild(button);
        } else if (n.length > 0) {
            const btn = document.querySelector(".second--title");
            element.removeChild(btn);
            element.appendChild(button);
        };
    }

}