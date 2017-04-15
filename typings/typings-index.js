
let Cat = function(name, color){
  this.name = name;
  this.color = color;
}

export default {
  stringObj: 'Hello World',
  myString: 'Hello World',
  myNum: 1,
  myDecimal: 0.02,
  myFloat: 0.1,
  myFloat2: 0.2,
  myArrowFn: =>,
  myObj: {},
  Cat: Cat,
  Fluffy: new Cat('Fluffy', 'white')
};



