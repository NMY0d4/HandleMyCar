import React from 'react';
import CarForm from './components/CarForm.component';
import CarList from './components/CarList.component';
import CarSearch from './components/CarSearch.component';
import CarValue from './components/CarValue.component';

function App() {
  return (
    <div>
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
}

export default App;
