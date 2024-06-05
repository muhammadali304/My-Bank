class Customer {
    constructor(firstName, lastName, gender, age, mobileNumber, bankAccount) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Gender = gender;
        this.Age = age;
        this.MobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }
    CostumerInfo() {
        return `Name: ${this.FirstName} ${this.LastName}
        Age: ${this.Age}
        Gender: ${this.Gender}
        Mobile: ${this.MobileNumber}
        Account Balance: ${this.bankAccount.AccountBalance}`;
    }
}
class BankAccount {
    constructor() {
        this.AccountBalance = 100;
    }
    Debit(amount) {
        let statement = "Sorry, you have insufficient balance!";
        if (amount > 0) {
            statement = "The amount you entered is wrong!";
            if (this.AccountBalance > amount) {
                this.AccountBalance -= amount;
                statement = "Transaction Successful! New account balance is: " + this.AccountBalance;
            }
            else {
                statement = "You don't have enough money to do this transaction";
            }
        }
        return statement;
    }
    Credit(amount) {
        let statement = "Transaction Failed!";
        if (amount > 0) {
            this.AccountBalance += amount;
            if (amount > 100) {
                this.AccountBalance -= 1;
            }
            statement = "Your account has been credited successfully!";
        }
        return statement;
    }
}
// Example usage:
const bankAcc = new BankAccount();
const customer = new Customer("John", "Doe", "Male", "30", "1234567890", bankAcc);
console.log(customer.CostumerInfo());
console.log(bankAcc.Debit(50));
console.log(bankAcc.Credit(200));
export {};
