import "./App.css";
import { HeroSection } from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import { Detail } from "./components/Detail";
import Offering from "./components/Offering";
import Company from "./components/Company";
import { Faqs } from "./components/Faqs";

function App() {
  const handleClick = () => {
    const phoneNumber = "1234567890";

    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="App">
      <div>
        <svg
          onClick={handleClick}
          className="fixed bottom-1 right-1 z-10 cursor-pointer	 	"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0,0,256,256"
        >
          <g
            fill="none"
            fill-rule="none"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="translate(-0.9,256.7) rotate(-90) scale(5.33333,5.33333)">
              <path
                d="M4.9,43.3l2.7,-9.8c-1.7,-2.9 -2.6,-6.2 -2.6,-9.5c0,-10.5 8.5,-19 19,-19c5.1,0 9.8,2 13.4,5.6c3.6,3.6 5.6,8.3 5.6,13.4c0,10.5 -8.5,19 -19,19v0v0c-3.2,0 -6.3,-0.8 -9.1,-2.3z"
                fill="#ffffff"
                fill-rule="nonzero"
              ></path>
              <path
                d="M4.9,43.8c-0.1,0 -0.3,-0.1 -0.4,-0.1c-0.1,-0.1 -0.2,-0.3 -0.1,-0.5l2.6,-9.7c-1.6,-2.9 -2.5,-6.2 -2.5,-9.6c0,-10.7 8.8,-19.4 19.5,-19.4c5.2,0 10.1,2 13.8,5.7c3.7,3.7 5.7,8.6 5.7,13.8c0,10.7 -8.7,19.5 -19.5,19.5c-3.2,0 -6.3,-0.8 -9.1,-2.3l-9.9,2.6z"
                fill="#ffffff"
                fill-rule="nonzero"
              ></path>
              <path
                d="M24,5c5.1,0 9.8,2 13.4,5.6c3.6,3.6 5.6,8.3 5.6,13.4c0,10.5 -8.5,19 -19,19v0c-3.2,0 -6.3,-0.8 -9.1,-2.3l-10,2.6l2.7,-9.8c-1.7,-2.9 -2.6,-6.2 -2.6,-9.5c0,-10.5 8.5,-19 19,-19M24,43v0v0M24,43v0v0M24,4v0c-11,0 -20,9 -20,20c0,3.4 0.8,6.7 2.5,9.6l-2.6,9.4c-0.1,0.3 0,0.7 0.3,1c0.2,0.2 0.4,0.3 0.7,0.3c0.1,0 0.2,0 0.3,0l9.7,-2.5c2.8,1.5 6,2.2 9.2,2.2c11,0 20,-9 20,-20c0,-5.3 -2.1,-10.4 -5.8,-14.1c-3.9,-3.8 -8.9,-5.9 -14.3,-5.9z"
                fill="#cfd8dc"
                fill-rule="nonzero"
              ></path>
              <path
                d="M35.2,12.8c-3,-3 -6.9,-4.6 -11.2,-4.6c-8.7,0 -15.8,7.1 -15.8,15.8c0,3 0.8,5.9 2.4,8.4l0.4,0.6l-1.6,5.8l6,-1.6l0.6,0.3c2.4,1.4 5.2,2.2 8,2.2v0c8.7,0 15.8,-7.1 15.8,-15.8c0,-4.1 -1.6,-8.1 -4.6,-11.1z"
                fill="#40c351"
                fill-rule="nonzero"
              ></path>
              <path
                d="M19.3,16c-0.4,-0.8 -0.7,-0.8 -1.1,-0.8c-0.3,0 -0.6,0 -0.9,0c-0.3,0 -0.8,0.1 -1.3,0.6c-0.4,0.5 -1.7,1.6 -1.7,4c0,2.4 1.7,4.6 1.9,4.9c0.2,0.3 3.3,5.3 8.1,7.2c4,1.6 4.8,1.3 5.7,1.2c0.9,-0.1 2.8,-1.1 3.2,-2.3c0.4,-1.1 0.4,-2.1 0.3,-2.3c-0.1,-0.2 -0.4,-0.3 -0.9,-0.6c-0.5,-0.3 -2.8,-1.4 -3.2,-1.5c-0.4,-0.2 -0.8,-0.2 -1.1,0.2c-0.3,0.5 -1.2,1.5 -1.5,1.9c-0.3,0.3 -0.6,0.4 -1,0.1c-0.5,-0.2 -2,-0.7 -3.8,-2.4c-1.4,-1.3 -2.4,-2.8 -2.6,-3.3c-0.3,-0.5 0,-0.7 0.2,-1c0.2,-0.2 0.5,-0.6 0.7,-0.8c0.2,-0.3 0.3,-0.5 0.5,-0.8c0.2,-0.3 0.1,-0.6 0,-0.8c-0.2,-0.2 -1.1,-2.5 -1.5,-3.5z"
                fill="#ffffff"
                fill-rule="evenodd"
              ></path>
            </g>
          </g>
        </svg>
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
