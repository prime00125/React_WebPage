import './App.css';
import Navbar from './NavbarCom/Navbar';
import Fotter from './FotterCom/Fotter';
import MainPage from './Component/MainPage';
import BodyCard from './Component/BodyCard';
import banner from './images/company/banner.jpg';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <MainPage content={"Company"} img={banner}/>
     <BodyCard/>
      <Fotter/>


    
    </div>
  );
}

export default App;
