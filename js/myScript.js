document.querySelector("#validate").addEventListener('click', Validate);

function Validate (){

  let cardNumber = document.querySelector("#number").value;
  // console.log(cardNumber)

  let visa = new RegExp ('^4[0-9]{12}(?:[0-9]{3})?\$');
  let masterCard = new RegExp ('^5[1-5][0-9]{14}\$');
  let amex = new RegExp ('^3[47][0-9]{13}\$')

  // document.querySelector('#status').innerHTML = visa.test(cardNumber);
  // document.querySelector('#status').innerHTML = masterCard.test(cardNumber);
  // document.querySelector('#status').innerHTML = amex.test(cardNumber);


// Check what kind of card is being used.
  if (visa.test(cardNumber)){
    document.querySelector('#status').innerHTML = 'VISA: ';
  }else if (masterCard.test(cardNumber)) {
    document.querySelector('#status').innerHTML = 'Master Card: ';
  }else if (amex.test(cardNumber)) {
    document.querySelector('#status').innerHTML = 'American Express: ';
  }else {
    document.querySelector('#status').innerHTML = 'This is not a valid card';
  }

  let numbers = cardNumber.split('');
  // console.log(numbers)

  luhnsAlgorithm(numbers);

// VISA
// 4012888888881881

// MASTER CARD
// 5111010030175156

// AMEX
// 371449635398431

}

function luhnsAlgorithm(numbers){
// Function that passes an array through it and returns True or false to see whether the number is a muliple of ten
let sum = 0;
  for (var i=0; i<numbers.length-1; i++){
    if (i%2 == 0 ){
      numbers[i] = numbers[i] * 2
      console.log(typeof numbers[i]);
    }else {
      sum = sum + numbers[i]
    }
  }
  // Each index is being concatenated instead of being added to a total sum. Also need to take care of any numbers that are higher than 9 :\
  console.log(sum)

}
