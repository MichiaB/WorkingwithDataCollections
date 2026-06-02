// Part 1
function sumArray (numbers) {
    // use reduce to add all numbers together
    return numbers.reduce((sum, num) => sum + num)
}
console.log(sumArray([1,2,3,4]));
function averageArray (numbers){
    // Divide total sum by number of elements
return sumArray (numbers) / numbers.length;
}
console.log(averageArray([2,4,6,8])); // 5
function longestString(strings) {
    return strings.reduce((logest, current) => {
        return current.length > logest.length ? current : logest;
    }, "");
}
console.log(longestString(["cat", "lion", "dog"]));

function longerThan(arr,num){

    if(current>n)
        return ;

    console.log(current);
    return ProcessingInstruction(n,current+1);

}

printN(10);


console.log("Part 1: Thinking Functionally");


// Part 1
function sumArray (numbers) {
    // use reduce to add all numbers together
    return numbers.reduce((sum, num) => sum + num)

}
console.log(sumArray([1,2,3,4]));
function averageArray (numbers){
    // Divide total sum by number of elements
return sumArray (numbers) / numbers.length;
}
console.log(averageArray([2,4,6,8])); // 5
function longestString(strings) {
    return strings.reduce((logest, current) => {
        return current.length > logest.length ? current : logest;
    }, "");
}
console.log(longestString(["cat", "lion", "dog"]));

function longerThan(arr,num){

   return arr.filter (word => word.length > num);

}

console.log(longerThan(["cat","dog","whale"],4));


function printN(n, current=1){

    if(current>n)
        return ;

    console.log(current);

    return printN(n,current+1);
}

printN(10);



console.log("\nPart 2: Thinking Methodically");

const data = [

{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }

]

//convert into number
for(let x of data){
    x.age = Number(x.age)
}

data.sort((a, b) => (a.age) - (b.age));
console.log(data);

//filtered data for ppl over 50
let data2 = data.filter( obj =>obj.age<50);
console.log(data2);


// let data3 = data.map(  obj=>{

//     //create a new key called job, with old value of occupation
//      obj.job = obj.occupation;
//      delete obj.occupation; //delete occupation key
//      return obj; //return the modified object back to copy of the array
// }

// );

// console.log(data3);

const data3 = data.map(obj => ({
    id: obj.id,
    name: obj.name,
    job: obj.occupation,
    age: Number(obj.age) + 1
}));
console.log(data3);






const totalAge = data.reduce((sum, obj) => {
    return sum + Number(obj.age);
}, 0);
console.log(totalAge);



// Part 3: Thinking Critically

const updatedPeople = data.map(obj => ({
    id: obj.id,
    name: obj.name,
    job: obj.occupation,
    age: Number(obj.age) +1
}));

console.log (updatedPeople);



// Part 4: Thinking Practically 

const totalAge = data.reduce ((sum, obj) => {
    returnsum + Number (obj.age);
}, 0);

console.log(totalAge);



// Part 5: Thinking Back

const averageAge = totalAge/data.length;
console.log(averageAge);

