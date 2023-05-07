// import logo from '@/logo.svg';
import '@/App.css';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Service from '@/pages/Service';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Error from '@/_utiles/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home/> } />

          <Route path='/home' element={ <Home/> } />
          <Route path='/service' element={ <Service/> } />
          <Route path='/contact' element={ <Contact/> } />

          <Route path='*' element={ <Error/> } />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
