
/***** Erinnerung: Arrays *******/


// let arr;
// arr = ["Ich","bin","Max"];
// // output(arr);
// // output(arr[0]);

// //nested arrays
// arr = [["Ich","bin","Max"],["Ich","bin","Moritz"] ];
// output(arr[0][2]);//bei 1. arr zeigt beim erste Wort 3.Buchstabe
// output(arr[1][2]);//zeigt beim 2.Wort 3. Buchstabe


// //nested loops
// for (let i = 0; i < 2; i++) {
//         for (let j = 0; j < 3; j++) {  
//                 output(arr[i][j]);//bei 1. arr zeigt beim erste Wort 3.Buchstabe
            
//        }       
// }  


/***** Objekte 1 Daten/Funktionen *******/

// let test;
// console.log("hi");

// let person = {
//         firstName:"Thilo",
//         firstName:"Max",

//                 familyName:"Schönermeyer",
//                 salary:[120000,160000],
//                 // permission:true,
//                 sayHello:function() {
//                         return "Hello, ich bin!" + this.firstName;
//                 }

// };

// // output(person);
// // person.firstName = "Thio"
// output(person.firstName);

// const txt = "Ich bin " + person.firstName + " " + 
//                 person.familyName + " und verdiene " + 
//                 person.salary[1] + " p.a."

// output(txt);

// output(person.sayHello());

//deep -deeper -deepest

const baikal = {
        value:"10m",
        deep:{
                deeper:{
                        deepest:"Das Licht- auf 1642m!"
                }
        }
};

output(baikal);
output(baikal.value);
output(baikal.deep.deeper.deepest);



/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}