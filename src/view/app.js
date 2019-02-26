/**
 * Import
 */
import HeaderTitle from "./components/Title";
import List from "./components/container/List";

export default class App {
    constructor(el) {
        new HeaderTitle(el); // TODO: Display buttons titles
        new List(el); // TODO: Display people list
    }
}




