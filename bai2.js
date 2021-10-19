
function add() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let sum = a+b
    document.getElementById("ketqua").value=sum;
  }
  const subtract = () => {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let sub = a-b
    document.getElementById("ketqua").value=sub;
  };
  const multiply = () => {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let mul = a*b
    document.getElementById("ketqua").value=mul;
  };
  const getthepower = () => {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let pow = Math.pow(a,b)
    document.getElementById("ketqua").value=pow;
  };
  const factorial = () => {
    let a = parseInt(document.getElementById("num1").value);
    let gt = 1;
    if (a === 0 || a === 1) {
        document.getElementById("ketqua").value=gt;
    } else {
      for (let i = 2; i <= a; i++) {
        gt = gt * i;
      }
      document.getElementById("ketqua").value=gt;
    }
  };