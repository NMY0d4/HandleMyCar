import { configureStore } from '@reduxjs/toolkit';
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from './slices/carsSlice';
import { formReducer, changeName, changeCost } from './slices/formSlice';

const store = configureStore({
  reducer: {
    storeCars: carsReducer,
    storeForm: formReducer,
  },
});

export { store, changeCost, changeName, addCar, removeCar, changeSearchTerm };
