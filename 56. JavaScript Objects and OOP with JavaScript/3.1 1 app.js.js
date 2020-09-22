const myObj = {
    stuff: "Hello World"
    , greet: "hi"
    , num: 10
    , arr: [4, 6, 7, 'hi']
    , obj: {
        first: 'test'
        , two: 'test2'
    }
};
myObj.add = "hi";
myObj['test1'] = "two";
const person = {
    first: "Laurence"
    , last: "Svekis"
    , id: 100
    , details: function () {
        return `${this.last}, ${this.first} id #${this.id}`
    }
}