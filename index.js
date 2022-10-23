// Function-level scoping
var outer = 10;
function myFunction1(){
    var inner = 5;
    console.log(outer);
    console.log(inner);
}
myFunction1();

// If-Else statment
var a = "some value";
if(a === "other value"){
    console.log("True");
}else{
    console.log("False");
}

// Loop
var myVar = 0;
for(var i = 0; i < 5; i++){
    myVar += i;
    console.log(myVar)
}

// Objects
var person = {};
// properties
person.firstName = 'Emilija';
person.LastName = 'Ristic';
console.log(person);
// methods
person.fullName = function(){
    return this.firstName+' '+this.LastName;
}
console.log(person.fullName());
person.colors = ['red','blue','white'];
console.log(person.colors);

var book = {
    title: 'Web Development with MongoDB and NodeJS',
    author: 'Jason Krol',
    publisher: 'Packt Publishing'
}
console.log(book);
book.pageCount = 150;
console.log(book.pageCount);

// Functions with arrays
person.colors.push('black');
console.log(person.colors);
person.colors.pop();
console.log(person.colors);
person.colors.shift();
console.log(person.colors);

// Functions -> timesRun property

// console.log("Calling myFunction()");
// var myFunction = function(){
    
//     if(this.timesRun){
//         this.timesRun +=1;
//     }else{
//         this.timesRun = 1;
//     }
//     console.log(myFunction());
// }
// myFunction();

// Anonymous function
console.log('Heloo...');
setTimeout(function(){
    console.log(' World');
    5000;
})

// OR
var sayWorld = function(){
    console.log(' WORLD2');
}
setTimeout(sayWorld,2000);

