import './App.css';
import { MainMenu } from './components/MainMenu';
import { TopMenu } from './components/TopMenu';
import { Appointment } from './components/Appointment';
import { Footer } from './components/Footer';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import { Home } from './views/Home';
import { About } from './views/About';
import { Services } from './views/Services';
import { Contact } from './views/Contact';

function App() {
  return (
    <BrowserRouter >
      <TopMenu/>
      <MainMenu/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About" exact component={About}/>
        <Route path="/Services" exact component={Services}/>
        <Route path="/Contact" exact component={Contact}/>
      </Switch>
      <Appointment/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
