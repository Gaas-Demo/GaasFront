

const carsData = [
  { id: 1, Type: 'Suv', model: 'Macan', year: "2021", color: 'Red', Wifi: true},
  { id: 2, Type: 'SUV', model: 'Cayenne', year: "2020", color: 'Blue',Wifi: false},
  { id: 3, Type: 'Sedan', model: 'Panamera', year: 2022, color: 'Black', Wifi: true },
  { id: 4, Type: 'Sedan', model: 'Taycan', year: 2023, color: 'Yellow', Wifi: true  },
  { id: 5, Type: 'Sedan', model: 'Taycan Cross Turismo', year: 2022, color: 'Grey', Wifi: true  },
  { id: 6, Type: 'Sport', model: '911 GT3', year: 2025, color: 'Black' ,Wifi: false},
  { id: 7, Type: 'Sport', model: '911 GT3 Touring', year: 2022, color: 'Black', Wifi: true  },
  { id: 8, Type: 'Sport', model: '718 Caymnan', year: 2023, color: 'Yellow' ,Wifi: false},
];
const carData =[
  { id: 5, Type: 'Porsche', model: 'Panamera', year: 2022, color: 'Grey', Wifi: true, Moottoritilavuus: '2,9', Vaihteisto: '8-vaihteinen Porsche Doppelkupplung (PDK)'  },
];

export let rentedCar2 = null;

export const updateRentedCar = (item) => {
  console.log("je1", item)
    rentedCar2 = item; 
    console.log("je", rentedCar2)
};


export default carsData;