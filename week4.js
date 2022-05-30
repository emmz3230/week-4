// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
var grades = prompt();
if (grades > 50){
 console.log("D")
}

else if ( grades > 60){
console.log("c")
}
else if (grades > 70){
    console.log("B")
}
else if ( grades > 80 ){
    console.log("A")
}
else {
    console.log("F")
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

var  weather = prompt();
 if (weather == "march, April, May"){
    console.log(" the season is spring")
 }
 else if ( weather == "June, July, August" ){
    console.log("the season is Summer")
}
else if ( weather == "  December, January, February" ){
    console.log("the season is Winter")
}
else {
    console.log("the season is Autumn")
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
    // What is the day  today? Saturday
    // Saturday is a weekend.

    // What is the day today? saturDaY
    // Saturday is a weekend.

    // What is the day today? Friday
    // Friday is a working day.

    // What is the day today? FrIDAy
    // Friday is a working day.
    var inputDay = prompt();
    switch (day){
        case 'monday':
            console.log("Today is a working day")
        case'Tuesday':
        console.log("Today is a working day")
        case'wednesday':
        console.log("Today is a working day")
        case'thursday':
        console.log("Today is a working day")
        case'friday':
        console.log("Today is a working day")
        case'saturday':
        console.log("Today is a  weekend")
    }



    // Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.


var month = prompt();
switch(month){
    case'January':
    console.log("January has 31 days")
    case'Febuary':
    console.log("Febuary has 28 days and 29 in each leap year")
    case'March':
    console.log("March has 31 days")
    case'April':
    console.log("April has 30 days")
    case'May':
    console.log("May has 31 days")
    case'June':
    console.log("June has 30 days")
    case'July':
    console.log("July has 31 days")
    case'August':
    console.log("August has 31 days")
    case'September':
    console.log("September has 30 days")
    case'October':
    console.log("October has 31 days")
    case'November':
    console.log("November has 30 days")
    case'December':
    console.log("December has 31 days")
}


