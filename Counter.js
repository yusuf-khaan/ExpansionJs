class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        console.log(`Current count: ${this.count}`);
    }

    decrement() {
        this.count--;
        console.log(`Current count: ${this.count}`);
    }

    reset() {
        this.count = 0;
        console.log(`Counter reset. Current count: ${this.count}`);
    }

    getCount() {
        return this.count;
    }
}

const myCounter = new Counter();
myCounter.increment(); 
myCounter.increment(); 
myCounter.decrement(); 
myCounter.reset();     
console.log(myCounter.getCount());
