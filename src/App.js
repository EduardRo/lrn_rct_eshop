
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component'

const App=()=> {
  
  return (
    <Routes>
      <Route path = '/home' element={<Home />} >
        <Route path='shop' element={<Shop />}></Route>
      </Route>
      

    </Routes>
    

  );
}

export default App;


const Shop = ()=>{
  return <h1>This is Shop page</h1>
};
