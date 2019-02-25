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
   }
}