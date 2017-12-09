// TO DO: HAVE NO FUNDS IMAGE WHEN TRYING TO WITHDRAW MORE THAN IN FUNDS


var savingsBox = document.querySelector('.savings');
var totalSavingsAmount = 0;
var totalSavingsLabel = document.querySelector('.savings_balance_amount');
var savingsTransactionAmount = document.querySelector('.savings_transaction_amount');
var depositToSavingsBtn = document.querySelector('.deposit_to_savings');
var withdrawFromSavingsBtn = document.querySelector('.withdraw_from_savings');

var checkingBox = document.querySelector('.checking');
var totalCheckingAmount = 0;
var totalCheckingLabel = document.querySelector('.checking_balance_amount');
var checkingTransactionAmount = document.querySelector('.checking_transaction_amount');
var depositToCheckingBtn = document.querySelector('.deposit_to_checking');
var withdrawFromCheckingBtn = document.querySelector('.withdraw_from_checking');

var show_no_funds_img = document.querySelector('.no_funds');


var makeDepositToSavings = function(){
  totalSavingsAmount = totalSavingsAmount + Number(savingsTransactionAmount.value);
  totalSavingsLabel.textContent = totalSavingsAmount;
  if (totalSavingsAmount >0){
    savings_gone_positive();
  }
};

var makeDepositToChecking = function(){
  totalCheckingAmount = totalCheckingAmount + Number(checkingTransactionAmount.value);
  totalCheckingLabel.textContent = totalCheckingAmount;
  if (totalCheckingAmount > 0){
    checking_gone_positive();
  }
};

var withdrawFromChecking = function(){
  if (checkingTransactionAmount.value > (totalSavingsAmount + totalCheckingAmount)){
  //window.alert("You don't have enough funds in your accounts.");
  notEnoughFunds();
  } else if (checkingTransactionAmount.value <=totalCheckingAmount){
  totalCheckingAmount = totalCheckingAmount - Number(checkingTransactionAmount.value);
  totalCheckingLabel.textContent = totalCheckingAmount;
} else {
  totalSavingsAmount = totalSavingsAmount - (checkingTransactionAmount.value-totalCheckingAmount);
  totalCheckingAmount = 0;
  totalCheckingLabel.textContent = totalCheckingAmount;
  totalSavingsLabel.textContent = totalSavingsAmount;
  window.alert("You didn't have enough funds in your Checking account so the overdraft functionality has been actived.");

}
  if (totalCheckingAmount === 0){
    checking_gone_in_red();
  }
};

var withdrawFromSavings = function(){
  if (savingsTransactionAmount.value > (totalSavingsAmount + totalCheckingAmount)){
  //window.alert("You don't have enough funds in your accounts.");
  notEnoughFunds();
  } else if (savingsTransactionAmount.value <=totalSavingsAmount){
  totalSavingsAmount = totalSavingsAmount - Number(savingsTransactionAmount.value);
  totalSavingsLabel.textContent = totalSavingsAmount;
} else{
  totalCheckingAmount = totalCheckingAmount - (savingsTransactionAmount.value-totalSavingsAmount);
  totalSavingsAmount = 0;
  totalCheckingLabel.textContent = totalCheckingAmount;
  totalSavingsLabel.textContent = totalSavingsAmount;
  window.alert("You didn't have enough funds in your Savings account so the overdraft functionality has been actived.");
}
  if (totalSavingsAmount === 0){
    savings_gone_in_red();
  }
};

function checking_gone_in_red(){
  checkingBox.classList.add('gone_in_red');
}

function checking_gone_positive(){
  checkingBox.classList.remove('gone_in_red');
}

function savings_gone_in_red(){
  savingsBox.classList.add('gone_in_red');
}

function savings_gone_positive(){
  savingsBox.classList.remove('gone_in_red');
}


function removeNoFundsWarning(){
  show_no_funds_img.classList.remove('show_no_funds');
};

function notEnoughFunds(){
  show_no_funds_img.classList.add('show_no_funds');
  show_no_funds_img.addEventListener('mouseover',removeNoFundsWarning)
};

depositToCheckingBtn.addEventListener('click', makeDepositToChecking);
withdrawFromCheckingBtn.addEventListener('click', withdrawFromChecking);
depositToSavingsBtn.addEventListener('click', makeDepositToSavings);
withdrawFromSavingsBtn.addEventListener('click', withdrawFromSavings);
