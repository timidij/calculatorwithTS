class user {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
    }

    detail() {
        return this.name + " " + this.dept;
    }
}

let newUser = new user("James", "CSI");
console.log(newUser.detail());
