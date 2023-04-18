
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
    constructor (_x) {
        this._x = _x;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this.x = value;
    }
}

class clsTemplateChild extends clsTemplateParent {
    constructor (_x, _y) {
        super(_x);
        this._y = _y;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this.y = value;
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
