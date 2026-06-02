 // Part 1: Refactoring Old Code 

// csv data


//const csv = [ "ID,Name,Occupation,Age \r\n\
//\r\n 42,Bruce,Knight,41 \r\n\
//\r\n 57,Bob,Fry Cook,19\r\n\
//\r\n 63,Blaine,Quiz Master,58\r\n\
//\r\n 98,Bill,Doctor’s Assistant,26" ];



//let columns = 4; {

//for(let row=0; row<csv.length;row++)
  //  for(column=0;column<csv[row].length;column++)

  //    if ( csv [row] [column] == "X") {
   //   console.log (`The ${ csv [row] [column]} is at row ${row} and column ${column}`);
   // }
//}


// Part 2: Expanding Functionality 

//const csv = [ "ID,Name,Occupation,Age \r\n\
//\r\n 42,Bruce,Knight,41 \r\n\
//\r\n 57,Bob,Fry Cook,19\r\n\
//\r\n 63,Blaine,Quiz Master,58\r\n\
//\r\n 98,Bill,Doctor’s Assistant,26" ];




const csv = "ID,Name,Occupation,Age";
const columns = csv.split(",").length;

console.log(columns); //4

const csvData = [
    {ID,Name,Occupation,Age},
    {48,Barry,Runner,25}
    {42, Bruce , Knight, 41},
    {57, Bob ,Fry Cook, 19},
    {63 , Blaine , Quiz Master , 58},
    {98 , Bill , Doctor's,Assistant,26},
    {7, Bilbo, None, 111}

]


// Array
const data = [
    {id: "42",
    name: "Bruce",
    occupation: "Knight",
    age: "41"},

    {id: "57",
    name: "Bob",
    occupation: "Fry Cook",
    age:"19"
    },

    {id: "63",
    name: "Blaine",
    occupation: "Quiz Master",
    age:"58",
     },

     {id: "98",
    name: "Bill",
    occupation: "Doctor's Assistant",     
    age: "26",}
];


// Part 4: Sorting and Manipulating Data

let totalage = 0;


for ( let i= 0; i < data.length; i++) {
    totalage += Number (data[i].age);
}


// Part 5: Full Circle 

let csv = "id,name,occupation,age\n";

for ( let i=0; i < data.length; i++) {
    csv += `${ data[i].id}. ${data[i].name}, ${data[i].occupation}, ${data[i].age}`
}

console.log(csv);