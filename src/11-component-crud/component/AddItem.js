export default class AddItem {
    constructor(items) {
        this.element = document.createElement('section');
        this.element.innerHTML = `
            <h3>Add Item</h3>
            <div class="AddItemForm">
                <input type="text" placeholder="Enter item name"/>
                <button>ADD</button>
            </div>
        `;

        this.input = this.element.querySelector('input');
        this.button = this.element.querySelector('button');

        this.button.addEventListener('click', () => {
            this.onAdd(items, this.input.value);
        });

        this.input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.onAdd(items, this.input.value);
            }
        });

        this.input.focus();
    }

    onAdd(default_items, value) {
        default_items.push({
            "id": Date.now(),
            "title": value
        })
        console.log(default_items)
    }
}