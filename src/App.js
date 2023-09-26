import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Pages from './Pages/Pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen flex flex-col justify-between bg-slate-100">
        <Header />
        <Pages/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
