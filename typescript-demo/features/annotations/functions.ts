const add = (a: number, b: number) => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void | undefined => {
  console.log(message);
};

const throwErr = (message: string): never | string => {
  if (!message) {
    throw new Error("No message supplied");
  }

  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather(todaysWeather);
