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
        this.btnProps.addEventListener("click", () => {
            const list = document.createElement('div');
            list.innerHTML = `
             <div id="myModal" class="modal">
                <div class="modal-content">
                    <div class="my--list">
                        <h4> My added friends </h4>
                        <p>name</p>
                        <p>email</p>
                    </div>
                    <span class="close">X</span>
                </div>                
            </div>`;
            this.btnProps.appendChild(list);
            const modal = document.getElementById('myModal'); 
            modal.style.display = "block";
            // TODO: When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }
        });
    }
}