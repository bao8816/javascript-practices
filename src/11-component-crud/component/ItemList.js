import Item from "./Item.js";

export default class ItemList {
    constructor(item_list) {
        this.element = document.createElement('section');
        this.element.innerHTML = `
            <table class="List">
                
            </table>
        `;

        item_list.map((cur) => {
            return this.element.getElementsByClassName('List')[0].append(new Item(`${cur.title}`).element)
        })
    }
}
