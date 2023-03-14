
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component'


const Navigator=()=>{
  return (<div>
<div><h1>This is the navigator bar</h1></div>
<Outlet />
  </div>)
};

const Shop=()=>{
  return <h1>I am the Shop page</h1>
};

const App=()=> {
  
  return (
    
    <Routes>
      <Route path='/' element={<Navigator />} >
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
    

  );
}

export default App;


