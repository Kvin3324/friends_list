/**
 * Import, Variables
 */
import Footer from "../Footer";
import { getData } from "../../../model/functions";
import Bag from "../Bag";


/**
 * Component who render the list of friends via AJAX call.
 * @param HTMLElement the param 'element' === mainDiv 
*/
export default class List {
    constructor(el) {
        this.state = {
            friendsInBag: []
        }
        this.data = [];
        this.componentWillMount(el);
    }

    componentWillMount = async (element) => {
        await this.setData();
        this.renderPeopleList(element);
    }

    setData = async () => {
        const dataArray = await getData('https://jsonplaceholder.typicode.com/users');
        this.data = [...dataArray];
    }

    /**
     * Function who addEvent on the add button, incremente the number of items and display friends in the list
     * @param HTMLElement el === element === mainDiv
     * @param HTMLElement card === cardList === div who render the view of the cards
     * @param Object cardElement === el === parameter which render the object
     */
    getProps(card, cardElement) {
        const btn = card.querySelector("button");
        btn.addEventListener('click', () => {
            this.state.friendsInBag.push({name: cardElement.name, mail: cardElement.email});
            new Bag(document.querySelector(".header--title"), this.state.friendsInBag);
        });
    }

    /**
     * Render the HTML in the APP
     * @param HTMLElement The HTML element to render.
     */
    renderPeopleList(element) {
        const listSection = document.createElement('section'); // TODO: Create section
        this.data.map(el => {
            const cardList = document.createElement('div');
            cardList.innerHTML = `
            <div class='row'>
                <div class='people--list col-12 d-flex justify-content-center'>
                    <div class="col-xs-12 col-sm-8">
                        <div class="card" style="background: grey;">
                            <div class="card-category">${el.name}</div>
                            <div class="card-description">
                                <p>${el.address.suite}</p>
                                <p>${el.address.city}</p>
                                <p class="mail">${el.email}</p>
                                <p> Phone number: ${el.phone}</p>
                            </div>
                            <img class="card-user" src="https://kitt.lewagon.com/placeholder/users/tgenaitay">
                            <button class="add"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>`;
            listSection.appendChild(cardList);
            this.getProps(cardList, el);            
        });

        element.appendChild(listSection);
        new Footer(element);
    }
}