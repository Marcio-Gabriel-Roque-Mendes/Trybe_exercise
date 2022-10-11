interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string
} 

class MyClass implements MyInterface{
  constructor(public myNumber: number) {}
    
    myFunc = (myParam: number): string => {
      return `a soma total de myNumber + myParam é ${this.myNumber + myParam}`
    }

}

const sum = new MyClass(18)
console.log(sum.myNumber);
console.log(sum.myFunc(21));

