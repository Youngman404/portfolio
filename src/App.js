// import logo from './logo.svg';
import './App.css';
import Homepage from '@/pages/Homepage';
import Error from '@/_utils/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

         {/*  Définition d'une route par défaut */}
         <Route index element={<Homepage/>}/>

         {/*  Définition des différentes routes */} 
          <Route path='/home' element={<Homepage/>}/>


          {/* Message d'erreur pour une route inexistante */}
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World</p>
        </header> */}
    </div>
  );
}

export default App;
