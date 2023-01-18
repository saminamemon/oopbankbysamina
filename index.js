#! /usr/bin/env node
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.neon(" Welcome to Samina Bank");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
class bank {
    accountno;
    creditCardno;
    constructor(creditCardno, accountno) {
        this.accountno = accountno;
        this.creditCardno = creditCardno;
    }
    userpin(pin = 6666) {
        console.log(`enter your ${this.accountno} ${this.creditCardno}`);
    }
}
class custumer extends bank {
    firstName;
    lastName;
    gender;
    age;
    mobilenumber;
    constructor(creditCardno, accountno, firstName, lastName, gender, age, mobilenumber) {
        super(creditCardno, accountno);
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.mobilenumber = mobilenumber;
    }
    userpin(pin = 6666) {
        return pin;
        super.userpin(pin);
    }
}
let Bank = new bank(1213243422, 740174017401);
let Custumer = new custumer(12131314211, 23141414141, "samina", "abdul qadir", "female", 44, 0O367);
console.log(Custumer.creditCardno);
console.log(Custumer.firstName);
Custumer.userpin();
