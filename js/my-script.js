var btnElement =document.getElementById('btn');
btnElement.onclick = function () {
   var firstNameValue = document.getElementById('firstName').value;
   var lastNameValue = document.getElementById('lasttName').value;
   var fullname = firstNameValue+ ' ' +lastNameValue;
   document.getElementById('FullName').value = fullname;
}



var subtractionElement = document.getElementById('subtraction');
subtractionElement.onclick = function () {
    var firstNumberValue = document.getElementById('firstNumber').value;
    var secondNumberValue = document.getElementById('SecondNumber').value;
    var result = firstNumberValue - secondNumberValue ;
    document.getElementById('Result').value = result; 
}

var multiplicationElement = document.getElementById('multiplication');
multiplicationElement.onclick = function () {
    var firstNumberValue = document.getElementById('firstNumber').value;
    var secondNumberValue = document.getElementById('SecondNumber').value;
    var result = firstNumberValue * secondNumberValue ;
    document.getElementById('Result').value = result; 
}

var additionElement = document.getElementById('addition');
additionElement.onclick = function () {
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('SecondNumber').value);
    var result = firstNumberValue + secondNumberValue ;
    document.getElementById('Result').value = result; 
}

var divisionElement = document.getElementById('division');
divisionElement.onclick = function () {
    var firstNumberValue = document.getElementById('firstNumber').value;
    var secondNumberValue = document.getElementById('SecondNumber').value;
    var result = firstNumberValue / secondNumberValue ;
    document.getElementById('Result').value = result; 
}
var remainderElement = document.getElementById('remainder');
remainderElement.onclick = function () {
    var firstNumberValue = document.getElementById('firstNumber').value;
    var secondNumberValue = document.getElementById('SecondNumber').value;
    var result = firstNumberValue % secondNumberValue ;
    document.getElementById('Result').value = result; 
}

// var tage = document.getElementsByTagName('p');

// for (var key=0; key<tage.length; key++) {
//     document.write(tage[key].innerHTML+ '<br/>');
// }


// var x = 10;

// while (x<15) {
//     document.write('hello World <br/>');
//     x++;
// }

// var x=10;
// do {
//     document.write('Hello World <br/>');
//     x++;
// } while (x<15) 

// var date=new Array();
// var date1=Array();
// var data=[];
// data [0]=10;
// data [1]=20;
// data [2]=30;

// data['name']='Robin';
// data['city']='Dhanmondi-19';
// data['country']='Bangladesh';

// // document.write(data['country']);
// for (var key in data) {
//    document.write(data[key] + '<br/>');
// }
    // function demo() {
    //     document.write("hello bangladesh");
    // }
    // document.write('<br/>==================<br/>');
    // demo();
    // document.write('<br/>==================<br/>');
    // demo();
    // document.write('<br/>==================<br/>');
    // demo();


    // function demo1(firstName, lastName) {
    //     var fullname = firstName+ ' '+ lastName;
    //     document.write(fullname);
    // }

    // document.write('<br/>==================<br/>');
    // demo1('Imran','Hossain');
    // document.write('<br/>==================<br/>');
    // demo1('Maruf','Hossain');
    // document.write('<br/>==================<br/>');
    // demo1('Mehedi','hasan');