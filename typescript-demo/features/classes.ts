class Vehicle {
  protected honk(): void {
    console.log("beep");
  }

  constructor(public color: string) {}
}

class Car extends Vehicle {
  private drive(): void {
    // method overriding but cant change modifier
    console.log("Vroom");
  }
  public startdrivingProcess(): void {
    this.drive();
    this.honk();
  }

  constructor(public wheels: number, color: string){
    super(color);
  }
}

const car: Car = new Car(4,"Orange");
console.log(car.color);
console.log(car.wheels);
// car.startdrivingProcess();
