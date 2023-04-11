import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Restaurent from './component/Restaurent';
import Restview from './component/Restview';
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Restaurent/>} />
        <Route path='/view_restuarent/:id' element={<Restview/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
