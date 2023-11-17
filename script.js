// 1
for(let i=1; i<=100; i++){
    console.log(i);
} 

// 2
let i=0;
while(i<50){
  i++;
  console.log(i);
}

// 3
let students = ["giorgi", "beqa", "lika", "nino", "mariami"];
students.pop();
console.log(students);
students.push("guga");
console.log(students);
students.unshift("noka");
console.log(students);
students.shift();
console.log(students);

// 4
let student = [];
for ( let i = 1; i < 10000; i ++){
    student.push( i*i );
}
console.log(student);

// 5
let numbers = [5, 10, 15, 10, 25];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(`jami = ${sum}`);

// 6
const number = ( 7 );
if(number % 2 == 0) {
    console.log("The number is even");
}
else {
    console.log("The number is odd.");
}

function oddOrEven(number){
    if(number % 2 == 0){
        return true
    }
    else{
        return false
    }
}
    console.log( oddOrEven(7));



