let inputEL = document.getElementById("numberInput");
let result =    document.getElementById("result");
let number;
function getinp(event){
  return number = event.target.value;
}
inputEL.addEventListener("keyup",getinp);



function calculateSquare() {
  
   
    let square = number**2;

    result.innerText = "Square: " + square;
  }

  function checkEvenOdd() {
    
    let j = number % 2 === 0 ? "Even" : "Odd";
     result.innerText = "Even/Odd: " + j;
  }

  
  function checkPrime() {
    
    let isPrime = true;
    
       for(let i=2;i<number;i++){
        if(number%i==0){
          isPrime = false;
          break;
        }
        
      }
       
    

       
  let res = isPrime ? "Prime" : "Not Prime";
  result.innerText = "Prime or Not Prime: " + res;
}

  function checkPalindrome() {
    const number = document.getElementById("numberInput").value;
    const reversedNumber = parseInt(number.toString().split("").reverse().join(""));
    const res = number == reversedNumber ? "Palindrome" : "Not Palindrome";
    result.innerText = "Palindrome or Not Palindrome: " + res;
    
    
    
  }
  function checkarmstrong() {
    number = document.getElementById("numberInput").value;
    let isArmstrong = false;
    let s = 0;
    let length = number.length;
    for(i of number){
      s += parseInt(i)**length;
    }
    if(s===parseInt(number)){
      isArmstrong = true;
      
    }
    let res = isArmstrong ? "Armstrong" : "Not Armstrong";
    result.innerText = "Armstrong or notArmstrong: " + res;
  }
  function Reverse(){
    let sum = 0
    number = document.getElementById("numberInput").value;
    console.log(typeof(number));
    while(parseInt(number)>0){
      let b = parseInt(number) % 10;

       sum = sum*10 +b;
       number = parseInt(number / 10); 
    }
    
    result.innerText = "reverse:" + sum;
  }
  
  function Addition(){
   let number = document.getElementById("Inputnumber").value
    let num = document.getElementById("number").value
    let sum = parseFloat(number) + parseFloat(num);
    document.getElementById("res").innerText = "result: " + sum;
  
  }
  function subtraction(){
   let number = document.getElementById("Inputnumber").value
    let num = document.getElementById("number").value
    let sub = parseFloat(number) - parseFloat(num);
    document.getElementById("res").innerText = "result: " + sub;
  
  }
  function multiplication(){
   let number = document.getElementById("Inputnumber").value
    let num = document.getElementById("number").value
    let mul = parseFloat(number) * parseFloat(num);
    document.getElementById("res").innerText = "result: " + mul;
  
  }
  function division(){
   let number = document.getElementById("Inputnumber").value
    let num = document.getElementById("number").value
    let div = parseFloat(number) / parseFloat(num);
    document.getElementById("res").innerText = "result: " + div;
  }
  function modulus(){
   let number = document.getElementById("Inputnumber").value
    let num = document.getElementById("number").value
    let mod = parseFloat(number) % parseFloat(num);
    document.getElementById("res").innerText = "result: " + mod;
  }
  
