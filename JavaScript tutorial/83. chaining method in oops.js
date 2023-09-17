//oops
//chaining methods
//class declaration

class bankaccount{
    constructor(owner,pin)
    {
        this.owner=owner;
        this.pin=pin;
        this.movements=[]
    }
    getmovements(){
        return this.movements
    }
    deposit(val){
        this.movements.push(val)
        return this
    }
    withdraw(val){
        this.deposit(-val)
        return this
    }
}

let account=new bankaccount("zack",66678)
//chain method
account.deposit(45).withdraw(25).deposit(100).withdraw(40)
// account.withdraw(65)

console.log(account.getmovements());
console.log(account);