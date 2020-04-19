
class locationPreview {
    static nextId = 101;
    constructor(info, onDeleteRow, onUpdateRow) {
        this.id = locationPreview.nextId++
        this.info = info;
        this.onDeleteRow = onDeleteRow;
        this.onUpdateRow = onUpdateRow;

    }
    onDeleteRow() {

    }
    onUpdateRow() {

    }
}

export const mainService = {
    getLocations,
    locationPreview
}


var gLocation = [];

function getLocations() {
    return gLocation
}  
