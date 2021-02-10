import './App.css';
import { MainMenu } from './components/MainMenu';
import { TopMenu } from './components/TopMenu';
import { ShowCase } from './components/ShowCase';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Appointment } from './components/Appointment';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopMenu/>
      <MainMenu/>
      <ShowCase/>
      <AboutUs/>
      <Services/>
      <Appointment/>
      <Footer/>
    </div>
  );
}

export default App;
