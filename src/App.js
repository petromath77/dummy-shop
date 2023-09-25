import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Pages from './Pages/Pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col h-screen justify-between">
        <Header />
        <Pages/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
