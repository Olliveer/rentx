type CarDTO = {
  id: string;
  brand: string;
  name: string;
  about: string;
  period: string;
  price: number;
  fuel_type: string;
  thumbnail: string;
  accessories: {
    id: string;
    car_id: string;
    name: string;
    type: string;
  }[];
  photos: {
    id: string;
    photo: string;
  }[];
};

export { CarDTO };
