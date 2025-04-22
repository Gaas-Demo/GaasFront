import React from 'react'

export const SearchModelYearColor = (SearchData, data) => {
  if (SearchData.length < 0) {
    return data
  }
  else {
    return data.filter(car =>
      car.model.toLowerCase().includes(SearchData.toLowerCase()) ||
      String(car.year).includes(SearchData) ||
      car.color.toLowerCase().includes(SearchData.toLowerCase())
    );
  }

};


export const FilterAccessory = (selected, data) => {
  console.log(selected)
  if (selected.length === 0) {
    return data
  }
  else {
    console.log("FilterAccessory", selected)
   return data.filter(car =>
      selected.every(item => car.accesory?.[item] === true)
    );
  }

}


