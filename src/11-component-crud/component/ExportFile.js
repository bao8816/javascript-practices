export default class ExportFile {
    constructor(item_file) {
        this.element = document.createElement('section');
        this.element.innerHTML = `
            <h3>Export</h3>
            <button>EXPORT TO JSON</button>
            <pre class="JsonContent">
                
            </pre>
        `;

        this.data = item_file;
        this.element.getElementsByTagName("button")[0].addEventListener("click", this.onExport.bind(this));
    }

    onExport() {
        this.element.getElementsByClassName("JsonContent")[0].textContent = this.data;
    }
}