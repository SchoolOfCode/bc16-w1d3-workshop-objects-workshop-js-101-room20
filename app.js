// What do objects look like?

console.log("Hello World!")

let myObject = {
    Laptop1: {
        screenSize: "17",
        gpu: "2080",
        year: "2024",
    },
    Laptop2: {
        screenSize: "17",
        gpu: "2080",
        year: "2024",
    }
}

myObject.make


// How are objects useful

let loginDetails = {
    user: "",
    password: "",
    code: ""
}



// Object for each person

let james = {
    eyeColor: "green",
    height: "5ft11",
    age: 28,
    favouriteFood: "Everything",
    other: "has 3 chidlren"
}

let tomas = {
    eyeColor: "brown",
    height: "5ft7",
    age: 33,
    favouriteFood: "Eggs",
    other: "Is Always Tired"
}

console.log(tomas.age)
console.log(tomas.eyeColor)

tomas.age = tomas.age + 1

console.log(tomas.age)



// - create an object that represents your team. Each team member should be represented as a nested object with the following properties (choose what you want for the values):
//   - nickname
//   - superpower
//   - methodOfTransport
//   - favouriteAnimal
// - log the nested `favouriteAnimal` of each team member to the console


let teamObject = {
    james: {
        nickname: "jimbo",
        superPower: "Flying",
        methodOfTransport: "Flying",
        favouriteAnimal: "Wolf",
        likesCats: false
    },
    tomas: {
        nickname: "tom",
        superPower: "invisibility",
        methodOfTransport: "walking",
        "favourite animal": "Sharks",
        likesCats: false,
        logFavouriteAnimal: function() {
            console.log(teamObject.tomas["favourite animal"]);
        }
    }
}

console.log(teamObject.james.favouriteAnimal);

console.log(teamObject.james.likesCats);

teamObject.tomas.logFavouriteAnimal();