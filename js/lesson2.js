const fizzbuzz = () => {
  const fizzNo = Number(document.getElementById("fizzNo").value);
  const buzzNo = Number(document.getElementById("buzzNo").value);
  const result = document.getElementById("fizzbuzz-result");
  if (!Number.isInteger(fizzNo) || !Number.isInteger(buzzNo) || fizzNo === 0 || buzzNo === 0) {
    document.getElementById("fizzbuzz-result").textContent = "0を除く整数値を入力してください";
    return;
  }
  document.getElementById("fizzbuzz-result").textContent = "";
  for (let i = 1; i < 100; i++) {
    let value = "";
    if (i % fizzNo === 0 && i % buzzNo === 0) {
      value = "FizzBuzz" + " " + i;
    } else if (i % fizzNo === 0) {
      value = "Fizz" + " " + i;
    } else if (i % buzzNo === 0) {
      value = "Buzz" + " " + i;
    }
    const list = document.createElement("li");
    list.textContent = value;
    result.appendChild(list);
  }
}