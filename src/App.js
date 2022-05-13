import './App.css';
import MainContentTop from './Components/MainContentTop/MainContentTop';
import Navbar from './Components/Navbar/Navbar';
import MainContentBottom from './Components/MainContentBottom/MainContentBottom';
import Articles from './Components/Articles/Articles';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContentTop />
      <MainContentBottom />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
