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

for (let member in teamObject){
    console.log(teamObject[member].superPower)
}


// - Create an object (representing the Tamagotchi virtual pet) that has the properties `name`, `fullness`, `happiness` and `energy` and assign values to each property (the company suggests assigning a number between 1 and 100 to each `hunger`, `happiness` and `energy`)
// - Use `prompt` to get user input and allow staff to name the office pet and modify the object to reflect the name the pet has been given.
// - Loop while the pet is alive (using the criteria below):
//   - When the `fullness` becomes greater than 100, the pet dies (due to overfeeding).
//   - When any of the `fullness`, `energy` or `happiness` become less than or equal to 0, the pet dies (due to underfeeding, or no more energy or sadness respectively).
// - Inside the loop:

//   - Log the pet's current stats to the console. The company wants the pet to "interact" with the user in the console. Your team can decide how to implement this, for example:

//     - If `fullness` is low, log a hungry emoji and message
//     - If `happiness` is high, log a happy emoji and message
//     - If `energy` is low, log a tired emoji and message

//     Get creative with different emoji and messages based on the pet's needs to make it seem interactive in the console! This brings the virtual pet to life.


let virtualPet = {
    name: "",
    fullness: 50,
    happiness: 50,
    energy: 50,
}

function simulatePetLife()  {
    console.log(`
    Your pets current stats are 
    fullness: ${virtualPet.fullness}
    happines: ${virtualPet.happiness}
    energy: ${virtualPet.energy}
    `)
    virtualPet.name = prompt("What is your pet's name?");

    while (virtualPet.fullness <= 100) {
        increaseFullness = parseInt(prompt("How much would you like to feed your pet? (Enter a number)"))

        virtualPet.fullness += increaseFullness;

        if (virtualPet.fullness > 100) {
            console.log(`${virtualPet.name} has been overfed and has sadly passed away into a food coma`);
            break;
        }

        console.log(`Your pets fullness level is currently ${virtualPet.fullness}`)
    }
}

simulatePetLife();