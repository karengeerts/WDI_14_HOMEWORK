class ATM {
  constructor(type){
    this.type = type;
    this.money = 0;
    this.transactionHistory = [];
  }

  withdraw(amount){
    this.money = this.money - parseInt(amount);
    this.transactionHistory.push('withdrawal: ' + amount);
    return this.money;
  }

  deposit(amount){
    this.money = this.money + parseInt(amount);
    this.transactionHistory.push('deposit: ' + amount);
    return this.money;
  }
}

const test = new ATM('savings');
console.log(test);
console.log(test.deposit(1000));
console.log(test.deposit(50));
console.log(test.withdraw(700));
console.log(test.deposit(10));
console.log(test.transactionHistory);
