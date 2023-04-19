
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // call the parent constructor with super()
    }
  
    speak() {
      console.log(this.name + ' barks.');
    }
  }
  
  const dog = new Dog('Buddy');
  dog.speak(); // output: "Buddy barks."
  


// import clsTemplate from './clsTemplate'


class clsTemplateParent {
    constructor (x) {
        this._x = x;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }
}

class clsTemplateChild extends clsTemplateParent {
    constructor (x, y) {
        super(x);
        this._y = y;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }
}


console.log("hello");
const x = 1;

myObj = new clsTemplateParent(x);
console.log(myObj);
console.log(myObj.x);

const y = 2;
mySubObj = new clsTemplateChild(x, y);
console.log(mySubObj);
console.log(mySubObj.x);
console.log(mySubObj.y);


function pizzaFactory (size) {
    const _size = size;
    return {
        bake: () => console.log(`baking ${_size}`)
    };
}

const mypizza = pizzaFactory("small");
mypizza.bake();


const myjson = {
    name: "renato",
    ling: ["C#","Javascript", "typescript"],
    method: function () {
        console.log("method");
    }
}

const sendJSON = JSON.stringify(myjson);
console.log(sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
