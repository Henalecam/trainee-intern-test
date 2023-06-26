// Função que retorna se o valor é primo ou não
function isPrime() {
  Number = document.getElementById("prime-number").value;
  Result = document.getElementById("prime-result");
  // Desconsiderando 0 e números negativos
  if (Number == 1) {
    Result.innerHTML = "1 is not a prime number";
  }
  else {
    for (let i = 2; i < Number; i++) {
      //Se o resto da divisão do número 2 ao número digitado for 0, ele não é primo
      if (Number % i == 0) {
        Result.innerHTML = Number + " is not a prime number";
        break;
      }
      else {
        Result.innerHTML = Number + " is a prime number";
      }
    }
  }
}

// Checa se a palavra ao contrário fica igual
function isPalindrome() {
  Word = document.getElementById("palindrome-word").value;
  Result = document.getElementById("palindrome-result");
  // Funciona com letras acentuadas, maiúsculas e minúsculas
  if (Word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == Word.split("").reverse().join("").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
    Result.innerHTML = Word + " is a palindrome";
  }
  else {
    Result.innerHTML = Word + " is not a palindrome";
  }
}

// Checa se o ano é bissexto
function isLeapYear() {
  Year = document.getElementById("leap-year").value;
  Result = document.getElementById("leap-year-result");
  // Se o ano for divisível por 4 e não for divisível por 100 ou se for divisível por 400, ele é bissexto
  if (Year % 4 == 0 && Year % 100 != 0 || Year % 400 == 0) {
    Result.innerHTML = Year + " is a leap year";
  }
  else {
    Result.innerHTML = Year + " is not a leap year";
  }
}