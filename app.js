// |||||||||||||||||||||||||||||||||||||||||||| FUNCTION (Ch # 38 - 42) |||||||||||||||||||||||||||||||||||||||||||||

// ***************************************** Question # 01 *****************************************

// function power(a, b){
//     return Math.pow(a, b);
// }

// console.log(power(10, 3));

// ***************************************** Question # 02 *****************************************

// function leapYear(user){

//     // Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the year 2000 is.

//     if(user%4 == 0){
//         alert("It's a Leap Year.")
//     }else if(user%100 == 0){
//         alert("It's not a Leap Year.")
//     }else if(user%400 == 0){
//         alert("It's a Leap Year.")
//     }else{
//         alert("It's not a Leap Year.")
//     }
// }

// var user = +prompt("Enter a year:");
// leapYear(user);

// ***************************************** Question # 03 *****************************************

// function semiPerimeter(a, b, c){
//     s = (a + b + c)/2
// }

// function area(){
//     semiPerimeter(a, b, c);
//     var area = s*(s-a)*(s-b)*(s-c)
//     console.log("Area of triangle acc. to your values is " + area + " square units")
// }

// var a = +prompt("Enter first side of triangle:");
// var b = +prompt("Enter second side of triangle:");
// var c = +prompt("Enter third side of triangle:");
// var s;

// area();

// ***************************************** Question # 04 *****************************************

// function average(sub1, sub2, sub3){
//     return (sub1 + sub2 + sub3)/3;
// }

// function percentage(sub1, sub2, sub3){
//     return ((sub1 + sub2 + sub3)/300)*100;
// }

// function mainFunction(){
//     var avg = average(sub1, sub2, sub3);
//     var percent = percentage(sub1, sub2, sub3)
//     console.log("Average marks = " + avg + "\nPercentage = " + percent);
// }

// var sub1 = +prompt("Marks of Subject 1:");
// var sub2 = +prompt("Marks of Subject 2:");
// var sub3 = +prompt("Marks of Subject 3:");

// mainFunction();

// ***************************************** Question # 05 *****************************************

// function index(str, char){
//     var flag = false
//     for(var i=0; i<str.length-1; i++){
//         if(str[i] == char){
//             flag = true;
//             break;
//         }
//     }if(flag = true){
//         console.log("Index of " + char + " in given string is " + i);
//     }else{
//         console.log("Error!");
//     }
// }

// var str = prompt("Enter a word or string:");
// var char = prompt("Which character index you want?");

// index(str, char);

// ***************************************** Question # 06 *****************************************

// function delVowels(user){
//     for(var i=0; i<user.length; i++){        
//         if(!vowels.includes(user[i])){
//             str += user[i];
//         }
//     }
//     console.log(str);
// }

// var vowels = ["a","e","i","o","u","A","E","I","O","U"];
// var user = prompt("Enter a Sentence:");
// var str = "";
// delVowels(user);

// ***************************************** Question # 07 *****************************************

// function count(user){
//     var count = 0;
//     for (var i = 0; i < user.length; i++) {
//         user.slice(i,i+2);
//         for (var j = 0; j < vCombinations.length; j++) {
//             if(user.slice(i,i+2) === vCombinations[j]){
//                 count++;
//             }
//         }
//     }
//     console.log(count);
// }

// var vCombinations = ["aa","ae","ai","ao","au","ea","ee","ei","eo","eu","ia","ie","ii","io","iu","oa","oe","oi","oo","ou","ua","ue","ui","uo","uu"];
// var user = prompt("Enter a Sentence:");
// count(user)

// ***************************************** Question # 08 *****************************************

// function meter(distance){
//     return distance*1000
// }

// function feet(distance){
//     return distance*3281
// }
// function inches(distance){
//     return distance*39370
// }
// function centimeters(distance){
//     return distance*100000
// }

// var distance = +prompt("Enter distance:");
// console.log(meter(distance) + " meters\n" + feet(distance) + " feet\n" + inches(distance) + " inches\n" + centimeters(distance) + " cm");

// ***************************************** Question # 09 *****************************************

// var workTime = +prompt("Enter your work hours:");
// var overTime = (workTime - 40)*12;
// console.log("Your overtime pay is " + overTime);

// ***************************************** Question # 10 *****************************************

// var amount = +prompt("Enter amount to withdraw:");
// var notes100 = Math.floor(amount / 100);
// var notes50 = Math.floor((amount % 100) /50)
// var notes10 = Math.floor(((amount % 100) % 50) / 10)
// console.log("You'll have " + notes100 + " hundred notes " + notes50 + " fifty notes " + notes10 + " ten notes.");