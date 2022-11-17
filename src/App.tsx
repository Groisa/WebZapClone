import React, {  useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutesApp } from './routes/routes';


function App() {
  const nav = useNavigate()
  useEffect(() => {
    nav('/login')
  },[nav])
  return (
    <>
      <RoutesApp />
    </>
  );
}

export default App;
