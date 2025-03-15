import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Views/Home";
import Footer from "./Components/Footer";
import Aboutpage from "./Views/About/Aboutpage";
import Generalinformation from "./Views/About/Generalinformation";
import { Statisticalprofile } from "./Views/About/Statisticalprofile";
import Plantperformance from "./Views/About/Plantperformance";
import Treatmentplantdata from "./Views/About/Treatmentplantdata";
import Boardofdirectors from "./Views/About/Boardofdirectors";
import Organizationchart from "./Views/About/Organizationchart";
import Greenbeltdevelopment from "./Views/About/Greenbeltdevelopment";
import ComputerizedCETP from "./Views/About/ComputerizedCETP";
import Acknowledgement from "./Views/About/Acknowledgement";
import UniquefeaturesoftheCETP from "./Views/About/UniquefeaturesoftheCETP";
import Pretreatmentsystem from "./Views/Servicepage/Pretreatmentsystem";
import Pretreatement from "./Views/ZLD/Pretreatement";
import Reverseosmosis from "./Views/ZLD/Reverseosmosis";
import Multipleeffectevaporator from "./Views/ZLD/Multipleeffectevaporator";
import Introduction from "./Views/TestingLab/Introduction";
import Viewofmodernequipe from "./Views/TestingLab/Viewofmodernequipe";
import Membertanneries from "./Views/Membertanneries";
import Slf from "./Views/Slf";
import Annualreturn from "./Views/Annualreturn";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact";
import Processflowdiagram from "./Views/Processflowdiagram";
import Unitsizedesign from "./Views/Unitsizedesign";
import Gallery from "./Views/Gallery";
import CustomCursor from "./Components/CustomCursor";
import LoadingScreen from "./Components/LoadingScreen";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <>
     <CustomCursor />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/about/generalinformation" element={<Generalinformation />} />
            <Route path="/about/statisticalprofile" element={<Statisticalprofile />} />
            <Route path="/about/plantperformance" element={<Plantperformance />} />
            <Route path="/about/treatmentplantdata" element={<Treatmentplantdata />} />
            <Route path="/about/boardofdirectors" element={<Boardofdirectors />} />
            <Route path="/about/organizationchart" element={<Organizationchart />} />
            <Route path="/about/greenbeltdevelopment" element={<Greenbeltdevelopment />} />
            <Route path="/about/computerizedcetp" element={<ComputerizedCETP />} />
            <Route path="/about/acknowledgement" element={<Acknowledgement />} />
            <Route path="/about/uniquefeaturesofthecetp" element={<UniquefeaturesoftheCETP />} />

            <Route path="/servicepage/pretreatmentsystem" element={<Pretreatmentsystem />} />
            <Route path="/servicepage/statisticalprofile" element={<Statisticalprofile />} />

            <Route path="/zld/pretreatment" element={<Pretreatement />} />
            <Route path="/zld/reverseosmosis" element={<Reverseosmosis />} />
            <Route path="/zld/multipleeffectevaporator" element={<Multipleeffectevaporator />} />

            <Route path="/testinglab/introduction" element={<Introduction />} />
            <Route path="/testinglab/viewofmodernequipe" element={<Viewofmodernequipe />} />

            <Route path="/membertanneries" element={<Membertanneries />} />
            <Route path="/slf" element={<Slf />} />
            <Route path="/annualreturn" element={<Annualreturn />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/zld/pretreatment/processflowdiagram" element={<Processflowdiagram />} />
            <Route path="/zld/pretreatment/unitsizedesign" element={<Unitsizedesign />} />
            <Route path="/zld/pretreatment/gallery" element={<Gallery />} />


          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
