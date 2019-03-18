export default class Footer {
    constructor(el) {
        this.renderFooter(el);
    }

    renderFooter(element) {
        const footer = document.createElement('footer'); // TODO: Create footer
        footer.innerHTML = `
        <div class="footer">
            <div class="footer-links">
                <a href="https://github.com/Kvin3324"><i class="fab fa-github"></i></a>
                <a href="https://twitter.com/kvinjya"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/k%C3%A9vin-joya-5b6250133/"><i class="fab fa-linkedin"></i></a>
            </div>
            <div class="footer-copyright">
                This footer is made with <i class="fas fa-heart"></i> by Kévin Joya.
            </div>
        </div>
        `;
        element.appendChild(footer);
    }
}