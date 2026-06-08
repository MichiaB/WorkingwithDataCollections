// Part 2: Expanding Functionality

let CSV =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const str = CSV.split("\n");
for (let index = 0; index < str.length; index++) {
  let row = str[index];
  const str1 = row.split(",");
  console.log(str1);
}

//Declare a variable that stores the number of columns in each row of data within the CSV.
//Instead of hard-coding four columns per row, expand your code to accept any number of columns.
// This should be calculated dynamically based on the first row of data.

function column() {
  for (let i = 0; i < column.length; i++) {
    let column = column.split(",");

    console.log(column);
  }
}

//Store your results in a two-dimensional array.
//Each row should be its own array, with individual entries for each column.
//Each row should be stored in a parent array, with the heading row located at index 0.
//Cache this two-dimensional array in a variable for later use.

function createArray(length) {
  let arr = [];

  for (let i = 0; i < CSV2.length; i++) {
    arr[0] = [];
  }

  return arr;
}



// let CSV2 = []

// console.log(CSV2);

// Part 3: Transforming Data

//For each row of data in the result array produced by your code above,
// create an object where the key of each value is the heading for that value’s column.
//Convert these keys to all lowercase letters for consistency.
//Store these objects in an array, in the order that they were originally listed.
//Since the heading for each column will be stored in the object keys,
//  you do not need to create an object for the heading row itself.

// //const CsV3 = {
//   //ID: "ID",
//  // Name: "Name",
//   //Occupation: "Occupation",
//   //Age: "Age",

// };

// console.log(Object.keys(CsV3));
