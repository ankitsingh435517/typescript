import { faker } from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.name.firstName("male");
    this.location = {
      lat: parseFloat(faker.address.latitude(90, -90, 4)),
      long: parseFloat(faker.address.longitude(90, -90, 4)),
    };
  }
}
