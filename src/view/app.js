/**
 * Import
 */
import HeaderTitle from "./components/Title";
import List from "./components/List";
import Footer from "./components/Footer";
import { elements } from "../base";
export default class App {
    constructor() {
        new HeaderTitle(elements.mainDiv); // TODO: Display buttons titles
        new List(elements.mainDiv); // TODO: Display people list
        new Footer(elements.mainDiv); // TODO: Display footer
    }
}