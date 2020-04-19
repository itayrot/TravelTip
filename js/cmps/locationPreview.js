export class locationPreview {
    static nextId = 101;
    constructor(info, onDeleteRow, onUpdateRow) {
        this.id = locationPreview.nextId++
        this.info = info;
        this.onDeleteRow = onDeleteRow;
        this.onUpdateRow = onUpdateRow;

    }
    onDeleteRow() {
        console.log("delete")
    }
    onUpdateRow() {
        console.log("update")

    }
    renderRow(address) {
        var elRow = document.createElement('tr')
        elRow.innerHTML = '';

        var elData = document.createElement('td')
        elData.innerHTML = address;

        elRow.appendChild(elData)
        return elRow
    }
}