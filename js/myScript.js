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

  if (visa.test(cardNumber)){
    document.querySelector('#status').innerHTML = 'VISA';
  }else if (masterCard.test(cardNumber)) {
    document.querySelector('#status').innerHTML = 'Master Card';
  }else if (amex.test(cardNumber)) {
    document.querySelector('#status').innerHTML = 'American Express';
  }else {
    document.querySelector('#status').innerHTML = 'This is not a valid card';
  }





// VISA
// 4012888888881881

// MASTER CARD
// 5111010030175156

// AMEX
// 371449635398431

}
