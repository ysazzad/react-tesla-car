import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Routes>
        <Route path='/'></Route>
      </Routes> */}

    </div>
  );
}

export default App;
