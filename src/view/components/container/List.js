/**
 * Import, Variables
 */
import Footer from "../Footer";
import {getData} from "../../../model/functions";
import { createList } from "../Title";


export default class List {
    constructor(el) {
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

    renderPeopleList(element) {
        const listSection = document.createElement('section'); // TODO: Create section
        for (let i = 0; i < this.data.length; i++) { // TODO: Create 10 cards
            const cardList = document.createElement('div');
            cardList.innerHTML = `
                <div class='row'> 
                    <div class='people--list col-12 d-flex justify-content-center'> 
                        <div class="col-xs-12 col-sm-8">
                            <div class="card" style="background: grey;">
                                <div class="card-category">${this.data[i].name}</div>
                                <div class="card-description">
                                    <p>${this.data[i].address.suite}</p>
                                    <p>${this.data[i].address.city}</p>
                                    <p>${this.data[i].email}</p>
                                    <p> Phone number: ${this.data[i].phone}</p>
                                </div>
                                <img class="card-user" src="https://kitt.lewagon.com/placeholder/users/tgenaitay">
                                <button class="add"><i class="fas fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>`;
                listSection.appendChild(cardList);                
            }
            element.appendChild(listSection);
            new Footer(element);
            
                  
        const addBtn = document.querySelectorAll('.add'); // TODO: Pck add button
            for (let i = 0; i < addBtn.length; i++) {
                addBtn[i].addEventListener('click', () => {
                    console.log(this.data[i].name);
                    console.log(this.data[i].email);

                    createList(this.data[0].name);
                    
                });  
            } 
    } 
}

             