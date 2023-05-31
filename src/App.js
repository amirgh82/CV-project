import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Page/Main';
import About from './components/About/About';
import Services from './components/Services/Services';
import Resume from './components/Resume/Resume'
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Services />
      <Resume />
    </>
  );
}

export default App;
