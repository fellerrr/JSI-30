// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

// Вот так должен работать наш класс:

// var student = new Student('Иван', 'Иванов', 2019);

// console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.year); //выведет 2019
// console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2022

// Вот так должен выглядеть класс User, от которого наследуется наш Student:

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname)
    this.year = year
  }

  getCourse() {
    const currentYear = new Date().getFullYear()
    const course = currentYear - this.year
    return course
  }
}

var student = new Student('Иван', 'Иванов', 2019);

console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2019
console.log(student.getCourse()); //выведет 4 - третий курс, так как текущий год 2023


///////////////////////////////////////////////

// Вы — руководитель команды, которая разрабатывает игру, хомяковую ферму.
// Один из программистов получил задание создать класс «хомяк» (англ - "Hamster").

// Объекты-хомяки должны иметь массив food для хранения еды и метод found,
// который добавляет к нему еду.

// Ниже — его решение. При создании двух хомяков, если поел один — почему-то сытым
// становится и второй тоже.

// В чём дело? Как поправить?

function Hamster() {
  this.food = []; // пустой ""живот""
}

// Hamster.prototype.food = []; // пустой ""живот""

Hamster.prototype.found = function (something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();

speedy.found('яблоко');
speedy.found('орех');

console.log(speedy.food.length); // 2
console.log(lazy.food.length); // 2 (!??) // должно быть 0"