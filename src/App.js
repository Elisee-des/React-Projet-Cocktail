import logo from '@/logo.svg';
import '@/App.css';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Service from '@/pages/Service';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
        <Service />
        <Contact />
      </header>
    </div>
  );
}

export default App;
