import {deleteProduct} from "../../08-service-module/product-service.js";

export default class CartItem {
    constructor(item) {
        this.element = document.createElement('tr');
        this.element.className = "CartRow";
        this.quantity = 0;
        this.element.innerHTML = `
            <tr class="CartRow">
                <td class="CartCell--item">
                    <div class="CartItem">
                      <img src="https://dummyimage.com/250x250.png/ff4444/ffffff" />
                      <span id=${item.id}>${item.name}</span>
                    </div>
                </td>
                <td class="CartCell--price">${item.price}</td>
                <td class="CartCell--quantity">
                    <span class="NumericInput">
                      <button class="NumericInput-button" disabled>
                        <i class="fas fa-minus"></i>
                      </button>
                      <span class="NumericInput-value">${this.quantity}</span>
                      <button class="NumericInput-button">
                        <i class="fas fa-plus"></i>
                      </button>
                    </span>
                </td>
                <td class="CartCell--subtotal">$0</td>
                <td class="CartCell-actions">
                    <button>DELETE</button>
                </td>
            </tr>
            `;
        this.element.addEventListener('click', this.onClick.bind(this));
        this.element.querySelector('.CartCell-actions button').addEventListener('click', this.onDelete.bind(this));
        this.element.querySelector('.NumericInput-button:nth-child(1)').disabled = this.quantity === 0;
    }

    //onClick method:
    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        const button = event.target.closest('button');
        if (!button || !button.matches('.NumericInput-button')) {
            return;
        }
        if (button.matches('.NumericInput-button:nth-child(1)') && !button.matches('.CartCell-actions button')) {
            this.quantity--;
        } else {
            this.quantity++;
        }
        this.element.querySelector('.NumericInput-value').textContent = this.quantity;
        this.element.querySelector('.CartCell--subtotal').textContent = `$${this.quantity * this.element.querySelector('.CartCell--price').textContent}`;
        this.element.querySelector('.NumericInput-button:nth-child(1)').disabled = this.quantity === 0;
    }

    onDelete() {
        deleteProduct(this.element.querySelector('.CartCell--item span').id).then(() => {
            this.element.remove();
        });
    }
}