class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
}

function displayPerson() {
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');

  const name = nameInput.value;
  const age = ageInput.value;

  const person = new Person(name, age);

  const output = document.getElementById('output');
  output.innerHTML = `Name: ${person.name}<br />Age: ${person.age}`;
}