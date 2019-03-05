/**
 * IMPORT
 */
import Bag from '../Bag';

export default class HeaderTitle {
   constructor(e, tabl) {
       this.renderTitle(e, tabl);
   }
   
    renderTitle(element, tab)  {
        const div = document.createElement('div'); // TODO: Create buttons titles
        div.innerHTML = `
            <header class='container-fluid'>
                <div class='row'> 
                    <div class='header--title col-12 d-flex justify-content-center'> 
                        <button class='first--title btn btn-primary'><a href='#'>People</a>
                    </div>
                </div>
            </header>`;
        new Bag(div.querySelector(".header--title", tab));
        element.appendChild(div); 
    }
    
}

export function createList(element, secondElement) {
    // TODO: Create list view
    document.querySelector('.second--title').onclick = function() {
        const titleList = (document.querySelector('.second--title')); // TODO: Pick the list button
        const listDiv = document.createElement('div');
        listDiv.innerHTML = `
            <div id="myModal" class="modal">
                <div class="modal-content">
                <div class="my--list">
                        <h4> My added friends </h4>
                        <p>${element}</p>
                        <p>${secondElement}</p>
                        </div>
                    <span class="close">X</span>
                </div>                
             </div>
             `;
        titleList.appendChild(listDiv); 

        const modal = document.getElementById('myModal'); // TODO: Get the modal
        const btn = document.querySelector(".second--title");
        const btnClose = document.querySelector(".close"); // TODO: Get the btn that closes the modal
        // TODO: When the user clicks the button, open the modal 
        btn.addEventListener('click', () => {
            modal.style.display = "block";
        });
        btnClose.onclick = function () { // TODO: When the user clicks on <span> (x), close the modal
                modal.style.display = "none";
        }
        // TODO: When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }

}
