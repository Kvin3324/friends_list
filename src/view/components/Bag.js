/**
 * Pick all data's items and display in my bag
 * @param HTMLElement the html element to render the bag component.
 * @param Array the friends Array use for create modal and show number of friends in list.
 */
export default class Bag {
    constructor(el, friendsTab = []) {
        this.state = {
            friends: friendsTab
        }
        this.renderBag(el, this.state.friends);
        this.modalHandler();
    }
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

    /**
     * Create the modal section
     */
    modalHandler() {

        const theModal = document.createElement('div');
        theModal.setAttribute('id', 'myModal');
        theModal.setAttribute('class', 'modal');
        theModal.innerHTML = `
                <div class="modal-content">
                    <span class="close">X</span>
                </div>`;
        this.btnProps.appendChild(theModal);
        
        for (let i = 0; i < this.state.friends.length; i++) {
            const list = document.createElement('div');
            list.innerHTML = `
                <div class="my--list">
                <p>${this.state.friends[i].name}</p>
                <p>${this.state.friends[i].mail}</p>
                <p class="delete"><i class="fas fa-trash"></i></p>
            `;
            document.querySelector('.modal-content').appendChild(list);
        }

        const modal = document.getElementById('myModal');
        this.btnProps.addEventListener("click", () => {
            modal.style.display = "block";    
        })
        // TODO: When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
        const btnClose = document.querySelector('.close');
        console.log(btnClose);
        
        
        
    }
}