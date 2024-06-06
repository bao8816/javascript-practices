import CartItem from "./CartItem.js";
export default class CartList {
    constructor(items) {
        this.element = document.createElement('div');
        this.element.className = "Cart";
        this.element.innerHTML =
            `
            <div class="Cart">
                <table class="CartListView">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <div class="Total">Total: <span class="Total-value">$0</span></div>
            </div>

            `;

        //for each item in items, create a new CartItem
        //and append it to the tbody
        items.forEach(item => {
            const cartItem = new CartItem(item);
            this.element.querySelector('tbody').append(cartItem.element);
        });

        //add event listener to the CartList
        this.element.addEventListener('click', this.onClick.bind(this));
    }

    //onClick method:
    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        const subtotals = this.element.querySelectorAll('.CartCell--subtotal');
        let total = 0;
        subtotals.forEach(subtotal => {
            total += Number(subtotal.textContent.slice(1));
        });
        this.element.querySelector('.Total-value').textContent = `$${total}`;
    }

    // TODO: implement the onClick method to update the total when deleting an item
}