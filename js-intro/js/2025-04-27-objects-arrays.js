const car = {
    name: "XDG6557",
    mark: "FeRarity",
    birth: 2000,
    isBroken: false,
    BeepBeep: function() {
        console.log("Beep-Beep");
    },
}

const carsOwner = {
    name: "Katehok",
    surname: "Amogus",
    age: 987,
    cars: [ car ],
}
console.log(car);
console.log(carsOwner);
car.BeepBeep()

const people = [];
people.push("Stepan");
people.push("Pedor");
people.unshift("Alex");

console.log(people);

console.log(people.indexOf("Pedor"));
console.log(people.indexOf("Sanyok"));
console.log(people.includes("Pedor"));
console.log(people.includes("Sanyok"));

const evens = [];
const maxValue = 1000;
for (let i=0;i<maxValue;i += 2) {
    evens.push(i)
}
console.log(evens);