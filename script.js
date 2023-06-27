function findLargestNumber(){
  // Adquire a Array inteira
  numbersArray = document.getElementById("numbers-array").value;
  // Remove os colchetes e transforma em um Array
  numbersArray = numbersArray.replace(/[\[\]]/g , "").split(",");
  // Transforma os valores em números (Se tiver letras, vai dar erro)
  numbers = numbersArray.map(Number);
  // Encontra o maior número
  largestNumber = Math.max.apply(Math, numbers);
  // Mostra o maior número
  document.getElementById("largestNumber").innerHTML ="Largest Number in Array: " + largestNumber;
}

function findLongestName(){
  namesArray = document.getElementById("names-array").value;
  namesArray = namesArray.replace(/[\[\]]/g , "").split(",");
  // Encontra o maior nome (Reduce interage com cada elemento do Array, substituindo loops )
  longestName = namesArray.reduce(function(a, b) { return a.length > b.length ? a : b; });
  // Mostra o maior nome
  document.getElementById("longestName").innerHTML ="Longest Name in Array: " + longestName;
}

function calculateSum(){
  numbersArray = document.getElementById("numbers-array-sum").value;
  numbersArray = numbersArray.replace(/[\[\]]/g , "").split(",");
  numbers = numbersArray.map(Number);
  // Soma todos os valores do Array (Reduce tira a necessidade de loop)
  sum = numbers.reduce(function(a, b) { return a + b; });
  // Mostra a soma
  document.getElementById("sum").innerHTML ="Sum of Array: " + sum;
}