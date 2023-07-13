import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Nav from "./components/Nav";
import Login from './views/login'
import Main from './views/Main'

function App() {

  // const bootstrap = bootstrap();

  return (
    <>
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/about' element={<h1>ESTE ES EL ABOUT</h1>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/main' element={<Main />} />

          <Route path='*' element={<h2>404 Not Found</h2>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
