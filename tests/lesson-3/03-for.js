// Quiz 01:
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
};
console.log(sum);



//Quiz 02:
for (let i = 2; i <= 9; i++) {
    for (let f = 1; f <= 10; f++) {
        console.log(i + " * " + f + " = " + (i * f));
    };
};



// Quiz 03:
const soLe = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) (
        soLe.push(i)
    )
};

console.log(soLe);



//Quiz 04:
const userName = ["user00", "user01", "user02"];
for (let i = 0; i < userName.length; i++) {
    console.log(userName[i] + i + '@example.com');
};



//Quiz 05:
const doanhThu = [
    { month: 1, total: 100 },
    { month: 2, total: 110 },
    { month: 3, total: 190 },
    { month: 4, total: 90 },
    { month: 5, total: 180 },
    { month: 6, total: 104 },
    { month: 7, total: 290 },
    { month: 8, total: 310 },
    { month: 9, total: 40 },
    { month: 10, total: 60 },
    { month: 11, total: 170 },
    { month: 12, total: 904 },

];

let sumTotal = 0;
for (let i = 0; i < doanhThu.length; i++) {
    sumTotal += doanhThu[i]["total"];
};

console.log(sumTotal);