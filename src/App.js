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
  const handleClick = () => {
    const phoneNumber = '+923136899829';

    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='App'>
      <div
        className='fixed bottom-2 right-2 z-20 cursor-pointer'
        style={{ height: '50px', width: '50px' }}
      >
        <img onClick={handleClick} src='/logos/whatsapp.svg' />
      </div>

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
