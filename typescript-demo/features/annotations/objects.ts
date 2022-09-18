const profile = {
  name: "Ankit",
  age: 22,
  coords: {
    lat: 25,
    long: 34,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const _age: number = profile.age;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
// const { lat, long }: { lat: number; long: number } = coords;
