//for Lower Deck Selection

let TicketsLD = [
    { no: 1, amount: 300 },
    { no: 2, amount: 300 },
    { no: 3, amount: 300 },
    { no: 4, amount: 300 },
    { no: 5, amount: 300 },
    { no: 6, amount: 300 },
    { no: 7, amount: 300 },
    { no: 8, amount: 300 },
    { no: 9, amount: 300 },
    { no: 10, amount: 300 },

];
let str = ``;

TicketsLD.forEach(function (value, index) {
    str = str + `
    <div class='col-xl-1' for='${value.no}#${value.amount}'  onclick='myfunc(this)'>${value.no} <br/> ${value.amount}</div> 
    `




})

document.getElementById("lowerdiv").innerHTML = str;
arr1 = []; //used to store Seat Number
arr2 = []; // used to store Amount
function myfunc(myvar) {
    // localStorage.setItem("Book",str);  //agar kuch kam nahi kiya tho isse use karlo


    let ans = myvar.attributes.for.value;


    let ans1 = ans.split("#")
    




    let pos = arr1.indexOf(ans1[0]);

    if (pos == -1) { // -1 is geneerated by indexof if value does not exist in array

        arr1.push(ans1[0]);  //insted of push unshift can also be used
        arr2.push(ans1[1]);


        myvar.style.background = "#FF0000"
        msg = "Seat Booked";
        document.getElementById('msg').innerHTML = msg;
    }
    else if (pos >= 0) { // 0 is generated if value does exist in array

        msg = "Ticket UnSelected";
        arr1.pop(ans1[0]);
        arr2.pop(ans1[1]);
        myvar.style.background = "#FFFFFF";

        document.getElementById('msg').innerHTML = msg;
    }
    else {

        msg = "Ivalid Entries"
    }

    document.getElementById('no').innerHTML = final_no


    final_amount = arr2.join('+')

    let Checkout = eval(final_amount);


    document.getElementById('amount').innerHTML = Checkout;



}

// for Mid-Tier Selection
let TicketsMD = [
    { no: 11, amount: 200 },
    { no: 12, amount: 200 },
    { no: 13, amount: 200 },
    { no: 14, amount: 200 },
    { no: 15, amount: 200 },
    { no: 16, amount: 200 },
    { no: 17, amount: 200 },
    { no: 18, amount: 200 },
    { no: 19, amount: 200 },
    { no: 20, amount: 200 },
    { no: 21, amount: 200 },
    { no: 22, amount: 200 },
    { no: 23, amount: 200 },
    { no: 24, amount: 200 },
    { no: 25, amount: 200 },
    { no: 26, amount: 180 },
    { no: 27, amount: 180 },
    { no: 28, amount: 180 },
    { no: 29, amount: 180 },
    { no: 30, amount: 180 },
    { no: 31, amount: 180 },
    { no: 32, amount: 180 },
    { no: 33, amount: 180 },
    { no: 34, amount: 180 },
    { no: 35, amount: 180 },
    { no: 36, amount: 180 },
    { no: 37, amount: 180 },
    { no: 38, amount: 180 },
    { no: 39, amount: 180 },
    { no: 40, amount: 180 },

];
let strmd = ``;

TicketsMD.forEach(function (value, index) {
    strmd = strmd + `
    <div class='col-xl-1' for='${value.no}#${value.amount}'  onclick='myfunc(this)'>${value.no} <br/> ${value.amount}</div> 
    `

})

document.getElementById("Mdrow1").innerHTML = strmd;
arr1 = [];
arr2 = [];
function myfunc(myvar) {

    let ans = myvar.attributes.for.value;


    let ans1 = ans.split("#")

    let pos = arr1.indexOf(ans1[0]);

    if (pos == -1) {

        arr1.push(ans1[0]);
        arr2.push(ans1[1]);
        myvar.style.background = "#FF0000";
        msg = "Seat Booked";
        document.getElementById('msg').innerHTML = msg;
    }
    else if (pos >= 0) {

        msg = "Ticket UnSelected";
        arr1.pop(ans1[0]);
        arr2.pop(ans1[1]);
        myvar.style.background = "#FFFFFF";

        document.getElementById('msg').innerHTML = msg;
    }
    else {

        msg = "Ivalid Entries"
    }


    final_no = arr1.join(",")
    document.getElementById('no').innerHTML = final_no

    final_amount = arr2.join('+')
    let Checkout = eval(final_amount);

    document.getElementById('amount').innerHTML = Checkout;



}
// for VIP Seat Selection

let TicketsVIP = [
    { no: 41, amount: 120 },
    { no: 42, amount: 120 },
    { no: 43, amount: 120 },
    { no: 44, amount: 120 },
    { no: 45, amount: 120 },
    { no: 46, amount: 120 },
    { no: 47, amount: 120 },
    { no: 48, amount: 120 },
    { no: 49, amount: 120 },
    { no: 50, amount: 120 },
    { no: 51, amount: 120 },
    { no: 52, amount: 120 },
    { no: 53, amount: 120 },
    { no: 54, amount: 120 },
    { no: 55, amount: 120 },
    { no: 56, amount: 120 },
    { no: 57, amount: 120 },
    { no: 58, amount: 120 },
    { no: 59, amount: 120 },
    { no: 60, amount: 120 },
    { no: 61, amount: 120 },
    { no: 62, amount: 120 },
    { no: 63, amount: 120 },
    { no: 64, amount: 120 },
    { no: 65, amount: 120 },
    { no: 66, amount: 120 },
    { no: 67, amount: 120 },
    { no: 68, amount: 120 },
    { no: 69, amount: 120 },
    { no: 70, amount: 120 }

];
let strVIP = ``;

TicketsVIP.forEach(function (value, index) {
    strVIP = strVIP + `
    <div class='col-xl-1' for='${value.no}#${value.amount}'  onclick='myfunc(this)'>${value.no} <br/> ${value.amount}</div> 
    `

})

document.getElementById("VIProw").innerHTML = strVIP;
arr1 = [];
arr2 = [];
function myfunc(myvar) {

    let ans = myvar.attributes.for.value;


    let ans1 = ans.split("#")

    let pos = arr1.indexOf(ans1[0]);

    if (pos == -1) {

        arr1.push(ans1[0]);
        arr2.push(ans1[1]);
        myvar.style.background = "#FF0000";
        msg = "Seat Booked";
        document.getElementById('msg').innerHTML = msg;
    }
    else if (pos >= 0) {

        msg = "Ticket UnSelected";
        arr1.pop(ans1[0]);
        arr2.pop(ans1[1]);
        myvar.style.background = "#FFFFFF";

        document.getElementById('msg').innerHTML = msg;
    }
    else {

        msg = "Ivalid Entries"
    }


    final_no = arr1.join(",")
    document.getElementById('no').innerHTML = final_no

    final_amount = arr2.join('+')
    let Checkout = eval(final_amount);

    document.getElementById('amount').innerHTML = Checkout;



}


