import React from 'react';
import { useSelector } from 'react-redux';

function CarValue() {
  const totalCost = useSelector(({ storeCars: { cars, searchTerm } }) =>
    cars
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((totalCost, car) => totalCost + car.cost, 0)
  );

  return <div className='car-value'>Total Cost: {totalCost} €</div>;
}

export default CarValue;
