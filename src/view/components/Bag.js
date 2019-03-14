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
                button.onclick = function () {
                    alert("Sorry, no friends added yet.");
                };
            } else if (n.length > 0) {
                const btn = document.querySelector(".second--title");
                element.removeChild(btn);
                element.appendChild(button);
            };
    }

    /**
     * Create the modal section
     * @param HTMLElement this.html === list === view of my list
     */
    modalHandler() {
        const theModal = document.createElement('div');
        theModal.setAttribute('id', 'myModal');
        theModal.setAttribute('class', 'modal');
        theModal.innerHTML = `
            <div class="modal-content">
                    <span class="close">X</span>
                <h3 class="mt-4">My added friends</h3>
            </div>`;
        this.btnProps.appendChild(theModal);

        this.state.friends.map((el, i) => {
            const list = document.createElement('div');
            list.setAttribute('class', 'my--list');
            list.innerHTML = `
            <div class="card" style="background: #3B5998;">
                     <p>${el.name}</p>
                     <p>${el.mail}</p>
                     <p>Phone number: ${el.phone}</p>
                     <p class="delete"><i class="fas fa-trash"></i></p>
             </div>`;
            this.html = list;
            this.name = el.name;
            document.querySelector('.modal-content').appendChild(list);
            this.deleteElem(i);
        })
        this.modalActions();
    }

    deleteElem(i) {
        const iconTrash = this.html.querySelector(".delete");
        iconTrash.addEventListener('click', () => {
                const arrNames = [];
                this.state.friends.forEach(item => {
                    arrNames.push(item.name);
                })

                   if (arrNames[i] === this.state.friends[i].name) {
                        const position = event.target;
                        this.state.friends.splice(position, 1);
                        console.log(this.state.friends);
                    }

            // this.state.friends.splice(i, 1);
            // console.log(this.state.friends);
        })
    }
    // const arrTrash = [];
    // const deleteElem = this.state.friends.splice(this.state.friends.indexOf(event.target), 1);
    // arrTrash.push(deleteElem);
    // console.log(arrTrash);
    // console.log(this.state.friends);
    // if (this.name === this.name) {
    //  const position = this.state.friends.indexOf(event.target)
    //     this.state.friends.splice(position,1);
    //     console.log(this.state.friends); 
    // }

    // for (let i = 0; i < this.state.friends.length; i++) {
    //     //console.log(this.state.friends[i].name);
    //     const arrNames = [];
    //     arrNames.push(this.state.friends[i].name);
    //     console.log(arrNames);
    // if (arrNames[i]=== this.state.friends[i].name) {
    //     console.log("Ok");
    // } else {
    //     console.log("Something wrong");
    // }
    //}

    modalActions() {
        const modal = document.getElementById('myModal');
        this.btnProps.addEventListener("click", (event) => {
            modal.style.display = "block";
            if (event.target == modal) { // TODO: When the user clicks on the modal, close it
                modal.style.display = "none";
            }
            else if (event.target == document.querySelector('.close')) {
                modal.style.display = "none";
            }
        });
    }
}