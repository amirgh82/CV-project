import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Page/Main';
import About from './components/About/About';
import Services from './components/Services/Services';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Pricing from './components/Pricing/Pricing';
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Pricing />
    </>
  );
}

export default App;
