import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlantList from './PlantList';
import AddPlant from './AddPlant';
import EditPlant from './EditPlant';

function App(){
  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/"  element = {<PlantList />} />
          <Route path = "/add"  element = {<AddPlant />} />
          <Route path = "/edit/:id"  element = {<EditPlant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;