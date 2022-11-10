import React, { useLayoutEffect, useEffect }from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import { RoutesApp } from './routes/routes';


function App() {
  const nav = useNavigate()
  useEffect(() => {
    nav('/login')
  },[])
  return (
    <>
      <RoutesApp />
    </>
  );
}

export default App;
