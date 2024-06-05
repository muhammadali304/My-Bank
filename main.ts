#! /usr/bin/env node

class Customer {
    public FirstName: string;
    public LastName: string;
    public Gender: string;
    public Age: string;
    public MobileNumber: string;
    public bankAccount: BankAccount;

    constructor(firstName: string, lastName: string, gender: string, age: string, mobileNumber: string, bankAccount: BankAccount) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Gender = gender;
        this.Age = age;
        this.MobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }

    public CostumerInfo(): string {
        return `Name: ${this.FirstName} ${this.LastName}
        Age: ${this.Age}
        Gender: ${this.Gender}
        Mobile: ${this.MobileNumber}
        Account Balance: ${this.bankAccount.AccountBalance}`;
    }
}

interface IBankAccount {
    Debit(d: number): string;
    Credit(d: number): string;
}

class BankAccount implements IBankAccount {
    public AccountBalance: number;

    constructor() {
        this.AccountBalance = 100;
    }

    public Debit(amount: number): string {
        let statement: string = "Sorry, you have insufficient balance!";

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

    public Credit(amount: number): string {
        let statement: string = "Transaction Failed!";

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
