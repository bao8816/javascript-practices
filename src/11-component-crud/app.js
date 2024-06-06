import AddItem from "./component/AddItem.js";
import ItemList from "./component/ItemList.js";
import ExportFile from "./component/ExportFile.js";

const items =
[
    {
        "id": 1,
        "title": "Blandit imperdiet"
    },
    {
        "id": 2,
        "title": "Tempor nec"
    },
    {
        "id": 3,
        "title": "Elit torquent"
    },
    {
        "id": 4,
        "title": "Tortor litora"
    },
    {
        "id": 5,
        "title": "Ligula viverra"
    }
]

class App {
    render() {
        const addItem = new AddItem(items);
        const itemList = new ItemList(items);
        const exportFile = new ExportFile(JSON.stringify(items, null, 4));

        this.app = document.getElementById('app');
        this.app.append(addItem.element);
        this.app.append(itemList.element);
        this.app.append(exportFile.element);
    }
}

new App().render();
