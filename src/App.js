import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Jazz from './components/pages/Jazz';
import Menu from './components/pages/Menu';
import OurStory from './components/pages/OurStory';
import QrMenu from './components/pages/QrMenu';
import Contact from './components/pages/Contact';
import Location from './components/pages/Location';



function App() {
  return (
   <>
    <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/StoryOfJazz' exact Component={Jazz} />
          <Route path='/About-us' exact Component={OurStory} />
          <Route path='/Menu' exact Component={Menu} />
          <Route path='/Qr-Menu' exact Component={QrMenu} />
          <Route path='/contact' exact Component={Contact} />
          <Route path='/location' exact Component={Location} />
        </Routes>
        <Footer />
    </Router>
   </>
  );
}

export default App;
