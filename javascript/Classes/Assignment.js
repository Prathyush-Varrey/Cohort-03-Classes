// Assignment #1 - Create a Circle class
class Circle{
     constructor(radius, color) {
          this.radius = radius;
          this.color = color;
     }

     area() {
          const area = this.radius * this.radius * Math.PI
          return area
     };

     paint() {
          console.log(`Color is ${this.color}`);
     };
};

const circle = new Circle(2, "blue");
const area = circle.area();
console.log(area);
const color = circle.paint();

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
