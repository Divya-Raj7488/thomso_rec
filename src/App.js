import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Mainpage from './components/Mainpage/Mainpage';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Mainpage />
      <Footer />
    </div>
  );
}

export default App;
