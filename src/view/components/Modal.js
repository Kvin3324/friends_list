/**
 * Import, variables
 */
import Bag from "./Bag";

/**
 * Render the modal list friends.
 * @param {Array} data The array of data the component will used for rendering.
 */
export default class Modal {
    constructor(data) {
        this.data = data;
        this.preRender();
        this.render(this.data);
    };

    /**
     * Render the first part of the modal. The second part is created with `this.render()`.
     */
    preRender() {
        const div = document.createElement("div");
        div.setAttribute("id", "myModal");
        div.setAttribute("class", "modal");

        div.innerHTML = `
        <div class="modal-content">
            <span class="close">X</span>
            <h3 class="mt-4">My added friends</h3>
            <div class="card--list"></div>
        </div>`;

        document.querySelector("body").appendChild(div);
        this.modalClosed();
    }

    /**
     * Delete the modal component by removing from the DOM.
     */
    modalClosed() {
        const modal = document.getElementById('myModal');
        const spanClose = document.querySelector(".close");
        spanClose.addEventListener("click", () => document.querySelector("body").removeChild(modal));
    }

    /**
     * Remove friends in the modal list, re-render the component by calling `this.render()` and updating by the same way the `new Bag()` component.
     * @param {HTMLElement} clickElement Element to click on.
     * @param {Object} element Object to compare for splice `this.data`.
     */
    removeFriends(clickElement, element) {
        clickElement.addEventListener("click", () => { 
            this.data.map((el, i) => {
                if (el.name === element.name) {
                    this.data.splice(i, 1);
                    this.render(this.data);
                    return new Bag(document.querySelector(".header--title"), this.data);
                }
            });
        });
    }

    /**
     * Render the second part of modal with data, also called the `this.removeFriends()`.
     * @param {Array} tab The array of data to loop.
     */
    render(tab) {
        document.querySelector(".card--list").innerHTML = "";
        tab.map(el => {
            const div = document.createElement("div");
            div.setAttribute("class", "card my--list");
            div.setAttribute("style", "background: #3B5998;");

            div.innerHTML = `
            <p>${el.name}</p>
            <p>${el.mail}</p>
            <p>Phone number: ${el.phone}</p>
            <p class="delete"><i class="fas fa-trash"></i></p>`;

            document.querySelector(".card--list").appendChild(div);
            this.removeFriends(div.querySelector(".delete"), el);
        });
    };
};