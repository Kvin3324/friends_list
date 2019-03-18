import Modal from "./Modal";

/**
 * Pick all data's items and display in my bag
 * @param {HTMLElement} el the html element to render the bag component.
 * @param {Array} friendsTab the friends Array use for create modal and show number of friends in list.
 * @param {Boolean} isModalOpen Define if the Bag should render in the context of modal or not.
 */
export default class Bag {
    constructor(el, friendsTab = [], isModalOpen) {
        this.state = {
            friends: friendsTab
        }
        this.renderBag(el, this.state.friends, isModalOpen);
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
    renderBag(element, n, isModalOpen) {
        const button = document.createElement('button');

        button.setAttribute('class', 'second--title btn btn-secondary');
        button.innerHTML = `<a href='#'>List ${n.length}</a>`;
        this.btnProps = button;

        button.addEventListener("click", () => {
            if (n.length === 0) {
                alert("No friends added yet, please press + to add one.");
            }
        })

        if (isModalOpen === true) {
            const btn = document.querySelector(".second--title");
            element.removeChild(btn);
            element.appendChild(button);
        } else {
            if (n.length === 0) {
                element.appendChild(button);
            } else {
                const btn = document.querySelector(".second--title");
                element.removeChild(btn);
                element.appendChild(button);
            }
        }
    }

}