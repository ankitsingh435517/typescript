const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type allias
type TDrink = [string, boolean, number];
const pepsi: TDrink = ["brown", true, 40];

const carSpecs: [number, number] = [400, 3354];

const carStat: { horsePower: number; weight: number } = {
  horsePower: 400,
  weight: 3354,
};
