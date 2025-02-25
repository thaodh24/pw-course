//Quiz 01:
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
};

console.log(car.year);


//Quiz 02:
const person = {
    name: "Name01",
    address: {
        street: "Street01",
        city: "City01",
        country: "Country01",
    },
};

console.log(person.address.street);


//Quiz 03:
const student = {
    name: "StudentName",
    grades: {
        math: 6,
        english: 8
    },
};
console.log(student["grades"]["math"]);


// // Quiz 04: 
const product = {
    SP01: 30,
    SP02: 15,
    SP03: 45,
};

for (let SP in product) {
    console.log(SP + ':' + product[SP]);
};


// //Quiz 05:
const setting = {
    volume: 39,
    brightness: 80
}

setting.volume = 50;

for (let value in setting) {
    console.log(value + ':' + setting[value]);
};


// //Quiz 06:
const bike = {};
bike["color"] = "Dark";

console.log(bike)


// //Quiz 07:
const employee = {
    name: "Name 07",
    age: 45
};
delete employee.age;
console.log(employee);


//Quiz 08:
const classA = ["An", "Bình", "Châu"];
const classB = ["Đào", "Hương", "Giang"];

const school = {
    class01: [],
    class02: []
};

classA.forEach((value, index) => {
    school.class01[index] = value;
});
classB.forEach((value, index) => {
    school.class02[index] = value;
});
console.log(school);
