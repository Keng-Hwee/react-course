//////////////////////////
// Object destructuring //
//////////////////////////
console.log("destructuring");

const person = {
    name: "Andrew",
    age: 26,
    location: {
        city: "Singapore",
        temp: 28
    }
};

const { name: firstName = "Anonymous", age } = person;
// const name = person.name;
// const age = person.age;
console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;
console.log(`It is ${temperature} degrees in ${city}`);

/////////////////////////
// Array destructuring //
/////////////////////////
const address = ["Woodlands Drive 16", "Singapore", "7308580"];
const [street, , zipcode] = address;
console.log(`You are in : ${street} with zipcode: ${zipcode}`);
