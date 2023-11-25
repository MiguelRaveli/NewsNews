export type WeatherType = {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    condition: {
      text: string;
      icon: string;
    };
    cloud: string;
    feelslike_c: number;
  };
};
