import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    searchTerm: '',
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumption:
      // action.payload === {name: 'subaru', cost: 14000}
      state.cars.push({ ...action.payload, id: nanoid() });
    },
    removeCar(state, action) {
      // Assumption:
      // action.payload === the id of the car we want to remove
      // const index = state.cars.findIndex((car) => action.payload === car.id);
      // state.cars.splice(index, 1);
      // video solution
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
