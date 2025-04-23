

const carsData = [
  { id: 1, Type: 'Suv', model: 'Macan', year: "2021", color: 'Red', Wifi: true, accesory:{animal:true, roof:true,child:true}, photo: require('../assets/Cayenne.png')},
  { id: 2, Type: 'SUV', model: 'Cayenne', year: "2020", color: 'Blue',Wifi: false,accesory:{animal:true, roof:true,child:true}, photo: require('../assets/Cayenne.png')},
  { id: 3, Type: 'Sedan', model: 'Panamera', year: 2022, color: 'Black', Wifi: true,accesory:{animal:false, roof:true,child:true} ,photo: require('../assets/Cayman.png')},
  { id: 4, Type: 'Sedan', model: 'Taycan', year: 2023, color: 'Yellow', Wifi: true,accesory:{animal:true, roof:true,child:true}, photo: require('../assets/Cayman.png')},
  { id: 5, Type: 'Sedan', model: 'Taycan Cross Turismo', year: 2022, color: 'Grey', Wifi: true,accesory:{animal:false, roof:true,child:true}, photo: require('../assets/Cayenne.png') },
  { id: 6, Type: 'Sport', model: '911 GT3', year: 2025, color: 'Black' ,Wifi: false,accesory:{animal:false, roof:false}, photo: require('../assets/FuutuureAuto.png')},
  { id: 7, Type: 'Sport', model: '911 GT3 Touring', year: 2022, color: 'Black', Wifi: true,accesory:{animal:false, roof:false} ,photo: require('../assets/FuutuureAuto.png')},
  { id: 8, Type: 'Sport', model: '718 Caymnan', year: 2023, color: 'Yellow' ,Wifi: false,accesory:{animal:false, roof:false,},photo: require('../assets/FuutuureAuto.png')},
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