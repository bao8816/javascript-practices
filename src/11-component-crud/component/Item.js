export default class Item {
    constructor(item_title) {
        this.element = document.createElement('tr')
        this.element.innerHTML = `
            <tr class="ListItem">
                <td>${item_title}</td>
                <td class="ListItem-actions">
                    <button>EDIT</button>
                    <button>DELETE</button>
                </td>
            </tr>
        `;

        this.item_name = this.element.getElementsByTagName('td')[0].innerText;
        this.item_name_td = this.element.getElementsByTagName('td')[0];
        this.item_name_input = document.createElement('input');

        this.edit_save_button = this.element.getElementsByTagName('td')[1]
            .getElementsByTagName('button')[0];
        this.delete_button = this.element.getElementsByTagName('td')[1]
            .getElementsByTagName('button')[1];

        this.edit_save_button.addEventListener('click', this.onEdit.bind(this));
        this.delete_button.addEventListener('click', this.onDelete());
    }

    onEdit() {
        if (this.edit_save_button.innerText === "EDIT") {
            this.item_name_input.innerHTML = this.item_name_td.innerHTML;
            this.item_name_input.setAttribute('placeholder', `${this.item_name}`);
            this.item_name_td.parentNode.replaceChild(this.item_name_input, this.item_name_td);

            this.edit_save_button.innerText = 'SAVE'
        }
        else {
            this.item_name_input.parentNode.replaceChild(this.item_name_td, this.item_name_input);
            this.edit_save_button.innerText = 'EDIT';
        }
        // TODO: implement with data
    }


    onDelete() {
        // TODO: implement this
    }
}