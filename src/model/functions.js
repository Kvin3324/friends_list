/**
 * Fetch data from an API
 * @param String The url to fetch the data.
 * @returns An array of data.
 */
export const getData = async bdd => { // TODO: Get data from BDD
    try {
        let data = await fetch(bdd);
        let res = await data.json();
        return res;
    } catch (error) {
        throw error;
    }
}