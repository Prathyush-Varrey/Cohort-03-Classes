class rectangle{
     constructor(width, height) {
          this.width = width;
          this.height = height;
     }

     area() {
          const area = this.width * this.height;
          return area;
     }
     print() {
          console.log(`The are of given width ${this.width}, height ${this.height} is : ${area}`);
          console.log(this);
          
     }
};

const rect = new rectangle(3, 4);
const area = rect.area();
rect.print()
// console.log(area);
console.log(this);// empty object is returned {}
console.log(typeof this); // Object
