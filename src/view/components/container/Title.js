/**
 * IMPORT
 */
import Bag from '../Bag';

/**
 * Render the Header of the App
 * @param HTMLElement the element to apply the Header.
 * @param Array The array of friends to passed in the bag component, if empty = []
 */
export default class HeaderTitle {
   constructor(e) {
       this.renderTitle(e);
   }
   
    renderTitle(element)  {
        const div = document.createElement('div'); // TODO: Create buttons titles
        div.innerHTML = `
            <header class='container-fluid'>
                <div class='row'> 
                    <div class='header--title col-12 d-flex justify-content-center'> 
                        <button class='first--title btn btn-primary'><a href='#'>People</a>
                    </div>
                </div>
            </header>`;
        new Bag(div.querySelector(".header--title"));
        element.appendChild(div); 
    }
}