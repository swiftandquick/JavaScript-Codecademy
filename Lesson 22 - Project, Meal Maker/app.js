const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  
  // Getters
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  
  // Setters
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  
  // Getter method for _courses. 
  get courses() {
    return {
      appetizers: this.appetizers, 
      mains: this.mains, 
      desserts: this.desserts
    };
  },
  
  // Add items to the menu.  
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  
  // Get dishes from the course.  
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  // Generate a random meal. 
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'waffle', 3.00);
menu.addDishToCourse('appetizers', 'fries', 2.50);
menu.addDishToCourse('appetizers', 'gravy', 3.50);

menu.addDishToCourse('mains', 'steak', 10.50);
menu.addDishToCourse('mains', 'chicken', 9.50);
menu.addDishToCourse('mains', 'salad bowl', 8.50);

menu.addDishToCourse('desserts', 'cake', 1.50);
menu.addDishToCourse('desserts', 'popsicle', 1.00);
menu.addDishToCourse('desserts', 'ice cream cone', 2.00);

const meal = menu.generateRandomMeal();
console.log(meal);