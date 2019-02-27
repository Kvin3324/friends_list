export default class HeaderTitle {
   constructor(el) {
       this.renderTitle(el);
   }

    renderTitle(element)  {
        const div = document.createElement('div'); // TODO: Create buttons titles
        div.innerHTML = `
            <header class='container-fluid'>
                <div class='row'> 
                    <div class='header--title col-12 d-flex justify-content-center'> 
                        <button class='first--title btn btn-primary'><a href='#'>People</a> 
                        <button class='second--title btn btn-secondary'><a href='#'>List</a> 
                    </div>
                </div>
            </header>
        `;
        element.appendChild(div); 
        
        // TODO: Create list view
        document.querySelector('.second--title').onclick = function() {
            const titleList = (document.querySelector('.second--title')); // TODO: Pick the list button
            const listDiv = document.createElement('div');
            listDiv.innerHTML = `
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <div class="my--list">
                            <h4> My added friends </h4>
                            <p>Some text in the Modal..</p>
                        </div>
                        <span class="close">X</span>
                    </div>                
                 </div>
            `;
        titleList.appendChild(listDiv) 
        
        
            const modal = document.getElementById('myModal'); // TODO: Get the modal
            // TODO: Get the btn that opens the modal
            const btn = document.querySelector(".second--title"); 
            const btnClose = document.querySelector(".close"); // TODO: Get the btn that closes the modal
            // TODO: When the user clicks the button, open the modal 
            btn.addEventListener('click', () => { 
                modal.style.display = "block";
            }) 
            // btnClose.onclick = function () { // TODO: When the user clicks on <span> (x), close the modal
            //         modal.style.display = "none";
            // }

            btnClose.addEventListener('click', (e) => {
                e.preventDefault();
                this.parentNode.style.display = 'none';
            }, false);


            // TODO: When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) { 
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            
        }
   }
}