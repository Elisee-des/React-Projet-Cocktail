// import logo from '@/logo.svg';
import '@/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from '@/pages/Public/PublicRouter';
import AdminRouter from '@/pages/Admin/AdminRouter';
import AuthRouter from '@/pages/Auth/AuthRouter';
import AuhtGuard from '@/_helpers/AuhtGuard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={ <PublicRouter />} />
          <Route path='/admin/*' element={ 
          
              <AuhtGuard>
                <AdminRouter/>
              </AuhtGuard>
              
            } />
          <Route path='/auth/*' element={ <AuthRouter />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
