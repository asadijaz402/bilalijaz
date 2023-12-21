import './App.css';
import { HeroSection } from './components/HeroSection';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import { Detail } from './components/Detail';
import Offering from './components/Offering';
import Company from './components/Company';
import { Faqs } from './components/Faqs';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HeroSection />
      <Detail />
      <Offering />
      <Company />
      <AboutUs />
      <Faqs />
      <ContactUs />
    </div>
  );
}

export default App;
