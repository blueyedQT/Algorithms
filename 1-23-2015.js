// In JS create the "stack" data structure.  Create and object with methods 
// -push, -pop, -top
// that some other piece of code can use

// Miles' and my answer
var stack = {
  data: [2,3,4],
  pop: function(){
    var end = this.data[this.data.length-1];
    this.data.pop();
    return end;
  },
  top: function(){
    return this.data[this.data.length-1]; 
  },
  push: function(num){
    this.data.push(num);
    return num;
  }
};
console.log(stack.pop());
console.log('Data :'+stack.data);
console.log('Top :' +stack.top());
console.log('Push :'+stack.push(7));
console.log('Data :'+stack.data);

//// Martin's Answer
function stack(){
  var values = [];
  var numValues = 0;
  this.top = function(){
    if(numValues){
      return values[numValues-1];
    }
  };
  this.pop = function(){
    if(numValues){
      numValues--;
      return values[numValues];
    }
  };
  this.push = function(value){
    values[numValues] = value;
    numValues++;
  };
};