// Loops evitando números negativos e números maiores que 50 para não afetar o funcionamento do site

function displayNumberDescending() {
	var number = document.getElementById('number-descending').value
	var result = document.getElementById('result-descending')
	result.innerHTML = ''
	if (number < 0) {
		alert('Digite um número maior que 0')
		return
	} else if (number > 50) {
		alert('Digite um número menor que 50')
		return
	}

	for (var i = number; i >= 0; i--) {
		result.innerHTML += i + '<br>'
	}
}

function displayMultiplicationTable() {
	var number = document.getElementById('number-multiplication').value
	var result = document.getElementById('result-multiplication')
	result.innerHTML = ''
	for (var i = 1; i <= 10; i++) {
		result.innerHTML += number + ' x ' + i + ' = ' + number * i + '<br>'
	}
}

function displayEvenNumbers() {
	var number = document.getElementById('number-even').value
	var result = document.getElementById('result-even')
	result.innerHTML = ''
	if (number < 0) {
		alert('Digite um número maior que 0')
		return
	} else if (number > 50) {
		alert('Digite um número menor que 50')
		return
	}
	for (var i = 1; i <= number; i++) {
		if (i % 2 == 0) {
			result.innerHTML += i + '<br>'
		}
	}
}
