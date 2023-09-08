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

// // console.log("Car", Car)
// // console.log("*******")
// console.log("Car", Car[0].Color, Car[1].company, Car[2].Chesis)
// console.log("Cars", Car[1].year)   // prints only the property "year" of the car {object} at index 1 in the  array
// console.log("Cars", Car[1].Color)   //prints only the  property "color" of the car {object }at index 1 in the  array
// console.log("Cars", Car[1].engine)   //prints only the property "engine" of the car {object} at index 1 in the  array
// console.log("Cars", Car[1].drive)   //prints only the property "drive" of the car {object} at index 1 in the  array
// console.log("Cars", Car)           //  ptints all the properties of the all objects, in the array of objects named Car

// write program to show company name and year of the each object using for loop

type TypeCars={company:string, model:string, color:string, brand:string, engine:number, 
    chesis:number, gears:number, headlights:string, doors:Number, entry:string, drive:string,
    year:number}

var Car:TypeCars[]=[
    {   
    company: "Honda", model: "VXL Auto", color: "White", brand: "GLI",headlights:"Beam Lights",
    entry:"Key less entry", drive:"smooth drive",engine: 1300, chesis:45000653325, gears: 5,
    year:1986,doors:4,
    }
,
    {
    company: "MG MOTORS",model:"Manual", color: "Silver", brand: "Audi",headlights:" Lights",
    entry:"Manual Key entry", drive:"smooth drive",engine: 600, chesis:658963001, gears: 5,
    year:2001,doors:4,
    }
,
    {
    company: "SUZUKI",model:"VXR ", color: "Blue", brand: "Pearl",headlights:" Lights",
    entry:"Key  entry", drive:"smooth drive",engine: 680, chesis:877546520, gears: 5,
    year:2021,doors:5,
    }
,
    {
    company: "TOYOTA",model:"VTI Auto", color: "Red Metal", brand: "XLI",headlights:"Beam Lights",
    entry:"Manual Open entry", drive:"smooth drive",engine: 1800, chesis:2365956221, gears: 5,
    year:2022,doors:5,
    }   
,
    {
    company: "KIA PRIDER",model:"Full Auto", color: "sea Green", brand: "SUZAN",headlights:" Lights",
    entry:"Key less entry", drive:"smooth drive",engine: 2300, chesis:785236012, gears: 5,
    year:2022,doors:5,
    }
 ]
// console.log(Car[0].company, Car[1].company, Car[2].company, Car[3].company, Car[4].company)
// //console.log(Car)
// console.log(Car[0].model, Car[1].model, Car[2].model, Car[3].model, Car[4].model)
// console.log(Car[0].color, Car[1].color, Car[2].color, Car[3].color, Car[4].color)
// console.log(Car[0].engine, Car[1].engine, Car[2].engine, Car[3].engine, Car[4].engine)
// console.log(Car[0].chesis, Car[1].chesis, Car[2].chesis, Car[3].chesis, Car[4].chesis)
// console.log(Car[0].doors, Car[1].doors, Car[2].doors, Car[3].doors, Car[4].doors)
// console.log(Car[0])
//console.log(Car[0].company,Car[2].company,Car[3].company,Car[4].company)
for (let i = 0; i < Car.length; i++) 
{
var takePrint1= Car[i].company;
var taketoPrint2=Car[i].color;
var taketoPrint3=Car[i].engine
var taketoPrint4=Car[i].drive
var taketoPrint5=Car[i].doors
var taketoPrint6=Car[i].chesis
var taketoPrint7=Car[i].year
var taketoPrint8=Car[i].brand
var taketoPrint9=Car[i].model
var taketoPrint10=Car[i].entry
var taketoPrint11=Car[i].headlights
var taketoPrint12=Car[i].gears

console.log(takePrint1, taketoPrint2, taketoPrint3,taketoPrint4, taketoPrint5,taketoPrint6,
    taketoPrint7,taketoPrint8,taketoPrint9,taketoPrint10,taketoPrint11,taketoPrint12);

}
