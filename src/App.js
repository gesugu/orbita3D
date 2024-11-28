import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from "../src/components/MainPage"
import ItemOneScreenInfo2 from './components/ItemOneScreenInfo2';
import ItemOneScreenInfo from "../src/components/ItemOneScreenInfo"
import Planets from './components/Planets';
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/item2/:item_id" element={<ItemOneScreenInfo />} />
          <Route path="/item3/:item_id" element={<ItemOneScreenInfo2 />} />
          <Route path="/models" element={<Planets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
