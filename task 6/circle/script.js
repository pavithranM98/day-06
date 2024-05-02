class Circle {
  constructor(Radius = "1.0", Color = "Red") {
    (this.Radius = Radius), (this.Color = Color);
  }
  //4
  get RadiusValue() {
    return this.Radius;
  }
  //5
  set RadiusValue(Radius) {
    return (this.Radius = Radius);
  }

  //6
  get ColorData() {
    return this.Color;
  }
  //7
  set ColorData(Color) {
    return (this.Color = Color);
  }
  //8
  get toString() {
    return `"Circle[Radius=${this.Radius},Color=${this.Color}]"`;
  }
  //9
  get area() {
    return Math.PI * this.Radius * this.Radius;
  }
  //10
  get circumference() {
    return 2 * Math.PI * this.Radius;
  }
}
//1
const Circle1 = new Circle();
console.log(Circle1);
console.log(Circle1.Radius);
//2
const Circle2 = new Circle("2.7");
console.log(Circle2.Radius);
console.log(Circle2.Color);
console.log(Circle2);
//3
const Circle3 = new Circle("3", "Black");
console.log(Circle3.Radius);
console.log(Circle3.Color);
console.log(Circle3);

console.log(Circle3.toString);
console.log(Circle3.area.toFixed(2));
console.log(Circle3.circumference.toFixed(2));
