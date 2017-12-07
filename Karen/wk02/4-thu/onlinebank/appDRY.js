
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

var makeDepositToSavings = function(amount){
  totalSavingsAmount = totalSavingsAmount + Number(savingsTransactionAmount.value);
  totalSavingsLabel.textContent = totalSavingsAmount;
  if (totalSavingsAmount >0){
    savings_gone_positive();
  }
};

var withdrawFromSavings = function(amount){
  if (savingsTransactionAmount.value <=totalSavingsAmount){
  totalSavingsAmount = totalSavingsAmount - Number(savingsTransactionAmount.value);
  totalSavingsLabel.textContent = totalSavingsAmount;
  }
  if (totalSavingsAmount === 0){
    savings_gone_in_red();
  }
};

function savings_gone_in_red(){
  savingsBox.classList.add('gone_in_red');
}

function savings_gone_positive(){
  savingsBox.classList.remove('gone_in_red');
}

depositToSavingsBtn.addEventListener('click', makeDepositToSavings);
withdrawFromSavingsBtn.addEventListener('click', withdrawFromSavings);

var makeDepositToChecking = function(amount){
  totalCheckingAmount = totalCheckingAmount + Number(checkingTransactionAmount.value);
  totalCheckingLabel.textContent = totalCheckingAmount;
  if (totalCheckingAmount > 0){
    checking_gone_positive();
  }
};

var withdrawFromChecking = function(amount){
  if (checkingTransactionAmount.value <=totalCheckingAmount){
  totalCheckingAmount = totalCheckingAmount - Number(checkingTransactionAmount.value);
  totalCheckingLabel.textContent = totalCheckingAmount;
  }
  if (totalCheckingAmount === 0){
    checking_gone_in_red();
  }
};

function checking_gone_in_red(){
  checkingBox.classList.add('gone_in_red');
}

function checking_gone_positive(){
  checkingBox.classList.remove('gone_in_red');
}

depositToCheckingBtn.addEventListener('click', makeDepositToChecking);
withdrawFromCheckingBtn.addEventListener('click', withdrawFromChecking);
