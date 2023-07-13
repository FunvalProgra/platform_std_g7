import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home"
import NotFound from "./views/NotFound";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={ <Login />}/>
          <Route path="/home" element={ <Home />}/>


          <Route path="*" element={ <NotFound />}/>


        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
