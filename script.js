let saerto = prompt("sheiyvanet 3 ricxvi");
let number = saerto.split(" ");


function min_value(a, b, c) {
  if(a>b) {
      if(b>c) {
          return c;
          
      }
      else {
          return b;
      }
  }

  else if(a >c) {
      return c;
  }
  else {
      return a;
  }

}

let m = min_value(number[0], number[1], number[2]);

alert("min value is " + m);