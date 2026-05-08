function book(title, author, pages, read) {
    if(!new.target) {
        throw Error ('You must use the new operator to call the constructor.')
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}. `
    }
}

const book1 = new book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet.');

console.log(book1.info());


// // Lesson on How to create constructors and chaining them.

// // Initialize constructor functions
// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }

// function Warrior(name, level, weapon) {
//   Hero.call(this, name, level);

//   this.weapon = weapon;
// }

// function Healer(name, level, spell) {
//   Hero.call(this, name, level);

//   this.spell = spell;
// }

// // Link prototypes and add prototype methods
// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
// Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Hero.prototype.greet = function () {
//   return `${this.name} says hello.`;
// }

// Warrior.prototype.attack = function () {
//   return `${this.name} attacks with the ${this.weapon}.`;
// }

// Healer.prototype.heal = function () {
//   return `${this.name} casts ${this.spell}.`;
// }

// // Initialize individual character instances
// const hero1 = new Warrior('Bjorn', 1, 'axe');
// const hero2 = new Healer('Kanin', 1, 'cure');

