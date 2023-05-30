import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Page/Main';
import About from './components/About/About';
import Services from './components/Services/Services';
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Services/>
    </>
  );
}

export default App;
