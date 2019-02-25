export default class List {
    constructor(el) {
        this.renderFriendsList(el);
    }

    renderFriendsList(element) {
        const listSection = document.createElement('section'); // TODO: Create section
        for (let i = 0; i < 10; i++) { // TODO: Create 10 cards
            const cardList = document.createElement('div');
            cardList.innerHTML = `
                <div class='row'> 
                    <div class='people--list col-12 d-flex justify-content-center'> 
                        <div class="col-xs-12 col-sm-4">
                            <div class="card" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://kitt.lewagon.com/placeholder/cities/shanghai');">
                                <div class="card-category">Popular</div>
                                <div class="card-description">
                                    <h2>Le Wagon Shanghai</h2>
                                    <p>Very cool city, the best</p>
                                </div>
                                <img class="card-user" src="https://kitt.lewagon.com/placeholder/users/tgenaitay">
                                <a class="card-link" href="#" ></a> 
                            </div>
                        </div>
                    </div>
                </div>
        `;
        listSection.appendChild(cardList);
        }
        element.appendChild(listSection);
    }    
}
