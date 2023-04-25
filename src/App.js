import React from 'react';
import CarForm from './components/CarForm.component';
import CarSearch from './components/CarSearch.component';
import CarList from './components/CarList.component';
import CarValue from './components/CarValue.component';

function App() {
  return (
    <div className='container is-fluid'>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
