import React from 'react'

export const SearchModelYearColor = (SearchData, data) => {
   
    return data.filter(car => 
        car.model.toLowerCase().includes(SearchData.toLowerCase()) || 
        String(car.year).includes(SearchData) || 
        car.color.toLowerCase().includes(SearchData.toLowerCase())
      );
  };




