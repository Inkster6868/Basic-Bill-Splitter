//bill and tip from the document
let totalBill = document.getElementById("billTotalInput");
let totalTip= document.getElementById("tipInput");

// number of people and perpersontotal from the document
let totalPeople= document.getElementById("numberOfPeople");
let perPerson= document.getElementById("perPersonTotal");
//initially amount is $0.
let totalamount=0;

//  Calculate the total bill per person 
const calculateBill = () => {
 
  // get bill from user input & convert it into a number
  let total=Number(totalBill.value);
  

  // get the tip percentage from user & convert it into tip (divide by 100)*totalbill
  let tip=(Number(totalTip.value)/100)*total;
 
// calculate the total (tip amount + bill)
 totalamount=total+tip;

  // calculate the per person total (total divided by number of people)
  let each=Number(totalPeople.innerText);
  let perpersontotal=totalamount/each;
 
  // update the perPersonTotal on DOM & show it to user
  perPerson.innerText=`Rs${perpersontotal.toFixed(2)}`;
 
}


let update=document.querySelectorAll(".buttonText");
console.log(update);
let count=1;
// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people in the DOM
  totalPeople.innerText= ++count;

  // calculate the bill based on the new number of people
  calculateBill();
}


// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
if( totalPeople.innerText>1)
  // decrement the amount of people based on DOM
  totalPeople.innerText= --count;
     
  // calculate the bill based on the new number of people
  calculateBill();
}