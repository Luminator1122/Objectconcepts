"use strict";
// here is defined array of objects. [] is for array creation, and {} for each object inside which properties are defined
// var Car=[{
//     company: "Honda",
//     model:"VXL Auto",
//     Color: "White",
//     brand: "GLI",
//     engine: "1300CC",
//     Chesis:"ANBG45000653325",
//     gears: "Five+one reverse",
//     headlights:"Beam Lights ",
//     doors:"04-door, Auto close",
//     entry:"Key less entry",
//     drive:"smooth drive",   
//     year:"1986"
// }
// ,
// {
//     company: "TOYOTA",
//     model:"VXL Auto",
//     Color: "White",
//     brand: "GLI Auto",
//     engine: "1300-CC",
//     Chesis:"AHNBG-00653325",
//     gears: "Four + one reverse",
//     headlights:"Beam Lights ",
//     doors:"02-door, Auto close",
//     entry:"Key  entry",
//     drive:"Fast drive",   
//     year:"1998"
// }
// ,
// {
//     company: "KIA",
//     model:"VXL Auto",
//     Color: "White",
//     brand: "BVR-DMD-Auto",
//     engine: "1300CC",
//     Chesis:"ANBG45000653325",
//     gears: "Five+one reverse",
//     headlights:"Beam Lights ",
//     doors:"04-door, Auto close",
//     entry:"Key less entry",
//     drive:"smooth drive",   
//     year:"1923"
// }
// ]
var Car = [
    {
        company: "Honda", model: "VXL Auto", color: "White", brand: "GLI", headlights: "Beam Lights",
        entry: "Key less entry", drive: "smooth drive", engine: 1300, chesis: 45000653325, gears: 5,
        year: 1986, doors: 4,
    },
    {
        company: "MG MOTORS", model: "VXL Auto", color: "White", brand: "GLI", headlights: "Beam Lights",
        entry: "Key less entry", drive: "smooth drive", engine: 1300, chesis: 45000653325, gears: 5,
        year: 1986, doors: 4,
    },
    {
        company: "SUZUKI", model: "VXL Auto", color: "White", brand: "GLI", headlights: "Beam Lights",
        entry: "Key less entry", drive: "smooth drive", engine: 1300, chesis: 45000653325, gears: 5,
        year: 1986, doors: 4,
    },
    {
        company: "TOYOTA", model: "VXL Auto", color: "White", brand: "GLI", headlights: "Beam Lights",
        entry: "Key less entry", drive: "smooth drive", engine: 1300, chesis: 45000653325, gears: 5,
        year: 1986, doors: 4,
    },
    {
        company: "Kia Pride", model: "VXL Auto", color: "White", brand: "GLI", headlights: "Beam Lights",
        entry: "Key less entry", drive: "smooth drive", engine: 1300, chesis: 45000653325, gears: 5,
        year: 1986, doors: 4,
    }
];
console.log(Car[0].company, Car[1].company, Car[2].company, Car[3].company, Car[4].company);
//console.log(Car)
console.log(Car[0].model, Car[1].model, Car[2].model, Car[3].model, Car[4].model);
console.log(Car[0].color, Car[1].color, Car[2].color, Car[3].color, Car[4].color);
console.log(Car[0].engine, Car[1].engine, Car[2].engine, Car[3].engine, Car[4].engine);
console.log(Car[0].chesis, Car[1].chesis, Car[2].chesis, Car[3].chesis, Car[4].chesis);
console.log(Car[0].doors, Car[1].doors, Car[2].doors, Car[3].doors, Car[4].doors);
console.log(Car[0]);
