export class Todo {
    id = "";
    name = "";
    status = false;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.status = false;
    }
    toggleStatus() {
        this.status = !this.status;
    }
}