// Person Class
class Person {
  constructor(name, age, contact, address) {
    this.name = name;
    this.age = age;
    this.contact = contact;
      this.address = address;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Contact: ${this.contact}, Address: ${this.address}`;
  }
}
