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

function row() {
  for (let i = 0; i < row.length; i++) {
    let row = row.split(",");
  }
}

//Store your results in a two-dimensional array.
//Each row should be its own array, with individual entries for each column.
//Each row should be stored in a parent array, with the heading row located at index 0.
//Cache this two-dimensional array in a variable for later use.

const rows = 4;
const columns = 4;

const people = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor' ’ 's Assistant", "26"],
];

// const people = [
//   (ID = "ID"),
//   (Name = "Name"),
//   (Occupation = "Occupation"),
//   (Age = "Age"),
// ];

// Part 3: Transforming Data

//For each row of data in the result array produced by your code above,
// create an object where the key of each value is the heading for that value’s column.
//Convert these keys to all lowercase letters for consistency.
//Store these objects in an array, in the order that they were originally listed.
//Since the heading for each column will be stored in the object keys,
//  you do not need to create an object for the heading row itself.

for (let i = 0; i < people.length; i++) {
  console.log(
    `ID: ${people[i][0]}, Name: ${people[i][1]}, Occupation: ${people[i][2]}, Age: ${people[i][3]}`,
  );
}

// Part 4: Sorting and Manipulating Data

// Remove the last element from the sorted array.

const people2 = [
  ["Id", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor' ’ 's Assistant", "26"],
];
console.log(people2);
const firstPeople2 = people2.pop();
console.log(people2);

// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }

console.log(
  people2.unshift({ id: "48", name: "Barry", occupation: "Runner", age: "25" }),
);

people2.unshift();
console.log(people2);

// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

console.log(
  people2.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }),
);

console.log(people2);

// Part 5: Full Circle

// let CSV =[
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// ];

let people3 = people2.reverse();
people2.reverse();
people2.reverse();

console.log(people3);
// console.log(typeof CSV);
